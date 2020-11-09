<template>
    <Table height="200" :columns="vacancyColumns" :data="vacancies"></Table>
</template>

<script>
export default {
    props: ['vacancies'],
    data(){
        return {
            vacancyColumns: [
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Positions',
                    key: 'positions'
                },
                {
                    title: 'Location',
                    key: 'location'
                },
                {
                    title: 'Deadline',
                    key: 'deadline'
                },
            ],
        }
    }
}
</script>