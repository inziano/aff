<template>
    <div class="w-full h-full">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="p-2 mx-auto w-4/5 flex flex-wrap content-center justify-center">
            <div class="w-2/3">
                <p class="text-4xl font-serif">
                    {{article.title}}
                </p>
                <p class=" font-medium text-sm">
                {{article.created_at | moment("Do MMMM YYYY")}}
                </p>
            </div>
            
            <div class="mt-6 w-2/3 text-lg tracking-wide font-sans font-normal" >
                <span v-html="article.body"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            articleId: this.$route.params.id,
        }
    },

    computed: {
        ...mapGetters( 'NewsModule', ['news']),

        article(){
            const art =this.news.filter( (article) =>{
                return article.id == this.articleId
            })

            return art[0]
        },

        image_url(){
            let url = 'images/landing.jpg'

            return url
        }
    }
}
</script>