<template>
    <div>
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
                                <Col span="24">
                                    <FormItem label="Description">
                                        <Input v-model="workForm.description" placeholder="Description" type="textarea"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                           
                            <Row :gutter="16" class="mb-2">
                                <Col span="10">
                                    <ButtonGroup>
                                        <Button type="primary" @click="addWork">
                                            <Icon type="ios-add"></Icon>
                                            Add
                                        </Button>
                                    </ButtonGroup>
                                </Col> 
                            </Row>
                            <Row :gutter="16" class="mb-2" v-if="works.length > 0">
                                <Table border :columns="workcolumns" :data="works"></Table>
                            </Row>
                            <Row :gutter="16" v-if="works.length > 0">
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
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['current_user'])
    },
    data(){
        return{
            works: [],
            workForm: {
                institution:'',
                title: '',
                country: '',
                startdate: '',
                enddate: '',
            },
             workcolumns: [
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Institution',
                    key: 'institution'
                },
                {
                    title: 'Country',
                    key: 'country'
                },
                {
                    title: 'Start',
                    key: 'startdate'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    size: 'small',
                                    shape: 'circle',
                                    icon: 'ios-close'
                                },
                                on: {
                                    click: () => {
                                        this.removeWork(params.index)
                                    }
                                }
                            }, 'Remove')
                        ]);
                    }
                }
            ],
        }
    },
    methods: {
        addWork(){
            this.workForm['user_id'] = this.current_user.id
            this.works.push(this.workForm)
        },
        removeWork(idx){
            this.works.splice(idx,1)
        },
        updateWork(){
            // Get data
            let data = this.works
            // Push to api
            axios({
                method: 'post',
                url: '/api/work',
                data: data
            }).then((response)=>{
                // Show response
                this.$Notice.info({
                    title: 'Updated'
                })
            }).catch((error)=>{
                // Show error
                this.$Notice.error({
                    title: "Unsuccesful"
                })
            })
        },
    }
}
</script>