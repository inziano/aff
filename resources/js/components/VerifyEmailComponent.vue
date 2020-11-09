<template>
  <div class="flex w-full h-full pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="confirmForm" @submit="onSubmit" label-position="top">
                <h5 class="text-base font-normal leading-loose">
                    Verify Account
                </h5>

                <p class="pt-2 text-xs tracking-wide"> Dont have an account <router-link class="text-xs font-semibold text-gray-600" to="/register">Register</router-link></p>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Verification Code">
                            <Input v-model="confirmForm.token" placeholder="Enter code here"> </Input>
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
                                Verify Email
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
            confirmForm: {
                token: '',
            }
        }
    },
    methods: {
        onSubmit() {
            this.loading = true
            // Dispatch 
            this.$store.dispatch('AuthModule/verifyAccount', this.confirmForm).then(()=>{
                // response object
                this.$Notice.info({
                    title: 'Confirmation code valid'
                })
                // redirect to dashboard
                setTimeout(()=>  this.$router.push({name: 'updatepassword'}), 1000)
            }).catch( ()=>{
                // error object
                this.$Notice.error({
                    title: 'Invalid code'
                })
            })
        }
    }
}
</script>