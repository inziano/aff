<template>
    <div class="w-full h-full">
        <Form :model="messageForm" label-position="top" class="w-2/3 mx-auto">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                Send Message
            </h4>
            <br>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Recipient">
                        <Select v-model="messageForm.recepient" multiple>
                            <Option v-for="member in memberList" :key="member" value="member"> {{member}} </Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Subject">
                        <Input type="text" v-model="messageForm.subject" placeholder="Subject"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Message">
                        <Input type="textarea" v-model="messageForm.body" placeholder="Message text"></Input>
                    </FormItem>
                </Col>
            </Row>
             <Row :gutter="16">
                <Col span="12">
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            messageForm: {
                subject: '',
                body: '',
                recepient: [],
            },
            loading: false,
            memberList: []
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: 'api/user'
        }).then((response)=>{
            const arr = response.data
            this.memberList = arr.data.filter((resp)=>{
                // Only return members
               return resp.status == 'member'
            }).map((resp)=>{
                return resp.email
            })
            console.log(this.memberList)
        }).catch((error)=>{
            // Error
        })
    },
    methods: {
        onSubmit(){
            // 
            const data = this.messageForm

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
        }
    }
    
}
</script>