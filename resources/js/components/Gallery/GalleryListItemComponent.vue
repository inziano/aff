<template>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src=path  alt="">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{image.title}}</div>
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