<template>
    <div class="w-full h-full">
        <Form v-model="topicForm" label-position="top" class="w-1/4">
            <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Topic </h4>
            <br>
            <Row :gutter="16">
                <Col span="12">
                    <FormItem label="Category">
                        <Input size="large" v-model="topicForm.title" type="text" placeholder="Title"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <FormItem label="Topic">
                        <Input size="large" v-model="topicForm.description" type="text" placeholder="Description"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                    <ButtonGroup>
                        <Button>
                            <Icon type="ios-cancel"></Icon>
                            Cancel
                        </Button>
                        <Button type="primary" @click="onSubmit">
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
export default {
    data(){
        return {
            topicForm: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        onSubmit(){
            let formdata = this.topicForm
            // Push to db
            axios({
                method: 'post',
                url: 'api/topics',
                data: formdata
            }).then((response)=>{
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
        }
    }
}
</script>