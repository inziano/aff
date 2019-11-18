<template>
    <div class="w-full h-full">
        <Layout class="h-full">
            <Sider hide-trigger :style="{ height: '100%', minWidth:'250px',background: '#fff'}" >
                
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <div class="bg-white rounded-lg p-6">
                        <img class="h-16 w-16 rounded-full mx-auto" src="images/landing.jpg">
                        <div class="text-center mt-5">
                            <h2 class="text-lg">{{currentUser.data.username}}</h2>
                            <div class="mb-5 text-gray-600">{{currentUser.data.email}}</div>
                            <a href="" class="pt-3 mt-5 text-gray-700 hover:text-green-500">Edit</a>
                        </div>
                    </div>
                    <Submenu name="1">
                        <template slot="title" to="/publication">
                            <Icon type="ios-navigate"></Icon>
                            Publications 
                        </template>
                        <MenuItem to="/publication" name="1-1">New Publications</MenuItem>
                        <MenuItem to="/publications" name="1-1">My Publications</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            Messages
                        </template>
                    </Submenu>
                    
                </Menu>
            </Sider>
            <Layout class="border-2 border-gray-100">
                <Content :style="{ minHeight: '280px', background: '#fff'}" style="height: 100%;">
                   <div class="pt-2 pl-5">
                       <h4 class="text-lg font-normal leading-loose">
                           Bio
                       </h4>
                       <div class="flex flex-wrap w-full p-2 min-vh-100" v-if="!editing">
                            <div class="w-3/12 border-gray-100 border-r-1">
                                <div class="w-full mb-3">
                                    <p class="text-base font-normal"> email@sth.org </p>
                                    <p class="text-base font-normal"> 1122 -Nairobi </p>
                                    <p class="text-base font-normal"> Kenya </p>
                                </div>
                                <div class="w-full mb-3">
                                    <h6 class="text-base font-semibold"> Summary </h6>
                                    <p class="text-sm font-normal w-11/12"> 
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        Enim voluptatem saepe dolorem ducimus nam rem exercitationem, necessitatibus veritatis aliquid expedita nisi dolores, 
                                        odio reprehenderit nihil soluta quidem sint voluptatibus consectetur?
                                    </p>
                                </div>
                                <div class="w-full border-gray-100 border-r-1 mb-3">
                                    <h6 class="text-base font-semibold">
                                        Expertise
                                    </h6>
                                    <div class="flex flex-wrap">
                                        <Tag type="dot" color="primary">Forestry</Tag>
                                        <Tag type="dot" color="primary">Forestry</Tag>
                                        <Tag type="dot" color="primary">Forestry</Tag>
                                        <Tag type="dot" color="primary">Forestry</Tag>
                                    </div>
                                </div>
                            </div>
                            <div class="w-5/12 border-r-1 p-2"> 
                                <div class="w-full">
                                    <h6 class="text-base font-semibold"> Education </h6>
                                    <div>
                                        <Divider orientation="left"> University of Leeds </Divider>
                                        <div class="pl-3">
                                            <p class="text-sm font-bold"> Nov 2018 - Present </p> 
                                            <p class="text-base">Masters Forestry and Ecosystems</p>
                                        </div>
                                       
                                    </div>
                                    <div>
                                        <Divider orientation="left"> University of Leeds </Divider>
                                        <div class="pl-3">
                                            <p class="text-sm font-bold"> Nov 2018 - Present </p> 
                                            <p class="text-base">Masters Forestry and Ecosystems</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Divider orientation="left"> University of Leeds </Divider>
                                        <div class="pl-3">
                                            <p class="text-sm font-bold"> Nov 2018 - Present </p> 
                                            <p class="text-base">Masters Forestry and Ecosystems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div class="4/12 p-2 flex-flex-wrap">
                               <div class="w-full p-2">
                                    <h6 class="text-base font-semibold"> Work </h6>
                                    <Timeline>
                                        <TimelineItem>
                                            <p class="time">Present</p>
                                            <p class="content">ICRAF</p>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <p class="time">2018 - 2019</p>
                                            <p class="content"> KWS </p>
                                        </TimelineItem>
                                    </Timeline>
                               </div>
                           </div>
                       </div>
                        <Collapse v-if="editing" v-model="val" accordion>
                            <Panel name="personal">
                                Basic Information
                                <div slot="content">
                                    <Form :model='bioForm'>
                                        <Divider orientation="left">Personal Information</Divider>
                                        <Row :gutter="16">
                                            <Col span="4">
                                                <FormItem label = "Title">
                                                    <Input placeholder="Title e.g Mr, Ms, Mrs..."></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                            <Row :gutter="16">
                                            <Col span="8">
                                                <FormItem label="Surname">
                                                        <Input placeholder="Surname"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="8">
                                                <FormItem label="First Name">
                                                    <Input placeholder="First Name"></Input>
                                                </FormItem>
                                            </Col>
                                            <Col span="8">
                                                <FormItem label="Other Name">
                                                    <Input placeholder="Other Name"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Divider orientation="left">Contact Information</Divider>
                                        <Row :gutter="16">
                                            <Col span="8">
                                                <FormItem label="Secondary Email">
                                                    <Input type="email" placeholder="email@sth.org"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="8">
                                                <FormItem label="Phone">
                                                    <Input type="email" placeholder="+254 712 334455"></Input>
                                                </FormItem>
                                            </Col>
                                            <Col span="8">
                                                <FormItem label="Address">
                                                    <Input type="email" placeholder="1123 -Something Street"></Input>
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
                                                    <Button type="primary" @click="onSubmit">
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
                                                    <Input placeholder="Institution"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="6">
                                                <FormItem label="Start Year">
                                                    <DatePicker type="year" placeholder="Start year" style="width: 100%"></DatePicker>
                                                </FormItem>
                                            </Col>
                                            <Col span="6">
                                                <FormItem label="Other Name">
                                                    <DatePicker type="year" placeholder="End year" style="width: 100%"></DatePicker>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="12">
                                                <FormItem label = "Field of study">
                                                    <Input placeholder="Field of Study"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="12">
                                                <FormItem label = "Description">
                                                    <Input placeholder="Description" type="textarea"></Input>
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
                                                    <Button type="primary" @click="onSubmit">
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
                                            <Col span="8">
                                                    <FormItem label = "Institution">
                                                        <Input placeholder="Institution"></Input>
                                                    </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="8">
                                                <FormItem label = "Country">
                                                    <Input placeholder="Country"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="6">
                                                <FormItem label="Start Year">
                                                    <DatePicker type="month" placeholder="Start year" style="width: 100%"></DatePicker>
                                                </FormItem>
                                            </Col>
                                            <Col span="6">
                                                <FormItem label="End Year">
                                                    <DatePicker type="month" placeholder="End year" style="width: 100%"></DatePicker>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row :gutter="16">
                                            <Col span="12">
                                                <FormItem label="Description">
                                                    <Input placeholder="Description" type="textarea"></Input>
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
                                                    <Button type="primary" @click="onSubmit">
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
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            editing: true,
            val: "personal",
            bioForm: {

            },
            educationForm: {

            },
            workForm: {

            },
            
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
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