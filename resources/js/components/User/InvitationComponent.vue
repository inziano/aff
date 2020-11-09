<template>
    <div class="w-full h-full">
        <Form :model="invitationForm" label-position="top" class="w-3/4 mx-auto">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                Send Invitation
            </h4>
            <br>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Email">
                        <Input type="text" v-model="invitationForm.email" placeholder="Email addresses"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Subject">
                        <Input type="text" v-model="invitationForm.subject" placeholder="Subject" disabled></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Message">
                        <Input type="textarea" v-model="invitationForm.message" placeholder="Message"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <Button @click="onSubmit" :loading="loading">
                        <span v-if="!loading"> 
                            Send Invitation
                            <Icon type="ios-checkmark"></Icon>
                        </span>
                        <span v-if="loading">
                            Submitting...
                        </span>
                   
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'invitation',
    data() {
        return {
            loading: false,
            invitationForm: {
                email: [],
                subject:'Join me at African Forest Forum',
                message: ' Hi, I would like to connect with you at the African Forest Forum.'
            }
        }
    },
    computed: {
        ...mapGetters('AuthModule', ['current_user']),

        currentUser(){
            return this.current_user
        }
    },
    methods: {
        onSubmit() {
            this.loading = true
            // data
            const data = this.invitationForm
            data['user_id'] = this.currentUser.id

            // Post
            axios({
                method: 'post',
                url: 'api/invitation',
                data: data
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Invitation successfully sent',
                    desc: 'Your invitation has successfully been sent'
                })
                this.loading = false
                this.$emit('close-modal')
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Failed to send invitation',
                    desc: 'Your invitation failed'
                })
                this.loading = false
            })
        }
    }
}
</script>