<template>
    <Dropdown trigger="click" style="" @on-click="filter( filterType , $event)">
        <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
            <slot></slot>
            <span class="capitalize"> {{filterType }} </span>
        </a>
        <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
            <DropdownItem v-for="(item,index) in filterItems" :key="index" :name="item" >{{item}}</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
export default {
    props: {
        moduleName: { type: String },
        filterType: { type: String },
        filterItems: { type: Array }
    },
    methods: {
        filter(filter, term){
            // Emit
            this.$emit('items-filtered')

            let self = this
            let m = self.moduleName
            // Filter
            let filters = {
                criteria: filter,
                term: term
            }
            this.$store.dispatch(`${m}/filter`, filters )
        }
    }
}
</script>