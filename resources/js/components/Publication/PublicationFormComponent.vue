<template>
    <div>
        <Form :model="pubForm" label-position="top" class="w-full">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                Upload Publication
            </h4>
            <br>
            <Row :gutter="16">
                <Col span="16">
                    <FormItem label="Title">
                        <Input size="large" type="text" v-model="pubForm.title" placeholder="Publication Title"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="Publication Year">
                        <DatePicker  v-model="pubForm.publication_year" placeholder="Select year" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Author">
                        <Input size="large" type="text" v-model="pubForm.author" placeholder="Author"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Publisher">
                        <Input size="large" type="text" v-model="pubForm.publisher" placeholder="Publisher"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Abstract">
                        <Input size="large" type="textarea" v-model="pubForm.abstract" placeholder="Abstract"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
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
                <Col span="24">
                    <FormItem label="Tags">
                        <Select v-model="pubForm.tags" filterable multiple allow-create>
                            <Option v-for="tag in tags" :value="tag" :key="tag">{{ tag }}</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <ButtonGroup>
                        <Button @click="pubModal = false">
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
    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('AuthModule',['current_user'])
    },
    data(){
        return {
            loading: false,
            pubForm:{
                title: '',
                author: '',
                publisher: '',
                abstract: '',
                publication_year: '',
                tags: '',
                user_id: '',
            },
        }
    },
    methods: {
        onSubmit(){
            // disable submit button
            this.loading = true
            // data
            const data = this.pubForm
            data['user_id'] = this.current_user.id

            let formdata = new FormData()

            // Loop through data and append to formdata
            Object.keys(data).forEach( key=> formdata.append(key, data[key]))
            // Append files
            formdata.append('publication', this.publication)
            // Push to db
            axios({
                method: 'post',
                url: 'api/publications',
                data: formdata
            }).then( (response)=>{
                // Show notice
                this.$Notice.success({
                    title: 'Success',
                    desc: 'Your publication has been submitted succesfully'
                })
                // Loading
                this.loading = false
                this.$emit('close-modal')
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
        },
    }
    
}
</script>