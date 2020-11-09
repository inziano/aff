<template>
    <div>
        <Page v-model = "curr" :total = "total" :page-size = "size" @on-change="pageChange"  />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: { 
        moduleName: { type: String },
        curr: { type: Number },
        next: { type: Number },
        prev: { type: Number },
        last: { type: Number },
        total: { type: Number },
        size: { type: Number }
    },
    methods: {
        // ...mapActions(`${this.moduleName}`,['fetch']),
        // on change
        pageChange(p){
            let self = this
            let m = self.moduleName
            this.$store.dispatch(`${m}/fetch`, p)
        }
    }
}
</script>