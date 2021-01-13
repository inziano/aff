<template>
    <div class="mb-2 py-2">
        <Divider orientation="left">Work Experience</Divider>

        <Table class="my-4" size="small" border :columns="workcolumns" :data="work" v-if="work.length > 0">
            <template slot-scope="{ row, index }" slot="action">
                <a class="px-2 text-gray-700 hover:text-teal-900" @click="editItem(row)"> <Icon type="ios-create-outline" size="20"/> </a>
                <a class="px-2 text-gray-700 hover:text-red-700"  @click="deleteItem(row)"><Icon type="ios-trash" size="20"/></a>
            </template>
        </Table>

        <div class="w-full flex mt-4 p-2 bg-gray-100 hover:bg-teal-100" >
            <div class="w-1/3">
                <p class="text-base" v-if="!addition" > Add work exerience</p>
                <p class="text-base" v-else > Work exerience</p>
            </div>
            <div class="w-2/3">
                <a class="px-2 text-gray-700 hover:text-gray-900" @click="addition = true" v-if="!addition"> <Icon type="ios-add" size="30"/></a>
            </div>
        </div>
       
        <Form class="mt-2 py-4" :model="workForm" label-position="top" v-if="addition">
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label = "Company / Institution">
                       <Input size="large"  v-model="workForm.institution" placeholder="Company / Institution"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label = "Job Title">
                       <Input size="large"  v-model="workForm.title" placeholder="Job title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label = "Location">
                       <Input size="large"  v-model="workForm.country" placeholder="Location"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Start Year">
                       <DatePicker size="large"  v-model="workForm.startdate" type="month" placeholder="Start year" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="End Year">
                       <DatePicker size="large"  v-model="workForm.enddate" type="month" placeholder="End year" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Description">
                       <Input size="large"  v-model="workForm.description" placeholder="Description" type="textarea"></Input>
                    </FormItem>
                </Col>
            </Row>
           
            <Row :gutter="16" class="mb-2">
                <Col span="12">
                    <ButtonGroup>
                        <Button @click="clear">
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="updateWork" v-if="isUpdating">
                            <Icon type="ios-checkmark"></Icon>
                            Update
                        </Button>
                        <Button type="primary" @click="createWork" v-if="!isUpdating">
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
import { mapActions, mapState } from 'vuex';
export default {
    props: ['work'],
    computed: {
        ...mapState('AuthModule',['currentUser']),
    },
    data(){
        return{
            addition: false,
            isUpdating: false,
            editingId: '',
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
                    title: '',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
        }
    },
    methods: {
        ...mapActions('WorkModule', ['create', 'update', 'delete']),
        editItem(work){
            const workdata = ({ institution, title, country, startdate, enddate }) => ({ institution, title, country, startdate, enddate })

            this.workForm = workdata(work)

            this.editingId = work.id

            this.addition = true
            this.isUpdating = true
        },
        deleteItem(work){
            const id = work.id
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
            this.workForm = {
                institution:'',
                title: '',
                country: '',
                startdate: '',
                enddate: '',
            }
            this.addition = false
            this.isUpdating = false
        },
        createWork(){
            // Data
            let formdata = this.workForm
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
        updateWork(){
            // Data
            let vals = {
                id: this.editingId,
                data: this.workForm
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