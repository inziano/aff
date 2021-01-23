<template>
    <div class="mb-2 py-2">
        <Form v-model="topicForm" label-position="top" >
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Topic </p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Title">
                        <Input size="large" v-model="topicForm.title" type="text" placeholder="Title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <FormItem label="Description">
                        <Input size="large" v-model="topicForm.description" placeholder="Description" type="textarea"></Input>
                    </FormItem>
                </Col>
            </Row>
            <div class="w-full flex my-4 p-2 bg-gray-100" >
                <div class="w-1/3">
                    <p class="text-base"> Topic privacy </p>
                </div>
            </div>
            <Row :gutter="16" class="px-4">
                <Col span="12">
                    <FormItem label="Public">
                        <i-switch size="large" v-model="topicForm.public"></i-switch>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" class="px-4">
                <Col span="24">
                    <ButtonGroup>
                        <Button>
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="updateTopic" v-if="topic.id">
                            <Icon type="ios-checkmark"></Icon>
                            Update
                        </Button>
                        <Button type="primary" @click="onSubmit" v-else>
                            <Icon type="ios-checkmark"></Icon>
                            Create Topic
                        </Button>
                    </ButtonGroup>
                </Col> 
            </Row>
        </Form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['topic'],
    data(){
        return {
            topicForm: {
                title: this.topic.title,
                description: this.topic.description,
                public: this.topic.public
            }
        }
    },
    computed:{
        ...mapGetters('TopicModule', ['topics']),
    },
    methods: {
        ...mapActions('TopicModule',['create', 'update']),

        onSubmit(){
            let formdata = this.topicForm
            // Push to db
            this.create(formdata).then((response)=>{
                this.$Notice.success({
                    title: 'Topic Created',
                    desc: 'Your topic was succesfully created'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Topic not created',
                    desc: 'Your topic was not created'
                })
            })
        },

        updateTopic() {
            let formdata = this.topicForm

            // Data
            const params = {
                id: this.topic.id,
                data: formdata
            }

            this.update(params).then( response =>{
                this.$Notice.success({
                    title: 'Topic Updated',
                    desc: 'Your topic was succesfully updated'
                }).catch((error)=>{
                this.$Notice.error({
                    title: 'Topic not updated',
                    desc: 'Your topic was not updated'
                })
            })
            })
        }
    }
}
</script>