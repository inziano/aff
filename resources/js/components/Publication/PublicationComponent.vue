<template>
    <div class="w-full h-full">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            publication: null,
        }
    },
    computed:{
        currentUser(){
            return this.$store.state.current_user
        }
    },
    methods: {
        onSubmit(){
            // disable submit button
            this.loading = true
            // data
            let data = this.pubForm

            data['user_id'] = this.currentUser.id

            let formdata = new FormData()

            // Loop through data and append to formdata
            Object.keys(data).forEach( key=> formdata.append(key, data[key]))
            // Append files
            formdata.append('publication', this.publication)
            // Push to db
            axios({
                method: 'post',
                url: 'api/publication',
                data: formdata
            }).then( (response)=>{
                // Show notice
                this.$Notice.success({
                    title: 'Success',
                    desc: 'Your publication has been submitted succesfully'
                })
                // Loading
                this.loading = false
            }).catch( (error)=>{
                // Loading
                this.loading = false
                // Notice
                this.$Notice.error({
                    title: 'Error',
                    desc: 'Error in submitting your publication'
                })
            })
        },
        publicationUpload(file){
            this.publication = file
            return false
        }
    }
}
</script>