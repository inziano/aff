<template>
    <div class="w-full h-full">
        <Modal v-model="threadModal">
            <Form v-model="threadForm" label-position="top">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Thread </h4>
                <br>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Category">
                            <Select v-model="threadForm.topic_id">
                                <Option value="1" > Forestry</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Topic">
                            <Input v-model="threadForm.subject" type="text" placeholder="Thread Title"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Discusion Question">
                            <Input v-model="threadForm.body" type="textarea" placeholder="Description"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <ButtonGroup>
                            <Button>
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button type="primary" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Create Thread
                            </Button>
                        </ButtonGroup>
                    </Col> 
                </Row>
                
            </Form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <h3 class="font-semibold text-xl mb-2">
                        Forum
                    </h3>
                    <p class="font-hairline text-xs">
                        Discuss similar interests
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="threadModal = true">
                        New
                    </Button>
                </div>
            </nav>
            <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                <div class="lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li> 
                </div>
                <div class="w-1/24">
                    <li class="mr-3 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul> 
            <div class="w-full flex flex-wrap pt-5 bg-gray-100 min-h-screen">
                <div class="w-1/6 border-r border-r-black pt-5">
                    <nav class="w-full flex mb-2 ">
                        <div class="mx-auto text-center">
                            <h3 class="font-medium text-lg mx-auto w-auto">
                                Topics
                            </h3>
                        </div>
                    </nav>
                    <div class="w-full text-center p-2">
                        <li class=" list-none"> Forestry</li>
                    </div>
                </div>
                <div class="w-5/6 px-5">
                    <nav class="w-full flex mb-5 ">
                        <div class="">
                            <h3 class="font-medium text-lg mx-auto w-auto">
                                Active Threads
                            </h3>
                        </div>
                    </nav>
                    <List class="w-3/4 bg-white shadow-md" item-layout="vertical" border>
                        <div class=""
                        <ListItem class="" v-for="thread in threadData" :key="thread.id">
                            <ListItemMeta :title="thread.subject" />
                            <p>
                                {{thread.body}}
                            </p>
                            <template slot="action">
                                <li>
                                    <Icon type="ios-heart-outline" /> {{thread.likes}}
                                </li>
                                <li>
                                    <Icon type="ios-eye-outline" /> {{thread.views}}
                                </li>
                                <li>
                                    <a @click="viewThread(thread.id)">View</a>
                                </li>
                                <li class="p-2 ml-2" v-if="thread.user_id === currentUser.id">
                                   <a class="font-sm tracking-wide font-medium text-red-700" @click="deleteThread(thread.id)"> Remove </a>
                                </li>
                            </template>
                        </ListItem>
                    </List>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data (){
        return {
            list: false,
            threadModal: false,
            threadData: '',
            threadForm: {
                topic_id: '',
                subject: '',
                body: ''
            }
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
    },
    mounted(){
        axios({
            method: 'get',
            url: 'api/thread'
        }).then((response)=>{
            this.threadData = response.data.data
        }).catch((error)=>{
            this.$Notice.error({
                title: 'No threads found'
            })
        })

        // Update
        Echo.channel('threads').listen('ThreadCreated', (e)=>{
            this.threadData = e.threads
            console.log(e.threads)
        })
         // Update
        Echo.channel('threads').listen('ThreadDeleted', (e)=>{
            this.threadData = e.threads
            console.log(e.threads)
        })
    },
    methods: {
        // Submit
        onSubmit(){
            console.log(this.currentUser.id)
            let formdata = this.threadForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/thread',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Thread Created',
                    desc: 'Your thread was succesfully created'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Thread not created',
                    desc: 'Your thread was not created'
                })
            })
        },
        // Thread
        viewThread(id){
            this.$router.push({name: 'thread', params:{id}})
        },
        // Delete thread
        deleteThread(id){
            axios({
                method: 'delete',
                url: 'api/thread/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Thread Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Thread not deleted'
                })
            })
        }
    }
}
</script>