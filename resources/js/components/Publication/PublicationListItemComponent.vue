<template>
    <div class="w-1/4 ">
        <div class="h-64 overflow-hidden shadow-lg m-1 bg-white rounded-lg" @click="viewPub(publication.id)">
            <div class="border border-white rounded-sm p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-xs text-gray-600 flex publications-center mb-1">
                        {{publication.publisher}}
                    </p>
                    <div class="text-gray-900 font-medium text-base mb-2 font-serif">{{publication.title | truncate(30)}}</div>
                    <p class="text-gray-700 font-sans text-sm">{{publication.abstract | truncate(50)}}</p>
                </div>
                <div class="flex publications-center">
                    <img class="w-10 h-10 rounded-full mr-4" src="/images/publications.svg" alt="Avatar of Jonathan Reinink">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none mb-1 text-xs font-semibold tracking-wider">{{publication.author}}</p>
                        <p class="text-gray-600 text-xs font-medium tracking-tight">{{publication.created_at}}</p>
                    </div>
                </div>
                <ul class="w-full mt-5 flex">
                    <li class="mr-5">
                        <Icon type="ios-eye-outline" size="18"/><span class="ml-1 font-semibold">{{publication.views}}</span>
                    </li>
                    <li class="mr-5">
                        <Icon type="ios-download-outline" size="18"/><span class="ml-1 font-semibold">{{publication.downloads}}</span>
                    </li>
                    <li class="mr-5">
                        <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="downloadPub(publication)"> Download</a>
                    </li>
                </ul>
            </div>
        </div>         
    </div>
</template>

<script>
export default {
    props: ['publication'],
    data(){
        return{

        }
    },
    methods: {
        // make Application
        viewPub(id){
            this.$router.push({name: 'publicationview', params: {id}})
        },
        // Download publication
        downloadPub(item){
            // item
            const id = item.id
            const title = item.title
            axios({
                method: 'get',
                url:'api/publication/download/'+id,
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