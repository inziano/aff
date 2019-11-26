<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyModal">
            <Form :model="vacancyForm" label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Vacancy </h4>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Title">
                            <Input type="text" placeholder="Title"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Application Deadline">
                            <DatePicker type="date" placeholder="Deadline" style="width: 100%"></DatePicker>
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
                        <FormItem label="Description">
                            <Input type="textarea" placeholder="Description"></Input>
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
                        Vacancys
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
            <div class="w-full flex p-2 bg-gray-100 justify-center" v-if="!list">
                <div class="w-1/5 overflow-hidden shadow-lg p-2 px-5 h-56 bg-white m-2" v-for="vacancy in vacancyData.data" :key="vacancy.title">
                    <div class="w-full mb-3 ">
                        <p class="font-hairline text-xs tracking-widest text-gray-500">
                            <Badge status="success" />
                        </p>
                    </div>
                    <div class="mb-2">
                        <p class="font-medium tracking-wide text-lg antialiased">
                            {{vacancy.name}}
                        </p>
                    </div>
                    <div class="mb-2">
                        <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
                           {{vacancy.description}}
                        </p>
                    </div>
                    <div class="mb-2">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                           {{vacancy.location}}
                        </p>
                    </div>
                     <div class="w-full mb-2">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                            Dates: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.startdate }} to {{ vacancy.enddate}}</span>
                        </p>
                    </div>
                    <div class="w-full mt-5 mb-0">
                        <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                            Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.created_at}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full p-2 bg-gray-100" v-if="list">
                <Table height="200" :columns="vacancyColumns" :data="vacancies"></Table>
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
            vacancyData: '',
            vacancyForm: {
                title: '',
                type: '',
                description: '',
                deadline: '',
            },
            vacancies: [],
            vacancyColumns: [
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
    methods:{
        // Change view
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