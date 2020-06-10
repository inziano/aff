<template>
    <div>
        <Table height="" stripe ref="selection" :columns="member" :data="members" @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList"></Table>
        <Button class="mt-3" type="success" @click="makeMember" v-if="updateList.length != '0'">Make Member</Button>
    </div>
</template>

<script>
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
        }
    },
    methods: {
        // Make member
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
    }
}
</script>