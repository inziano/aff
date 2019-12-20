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
                        <Button size="large" @click="onSubmit" :loading="loading">
                            <span v-if="!loading"> 
                                Send Message
                                <Icon type="ios-checkmark"></Icon>
                            </span>
                            <span v-if="loading">
                                Sending...
                            </span>
                    
                        </Button>
                    </Col>
                </Row>
            </Form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <h3 class="font-semibold text-xl mb-2">
                        Messages
                    </h3>
                    <p class="font-hairline text-xs">
                        View your messages
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="messageModal = true">
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
        }
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
            this.loading = false
            // Push message
            axios({
                method: 'post',
                url: 'api/message',
                data: data
            }).then( (response)=>{
                this.loading = true
                // Notice
                this.$Notice.success({
                    title: 'Message Sent',
                    desc: 'Your message has been delivered'
                })
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