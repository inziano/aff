<template>
    <div class="w-full h-full">
        <Modal v-model="messageModal">
            <Form :model="messageForm" label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                    Send Message
                </h4>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Recipient">
                            <Select v-model="messageForm.recepient" multiple>
                                <Option v-for="member in memberList" :key="member.id" :value="member.id"> {{member.username}} </Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Subject">
                            <Input type="text" v-model="messageForm.subject" placeholder="Subject"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Message">
                            <Input type="textarea" v-model="messageForm.body" placeholder="Message text"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <ButtonGroup>
                            <Button @click="messageModal = false">
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button type="primary" @click="onSubmit" :loading="loading">
                                <span v-if="!loading"> 
                                    Send Message
                                    <Icon type="ios-checkmark"></Icon>
                                </span>
                                <span v-if="loading">
                                    Sending...
                                </span>
                        
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
             <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Vacancies
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
                                <DropdownItem v-for="yr in year" :key="yr">{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="messageModal = true">
                            New
                        </Button>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>  
                            <Icon v-if="list" type="ios-list" size="32"/>
                        </span>     
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            0
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                           Messages
                        </p>
                    </div>
                </div>       
            </div>  
            <div class="w-full h-full" v-if="messages.length">
                {{ messages}}
                <div class="w-full flex p-2 bg-gray-100 justify-center" v-if="!list">
                    <div class="w-1/5 overflow-hidden shadow-lg p-2 px-5 h-48 bg-white m-2 rounded" v-for="message in messages" :key="message.title">
                        <div class="w-full mb-3 ">
                            <p class="font-hairline text-xs tracking-widest text-gray-500">
                                <Badge status="success" />
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-medium tracking-wide text-lg antialiased">
                                {{message.subject}}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
                            {{message.body}}
                            </p>
                        </div>
                        <div class="w-full mt-5 mb-0">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                                Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{message.created_at}}</span>
                            </p>
                        </div>
                        <div class="w-full mt-5 ">
                            <li class="list-none"> 
                                <Avatar size="small" icon="ios-person" />
                                <span class="ml-1 font-sans font-thin text-gray-600">{{message.user.username}}</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div class="w-full p-2 bg-gray-100" v-if="list">
                    <!-- Put list in here -->
                    <List>
                        <ListItem v-for="msg in messages" :key="msg.id">
                            <ListItemMeta :title="msg.subject" :description="msg.body" />
                        </ListItem>
                    </List>
                </div>
            </div>
            <div class="w-full h-full" v-else>
               <div class="mx-auto w-1/3 p-5 m-3 content-center">
                   <img class="object-center object-contain" src='/images/empty.svg'>
                   <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Messages Found</p>
               </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: false,
            messageModal: false,
            messages: [],
            messageData: '',
            messageForm: {
                subject: '',
                body: '',
                recepient: [],
            },
            loading: false,
            memberList: []
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        year(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    mounted() {
        axios.all([
            axios.get('api/message'),
            axios.get('api/user')
        ]).then(axios.spread((message,user)=>{
            let that = this
            this.messages = message.data.data.filter((resp)=>{
                return resp.recepient.includes(that.currentUser.id)
            })
            // this.messages = message.data.data
            this.memberList = user.data.data
            console.log(this.messages)
        })).catch((error)=>{
            console.log(error)
            this.$Notice.info({
                title: 'Messages',
                desc: 'No messages currently'
            })
        })
    },
    methods: {
        onSubmit(){
            // 
            let data = this.messageForm
            data['user_id'] = this.currentUser.id
            this.loading = true
            // Push message
            axios({
                method: 'post',
                url: 'api/message',
                data: data
            }).then( (response)=>{
                // Notice
                this.$Notice.success({
                    title: 'Message Sent',
                    desc: 'Your message has been delivered'
                })
                this.loading = false
                this.messageModal = false
            }).catch((error)=>{
                this.loading = false
                this.$Notice.error({
                    title: 'Message not sent',
                    desc: 'Your message could not be delivered'
                })
            })
        },
        // Change view
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
    }
    
}
</script>