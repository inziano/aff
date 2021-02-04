<template>
    <div class="w-full flex flex-wrap py-4 px-2 justify-center">
        <div class="m-1 h-auto md:h-72 w-full md:w-1/2 lg:w-1/4" v-for="publication in publications" :key="publication.id">
            <div class="h-full px-4 py-4 overflow-hidden shadow-lg bg-white rounded"  >
                <div class="border border-white rounded-sm p-2 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <div @click="viewPub(publication.id, publication.title)" class="font-medium font-sans text-gray-700 mb-2 cursor-pointer">{{publication.title | truncate(100)}}</div>
                        <p class="text-xs text-gray-500"> <span :inner-html.prop="publication.abstract | truncate(100)"></span></p>
                    </div>
                    <div class="flex publications-center">
                        <img class="w-10 h-10 rounded-full mr-4" src="/images/publications.svg" alt="Avatar">
                        <div class="text-sm">
                            <p class="font-medium font-sans text-gray-700 mb-2">{{publication.author | truncate(60)}}</p>
                            <p class="text-xs text-gray-500">{{publication.created_at}}</p>
                        </div>
                    </div>
                    <ul class="w-full mt-5 flex">
                        <li class="mr-5">
                            <Icon type="ios-eye-outline" size="18"/><span class="text-xs text-gray-500">{{publication.views}}</span>
                        </li>
                        <li class="mr-5">
                            <Icon type="ios-download-outline" size="18"/><span class="text-xs text-gray-500">{{publication.downloads}}</span>
                        </li>
                        <li class="mr-5">
                            <a class="text-xs text-gray-500" @click="downloadPub(publication)"> Download</a>
                        </li>
                        <li class="mr-5"  v-if="isAdmin">
                        <a class="text-xs text-red-700" @click="remove(publication.id)"> <Icon type="ios-trash" :size = 16 /></a>
                        </li>
                    </ul>
                </div>
            </div>         
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['publications', 'user'],
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters('AuthModule',['isAdmin']),
    },
    methods: {
        // make Application
        viewPub(id, title){
            this.$router.push({name: 'publicationview', params: {id, title}})
        },
        // Download publication
        downloadPub(item){
            // item
            const id = item.id
            const title = item.title
            axios({
                method: 'get',
                url:'api/publications/download/'+id,
                responseType: 'blob'
                
                }).then((response)=>{
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', 'file.pdf');
                    document.body.appendChild(fileLink);
                
                    fileLink.click();
                this.$Notice.success({
                    title: 'Publication downloaded'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'File could not be downloaded'
                })
            })
        }
    }
}
</script>