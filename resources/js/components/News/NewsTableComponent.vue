<template>
    <div>
        <Table stripe ref="selection" :columns="newsArticles" :data="news"  @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList"></Table>
        <Button class="mt-3" type="success" @click="publishArticle">Publish</Button>
    </div>
</template>

<script>
export default {
    props: ['news'],
    data(){
        return{
            newsArticles: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'ID',
                    width: 60,
                    key: 'id'
                },
                {
                    title: 'Title',
                    width: 1000,
                    key: 'title'
                },
                {
                    title: 'Posted',
                    key: 'created_at'
                },
                {
                    title: 'Published',
                    key: 'published'
                }
            ],
        }
    }
}
</script>