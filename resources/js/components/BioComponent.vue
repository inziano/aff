<template>
    <div class="w-full h-full flex flex-wrap">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="w-3/12 border-r border-r-gray-100 mt-0">
            <div class="bg-white rounded-lg p-6">
                <img class="h-20 w-20 rounded-full mx-auto" src="images/landing.jpg">
                <div class="mt-5 text-center">
                    <h2 class="text-lg">{{currentUser.username}}</h2>
                    <p class="mb-5 text-gray-600">{{currentUser.email}}</p>
                    <p class="mb-2 text-gray-600">{{this.bioData.qualification}}</p>
                    <p class="mb-2 text-gray-600">{{this.bioData.field_of_study}}</p>
                    <p class="text-gray-600 text-xs">
                       <Icon type="ios-pin" /><span>{{this.bioData.residency}}</span> 
                    </p>
                    <p class="pt-3 mt-5 text-gray-700 hover:text-green-500" @click="isEditing">
                        <span v-if="editing"> View Profile</span>
                        <span v-if="!editing"> Edit </span>

                    </p>
                </div>
            </div>
            <div class="w-full p-2 flex">
                <div class="w-1/3 text-center">
                    <p class="text-xs uppercase text-gray-700">
                        <span class="text-xl font-semibold text-gray-500">0</span> <br>
                        Pubs
                    </p>
                </div>
                <div class="w-1/3 text-center">
                    <p class="text-xs uppercase text-gray-700">
                        <span class="text-xl font-semibold text-gray-500">0</span> <br>
                        Images
                    </p>
                </div>
                <div class="w-1/3 text-center">
                    <p class="text-xs uppercase text-gray-700">
                        <span class="text-xl font-semibold text-gray-500">0</span> <br>
                        Messages
                    </p>
                </div>
            </div>
        </div>
        <div v-if="!editing" class="w-6/12 pt-0">
            <div class="w-11/12">
                    <div class="w-full overflow-hidden shadow-md p-5 m-2 bg-white rounded">
                        <h4 class="text-gray-700 text-lg mb-4">
                            Summary
                        </h4>
                        <p class="text-gray-700 text-sm">
                           {{this.bioData.summary}}
                        </p>
                    </div>
                    <div class="w-full overflow-hidden shadow-md p-5 m-2 bg-white rounded">
                        <h4 class="text-gray-700 text-lg mb-3">
                            Education
                        </h4>
                        <Divider></Divider>
                        <div class="p-2 border-b border-b-2">
                            <p class="text-base font-medium text-gray-600 tracking-wider">{{this.eduData.institution}}</p>
                            <p class="text-sm font-medium text-gray-700 tracking-widest">{{this.eduData.degree}}</p>
                            <p class="text-xs font-sans mb-2"> {{this.eduData.startdate}} - {{this.eduData.enddate}}</p>
                            <p class="text-sm tracking-wider mb-2">
                                {{this.eduData.description}}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <div v-if="!editing" class="w-3/12 pt-0 px-4">
            <h4 class="text-gray-700 text-lg mb-4"> Work </h4>
            <Timeline>
                    <TimelineItem>
                        <p class="time">{{this.workData.startdate}} - {{this.workData.enddate}}</p>
                        <p class="text-gray-600 text-xs">{{this.workData.country}}</p>
                        <p class="content text-sm">{{this.workData.institution}}</p>
                        <p class="content text-sm">{{this.workData.description}}</p>
                    </TimelineItem>
            </Timeline>
        </div>
        <div v-if="editing" class="w-8/12 pt-2 px-4">
            <Collapse v-model="val" accordion>
                <Panel name="personal">
                    Basic Information
                    <div slot="content">
                        <Form :model='bioForm' label-position="top">
                            <Divider orientation="left">Personal Information</Divider>
                            <Row :gutter="16">
                                <Col span="4">
                                    <FormItem label = "Title">
                                        <Input v-model="bioForm.title" placeholder="Title e.g Mr, Ms..."></Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem label="Surname">
                                        <Input v-model="bioForm.surname" placeholder="Surname"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label="First Name">
                                        <Input v-model="bioForm.firstname" placeholder="First Name"></Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem label="Other Name">
                                        <Input v-model="bioForm.lastname" placeholder="Other Name"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label="Date of Birth">
                                        <DatePicker v-model="bioForm.dob" type="date" placeholder="Select date" style=""></DatePicker>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem label="Gender">
                                        <!-- <Input v-model="bioForm.gender" type="text"></Input> -->
                                        <RadioGroup v-model="bioForm.gender" type="button">
                                            <Radio label="male">Male</Radio>
                                            <Radio label="female">Female</Radio>
                                        </RadioGroup>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label="Residency">
                                        <Input v-model="bioForm.residency" type="text" placeholder="Residency"></Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem label="Citizenship">
                                        <Input v-model="bioForm.citizenship" type="text" placeholder="Citizenship"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="12">
                                    <FormItem label="Field of Study">
                                        <Input v-model="bioForm.field_of_study" type="text" placeholder="Field of Study"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Divider orientation="left">Contact Information</Divider>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label="Secondary Email">
                                        <Input v-model="bioForm.altemail" type="email" placeholder="email@sth.org"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label="Phone">
                                        <Input v-model="bioForm.phone" type="text" placeholder="+254 712 334455"></Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem label="Address">
                                        <Input v-model="bioForm.address" type="text" placeholder="1123 -Something Street"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="10">
                                    <ButtonGroup>
                                        <Button >
                                            <Icon type="ios-cancel"></Icon>
                                            Cancel
                                        </Button>
                                        <Button type="primary" @click="updateBio">
                                            <Icon type="ios-checkmark"></Icon>
                                            Update
                                        </Button>
                                    </ButtonGroup>
                                </Col> 
                            </Row>
                        </Form>
                    </div>
                </Panel>
                <Panel name="education">
                    Education
                    <div slot="content">
                        <Form :model="educationForm" label-position="top">
                            <Divider orientation="left">Education</Divider>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label = "Institution">
                                        <Input v-model="educationForm.institution" placeholder="Institution"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="6">
                                    <FormItem label="Start Year">
                                        <DatePicker v-model="educationForm.startdate" type="year" placeholder="Start year" style="width: 100%"></DatePicker>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="Other Name">
                                        <DatePicker v-model="educationForm.enddate" type="year" placeholder="End year" style="width: 100%"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="6">
                                    <FormItem label = "Degree">
                                        <Input v-model="educationForm.degree" placeholder="Degree"></Input>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label = "Field of study">
                                        <Input v-model="educationForm.field_of_study" placeholder="Field of Study"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="12">
                                    <FormItem label = "Description">
                                        <Input v-model="educationForm.description" placeholder="Description" type="textarea"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="10">
                                    <ButtonGroup>
                                        <Button >
                                            <Icon type="ios-cancel"></Icon>
                                            Cancel
                                        </Button>
                                        <Button type="primary" @click="updateEducation">
                                            <Icon type="ios-checkmark"></Icon>
                                            Update
                                        </Button>
                                    </ButtonGroup>
                                </Col> 
                            </Row>
                        </Form>    
                    </div>
                </Panel>
                <Panel name="work">
                    Work Experience
                    <div slot="content">
                        <Form :model="workForm" label-position="top">
                            <Divider orientation="left">Work Experience</Divider>
                            <Row :gutter="16">
                                <Col span="6">
                                    <FormItem label = "Title">
                                        <Input v-model="workForm.title" placeholder="title"></Input>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label = "Institution">
                                        <Input v-model="workForm.institution" placeholder="Institution"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem label = "Country">
                                        <Input v-model="workForm.country" placeholder="Country"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="6">
                                    <FormItem label="Start Year">
                                        <DatePicker v-model="workForm.startdate" type="month" placeholder="Start year" style="width: 100%"></DatePicker>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="End Year">
                                        <DatePicker v-model="workForm.enddate" type="month" placeholder="End year" style="width: 100%"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="12">
                                    <FormItem label="Description">
                                        <Input v-model="workForm.description" placeholder="Description" type="textarea"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="10">
                                    <ButtonGroup>
                                        <Button>
                                            <Icon type="ios-cancel"></Icon>
                                            Cancel
                                        </Button>
                                        <Button type="primary" @click="updateWork">
                                            <Icon type="ios-checkmark"></Icon>
                                            Update
                                        </Button>
                                    </ButtonGroup>
                                </Col> 
                            </Row>
                        </Form>
                    </div>
                </Panel>
            </Collapse>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            editing: false,
            val: "personal",
            bioForm: {
                title: '',
                firstname: '',
                lastname: '',
                surname: '',
                gender: '',
                dob: '',
                phone: '',
                altphone: '',
                altemail: '',
                address: '',
                citizenship: '',
                residency: '',
                qualification: '',
                field_of_study: ''
            },
            educationForm: {
                institution: '',
                startdate: '',
                enddate: '',
                degree: '',
                field_of_study: '',
                description: ''
            },
            workForm: {
                institution: '',
                title: '',
                country: '',
                startdate: '',
                enddate: ''
            },
            bioData: {},
            workData: {},
            eduData: {}
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
    },
    mounted(){
        // Fetch specific details
        const id = this.id

        axios.all([
            axios.get('api/bio/'+id),
            axios.get('api/education/'+id),
            axios.get('api/work/'+id)
        ]).then( axios.spread((bio,edu,work)=>{
            // Bio information
            console.log(bio.data)
            this.bioData = bio.data
            // Education information
            this.eduData = edu.data
            // // Work information
            this.workData = work.data
        })).catch((error)=>{
            this.editing = true
            // Show information to fill in details
            this.$Notice.info({
                title: 'User',
                desc: 'Please fill in your biodata'
            })
        })
        // axios({
        //     method: 'get',
        //     url: 'api/bio/'+id
        // }).then((response)=>{
        //     console.log(response)
        //     // Bio data
        //     this.bioData = response.data
        //     console.log(this.bioData.data)
        // }).catch((error)=>{
        //     console.log(error)
        //     this.editing = true
        //     // Show information to fill in details
        //     this.$Notice.error({
        //         title: 'User',
        //         desc: 'Please fill in your biodata'
        //     })
        // })
    },
    methods: {
        isEditing () {
            if ( this.editing ){
                this.editing = false
            } else {
                this.editing = true
            }
        },
        // Push the data to the db
        updateEducation(){
            // Get data
            const formdata = this.educationForm
            formdata['user_id'] = this.id
            // Push to api
            axios({
                method: 'post',
                url: '/api/education',
                data: formdata
            }).then((response)=>{
                // Show response
                this.$Notice.info({
                    title: response.data,
                    desc: response.message
                })
            }).catch((error)=>{
                // Show error
                this.$Notice.error({
                    title: "Unsuccesful",
                    desc: error.message
                })
            })

        },
        updateBio(){
            // Get data
            const formdata = this.bioForm
            formdata['user_id'] = this.id
            // Push to api
            axios({
                method: 'post',
                url: '/api/bio',
                data: formdata
            }).then((response)=>{
                // Show response
                this.$Notice.info({
                    title: response.data,
                    desc: response.message
                })
            }).catch((error)=>{
                // Show error
                this.$Notice.error({
                    title: "Unsuccesful",
                    desc: error.message
                })
            })
        },
        updateWork(){
            // Get data
            const formdata = this.workForm
            formdata['user_id'] = this.id
            // Push to api
            axios({
                method: 'post',
                url: '/api/work',
                data: formdata
            }).then((response)=>{
                // Show response
                this.$Notice.info({
                    title: response.data,
                    desc: response.message
                })
            }).catch((error)=>{
                // Show error
                this.$Notice.error({
                    title: "Unsuccesful",
                    desc: error.message
                })
            })
        }
    }
}
</script>