<template>
    <div class="w-full h-full">
        <div class="w-full h-full">
            <div class="w-full h-full p-5" >
                <Modal v-model="galleryModal" title="Upload Publication">
                    <Form :model="galleryForm" label-position="top" class="w-full">
                        <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                            Upload Image
                        </h4>
                        <br>
                        <Row :gutter="16">
                            <Col span="22">
                                <FormItem label="Title">
                                    <Input type="text" v-model="galleryForm.title" placeholder="Image Title"></Input>
                                </FormItem>
                            </Col>
                            
                        </Row>
                        <Row :gutter="16">
                            <Col span="12">
                                <FormItem label="tags">
                                    <Input type="text" v-model="galleryForm.tags" placeholder="Image tags"></Input>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem label="Date">
                                    <Col span="12">
                                        <DatePicker v-model="galleryForm.date" type="date" format="yyyy/MM/DD" placeholder="Select date" style="width: 200px"></DatePicker>
                                    </Col>   
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="16">
                            <Col span="24">
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
                        <Row :gutter="16">
                            <Col span="24">
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
                    <div slot="footer">
                        <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                    </div>
                </Modal>
                <nav class="w-full flex mb-2">
                    <div class="lg:flex-grow lg:w-auto">
                        <p class="font-medium font-serif text-3xl tracking-wide">
                            Gallery
                        </p>
                        <p class="font-normal font-sans text-lg tracking-tight">
                            Upload And View Images 
                        </p>
                    </div>
                    <div class="w-2/24 p-3">
                        <Button icon="ios-add" @click="galleryModal = true">
                            New
                        </Button>
                    </div>
                </nav>
                <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                    <div class="lg:flex-grow lg:w-auto">
                        <li class="mr-3" @click="changeView()">
                            <Icon v-if="list" type="ios-list" size="32"/>
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                        </li> 
                    </div>
                    <div class="w-1/24">
                        <li class="mr-3 p-2">
                            <Icon type="ios-search-outline" size="24"/>       
                        </li>
                    </div>
                </ul>
                <div class="w-full h-full">
                    <div class="mx-auto w-1/3 p-5 m-3 content-center">
                        <img class="object-center object-contain" src='/images/camera.svg'>
                        <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Images Found</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
           galleryModal: false,
            galleryForm:{
                title: '',
                album: '',
                date: '',
                tags: [],
            },
            image: null,
        }
    },
    methods: {
        onSubmit(){
            // this.loading
            this.loading = true
            // data
            const data = galleryForm

            let formdata = new FormData()

            // loop 
            Object.keys(data).forEach(key=>formdata.append(key, data[key]))
            // Append files
            formdata.append('image', this.image)
            // Push
            axios({
                method: 'post',
                url: 'api/image',
                data: formdata
            }).then( (response)=>{
                // show notice
                this.$Notice.success({
                    title: 'Success',
                    desc: 'Your image has been succesfully uploaded'
                })
                // loading
                this.loading = false
            }).catch((error)=>{
                // Loading
                this.loading = false
                // notice
                this.$Notice.error({
                    title: 'Error',
                    desc: 'Error in uploading your image'
                })
            })
        },
        imageUpload(file){
            this.image = file
            return false
        },
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
    }
}
</script>