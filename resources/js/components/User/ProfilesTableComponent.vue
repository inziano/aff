<template>
    <div class="flex flex-wrap">
        <div class="w-full flex bg-white h-16">
            <div class="flex-grow"></div>
            <div class="pr-8 pt-4" v-if="isAdmin">
                <Dropdown trigger="click" class="m-2" style="" @on-click="action($event)">
                    <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                        <Icon type="ios-contacts" :size = 16 />
                        <span class="capitalize"> Status </span>
                    </a>
                    <DropdownMenu slot="list" style="min-height: 30px;" >
                        <DropdownItem name="app"> Applicants </DropdownItem>
                        <DropdownItem name="mem"> Members </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" class="m-2" style="" @on-click="action($event)">
                    <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                        <Icon type="ios-checkmark" :size = 16 />
                        <span class="capitalize"> Approve </span>
                    </a>
                    <DropdownMenu slot="list" style="min-height: 30px;" >
                        <DropdownItem name="approve"> Accept </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" class="m-2" style="" @on-click="action($event)">
                    <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                        <Icon type="ios-options" :size= 16 />
                        <span class="capitalize"> Actions </span>
                    </a>
                    <DropdownMenu slot="list" style="min-height: 30px;" >
                        <DropdownItem name="remove"> Delete </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" class="m-2" style="" @on-click="action($event)">
                    <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                        <Icon type="ios-paper-outline" :size = 16 />
                        <span class="capitalize"> Export </span>
                    </a>
                    <DropdownMenu slot="list" style="min-height: 30px;" >
                        <DropdownItem name="csv"> CSV </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                
            </div>
        </div>

        <div class="w-full">
            <Table height="" stripe ref="selection" :columns="member" :data="members" @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList">
                <template slot-scope="{ row, index }" slot="action">
                    <Dropdown trigger="click" class="m-2 text-left" @on-click="action($event, row.id)">
                        <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                            <Icon type="ios-more" :size= 24 />
                        </a>
                        <DropdownMenu slot="list" style="min-height: 30px;" v-if="isAdmin">
                            <DropdownItem name="admin"> Make Admin </DropdownItem>
                            <DropdownItem name="approve"> Approve </DropdownItem>
                            <DropdownItem name="remove"> Delete </DropdownItem>
                        </DropdownMenu>
                        <DropdownMenu slot="list" style="height: 30px;" v-else>
                            <DropdownItem > View </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <!-- <Button size="small" @click="remove(index)"><Icon type="ios-trash" size="20"/></Button> -->
                </template>
            </Table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: ['members'],
    data(){
        return{
            updateList: [],
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
                    title: 'Names',
                    render:  (h, params) => {
                        return h('div', [
                            h('span', ' '+params.row.bio.surname +' '+params.row.bio.firstname +' ' +params.row.bio.lastname)
                        ]);
                    },
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
                {
                    title: '',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
        }
    },
    computed: {
        ...mapGetters('AuthModule', ['isAdmin'])
    },
    methods: {
        ...mapActions('UserModule',['update', 'filter', 'approve']),
        // Make member
        makeMember(i = 0){
            let id = i !== 0 ? i : this.updateList
            let formdata = {
                id: id,
                status: 'member'
            }
            // Approve Member
            this.approve( formdata ).then((response)=>{
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
        // Update member
        makeAdmin(i = 0){
            let id = i 
            let data = {
                role: 1
            }
            // Update
            this.update({id, data}).then(()=>{
                this.$Notice.info({
                    title: 'Success'
                })
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Unsuccesful'
                })
            })

        },

        // Re-fetch members
        refetch({criteria, term}){
            this.filter({criteria, term}).then( (response)=>{
                // return okay
            }).catch((error)=>{
                // fail gracefully
            })
        },

        // Action
        action(e, i){
            switch (e) {
                case 'admin':
                    this.makeAdmin(i)
                    break;
                case 'approve':
                    this.makeMember(i)
                    break;
                case 'csv':
                    this.downloadCSV()
                    break;
                case 'remove':
                    this.deleteUser(i)
                    break;
                case 'app':
                    this.refetch({'criteria': 'status', 'term': 'Applicant'})
                    break;
                case 'mem':
                    this.refetch({'criteria': 'status', 'term': 'Member'})
                    break;
            
                default:
                    break;
            }
        },
        // Select and update status
        addToList (val) {
            const id = val.map((resp)=>{
                return resp.id
            })
           this.updateList = id
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
    }
}
</script>