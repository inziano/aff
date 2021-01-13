<template>
    <div>
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
                        <Input size="large" v-model="eventForm.name" type="text" placeholder="Event Name"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Event Location">
                        <Input size="large" v-model="eventForm.location" type="text" placeholder="Event Location"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Event Description">
                        <Input size="large" v-model="eventForm.description" type="textarea" placeholder="Event Description"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <ButtonGroup>
                        <Button @click="eventModal = false">
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
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            eventForm: {
                startdate: '',
                enddate: '',
                name: '',
                location:'',
                description: ''
            },
        }
    },
    methods: {
        ...mapActions('EventModule',['create']),
        // Submit
        onSubmit(){
            let formdata = this.eventForm
            formdata['user_id'] = this.current_user.id
            // Push to db
            this.create(formdata).then(()=>{
                this.$Notice.success({
                    title: 'Event Created',
                    desc: 'Your event was succesfully created'
                })
                this.eventModal = false
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Event not created',
                    desc: 'Your event was not created'
                })
            })
        },
    }
}
</script>