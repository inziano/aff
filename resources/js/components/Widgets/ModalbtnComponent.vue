<template>
    <Button icon="ios-add" @click="clicked">
        <slot> New </slot>
    </Button>
</template>

<script>
export default {
    methods: {
        clicked(){
           this.$emit('modalbtn-clicked')
        }
    }
}
</script>