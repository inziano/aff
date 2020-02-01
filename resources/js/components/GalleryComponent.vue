<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="galleryModal">
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
                            <ButtonGroup>
                                <Button @click="galleryModal = false">
                                    <Icon type="ios-cancel"></Icon>
                                    Cancel
                                </Button>
                                <Button type="primary" @click="onSubmit" :loading="loading">
                                    <span v-if="!loading"> 
                                        Submit
                                        <Icon type="ios-checkmark"></Icon>
                                    </span>
                                    <span v-if="loading">
                                        Submitting...
                                    </span>
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form>
                <div slot="footer">
                    <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                </div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Gallery
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-map-outline" size="20"></Icon>
                                Country
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-briefcase-outline" size="20"></Icon>
                                Expertise
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="galleryModal = true">
                            New
                        </Button>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>  
                            <Icon v-if="list" type="ios-list" size="32"/>
                        </span>     
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            0
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Images
                        </p>
                    </div>
                </div>       
            </div>  
            <div class="w-full h-full">
                <div class="mx-auto w-1/3 p-5 m-3 content-center">
                    <img class="object-center object-contain" src='/images/camera.svg'>
                    <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Images Found</p>
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