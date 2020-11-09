<template>
    <div class="w-full h-full">
        <!-- <div class="w-full h-48" :style="{'background-image': `url(${image_url})`}"></div> -->
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="p-2 mx-auto w-4/5 flex flex-wrap content-center justify-center" v-for="article in article" :key="article.id">
            <div class="w-2/3">
                <p class="text-4xl font-serif">
                    {{article.title}}
                </p>
                <p class=" font-medium text-sm">
                {{article.created_at | moment("Do MMMM YYYY")}}
                </p>
            </div>
            
            <div class="mt-6 w-2/3 text-lg tracking-wide font-sans font-normal" >
                {{article.body}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            article: '',
            articleId: this.$route.params.id,
        }
    },

    computed: {
        image_url(){
            let url = 'images/landing.jpg'

            return url
        }
    },

    mounted(){
        const id = this.articleId   
        axios({
            method: 'get',
            url: 'api/news/'+id
        }).then((response)=>{
            this.article = response.data.data
            console.log(this.article)
        }).catch((error)=>{
            console.log(error)
            this.$Notice.info({
                title: 'News',
                desc: 'No news currently'
            })
        })
    }
}
</script>