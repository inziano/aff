<template>
    <div>
       <li @click="viewArticle(article.id)" class="w-full list-none " style="min-height: 400px; background-color: teal; background-image: url(article.image_url) no-repeat">
            <div class="relative w-full opacity-50 bg-black p-5" style="min-height: 400px;">
                <p class="relative ml-20 mt-10 text-3xl font-thin subpixel-antialiased text-white capitalize" style="top: 30%">
                    {{article.title}}
                </p>
                <div class="ml-20 w-2/3 text-xl font-hairline text-white" v-html="$options.filters.truncate(article.body)"></div>
                <p class="ml-20 mt-4 w-2/3 text-sm font-medium text-white">
                    {{ article.created_at | moment("from")}}
                </p>
            </div>
        </li> 
    </div>
</template>

<script>
export default {
    props: ['article'],
    methods: {
        // View article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
        },
    }
}
</script>