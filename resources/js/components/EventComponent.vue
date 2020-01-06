<template>
    <div class="w-full h-full">
        <Modal v-model="eventModal" title="Create Event">
            <Form :model="eventForm" label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Event </h4>
                <br>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Start Date">
                            <DatePicker v-model="eventForm.startdate" type="date" placeholder="Start Date" style="width: 100%"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="End Date">
                            <DatePicker v-model="eventForm.enddate" type="date" placeholder="End Date" style="width: 100%"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Event Name">
                            <Input v-model="eventForm.name" type="text" placeholder="Event Name"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Event Location">
                            <Input v-model="eventForm.location" type="text" placeholder="Event Location"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Event Description">
                            <Input v-model="eventForm.description" type="textarea" placeholder="Event Description"></Input>
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
                                Create Event
                            </Button>
                        </ButtonGroup>
                    </Col> 
                </Row>
            </Form>
            <div slot="footer">
                <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
            </div>
        </Modal>
        <div class="w-full h-full p-5" >
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                       Events
                    </p>
                    <p class="font-normal font-sans text-lg tracking-tight">
                        Find Events Around You
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="eventModal = true">
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
                <div class="w-1/24 flex">
                    <input v-on:keyup.enter="onSearch" v-model="searchTerm" class="appearance-none bg-transparent border-none w-3/4 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" ></input>
                    <li class="mr-1 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
            <div class="w-full h-full" v-if="events.length">
                <div class="w-full flex flex-wrap p-2 bg-gray-100 justify-center" v-if="!list">
                    <div class="w-64 overflow-hidden shadow-lg p-2 px-5 h-64 bg-white m-2 rounded-lg" v-for="event in events" :key="event.id">
                        <div class="mt-3 mb-2">
                            <p class="font-500 tracking-wider text-lg antialiased">
                            {{event.name}}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
                            {{event.description}}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                            <Icon type="ios-pin-outline" size="18" />: {{event.location}}
                            </p>
                        </div>
                        <div class="w-full mb-2">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                                <Icon type="ios-calendar-outline" size="18" /> :{{event.startdate }} - {{ event.enddate}}
                            </p>
                        </div>
                        <div class="w-full mt-5 mb-0">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                                Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{event.created_at}}</span>
                            </p>
                        </div>
                        <div class="w-full mt-2 mb-0" v-if="event.user.id === currentUser.id">
                            <li class="list-none">
                                <a class="text-xs tracking-wide font-medium text-red-700" @click="deleteEvent(event.id)"> Remove </a>
                            </li>
                        </div>
                    </div>
                    <div class="w-full flex p-0 text-center">
                        <Page class="mx-auto" :current="eventmeta.current_page" :total="eventmeta.total" :page-size="eventmeta.per_page" @on-change="goToPage" />
                    </div>
                </div>
                <div class="w-full p-2 bg-gray-100" v-if="list">
                    <Table height="200" :columns="eventsColumns" :data="events"></Table>
                </div>
            </div>

            <div class="w-full h-full" v-else>
               <div class="mx-auto w-1/3 p-5 m-3 content-center">
                   <img class="object-center object-contain" src='/images/events.svg'>
                   <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Events Found</p>
               </div>
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
            eventModal: false,
            admin: false,
            searchTerm: '',
            eventData: '',
            eventmeta:'',
            eventForm: {
                startdate: '',
                enddate: '',
                name: '',
                location:'',
                description: ''
            },
            events: [],
            eventsColumns: [
                {
                    title: 'Title',
                    key: 'name'
                },
                {
                    title: 'Description',
                    key: 'description'

                },
                {
                    title: 'Location',
                    key: 'location'
                },
                {
                    title: 'Start Date',
                    key: 'startdate'
                },
                {
                    title: 'End Date',
                    key: 'enddate'
                },
            ]
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
    },
    mounted(){
        axios({
            method: 'get',
            url: 'api/event'
        }).then((response)=>{
            this.events = response.data.data
            this.eventData = response.data
            this.eventmeta = response.data.meta
        }).catch((error)=>{
            console.log(error)
            this.$Notice.info({
                title: 'Events',
                desc: 'No events currently registered'
            })
        })

        // Search events
        Echo.channel('searches').listen('SearchEvents',(e)=>{
            this.events = e.events
        })

        // Update
        Echo.channel('events').listen('EventCreated',(e)=>{
            this.events = e.events
        })

        // Update
        Echo.channel('events').listen('EventDeleted',(e)=>{
            this.events = e.events
        })
    },
    methods: {

        // goToPage
        goToPage(number){
            axios.get(this.eventmeta.path + '?page=' + number).then((response)=>{
                // response
                this.events = response.data.data
                this.eventmeta = response.data.meta
                // Pub data
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Search
        onSearch() {
            // 
            let formdata = {
                search: this.searchTerm
            }
            // Search
            axios({
                method: 'post',
                url: 'api/event/search',
                data: formdata
            }).then((response)=>{
                // log response
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Submit
        onSubmit(){
            let formdata = this.eventForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/event',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Event Created',
                    desc: 'Your event was succesfully created'
                })
                this.eventModal = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Event not created',
                    desc: 'Your event was not created'
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
        // Delete
        deleteEvent(id){
            axios({
                method: 'delete',
                url: 'api/event/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Event Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Event not deleted'
                })
            })
        }
    }
}
</script>