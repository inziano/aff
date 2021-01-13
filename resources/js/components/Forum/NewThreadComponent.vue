<template>
    <Form v-model="threadForm" label-position="top">
        <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Thread </h4>
        <br>
        <Row :gutter="16">
            <Col span="12">
                <FormItem label="Category">
                    <Select v-model="threadForm.topic_id">
                        <Option v-for="topic in topics" :key="topic.id" :value="topic.id" > {{topic.title}}</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="24">
                <FormItem label="Topic">
                    <Input size="large" v-model="threadForm.subject" type="text" placeholder="Thread Title"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="24">
                <FormItem label="Discusion Question">
                    <quill  v-model="threadForm.body" :config="config" output="html"></quill>
                </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="24">
                <ButtonGroup>
                    <Button @click="threadModal = false">
                        <Icon type="ios-cancel"></Icon>
                        Cancel
                    </Button>
                    <Button type="primary" @click="onSubmit">
                        <Icon type="ios-checkmark"></Icon>
                        Create Thread
                    </Button>
                </ButtonGroup>
            </Col> 
        </Row>
        
    </Form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data(){
        return {
            threadForm: {
                topic_id: '',
                subject: '',
                body: ''
            },
            config: {
                placeholder: 'Compose a question...',
                theme: 'snow',
                modules: {
                    toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ],
                    syntax: {
                    highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },

        }
    },
    computed: {
        ...mapGetters('AuthModule',['current_user']),
        ...mapGetters('TopicModule',['topics'])
    },
    methods:{
        // Submit
        onSubmit(){
            let formdata = this.threadForm
            formdata['user_id'] = this.current_user.id

            // Create
            this.$store.dispatch('ThreadModule/create', formdata).then(()=>{
                this.$Notice.success({
                    title: 'Thread Created',
                    desc: 'Your thread was succesfully created'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Thread not created',
                    desc: 'Your thread was not created'
                })
            })
        },
    }
}
</script>