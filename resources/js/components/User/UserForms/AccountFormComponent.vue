<template>
   <div class="mb-2 py-2">
        <Form :model="accountForm" label-position="top">
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Security </p>
                </div>
            </div>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Password">
                        <Input size="large" v-model="accountForm.password" placeholder="password" type="password"> </Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" v-if="accountForm.password">
                <Col span="12">
                    <FormItem label="Confirm Password">
                        <Input size="large" v-model="confirmPassword" placeholder="confirm password" type="password" @input="validatePasswordMatch"> </Input>

                    </FormItem>
                </Col>
            </Row>
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Other </p>
                </div>
            </div>
            <Row :gutter="16">
                <Col span="12" class="mb-2" v-if="this.image !== null">
                    <div>
                        <img :src="showImage">  
                    </div>
                </Col>
                <Col span="12" v-else>
                    <FormItem label="Image">
                        <Upload type="drag" action :before-upload="imageUpload" :format="['png','jpeg']">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
                    </FormItem>
                </Col>
            </Row>
            <Row class="py-4 my-2" :gutter="16">
                <Col span="10">
                    <ButtonGroup>
                        <Button >
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="updateAccount">
                            <Icon type="ios-checkmark"></Icon>
                            Update
                        </Button>
                    </ButtonGroup>
                </Col> 
            </Row>
        </Form>
    </div> 
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return {
            confirmPassword: null,
            accountForm: {
                password: '',
            },
            image: null,
        }
    },
    computed:{
        ...mapState('AuthModule',['currentUser']),
        showImage(){
            if ( this.image !== null ){
                return URL.createObjectURL(this.image)
            }
        }
    },
    methods: {
        ...mapActions('UserModule', ['update','create']),

        // validate password match
        validatePasswordMatch(event){
            // Check if passwords match
            this.accountForm.password === event ? this.disabled = false : this.disabled = true
        },

        imageUpload(file){
            this.image = file
            console.log(file.File)
            return false
        },

        updateAccount() {
            if ( this.image !== null ){

                let formdata = new FormData()

                // Append files
                formdata.append('image', this.image)

                formdata.append('id', this.currentUser.id)

                // Push to db
                this.create(formdata).then(()=>{
                    this.$Notice.success({
                        title: "Success"
                    })
                }).catch(()=>{
                    this.$Notice.error({
                        title: "Failed"
                    })
                })

            } else if ( this.image == null ) {
                let vals = {
                    id: this.currentUser.id,
                    data: this.accountForm
                }
                // Push to db
                this.update(vals).then(()=>{
                    this.$Notice.success({
                        title: "Success"
                    })
                }).catch(()=>{
                    this.$Notice.error({
                        title: "Failed"
                    })
                })
            } else {

            }

        }
    }
}
</script>