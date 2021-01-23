<template>
    <div>
        <Divider orientation="left">Education</Divider>
        <Table class="my-4" size="small" border :columns="educationColumns" :data="education" v-if="education.length > 0">
            <template slot-scope="{ row, index }" slot="action">
                <a class="px-2 text-gray-700 hover:text-teal-900" @click="editItem(row)"> <Icon type="ios-create-outline" size="20"/> </a>
                <a class="px-2 text-gray-700 hover:text-red-700" @click="deleteItem(row)"><Icon type="ios-trash" size="20"/></a>
            </template>
        </Table>
        <div class="w-full flex mt-4 p-2 bg-gray-100 hover:bg-teal-100" >
            <div class="w-1/3">
                <p class="text-base" v-if="!addition" > Add Degree / Certification </p>
                <p class="text-base" v-else > Degree / Certification </p>
            </div>
            <div class="w-2/3">
                <a class="px-2 text-gray-700 hover:text-gray-900" @click="addition = true" v-if="!addition"> <Icon type="ios-add" size="30"/></a>
            </div>
        </div>
        <Form class="mt-2 py-4" :model="educationForm" label-position="top" v-if="addition">
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label = "Name of Institution">
                       <Input size="large"  v-model="educationForm.institution" placeholder="Name of Institution"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label = "Institution Location">
                       <Input size="large"  placeholder="Institution Location"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label = "Degree">
                       <Input size="large"  v-model="educationForm.degree" placeholder="Degree"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label = "Field of study">
                       <Input size="large"  v-model="educationForm.field_of_study" placeholder="Field of Study"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Start Date">
                       <DatePicker size="large"  v-model="educationForm.startdate" type="year" placeholder="Start date" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="End / Graduation Date">
                       <DatePicker size="large"  v-model="educationForm.enddate" type="year" placeholder="End date" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label = "Description">
                       <Input size="large"  v-model="educationForm.description" placeholder="Description" type="textarea"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4 mb-2">
                <Col span="12">
                    <ButtonGroup>
                        <Button @click="clear">
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="updateEducation" v-if="isUpdating">
                            <Icon type="ios-checkmark"></Icon>
                            Update
                        </Button>
                        <Button type="primary" @click="createEducation" v-if="!isUpdating">
                            <Icon type="ios-checkmark"></Icon>
                            Create
                        </Button>
                    </ButtonGroup>
                </Col> 
            </Row>
        </Form>    
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: ['education'],
    computed: {
        ...mapState('AuthModule',['currentUser']),
    },
    data(){
        return {
            addition: false,
            isUpdating: false,
            editingId: '',
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
                    key: 'institution',
                    width: '400'
                },
                {
                    title: 'Degree',
                    key: 'degree'
                },
                {
                    title: 'Start',
                    key: 'startdate'
                },
                {
                    title: '',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
        }
    },
    methods: {
        ...mapActions('EducationModule', ['create', 'update', 'delete']),
        editItem(education){
            const edudata = ({ institution, startdate, enddate, degree, field_of_study,description }) => ({institution, startdate, enddate, degree, field_of_study,description })

            this.educationForm = edudata(education)

            this.editingId = education.id

            this.addition = true
            this.isUpdating = true
        },
        deleteItem(education){
            const id = education.id
            // Delete
            this.delete(id).then(()=>{
                this.$Notice.success({
                    title: 'Deleted'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Error'
                })
            })
        },
        clear(){
            this.educationForm = {
                institution: '',
                startdate: '',
                enddate: '',
                degree: '',
                field_of_study: '',
                description: ''
            }
            this.addition = false
        },
        createEducation(){
            // Data
            let formdata = this.educationForm
            formdata['user_id'] = this.currentUser.id
            // push to db
            this.create(formdata).then(()=>{
                this.$Notice.success({
                    title: 'Created'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Error'
                })
            })
        },
        updateEducation(){
            // Data
            let vals = {
                id: this.editingId,
                data: this.educationForm
            }
            // Push to db
            this.update(vals).then(()=>{
                this.$Notice.success({
                    title: 'Updated'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Not updated'
                })
            })
        },
    }
}
</script>