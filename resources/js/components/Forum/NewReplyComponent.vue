<template>
    <div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            replyForm: {
                body: ''
            },
        }
    },
    methods: {
        createReply(){
            // Dispatch
            this.$store.dispatch('createReply', data).then(()=>{
                // Created
                this.$Message.success('Replied sent')
            })
        }
    }
}
</script>