<template>
    <div class="p-2 ml-3">
        <Icon type="ios-search-outline" size="18"/>
        <input v-on:keyup.enter="search" v-model="term" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
    </div>
</template>

<script>
export default {
    props: {
        moduleName: { type: String },
    },
    data(){
        return {
            term: ''
        }
    },
    methods: {
        search(term){
            // Emit
            this.$emit('items-filtered')
            
            let self = this
            let m = self.moduleName
            // Filter
            let filter = {
                criteria: 'search',
                term: this.term
            }
            this.$store.dispatch(`${m}/filter`, filter)
        }
    }
}
</script>