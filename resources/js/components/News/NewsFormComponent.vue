<template>
    <div>
        <Form :model="newsForm" label-position="top" class="w-full">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Article </h4>
            <br>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Title">
                        <Input size="large" v-model="newsForm.title" type="text" placeholder="News Title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" >
                <Col span="24">
                    <FormItem label="Article" class="h-full" style="min-height:300px;">
                        <quill  v-model="newsForm.body" :config="config" output="html"></quill>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <ButtonGroup>
                        <Button @click="onCancel()">
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="onSubmit">
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('AuthModule',['current_user'])
    },
    data(){
        return{
            newsForm: {
                title: '',
                body: '',
                published: ''
            },
            config: {
                placeholder: 'Compose an article...',
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
    methods: {
         ...mapActions('NewsModule',['create']),
        // Cancel
        onCancel(){
            this.$emit('close-modal')
        },
        // Submit
        onSubmit(){
            let formdata = this.newsForm
            formdata['user_id'] = this.current_user.id
            formdata['published'] = 0
            // Push to db
            this.create(formdata).then((response)=>{
                this.$Notice.success({
                    title: 'News Created',
                    desc: 'Your news was succesfully created'
                })
                this.$emit('close-modal')
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'News not created',
                    desc: 'Your news was not created'
                })
            })
        },
    }
}
</script>