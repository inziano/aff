<template>
    <div class="w-full mx-4">
        <div class="bg-gray-100 rounded px-6" style="width: 90%">
            <div class="border-l-4 border-teal-400 -ml-6 pl-6 flex items-center justify-between my-4">
                <div class="font-semibold text-gray-800">Contact List</div>
            </div>
            <hr class="-mx-6"/>
            <div class="flex items-center justify-between my-4" v-for="contact in contacts" :key="contact.id">
                <div class="w-16">
                    <img class="w-12 h-12 rounded-full" src="https://source.unsplash.com/50x50/?nature">
                </div>
                <div class="flex-1 pl-2">
                    <div class="text-gray-700 font-semibold">
                        <a class="text-sm font-normal text-teal-600 capitalize" @click="newChat(contact.user_id)"> {{contact.firstname}} {{ contact.lastname }}</a>
                    </div>
                    <div class="text-gray-600 font-thin">
                    {{contact.email}}
                    </div>
                </div>
                <hr class="boder-b-0 my-4"/>
            </div>
        
        </div>
    </div>   
</template>

<script>
export default {
    props: ['contacts'],
    methods: {
        newChat(id) {
            this.$emit('startchat', id)
        }
    }
}
</script>