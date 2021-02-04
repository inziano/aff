<template>
    <div class="w-full bg-gray-100 min-h-full px-2 py-5">
        <div v-if="threads.length > 0" class="flex flex-wrap">
            <div class="w-full flex flex-col sm:flex-row items-center justify-between py-3 border-b-2 border-gray-200">
                <div class="flex items-center space-x-4">
                <Avatar v-if="recipientDets.firstname" size="large" style="background-color: teal"> {{recipientDets.firstname.slice(0,1)}}{{recipientDets.lastname.slice(0,1)}}</Avatar>
                <Avatar size="large" style="background-color: teal" v-else> -- </Avatar>                    
                <div class="flex flex-col leading-tight">
                        <div class="text-xl mt-1 flex items-center">
                        <span class="text-gray-700 mr-3">{{ recipientDets.firstname }} {{recipientDets.lastname}}</span>
                        <span class="text-green-500">
                            <svg width="10" height="10">
                            <circle cx="5" cy="5" r="5" fill="currentColor" />
                            </svg>
                        </span>
                        </div>
                        <span class="text-base text-gray-600"> {{ recipientDets.title }}</span>
                    </div>
                </div>
            </div>

            <div class="w-full overflow-auto" style="max-height: 50vh">
                <div class="m-2 px-4 py-2 rounded-lg clearfix w-3/5 text-xs" :class="t.sender.user_id == user.id ? 'float-right rounded-br-none bg-teal-600 text-white' : 'float-left rounded-bl-none bg-gray-300 text-gray-600' " v-for="t in threads" :key="t.id">
                    <span> {{ t.content }} </span>
                </div>
            </div>

            <div class="w-full mt-4">
                <message-form :user = user :recipient = recipient > </message-form>
            </div> 
        </div>
        <div v-else>
            <div class="flex flex-wrap content-center justify-center ">
                <img class="h-56 w-full mb-4" src="images/messages.svg">
                <p class="text-sm font-medium font-sans text-gray-700 mx-2">
                    Start a new conversation
                </p>
            </div>
        </div>
       
    </div>
   
</template>

<script>
import MessageForm from '../MessageFormComponent'

export default {
    props: ['threads', 'user'],
    components: {
        'message-form': MessageForm
    },
    computed: {
        recipient(){

            const id = this.user.id
            // Get the first message
            // Assuming that the conversation is only between two people i.e current user and the other guy
            const single = this.threads.slice(-1).pop()

            // Return the id
            let set = single.recipient.id === id ? single.sender.user_id : single.recipient.user_id 

            return set
        },
        recipientDets(){
            
            const id = this.user.id
            // Get the first message
            // Assuming that the conversation is only between two people i.e current user and the other guy
            const single = this.threads.slice(-1).pop()

            // Return the id
            let set = single.recipient.id === id ? single.sender : single.recipient

            return set
        },
    },
    components: {
        'message-form': MessageForm,
    },
}
</script>