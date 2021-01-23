<template>
    <div>
        <div class="w-full overflow-hidden p-2 m-2 bg-white flex">
            <div class="w-9/12">
                <div class="w-4/5 mb-3 flex items-baseline">
                    <div class="w-6/24">
                        <li class="list-none">
                            <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{topic.created_at | moment("from") }} </span>
                        </li>
                    </div>
                </div>
            
                <h4 class="text-gray-900 font-normal text-4xl font-sans tracking-wide mb-2">
                    {{topic.title}}
                </h4>
                <p v-html="topic.description" class="text-gray-900 text-base tracking-wide font-sans font-normal"> </p>
            
            </div>

            <div class="w-3/12 p-5 ml-3">
                <div class="flex items-center px-5 pt-5">
                    <p class="w-full text-xl tracking-wider font-sans">
                        Topic Info
                    </p>
                </div>
                <div class="flex flex-wrap items-center px-5 pt-5">
                    <p class="w-full text-sm font-sans tracking-wide mb-2">
                        Discussions: {{topic.discussions}}
                    </p>
                    <p class="w-full text-sm font-sans tracking-wide mb-2">
                        Subs: {{topic.subscribers}}
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full flex mt-4 p-2 bg-gray-100 hover:bg-teal-100" >
            <div class="w-1/3">
                <p class="text-base" v-if="!addition" > Edit Topic </p>
                <p class="text-base" v-else > Topic </p>
            </div>
            <div class="w-2/3">
                <a class="px-2 text-gray-700 hover:text-gray-900" @click="addition = true" v-if="!addition"> <Icon type="ios-add" size="30"/></a>
            </div>
        </div>
        <div class="w-full px-4 py-2" v-if="addition">
            <topic-form class="w-4/5" :topic ="topic"></topic-form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopicForm from './TopicFormComponent'

export default {
    components: {
        'topic-form': TopicForm,
    },
    computed:{
        ...mapGetters('TopicModule', ['topics']),

        topic(){
            const top = this.topics.filter((t)=>{
                return t.id === this.topicId
            })

            return top[0]
        },
    },
    data() {
        return {
            topicId: this.$route.params.id,
            addition: false,
        }
    },
}
</script>