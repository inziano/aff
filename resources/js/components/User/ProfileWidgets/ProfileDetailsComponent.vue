<template>
    <div class="w-full h-auto flex">
        <div class="w-3/5 pt-0">
            <div class="w-full">
                    <div class="w-full overflow-hidden p-2 m-2">
                        <div class="w-full flex my-4 p-2 bg-gray-100" >
                            <div class="w-1/3">
                                <p class="text-base"> Summary </p>
                            </div>
                        </div>
                        <div class="px-4" v-if="user.summary">
                            <span v-html="user.summary"></span>
                        </div>
                        <div v-else>
                            <div class="flex flex-wrap content-center justify-center ">
                                <img class="h-48 w-full mb-4" :src=base>
                                <p class="font-light text-gray-600">
                                   Tell us more about yourself
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="w-full overflow-hidden p-2 m-2 ">
                        <div class="w-full flex my-4 p-2 bg-gray-100" >
                            <div class="w-1/3">
                                <p class="text-base"> Education </p>
                            </div>
                        </div>
                        <div v-if="education.length !== 0" class="px-4">
                            <div class="pt-5 border-b border-dotted border-gray-700" v-for="edu in education" :key="edu.key">
                                <p class="text-base font-medium text-gray-600 tracking-wider">{{edu.institution}}</p>
                                <p class="text-sm font-medium text-gray-700 tracking-widest">{{edu.degree}}</p>
                                <p class="text-xs font-sans mb-2"> {{edu.startdate}} - {{edu.enddate}}</p>
                                <p class="text-sm tracking-wider mb-2">
                                    {{edu.description}}
                                </p>
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex flex-wrap content-center justify-center ">
                                <img class="h-48 w-full mb-4" :src=base>
                                <p class="font-light text-gray-600">
                                    Tell us about your education background
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="w-2/5 pt-0 px-4">
            <div class="w-full">
                <div class="w-full overflow-hidden p-2 m-2">
                    <div class="w-full flex my-4 p-2 bg-gray-100" >
                        <div class="w-1/3">
                            <p class="text-base"> Work </p>
                        </div>
                    </div>
                    <div class="px-4" v-if="work.length !== 0">
                        <Timeline>
                            <TimelineItem v-for="work in work" :key="work.id">
                                <p class="text-gray-600">
                                    <span class=" tracking-tight text-xs"> {{work.startdate}} </span> 
                                    -
                                    <span class="tracking-tight text-xs"> {{work.enddate}} </span> 
                                </p>
                                <p class="text-gray-600 text-xs">{{work.country}}</p>
                                <p class="text-sm font-bold tracking-wide text-gray-600">{{work.institution}}</p>
                                <p class="content text-sm">{{work.description}}</p>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div v-else>
                        <div class="flex flex-wrap content-center justify-center">
                            <img class="h-48 w-full mb-4" :src=base >
                            <p class="font-light text-gray-600">
                               Tell us about your work experience
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user','education','work'],
    computed: {
        base(){
            return process.env.MIX_APP_URL + "/images/certification.svg"
        }
    },
}
</script>