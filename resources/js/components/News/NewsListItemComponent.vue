<template>
    <div class="">
        <div class="relative bg-white m-1 border-darken-4 shadow-lg rounded-lg" @click="viewArticle(article.id)" style="min-height: 40vh">
            <div class="w-full absolute" style="height: 60%; background: url(https://picsum.photos/1000/400)">
            </div>
            <div class="absolute" style="bottom: 0">
                <p class="m-1 w-full text-lg font-semibold text-gray-800 pl-3 pt-2">
                    {{article.title | truncate(20)}}
                </p>
                <div v-html="$options.filters.truncate(article.body)" class="m-1 w-full text-gray-800 pl-3"></div>
                <p class="pl-3 pt-2 m-1 w-2/3 text-xs font-medium text-gray-800">
                    {{ article.created_at | moment("from")}}
                </p>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    props: ['article'],
    data(){
        return{

        }
    },
    methods: {
        // View article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
        },
    }
}
</script>