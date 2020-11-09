<template>
    <div>
        <Form :model="replyForm" label-position="top">
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Reply">
                        <quill  v-model="replyForm.body" :config="config" output="html"></quill>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <ButtonGroup>
                        <Button @click="reply = false">
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="success" @click="createReply">
                            <Icon type="ios-checkmark"></Icon>
                            Submit
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
export default {
    props: ['threadId', 'replyId', 'user'],
    data(){
        return{
            replyForm: {
                body: ''
            },
            config: {
                placeholder: 'Compose a reply',
                theme: 'snow'
            },
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
        }
    },
    methods: {
        createReply(){
            let formdata = this.replyForm
            // Add user and thread
            formdata['user_id'] = this.user
            formdata['thread_id'] = this.threadId
            formdata['reply_id'] = this.replyId

            // Post reply
            this.$store.dispatch('ReplyModule/create',formdata ).then((response)=>{
                this.$Message.success('Reply sent')
            }).catch((error)=>{
                this.$Message.success('Reply not sent')
            })
        },
    }
}
</script>