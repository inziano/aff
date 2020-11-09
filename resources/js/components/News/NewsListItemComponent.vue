<template>
    <div class="">
        <div class="relative bg-white m-1 border-darken-4 shadow-lg rounded-lg" @click="viewArticle(article.id)" style="min-height: 40vh">
            <div class="w-full absolute" style="height: 60%; background-color: teal; background-image: url(article.image_url)"> </div>
            <div class="absolute" style="bottom: 10px">
                <p class="m-1 w-full text-sm font-normal text-gray-800 pl-3">
                    {{article.title | truncate(100)}}
                </p>
                <ul class="w-full flex pl-3">
                    <li class="pl-2 list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500">
                        Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{ article.created_at | moment("from")}}</span>
                    </li>
                    <li class="pl-2 list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500" v-if="isAdmin">
                        <a class="text-xs tracking-wide font-medium text-red-700" @click="remove(news.id)"> <Icon type="ios-trash" :size = 16 /></a>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['article'],
    computed: {
        ...mapGetters('AuthModule',['isAdmin'])
    },
    data(){
        return{

        }
    },
    methods: {
        // View article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
        },

        // remove
        remove(id){
        }
    }
}
</script>