<template>
    <div>
        <Table height="200" :columns="eventsColumns" :data="events"></Table>
    </div>
</template>

<script>
export default {
    props: [ 'events' ],
    data(){
        return {
            eventsColumns: [
                {
                    title: 'Title',
                    key: 'name'
                },
                {
                    title: 'Description',
                    key: 'description'

                },
                {
                    title: 'Location',
                    key: 'location'
                },
                {
                    title: 'Start Date',
                    key: 'startdate'
                },
                {
                    title: 'End Date',
                    key: 'enddate'
                },
            ]
        }
    }
}
</script>