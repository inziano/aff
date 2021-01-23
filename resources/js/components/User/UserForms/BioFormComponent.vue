<template>
    <div class="mb-2 py-2">
        
        <Form :model='bioForm' label-position="top">
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Basic Information</p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Surname">
                       <Input size="large"  v-model="bioForm.surname" placeholder="Surname"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                
                <Col span="12">
                    <FormItem label="First Name">
                       <Input size="large"  v-model="bioForm.firstname" placeholder="First Name"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Other Name">
                       <Input size="large"  v-model="bioForm.lastname" placeholder="Other Name"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Date of Birth">
                        <DatePicker size="large" v-model="bioForm.dob" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Gender">
                        <RadioGroup v-model="bioForm.gender" type="button" size="large" style="width: 100%">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                </Col>
               
            </Row>

            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> About you </p>
                </div>
            </div>
            
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Expertise">
                        <Select size="large" v-model="bioForm.title" placeholder="Expertise" filterable allow-create>
                            <Option v-for="title in titles" :value="title" :key="title">{{ title }}</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Field of Study">
                       <Input size="large"  v-model="bioForm.field_of_study" type="text" placeholder="Field of Study"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Summary">
                        <Input size="large"  v-model="bioForm.summary" placeholder="Summary" type="textarea"></Input>
                    </FormItem>
                </Col>
            </Row>

            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Contacts </p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Secondary Email">
                       <Input size="large"  v-model="bioForm.altemail" type="email" placeholder="email@sth.org"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Phone">
                       <Input size="large"  v-model="bioForm.phone" type="text" placeholder="+254 712 334455"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Address">
                       <Input size="large"  v-model="bioForm.address" type="text" placeholder="1123 -Something Street"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Residency">
                       <Input size="large"  v-model="bioForm.residency" type="text" placeholder="Residency"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Citizenship">
                       <Input size="large"  v-model="bioForm.citizenship" type="text" placeholder="Citizenship"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="py-4 my-2 px-4">
                <Col span="10">
                    <ButtonGroup>
                        <Button >
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="updateBio" v-if="user.id">
                            <Icon type="ios-checkmark"></Icon>
                            Update
                        </Button>
                        <Button type="primary" @click="createBio" v-else>
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
import { mapActions, mapState } from 'vuex'
export default {
    props: ['user'],
    computed: {
        ...mapState('AuthModule',['currentUser']),
    },
    data(){
        return{
            titles: ['Forestry', 'Communication'],
            bioForm: {
                title: this.user.title,
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                surname: this.user.surname,
                gender: this.user.gender,
                dob: this.user.dob,
                phone: this.user.phone,
                altphone: this.user.altphone,
                altemail: this.user.altemail,
                address: this.user.address,
                citizenship: this.user.citizenship,
                residency: this.user.residency,
                qualification: this.user.qualification,
                field_of_study: this.user.field_of_study,
                summary: this.user.summary
            },
        }
    },
    methods: {
        ...mapActions('BioModule',['create', 'update']),
        createBio(){
            // Get data
            const formdata = this.bioForm
            formdata['user_id'] = this.currentUser.id
            // Push to api
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
        updateBio(){
            // 
            let vals = {
                id: this.user.id,
                data: this.bioForm
            }
            // Push to api
            this.update(vals).then(()=>{
                this.$Notice.success({
                    title: 'Updated'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Error'
                })
            })
        }
    }
}
</script>