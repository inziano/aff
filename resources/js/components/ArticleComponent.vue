<template>
    <div class="w-full h-full">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="p-2 mx-auto w-4/5 " v-for="article in article" :key="article.id">
        <div class="w-full h-32">
            <p class="text-2xl font-bold">
                {{article.title}}
            </p>
            <p class=" font-semibold text-sm tracking-wider">
                {{article.user.username}}
            </p>
            <p class=" font-medium text-xs">
               <span class="font-bold">Published:</span> {{article.created_at | moment("from")}}
            </p>
        </div>
          
        <div class="w-full text-lg tracking-wide font-sans font-normal" >
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