<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap p-5">
            <div class="w-full overflow-hidden p-2 m-2 bg-white flex" v-for="pub in pubData" :key="pub.id">
                <div class="w-9/12">
                    <div class="w-4/5 mb-3 flex items-baseline">
                        <div class="w-auto lg:flex-grow">
                            <li class="list-none lg:flex-grow"> 
                                <Avatar size="default" class="mx-2"> {{ pub.author.slice(0,2)}}</Avatar>
                                <p class="font-sans font-medium tracking-wide text-gray-600 text-lg">{{pub.author}}</p>
                            </li>
                        </div>
                        <div class="w-6/24">
                            <li class="list-none">
                                <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{pub.created_at | moment("dddd, MMMM Do YYYY") }} </span>
                            </li>
                        </div>
                    </div>
                
                    <h4 class="text-gray-900 font-normal text-2xl font-sans tracking-wide mb-2">
                        {{pub.title}}
                    </h4>
                    <div class="text-gray-900 font-sans text-base"><span v-html="pub.abstract"></span></div>
                </div>
                <div class="w-3/12 p-5 ml-3">
                    <div class="flex items-center px-5 pt-5">
                        <p class="w-full text-xl tracking-wider font-sans">
                            Publication Info
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center px-5 pt-5">
                        <p class="w-full text-sm font-sans tracking-wide mb-2">
                            Views: {{pub.views}}
                        </p>
                        <Button type="">
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            pubId: this.$route.params.id,
            pubData: '',
        }
    },

    mounted(){
        const id = this.pubId
         // add views       
        axios.all([
            axios.get('api/publication/'+id)
        ]).then( axios.spread((pub)=>{
            // 
            this.pubData = pub.data.data
        })).catch((error)=>{
            this.$Notice.info({
                title: 'Error',
                desc: error
            })
        })
    }
    
}
</script>