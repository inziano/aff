<template>
    <div class="flex w-full h-screen pt-20 bg-gray-100">
        <div class="w-1/3 ml-auto">
            <div class="bg-green-300 w-full bg-cover" style="height: 80%; background-image: url('/images/landing.jpg')">

            </div>
        </div>
        <div class="w-1/3 mr-auto p-10 bg-white" style="height: 80%">
            <Form :model="registerForm" @submit="onSubmit" label-position="top">
                <h5 class="text-base font-normal leading-loose">
                    Register to be an AFF member
                </h5>
                <br>
                 <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Username">
                            <Input size="large" v-model="registerForm.username" placeholder="Username"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Email">
                            <Input size="large" v-model="registerForm.email" placeholder="email@address.org"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Password">
                            <Input size="large" v-model="registerForm.password" placeholder="password" type="password"> </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16" v-if="registerForm.password">
                    <Col span="24">
                        <FormItem label="Confirm Password">
                            <Input size="large" v-model="confirmPassword" placeholder="confirm password" type="password" @input="validatePasswordMatch"> </Input>
    
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
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            disabled: true,
            confirmPassword: null,
            registerForm: {
                email: '',
                password: null,
                username: '',
            }
        }
    },
    computed: {
        ...mapGetters('AuthModule', ['current_user'])
    },
    methods: {
        // validate password match
        validatePasswordMatch(event){
            // Check if passwords match
            this.registerForm.password === event ? this.disabled = false : this.disabled = true
        },
        onSubmit(){
            this.$store.dispatch('AuthModule/register', this.registerForm).then(()=>{
                this.$Notice.success({
                    title: 'Succesfully registered and Logged in'
                })
                let id = this.current_user.id
                // handle redirect
                setTimeout(()=>  this.$router.push({name: 'profile', params: {id}}), 300)
              
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Failed to register user.',
                })
                // Incase user was logged in before
                this.$store.dispatch('logout')
            })
        }
    }
}
</script>