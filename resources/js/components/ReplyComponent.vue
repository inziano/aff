<template>
    <ul>
        <li class=" list-none w-auto m-2 ml-5 rounded-sm" v-for="reply in replies" :key="reply.id">
            <div class="bg-white px-3 py-4">
                <div class="w-full">
                    <li class="list-none"> 
                        <Avatar size="small" icon="ios-person" />
                        <span class="ml-1 font-sans font-thin text-gray-600">{{reply.user.username}}</span>
                    </li>
                </div>
                <div class="p-2 mt-2 font-normal font-sans">
                    <span class="text-gray-600 text-base tracking-wide font-sans font-normal" v-html="reply.body"></span>
                </div>
                <p class="p-2 font-thin text-xs text-gray-600">{{reply.created_at | moment("from")}}</p>
                <div class="mt-2 mb-2 w-full flex flex-wrap ">
                    <li class="p-2 ml-2" @click="likeReply(reply.id)">
                        <Icon type="ios-heart-outline" /><span class="ml-2 font-medium text-sm">0</span>
                    </li>
                    <li class="p-2 ml-2">
                        <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="replysm = true">Reply</a>
                    </li>
                    <li class="p-2 ml-2" v-if="reply.user_id === currentUser.id">
                        <a class="font-sm tracking-wide font-medium font-sans text-gray-700 hover:text-red-700" @click="deleteReply(reply.id)"> Remove </a>
                    </li>
                </div>
                <!-- Fix: Open reply form for specific reply -->
                <div class="w-2/5 mt-5" v-if="replysm">
                    <Form :model="replysmForm" label-position="top">
                        <Row :gutter="16">
                            <Col span="24">
                                <FormItem label="Reply">
                                    <!-- <Input v-model="replysmForm.body" type="textarea" placeholder="Reply"></Input> -->
                                    <quill  v-model="replysmForm.body" :config="config" output="html"></quill>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="16">
                            <Col span="24">
                                <ButtonGroup>
                                    <Button @click="replysm = false">
                                        <Icon type="ios-cancel"></Icon>
                                        Cancel
                                    </Button>
                                    <Button type="success" @click="onReplySm(reply.id, reply.thread_id)">
                                        <Icon type="ios-checkmark"></Icon>
                                        Submit
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
            <reply class="pl-2" :replies="reply.replies"></reply>
        </li> 
    </ul>
</template>

<script>
export default {
    name: 'reply',
    props: {
        replies: ''
    },
    data(){
        return {
            replysm: false,
            replysmForm: {
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
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
    },
    methods: {
        onReplySm(id, threadId){
            let formdata = this.replysmForm
            // Add user and thread
            formdata['user_id'] = this.currentUser.id
            formdata['thread_id'] = threadId
            formdata['reply_id'] = id

            // Post reply
            axios({
                method: 'post',
                url: 'api/reply',
                data: formdata
            }).then((response)=>{
                // 
                this.replysm = false
                this.$Notice.success({
                    title: 'Replied to reply'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Cannot reply to reply'
                })
            })
        },
        deleteReply(id){
            axios({
                method: 'delete',
                url: 'api/reply/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Reply Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Reply not deleted'
                })
            })
        }

    }
}
</script>