<template>
    <div>
        <div class="h-auto overflow-hidden shadow-sm p-2 m-1 bg-white">
            <div class="w-full text-center mb-3 pt-2">
                <Avatar :style="{background: '#0A8754'}"> {{member.bio.firstname.slice(0,1)}}{{member.bio.lastname.slice(0,1)}} </Avatar>
                <p class="text-base font-medium text-gray-600"> {{member.bio.firstname}} {{member.bio.lastname}}</p>
                <p class="text-xs font-medium mt-2 text-gray-600"> {{member.bio.title}}</p>
                <p class="text-xs font-medium mt-2 text-gray-600"> {{member.bio.citizenship}}</p>
                <p class="text-xs font-medium mt-2 text-gray-600"> {{member.email}}</p>
                <p class="text-sm font-medium tracking-wide mt-1 text-gray-600"> {{member.status}} </p>
            </div>
            <ul class="flex justify-center w-2/3 mx-auto mb-4">
                <li class="mx-auto">
                    <Icon type="ios-chatboxes" size="20"/>
                </li>
                <li class="mx-auto">
                    <Icon type="ios-notifications" size="20"/>
                </li>
                <li class="mx-auto">
                    <Icon type="ios-trash" size="20"/>
                </li>
            </ul>
            <Divider></Divider>
            <div class="w-full flex p-0 pb-3 text-center">
                <div class="w-1/2">
                    <a class="text-gray-600" @click="goToDetail(member.id)" >
                        <Icon type="ios-person" size="18"/> Profile
                    </a>
                    
                </div>
                <Divider type="vertical" style="height: auto;"></Divider>
                <div class="w-1/2">
                    <a class="text-gray-600" @click="goToPub(member.id)">
                        <Icon type="ios-apps" size="18"/> Publications
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['member'],
    methods: {
         // Go
        goToDetail(id){
            this.$router.push({name: 'profile', params: {id}})
        },
        goToPub(id){
            this.$router.push({name: 'publications', params: {id}})
        }
    }
}
</script>