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
                <div class="w-1/24 flex">
                    <input v-on:keyup.enter="onSearch" v-model="searchTerm" class="appearance-none bg-transparent border-none w-3/4 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" ></input>
                    <li class="mr-1 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
            <div class="w-full flex p-2 bg-gray-100 justify-center">
                <p v-if="this.vacancy.length === 0">
                   No applications 
                </p> 
                <div v-for="vac in vacancy" :key="vac.id">
                    <h4> {{vac.title}}</h4>
                    <p class="text-gray-600 text-xs">
                       <Icon type="ios-pin" /><span>{{vac.location}}</span> 
                    </p>
                    <p>{{vac.description}}</p>
                </div>
              
               
            </div>
            <ul class="w-full flex flex-wrap ">
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