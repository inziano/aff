<template>
    <div class="w-full h-full">
        <Layout class="p-2" >
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" class="flex flex-wrap">
                <h4 class="mb-4 p-2"> All Members </h4>
                <div v-for="member in members" :key="member.id" class="w-1/4 overflow-hidden shadow-lg p-2">
                    <div class="w-full text-center mb-3">
                        <Avatar :style="{background: '#0A8754'}" size="large"> JD </Avatar>
                        <p class="text-base font-medium mt-3"> {{member.email}}</p>
                        <p class="text-xs font-hairline mt-1"> {{member.status}} </p>
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

                    <div class="w-full">
                        
                    </div>
                </div>
            </Content>
        </Layout>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            members: [],
        }
    },
    mounted() {
        // Pull all the profiles
        axios({
            method: 'get',
            url: 'api/user'
        }).then((response)=>{
            // response
            this.members = response.data.data

            console.log(response.data.data)
        }).catch((error)=>{
            // error
        })
    }
    
}
</script>