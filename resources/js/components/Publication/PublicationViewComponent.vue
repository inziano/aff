<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap p-5">
            <div class="w-full overflow-hidden p-2 m-2 bg-white flex">
                <div class="w-9/12">
                    <div class="w-4/5 mb-3 flex items-baseline">
                        <div class="w-auto lg:flex-grow">
                            <li class="list-none lg:flex-grow"> 
                                <Avatar size="default" class="mx-2"> {{ publication.author.slice(0,2)}}</Avatar>
                                <p class="font-sans font-medium tracking-wide text-gray-600 text-lg">{{publication.author}}</p>
                            </li>
                        </div>
                        <div class="w-6/24">
                            <li class="list-none">
                                <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{publication.created_at | moment("dddd, MMMM Do YYYY") }} </span>
                            </li>
                        </div>
                    </div>
                
                    <h4 class="text-gray-900 font-normal text-2xl font-sans tracking-wide mb-2">
                        {{publication.title}}
                    </h4>
                    <div class="text-gray-900 font-sans text-base"><span v-html="publication.abstract"></span></div>
                </div>
                <div class="w-3/12 p-5 ml-3">
                    <div class="flex items-center px-5 pt-5">
                        <p class="w-full text-xl tracking-wider font-sans">
                            Publication Info
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center px-5 pt-5">
                        <p class="w-full text-sm font-sans tracking-wide mb-2">
                            Views: {{publication.views}}
                        </p>
                        <Button type="">
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            pubId: this.$route.params.id,
        }
    },
    computed: {
        ...mapGetters('PublicationModule', ['publications']),

        publication(){
            const pub = this.publications.filter( (p) =>{
                return p.id == this.pubId
            })

            return pub[0]
        }
    }
    
}
</script>