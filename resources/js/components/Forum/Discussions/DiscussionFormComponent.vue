<template>
    <div class="mb-2 py-2">
        <Form v-model="threadForm" label-position="top">
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Discussion question </p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Discussion Title">
                        <Input size="large" v-model="threadForm.subject" type="text" placeholder="Discussion title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Discusion Question">
                        <quill  v-model="threadForm.body" :config="config" output="html"></quill>
                    </FormItem>
                </Col>
            </Row>
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Discussion topic </p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Topic">
                        <Select size="large" v-model="threadForm.topic_id">
                            <Option v-for="topic in topics" :key="topic.id" :value="topic.id" > {{topic.title}}</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            
            <Row :gutter="16" class="px-4">
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
    </div>
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