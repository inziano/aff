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
        <img class="h-48 w-full mb-4" src="images/certification.svg">
        <p class="font-light text-gray-600">
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
          return this.mem.image !== null ? this.mem.image : 'images/landing.jpg'
    },
    recipientDets() {
      let self = this
      let set = Array.from( new Set( this.threads.map((e) => e.sender.user_id !== self.user.id ? e.sender.user_id : e.recipient.user_id )))
      return set[0]
    },
  },
  methods: {
    ...mapActions("UserModule", ["fetchMember"]),
  },
  watch: {
    recipientDets() {
      this.fetchMember( this.recipientDets)
    }
  },
}
</script>