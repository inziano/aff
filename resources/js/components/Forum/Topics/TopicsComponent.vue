<template>
    <div class="w-full p-4 h-auto">
        <div class="w-full">
            <topic-list-item :topics = topics :isAdmin = isAdmin :user = current_user v-on:showTopicThread ="showTopic($event)" v-on:editTopic ="editTopic($event)" ></topic-list-item>
        </div> 
        <div class="w-full m-2 p-2 flex justify-center" v-if="meta">
            <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TopicListItem from './TopicListItemComponent'
import Pagination from '../../Widgets/PaginationComponent'

export default {
    components:{
        'topic-list-item': TopicListItem,
        'pagination': Pagination,
    },
    data(){
        return {
            moduleName: 'ForumModule',
        }
    },
    computed:{
        ...mapGetters('AuthModule',['current_user', 'isAdmin']),
        ...mapGetters('TopicModule',['topics','meta','links']),
    },
    methods: {
        showTopic(title){
            this.$emit('showTopicThread', title)
        },

        editTopic(topic){
            this.$emit('editTopic', topic)
        },
    }
}
</script>