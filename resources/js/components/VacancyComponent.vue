<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyModal">
            <Form :model="vacancyForm" label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Vacancy </h4>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Title">
                            <Input v-model="vacancyForm.title" type="text" placeholder="Title"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Application Deadline">
                            <DatePicker v-model="vacancyForm.deadline" type="date" placeholder="Deadline" style="width: 100%"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Number of Positions">
                            <Input type="number" placeholder="Number of Positions"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Location">
                            <Input  v-model="vacancyForm.location" type="text" placeholder="Location"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Description">
                            <Input  v-model="vacancyForm.description" type="textarea" placeholder="Description"></Input>
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
                                Create Vacancy
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
                        Vacancies
                    </h3>
                    <p class="font-hairline text-xs">
                        Find vacancies around you
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="vacancyModal = true">
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
            <div class="w-full flex  flex-wrap p-2 bg-gray-100 justify-center" v-if="!list">
                <div class="w-1/5 overflow-hidden shadow-lg p-2 px-5 h-56 bg-white m-2 rounded-lg" v-for="vacancy in vacancies" :key="vacancy.id">
                    <div class="mb-2">
                        <p class="font-medium tracking-wide text-lg antialiased">
                            {{vacancy.title}}
                        </p>
                    </div>
                    <div class="mb-2">
                        <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
                           {{vacancy.description}}
                        </p>
                    </div>
                    <div class="mb-2">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-600">
                           {{vacancy.location}}
                        </p>
                    </div>
                     <div class="w-full mt-3 ">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                            Application Deadline: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.deadline | moment("from") }}</span>
                        </p>
                    </div>
                    <div class="w-full mt-3 mb-0">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                            Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.created_at}}</span>
                        </p>
                    </div>
                    <div class="w-full mt-5 mb-0">
                        <a class="mr-2 font-hairline text-xs tracking-widest capitalize text-gray-500" @click="makeApplication(vacancy.id)">
                            Apply
                        </a>
                        <a class="text-xs tracking-wide font-medium text-red-700" v-if="vacancy.user.id === currentUser.id " @click="deleteVacancy(vacancy.id)"> Remove </a>

                    </div>
                </div>
            </div>
            <div class="w-full p-2 bg-gray-100" v-if="list">
                <Table height="200" :columns="vacancyColumns" :data="vacancies"></Table>
            </div>
            <div class="w-full flex p-0 mb-5 text-center" v-if="vacancymeta.length === 0">
                <Page class="mx-auto" :current="vacancymeta.current_page" :total="vacancymeta.total" :page-size="vacancymeta.per_page" @on-change="goToPage" />
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            list: false,
            vacancyModal: false,
            admin: false,
            vacancymeta: '',
            vacancyData: '',
            vacancyForm: {
                title: '',
                type: '',
                description: '',
                deadline: '',
                positions: ''
            },
            vacancies: [],
            vacancyColumns: [
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Description',
                    key: 'description'

                },
                {
                    title: 'Positions',
                    key: 'positions'
                },
                {
                    title: 'Location',
                    key: 'location'
                },
                {
                    title: 'Deadline',
                    key: 'deadline'
                },
            ]
        }
    },
    mounted(){
        axios({
            method: 'get',
            url: 'api/vacancy'
        }).then((response)=>{
            this.vacancies = response.data.data
            this.vacancyData = response.data
            this.vacancymeta = response.data.meta
        }).catch((error)=>{
            this.$Notice.info({
                title: 'Vacancies',
                desc: 'No vacancies currently'
            })
        })

        // 
        Echo.channel('vacancies').listen('VacancyCreated',(e)=>{
            this.vacancies = e.vacancies
            console.log(e.vacancies)
        })
        
        // Update
        Echo.channel('vacancies').listen('VacancyDeleted',(e)=>{
            this.vacancies = e.vacancies
        })
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
    },
    methods:{
        // goToPage
        goToPage(number){
            axios.get(this.vacancymeta.path + '?page=' + number).then((response)=>{
                // response
                this.vacancies = response.data.data
                this.vacancymeta = response.data.meta
                // Pub data
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Change view
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        // On submit
        onSubmit(){
            let formdata = this.vacancyForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/vacancy',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Vacancy Created',
                })
                this.vacancyModal = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Vacancy not created',
                })
            })
        },
        // make Application
        makeApplication(id){
            this.$router.push({name: 'vacancyapplication', params: {id}})
        },
        // Delete
        deleteVacancy(id){
            axios({
                method: 'delete',
                url: 'api/vacancy/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Vacancy Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Vacancy not deleted'
                })
            })
        }
    }

}
</script>