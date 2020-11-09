<template>
    <div>
        <Form :model="vacancyForm" label-position="top" class="w-full">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Vacancy </h4>
            <br>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Title">
                        <Input v-model="vacancyForm.title" type="text" placeholder="Title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Application Deadline">
                        <DatePicker v-model="vacancyForm.deadline" type="date" placeholder="Deadline" style="width: 100%"></DatePicker>
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
                    <FormItem label="Location">
                        <Input  v-model="vacancyForm.location" type="text" placeholder="Location"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Description">
                        <quill  v-model="vacancyForm.description" :config="config" output="html"></quill>
                        <!-- <Input  v-model="vacancyForm.description" type="textarea" placeholder="Description"></Input> -->
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <ButtonGroup>
                        <Button @click="vacancyModal = false">
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
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            vacancyForm: {
                title: '',
                type: '',
                description: '',
                deadline: '',
                positions: ''
            },
            config: {
                placeholder: 'Compose a question...',
                theme: 'snow',
                modules: {
                    // toolbar: [
                    // ['bold', 'italic', 'underline', 'strike'],
                    // ['blockquote', 'code-block'],
                    // [{ 'header': 1 }, { 'header': 2 }],
                    // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    // [{ 'script': 'sub' }, { 'script': 'super' }],
                    // [{ 'indent': '-1' }, { 'indent': '+1' }],
                    // [{ 'direction': 'rtl' }],
                    // [{ 'size': ['small', false, 'large', 'huge'] }],
                    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    // [{ 'font': [] }],
                    // [{ 'color': [] }, { 'background': [] }],
                    // [{ 'align': [] }],
                    // ['clean'],
                    // ],
                    syntax: {
                    highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
        }
    },
    methods: {
        ...mapActions('VacancyModule', ['create']),
        // On submit
        onSubmit(){
            let formdata = this.vacancyForm
            formdata['user_id'] = this.current_user.id
            // Push to db
            this.create(formdata).then((response)=>{
                this.$Notice.success({
                    title: 'Vacancy Created',
                })
                this.vacancyModal = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Vacancy not created',
                })
            })
        },
    }
}
</script>