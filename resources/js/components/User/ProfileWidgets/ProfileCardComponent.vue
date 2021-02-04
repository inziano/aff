<template>
    <div class="w-full">
        <div class="bg-white py-4">
            <img class="h-20 w-20 rounded-full mx-auto" :src=path >
            <div class="mt-5 text-center">
                <h2 class="text-lg">
                    <span  v-if="user.firstname !== null"> {{user.firstname}} </span>
                    <span  v-if="user.lasttname !== null"> {{ user.lastname}} </span> 
                </h2>
                <p class="py-2 text-gray-600 text-xs">{{account.email}}</p>
                <p class="py-2 mb-4 text-gray-600 text-xs">{{user.phone}}</p>
                <p class="py-2 mb-2 text-gray-600">{{user.qualification}}</p>
                <p class="py-2 text-gray-600 text-xs">
                    <Icon type="ios-pin" /><span>{{user.residency}}</span> 
                </p>
            </div>
            <div class="w-full p-2 flex mt-4">
                <div class="w-full text-center">
                    <a class="text-xs uppercase text-gray-700 font-semibold" @click="goToPub(user.id)">
                        <span class="text-xl font-semibold text-gray-500">{{account.publications}}</span> <br>
                        Pubs
                    </a>
                </div>
            </div>
            <div class="mt-2 text-center" v-if="account.id == user.id">
                <p class="font-normal pt-3 mt-2 text-gray-700 hover:text-green-500" @click="isEditing">
                    <span v-if="editing"> View Profile</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['user','account', 'editing'],
    computed: {
        path(){
            return this.account.image !== null ? this.account.image : process.env.MIX_APP_URL + "/images/avatar.svg"
        }
    },
    methods: {
        isEditing(){
            this.$emit('editing')
        },
        goToPub(id){
            this.$router.push({name: 'publications', params: {id}})
        },
        goToGallery(id){
            this.$router.push({name: 'gallery', params: {id}})
        },
    }
}
</script>