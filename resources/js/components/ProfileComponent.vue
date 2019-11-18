<template>
    <div class="w-full h-full">
        <Table stripe :columns="members" :data="memberdata"></Table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            members: [
                {
                    title: 'Email',
                    key: 'email'
                },
                {
                    title: 'status',
                    key: 'status'
                },
            ],
            memberdata: []
        }
    },
    mounted() {
        // Pull all users from the db - will move to the store and fetch from the store
        axios({
            method: 'get',
            url: '/api/user'
        }).then( (response)=>{
            this.memberdata = response.data
        }).catch((error)=>{
            this.$Notice.error({
                title: 'Member data unavailable'
            })
        })
    }
}
</script>