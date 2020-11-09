<template>
    <div>
        <Form :model='bioForm' label-position="top">
            <Divider orientation="left">Personal Information</Divider>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label = "Title">
                        <Input v-model="bioForm.title" placeholder="Title e.g Mr, Ms..."></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Surname">
                        <Input v-model="bioForm.surname" placeholder="Surname"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="First Name">
                        <Input v-model="bioForm.firstname" placeholder="First Name"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Other Name">
                        <Input v-model="bioForm.lastname" placeholder="Other Name"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Date of Birth">
                        <DatePicker v-model="bioForm.dob" type="date" placeholder="Select date" style=""></DatePicker>
                    </FormItem>
                </Col>
                <Col span="12">
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
                <Col span="12">
                    <FormItem label="Residency">
                        <Input v-model="bioForm.residency" type="text" placeholder="Residency"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
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
                <Col span="12">
                    <FormItem label="Secondary Email">
                        <Input v-model="bioForm.altemail" type="email" placeholder="email@sth.org"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Phone">
                        <Input v-model="bioForm.phone" type="text" placeholder="+254 712 334455"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
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
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('AuthModule',['currentUser']),
    },
    data(){
        return{
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
        }
    },
    methods: {
        updateBio(){
            // Get data
            const formdata = this.bioForm
            formdata['user_id'] = this.currentUser.id
            // Push to api
            axios({
                method: 'post',
                url: '/api/bio',
                data: formdata
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
        }
    }
}
</script>