<template>
  <div class="flex w-full h-full pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="loginForm" @submit="onSubmit" label-position="top">
                <h5 class="text-base font-normal leading-loose">
                    Login to your account
                </h5>

                <p class="pt-2 text-xs tracking-wide"> Dont have an account <router-link class="text-xs font-semibold text-gray-600" to="/register">Register</router-link></p>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Email">
                            <Input v-model="loginForm.email" placeholder="email@address.org"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Password">
                            <Input v-model="loginForm.password" placeholder="password" type="password"> </Input>
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
            loading: false,
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.loading = true
            // Dispatch 
            this.$store.dispatch('login', this.loginForm).then(()=>{
                // response object
                this.$Notice.info({
                    title: 'Login Succesful'
                })
                // redirect to dashboard
                setTimeout(()=>  this.$router.push({name: 'bio'}), 1000)
            }).catch( ()=>{
                // error object
                this.$Notice.error({
                    title: 'Login attempt unsuccesful'
                })
                // Incase user was logged in before
                this.$store.dispatch('logout')
            })
        }
    }
}
</script>