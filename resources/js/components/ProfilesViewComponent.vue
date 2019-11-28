<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5">
            <h4 class="font-semibold text-xl mb-2"> Members </h4>
            <p class="font-hairline text-xs">
                View members
            </p>
            <br>
            <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                <div class="flex lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li>
                    
                </div>
                <div class="flex w-1/24">
                    <li v-if="!list" class="mr-3 p-2" @click="filter()">
                        <Icon type="ios-funnel-outline" size="24"/>       
                    </li>
                    <li class="mr-3 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
            <div class="w-full h-full flex p-2 bg-gray-100 justify-center" v-if="!list">
                <div v-for="member in members" :key="member.id" class="w-1/4 h-64 overflow-hidden shadow-lg p-2 m-2 bg-white rounded">
                    <div class="w-full text-center mb-3 pt-2">
                        <Avatar :style="{background: '#0A8754'}" size="large"> JD </Avatar>
                        <p class="text-base font-medium mt-3 text-gray-500"> {{member.email}}</p>
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
                        <!-- <Divider></Divider>
                        <div class="w-full flex">
                        <div class="w-3/5 pl-4">
                                <trend
                                :data="[0,0,0]"
                                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                width="180"
                                height="50"
                                auto-draw
                                smooth>
                                </trend>
                        </div>
                        <div class="w-2/5 text-center">
                                <p class="text-xs uppercase text-gray-400">
                                    <span class="text-xl font-semibold text-gray-900">0</span> <br>
                                    Pubs
                                </p>
                        </div>
                        </div> -->
                    <Divider></Divider>
                    <div class="w-full flex p-0 text-center">
                        <div class="w-1/2">
                            <a @click="goToDetail(member.id)" >
                                <Icon type="ios-person" size="24"/> Profile
                            </a>
                           
                        </div>
                        <Divider type="vertical"></Divider>
                        <div class="w-1/2">
                            <a @click="goToPub(member.id)">
                                <Icon type="ios-apps" size="24"/> Publications
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full p-2 bg-gray-100" v-if="list">
                <Table height="200" stripe ref="selection" :columns="member" :data="members" @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList"></Table>
                <Button @click="makeMember" v-if="updateList.length != '0'">Make Member</Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: false,
            updateList: [],
            members: [],
            member: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: 'Username',
                    key: 'username'
                },
                {
                    title: 'Email',
                    key: 'email'
                },
                {
                    title: 'status',
                    key: 'status',
                    filters: [
                            {
                                label: 'Member',
                                value: 1
                            },
                            {
                                label: 'Applicant',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.status === 'member';
                            } else if (value === 2) {
                                return row.status === 'applicant';
                            }
                        }
                },
            ],
            memberdata: [],
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
            // Member data
            this.memberdata = response.data
        }).catch((error)=>{
            // error
        })

        Echo.channel('members').listen('MemberApproved', (e)=>{
            this.members = e.members
            // console.log(e.replies)
        })
    },
    methods: {
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        makeMember(){
            let formdata = {
                id: this.updateList,
                status: 'member'
            }
            // push to axios
            axios({
                method:'patch',
                url: 'api/user/membership',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Members Updated',
                    desc: 'Membership updated'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Members not updated',
                    desc: 'Membership not updated'
                })
            })
        },
        // Select and update status
        addToList (val) {
            const id = val.map((resp)=>{
                return resp.id
            })
           this.updateList = id
           console.log(this.updateList)
        },
        removeFromList(val){
            const id = val.map((resp)=>{
                return resp.id
            })
            this.updateList.filter((resp)=>{
                !id.includes(resp)
            })
            console.log(id)
        },
        // Go
        goToDetail(id){
            this.$router.push({name: 'profile', params: {id}})
        },
        goToPub(id){
            this.$router.push({name: 'publication', params: {id}})
        }

    }
    
}
</script>