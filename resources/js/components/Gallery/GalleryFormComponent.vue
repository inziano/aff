<template>
    <Form :model="galleryForm" label-position="top" class="w-full">
        <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
            Upload Image
        </h4>
        <br>
        <Row :gutter="16">
            <Col span="24" class="mb-2" v-if="this.image !== null">
                <div>
                    <img :src="showImage">  
                </div>
            </Col>
            <Col span="24" v-else>
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
            <Col span="22">
                <FormItem label="Title">
                    <Input size="large" type="text" v-model="galleryForm.title" placeholder="Image Title"></Input>
                </FormItem>
            </Col>
            
        </Row>
        <Row :gutter="16">
            <Col span="12">
                <FormItem label="tags">
                    <Input size="large" type="text" v-model="galleryForm.tags" placeholder="Image tags"></Input>
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
</template>

<script>
export default {
    data(){
        return {
            galleryForm:{
                title: '',
                album: '',
                date: '',
                tags: [],
            },
            image: null,
            loading: false,
        }
    },
    computed:{
        showImage(){
            if ( this.image !== null ){
                return URL.createObjectURL(this.image)
            }
        }
    },
    methods:{
        onSubmit(){
            // this.loading
            this.loading = true
            // data
            const data = this.galleryForm

            let formdata = new FormData()

            // loop 
            Object.keys(data).forEach(key=>formdata.append(key, data[key]))
            // Append files
            formdata.append('image', this.image)
            // Push
            axios({
                method: 'post',
                url: 'api/galleries',
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
            console.log(file.File)
            return false
        },
    }
}
</script>