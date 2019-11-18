<template>
    <div class="flex w-full h-full pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="registerForm" @submit="onSubmit" label-position="top">
                <h4 class="text-xl font-normal leading-loose">
                    Register
                </h4>
                <h5 class="text-base font-normal leading-loose">
                    Register to be an AFF member
                </h5>
                <br>
                 <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Username">
                            <Input v-model="registerForm.username" placeholder="Username"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Email">
                            <Input v-model="registerForm.email" placeholder="email@address.org"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Password">
                            <Input v-model="registerForm.password" placeholder="password" type="password"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16" v-if="registerForm.password">
                    <Col span="24">
                        <FormItem label="Confirm Password">
                            <Input placeholder="confirm password" type="password"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <ButtonGroup>
                            <Button size="large">
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button size="large" type="primary" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Login
                            </Button>
                        </ButtonGroup>
                    </Col>
                   
                </Row>
            </Form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            registerForm: {
                email: '',
                password: null,
                username: '',
            }
        }
    },
    methods: {
        onSubmit(){
            // Data
            const formdata = this.registerForm
            // Push to api
            axios({
                method: 'post',
                url: 'api/user',
                data: formdata
            }).then( (response)=>{
                // response object
                // Push data to store
                 // Logged in
                this.$store.dispatch('loggedIn', response)
                // show notice
                this.$Notice.success({
                    title: 'Succesfully registered.'
                })
                // handle redirect
                setTimeout(()=>  this.$router.push({path: 'bio'}), 1000)
              
            }).catch( (error)=>{
                // error object
                // handle redirect
                // show notice
                this.$Notice.error({
                    title: 'Failed to register user.',
                    desc: error.message
                })
            })
        }
    }
}
</script>