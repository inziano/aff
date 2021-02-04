<template>
    <div class="w-full">
        <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div class="relative flex">
                <input v-model="messageForm.content" type="text" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200  py-3" placeholder="Write Something" @keypress.enter="onSubmit">
                <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                    <button type="button" class=" inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-white bg-gray-200 hover:bg-teal-400 focus:outline-none"@click="onSubmit">
                    <svg class="h-6 w-6 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['user', 'recipient'],
    data(){
        return {
            messageForm: {
                content: ''
            },
            loading: false,
        }
    },
    methods: {
      ...mapActions('MessageModule',['create']),
        // Submit
        onSubmit(){
            // 
            let data = this.messageForm
            data['sender'] = this.user.id
            data['recipient'] = this.recipient
            // Push message
            this.create(data).then( (response)=>{
                // Notice
                this.$Notice.success({
                    title: 'Message Sent',
                    desc: 'Your message has been delivered'
                })
                this.loading = false
                this.messageForm.content = ''
            }).catch((error)=>{
                this.loading = false
                this.$Notice.error({
                    title: 'Message not sent',
                    desc: 'Your message could not be delivered'
                })
            })
        },

    }
}
</script>