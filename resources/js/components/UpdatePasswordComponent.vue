<template>
  <div class="flex w-full h-full pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="updateForm" @submit="onSubmit" label-position="top">
                <h5 class="text-base font-normal leading-loose">
                    Reset Password
                </h5>

                <p class="pt-2 text-xs tracking-wide"> Dont have an account <router-link class="text-xs font-semibold text-gray-600" to="/register">Register</router-link></p>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Password">
                            <Input v-model="updateForm.password" placeholder="password" type="password"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16" v-if="updateForm.password">
                    <Col span="24">
                        <FormItem label="Confirm Password">
                            <Input v-model="confirmPassword" placeholder="confirm password" type="password" @input="validatePasswordMatch"> </Input>
    
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
                            <Button size="large" type="primary" :disabled = "disabled" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Update Password
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            disabled: true,
            loading: false,
            confirmPassword: null,
            updateForm: {
                password: '',
            }
        }
    },
    computed: {
        ...mapGetters('AuthModule', ['reset_user'])
    },
    methods: {
        // validate password match
        validatePasswordMatch(event){
            // Check if passwords match
            this.updateForm.password === event ? this.disabled = false : this.disabled = true
        },
        onSubmit() {
            this.loading = true
            // 
            let vals = {
                id: this.reset_user.id,
                data: this.updateForm
            }
            // Dispatch 
            this.$store.dispatch('UserModule/update', vals).then(()=>{
                // response object
                this.$Notice.info({
                    title: 'Password Updated'
                })
                // redirect to dashboard
                setTimeout(()=>  this.$router.push({name: 'login'}), 1000)
            }).catch( ()=>{
                // error object
                this.$Notice.error({
                    title: 'Password not updated'
                })
            })
        }
    }
}
</script>