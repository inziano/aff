<template>
  <div class="flex w-full h-full pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="loginForm" @submit="onSubmit" label-position="top">
                <h4 class="text-xl font-normal leading-loose">
                    Login
                </h4>
                <h5 class="text-base font-normal leading-loose">
                    Login to your account
                </h5>
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
            this.$store.dispatch('login');
            // Axios
            axios({
                method: 'post',
                url: 'api/user/login',
                data: this.loginForm
            }).then( (response)=>{
                // Payload
                const payload = response.data
                // Get the ID
                const id = payload.id
                // Logged in
                this.$store.dispatch('loggedIn', payload)
                // response object
                this.$Notice.info({
                    title: 'Login Succesful'
                })
                // redirect to dashboard
                setTimeout(()=>  this.$router.push({name: 'bio', params: {id}}), 1000)
            }).catch( (error)=>{
                // error object
                this.$Notice.error({
                    title: 'Login Failed'
                })

                this.$store.dispatch('logout')
            })
        }
    }
}
</script>