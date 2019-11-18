<template>
    <div class="w-full h-full">
        <Form :model="pubForm" label-position="top" class="w-3/4 mx-auto">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                Upload Publication
            </h4>
            <br>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Title">
                        <Input type="text" v-model="pubForm.title" placeholder="Publication Title"></Input>
                    </FormItem>
                </Col>
            </Row>
             <Row :gutter="16">
                <Col span="6">
                    <FormItem label="Author">
                        <Input type="text" v-model="pubForm.author" placeholder="Author"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="Publisher">
                        <Input type="text" v-model="pubForm.publisher" placeholder="Publisher"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Abstract">
                        <Input type="textarea" v-model="pubForm.abstract" placeholder="Abstract"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Publication">
                        <Upload type="drag" action :before-upload="publicationUpload" :format="['docx','doc','pdf']">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <Button size="large" @click="onSubmit" :loading="loading">
                        <span v-if="!loading"> 
                            Submit
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
export default {
    data() {
        return {
            pubForm:{
                title: '',
                author: '',
                publisher: '',
                abstract: '',
                user_id: '',
            },
            publication: null,
        }
    },
    methods: {
        onSubmit(){
            // disable submit button
            this.loading = true
            // data
            const data = this.pubForm

            let formdata = new FormData()

            // Loop through data and append to formdata
            Object.keys(data).forEach( key=> formdata.append(key, data[key]))
            // Append files
            formdata.append('publication', this.publication)
            // Push to db
            axios({
                method: 'post',
                url: 'api/publication',
                data: formdata
            }).then( (response)=>{
                // Show notice
                this.$Notice.success({
                    title: 'Success',
                    desc: 'Your publication has been submitted succesfully'
                })
                // Loading
                this.loading = false
            }).catch( (error)=>{
                // Loading
                this.loading = false
                // Notice
                this.$Notice.error({
                    title: 'Error',
                    desc: 'Error in submitting your publication'
                })
            })
        },
        publicationUpload(file){
            this.publication = file
            return false
        }
    }
}
</script>