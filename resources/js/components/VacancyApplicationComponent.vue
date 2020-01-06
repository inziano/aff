<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyApplicationModal">
            <Form label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> Submit Application </h4>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Resume">
                            <Upload type="drag" action :before-upload="resumeUpload" :format="['docx','doc','pdf']">
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
                        <FormItem label="Cover Letter">
                            <Upload type="drag" action :before-upload="letterUpload" :format="['docx','doc','pdf']">
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
                            <Button>
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button type="primary" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Apply
                            </Button>
                        </ButtonGroup>
                    </Col> 
                </Row>
            
            </Form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <h3 class="font-semibold text-xl mb-2">
                        Vacancy Listing
                    </h3>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="vacancyApplicationModal = true">
                        Apply
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
            </ul>
            <div class="w-full p-2 bg-gray-100" v-if="!list">
                <div v-for="vac in vacancy" :key="vac.id" class="w-10/12 mx-auto pt-5 pl-5">
                    <p class="text-2xl font-serif tracking-wide font-medium mb-1"> {{vac.title}}</p>
                    <p class="text-gray-600 text-xs tracking-wide font-semibold mb-2">
                        <Icon type="ios-pin" /><span>{{vac.location}}</span> 
                    </p>
                    <p class="font-normal tracking-wide font-sans text-lg">{{vac.description}}</p>

                    <Button class="mt-5 mb-2 w-1/6" type="success" @click="vacancyApplicationModal = true">
                        Apply
                    </Button>
                </div>
               
            </div>
            <div class="w-full p-2 bg-gray-100" v-if="list">
                <ul class="w-full flex flex-wrap " v-if="applications.length">
                    <div class="w-full">
                        <h4 class="m-2 text-xl tracking-wider"> Applicants </h4>
                    </div>
                    <li class="list-none bg-gray-100 p-3 m-2 w-1/5 rounded-sm" v-for="application in applications" :key="application.id">
                        <div class="w-full">
                            <li class="list-none"> 
                                <Avatar size="small" icon="ios-person" />
                                <span class="ml-1 font-sans font-thin text-gray-600">{{application.user.username}}</span>
                            </li>
                        </div>
                        <p>
                            {{application.user.email}}
                        </p>
                    </li>
                </ul>
                <div class="w-full h-full bg-gray-100" v-else>
                    <div class="mx-auto w-1/3 p-5 m-3 content-center">
                    <img class="object-center object-contain" src='/images/vacancy.svg'>
                    <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Applications Found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            list: false,
            vacancyApplicationModal: false,
            searchTerm: '',
            vacancy: '',
            resume: '',
            cover: '',
            applications:''
        }
    },
    computed:{
        currentUser(){
            return this.$store.state.current_user
        }
    },
    mounted(){

        axios.all([
            axios.get('api/vacancy/'+this.id),
            axios.get('api/vacancyapplication/'+this.id)
        ]).then( axios.spread((vacancy, application)=>{
           this.vacancy = vacancy.data.data
           this.applications = application.data.data

           this.$Modal.remove()
        })).catch((error)=>{
            // show error
            this.$Notice.error({
                title: 'Error occurred',
            })
        })
        // Vacancy Applications
        Echo.channel('vacancies').listen('VacancyApplicationSubmitted',(e)=>{
            this.applications = e.submissions
            console.log(e.submissions)
        })
    },
    methods: {
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        // Make application
        onSubmit(){
            let formdata = new FormData()
            formdata.append('vacancy_id', this.id)
            formdata.append('user_id', this.currentUser.id)
            formdata.append('cover', this.cover)
            formdata.append('res', this.resume)

            axios({
                method: 'post',
                url: 'api/vacancyapplication',
                data: formdata
            }).then((response)=>{
                this.$Notice.info({
                    title: 'Application Succesful'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Error'
                })
            })
            
        },
        resumeUpload(file){
            this.resume = file
            return false
        },
        letterUpload(file){
            this.cover = file
            return false
        }
    }
}
</script>