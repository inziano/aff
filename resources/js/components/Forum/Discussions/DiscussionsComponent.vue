<template>
    <div class="w-full p-4 h-auto">
        <div class="w-full">
            <discussion-list-item :threads = threads :user = current_user v-on:showTopicThread ="showTopic($event)" ></discussion-list-item>        
        </div>
        <div class="w-full m-2 p-2 flex justify-center" v-if="meta">
            <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DiscussionListItem from './DiscussionListItemComponent'
import Pagination from '../../Widgets/PaginationComponent'

export default {
    components:{
        'discussion-list-item': DiscussionListItem,
        'pagination': Pagination,
    },
    data(){
        return {
            moduleName: 'ThreadModule',
        }
    },
    computed:{
        ...mapGetters('AuthModule',['current_user', 'isAdmin']),
        ...mapGetters('ThreadModule',['threads','meta','links']),
    },
    methods: {
        showTopic(title){
            this.$emit('showTopicThread', title)
        },
    }
}
</script>