<template>
    <div class="bg-gray-100 p-4">
        <div class="bg-white border rounded-sm max-w-md">
            <img :src=path  alt=""/>
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
                <div class="flex items-center px-4 py-3">
                    <img class="h-8 w-8 rounded-full" :src=path  alt=""/>
                    <div class="ml-3 ">
                        <span class="text-sm font-semibold antialiased block leading-tight">{{image.title}}</span>
                        <span class="text-gray-600 text-xs block"></span>
                    </div>
                </div>
            </div>
            <div class="text-xs mx-4 mt-2 mb-4">{{image.date | moment("from")}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['image','user'],
    computed:{
        ...mapGetters('GalleryModule',['isAdmin']),
        path(){
            return this.image.img
        }
    }
}
</script>