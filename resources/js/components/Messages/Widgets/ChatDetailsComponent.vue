<template>
  <div>
    <div class="w-full h-full p-3 bg-white" v-if="threads.length > 0">
      <div class="flex flex-col items-center mt-6">
        <img class="w-24 h-24 rounded-full" :src = path alt=""/>
        <span class="text-2xl mt-1 text-gray-700">{{ mem.bio.firstname }} {{ mem.bio.lastname}}</span>
        <span class="text-lg text-gray-600">{{ mem.bio.title }}</span>
        
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
import { mapActions, mapState } from "vuex";
export default {
  props: ['threads', 'user'],

  mounted(){
    this.fetchMember( this.recipientDets )
  },

  computed: {
    ...mapState('UserModule', ["member"]),
    mem(){
      return this.member.data[0]
    },
    path(){
      if ( typeof this.mem !== 'undefined') {
         return this.mem.image !== null ? this.mem.image : 'images/avatar.svg'
      } else {
        return 'images/avatar.svg'
      }
       
    },
    recipientDets() {
      let seti 

      const uid = typeof this.user.id != 'undefined' ? this.user.id : " 1"
      // Get the first message

      // Assuming that the conversation is only between two people i.e current user and the other guy
      const single = typeof this.threads != 'undefined' ? this.threads.slice(-1).pop() : { }
      
      // Return the id
      if ( typeof single != 'undefined') {
        seti = single.recipient.id === uid ? single.sender.user_id : single.recipient.user_id
      } else {
        seti = 1
      }

      // return set     
      return seti
    },
  },
  methods: {
    ...mapActions("UserModule", ["fetchMember"]),
  },
  watch: {
    recipientDets: {
      deep: true,
      handler( newval ) {
        this.fetchMember( newval )
      }
      
    }
  },
}
</script>