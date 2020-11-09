<template>
    <div class="shadow-sm p-2 m-1 bg-white">
        <p class="mb-2 font-sans font-medium tracking-wide text-l"> {{title}} </p>
        <slot></slot>
    </div>
</template>

<script>

import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick)

export default {
    props: {
        title: {type: String}
    }
}
</script>