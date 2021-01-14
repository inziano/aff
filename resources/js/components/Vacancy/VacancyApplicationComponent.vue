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
                            <Button @click="vacancyApplicationModal = false">
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
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Vacancies
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <Input size="large" v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                       
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="changeView()">
                            View Applications
                        </Button>
                        <Button icon="ios-add" @click="vacancyApplicationModal = true">
                            Apply
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
                            4
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Applications
                        </p>
                    </div>
                </div>       
            </div>  

            <div class="w-full p-2 bg-gray-100" v-if="!list">
                <vacancy-view :vacancy = vacancy ></vacancy-view>
            </div>
            <div class="w-full p-2 bg-gray-100" v-if="list">
                <ul class="w-full flex flex-wrap " v-if="applications.length">
                    <div class="w-full">
                        <h4 class="m-2 text-xl tracking-wider"> Applicants </h4>
                    </div>
                    <li class="list-none bg-white p-3 m-2 w-4/5 rounded-sm flex" v-for="application in applications" :key="application.id">
                        <div class="w-1/2 flex" v-for="applicant in application.applicant" :key="applicant.id">
                            <div class="p-2">
                                <Avatar>
                                    {{applicant.bio.firstname.slice(0,1)}}{{applicant.bio.lastname.slice(0,1)}}
                                </Avatar>
                            </div>
                            <div class="ml-1 p-2">
                                <li class="list-none"> 
                                    <p class="text-base font-semibold tracking-wide"> {{applicant.bio.firstname}} {{applicant.bio.lastname}} </p>
                                    <p class="font-medium">{{applicant.email}}</p>
                                </li>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="p-2 content-center h-auto w-full">
                                <p class="font-semibold tracking-wide"> Applied on {{ application.created_at | moment('MMMM Do YYYY')}}</p>
                            </div>
                            <div class="w-full flex p-2">
                                <li class="w-1/2">
                                    <Icon size="20" type="ios-document" /> <span> {{application.resume }}</span>
                                </li>
                                <li class="w-1/2">
                                    <Icon size="20" type="ios-document" /> <span>{{ application.cover_letter}}</span>
                                </li>
                            </div>
                        </div>
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
import { mapGetters } from 'vuex'
import VacancyView from './VacancyViewComponent'

export default {
    components: {
        'vacancy-view': VacancyView
    },
    data(){
        return{
            id: this.$route.params.id,
            list: false,
            vacancyApplicationModal: false,
            searchTerm: '',
            resume: '',
            cover: '',
            applications:''
        }
    },
    computed:{
        ...mapGetters('VacancyModule',['vacancies']),
        ...mapGetters('AuthModule', ['currentUser']),

        vacancy() {
            let curr_id = this.$route.params.id

            return this.vacancies.filter((vacancy)=>{
                return vacancy.id == curr_id
            })
        }
    },
    mounted(){

        axios.all([
            axios.get('api/vacancies/'+this.id),
            axios.get('api/vacancyapplications/'+this.id)
        ]).then( axios.spread((vacancy, application)=>{
        //    this.vacancy = vacancy.data.data
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
                url: 'api/vacancyapplications',
                data: formdata
            }).then((response)=>{
                this.$Notice.info({
                    title: 'Application Succesful'
                })
                this.vacancyApplicationModal = false
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