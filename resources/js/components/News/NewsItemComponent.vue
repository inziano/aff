<template>
    <div>
       <li @click="viewArticle(article.id, article.title)" class="w-full list-none " style="min-height: 400px; background-color: teal;" :style="{'background-image': `url(${article.image_url})`}">
            <div class="relative w-full bg-opacity-50 bg-black p-5" style="min-height: 400px;">
                <p class="relative ml-20 mt-10 text-3xl font-thin subpixel-antialiased text-white capitalize cursor-pointer" style="top: 30%">
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
        viewArticle(id, title){
            this.$router.push({name: 'article', params:{id, title}})
        },
    }
}
</script>