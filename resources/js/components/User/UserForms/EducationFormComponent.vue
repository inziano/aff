<template>
    <div>
        <Form :model="educationForm" label-position="top">
            <Divider orientation="left">Education</Divider>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label = "Institution">
                        <Input v-model="educationForm.institution" placeholder="Institution"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Start Year">
                        <DatePicker v-model="educationForm.startdate" type="year" placeholder="Start year" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Other Name">
                        <DatePicker v-model="educationForm.enddate" type="year" placeholder="End year" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label = "Degree">
                        <Input v-model="educationForm.degree" placeholder="Degree"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
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
            <Row :gutter="16" class="mb-2">
                <Col span="12">
                    <ButtonGroup>
                        <Button type="primary" @click="addEducation">
                            <Icon type="ios-add"></Icon>
                            Add
                        </Button>
                    </ButtonGroup>
                </Col> 
            </Row>
            <Row :gutter="16" class="mb-2 mt-2" v-if="educations.length > 0">
                <Table border :columns="educationColumns" :data="educations"></Table>
            </Row>
            
            <Row :gutter="16" v-if="educations.length > 0">
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
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('AuthModule',['currentUser']),
    },
    data(){
        return {
            educations: [],
            educationForm: {
                institution: '',
                startdate: '',
                enddate: '',
                degree: '',
                field_of_study: '',
                description: ''
            },
             educationColumns: [
                {
                    title: 'Institution',
                    key: 'institution'
                },
                {
                    title: 'Degree',
                    key: 'degree'
                },
                {
                    title: 'Field',
                    key: 'field_of_study'
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
                                        this.removeEducation(params.index)
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
        addEducation(){
            this.educationForm['user_id'] = this.currentUser.id
            this.educations.push(this.educationForm)
        },
        removeEducation(idx){
            this.educations.splice(idx,1)
        },
         // Push the data to the db
        updateEducation(){
            // Get data
            let data = this.educations
            // Push to api
            axios({
                method: 'post',
                url: '/api/education',
                data: data
            }).then((response)=>{
                // Show response
                this.$Notice.info({
                    title: 'Updated'
                })
            }).catch((error)=>{
                // Show error
                this.$Notice.error({
                    title: "Unsuccesful",
                })
            })

        },
    }
}
</script>