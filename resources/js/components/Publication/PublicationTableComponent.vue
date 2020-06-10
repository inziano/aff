<template>
    <div>
        <Table stripe ref="selection" :columns="columns" :data="publications"></Table>
    </div>
</template>

<script>
export default {
    props: ['publications'],
    data(){
        return{
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Author',
                    key: 'author'
                },
                {
                    title: 'Downloads',
                    key: 'downloads'
                },
                {
                    title: 'Views',
                    key: 'views'
                }
            ]
        }
    }
}
</script>