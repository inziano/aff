<template>
    <div class="flex flex-wrap bg-white">
        <div class="w-full h-16">
            <p class="font-serif font-medium text-gray-700 p-2 tracking-wide text-base">
                Member Statistics
            </p>
        </div>
        <div class="w-1/2">
            <chart :title="adm">
                <column-chart :data= 'admissions'></column-chart>
            </chart>
        </div>
        <div class="w-1/2">
            <chart :title="org">
                <pie-chart :donut="true" :legend="false" :data="countries"></pie-chart>
            </chart>
        </div>
        <div class="w-full">
            <chart :title="ctry">
                <geo-chart width="95vw" height="600px" :data="countries" :colors="['#00FF00']"></geo-chart>    
            </chart>
        </div>
       
       
    </div>
</template>

<script>

import Chart from './UserCharts/ChartComponent'

export default {
    props: ['stats'],
    components: {
        'chart': Chart
    },
    computed:{
        countries(){
            let t = {}
            let c = this.stats.countries
            let m = c.forEach(element => {
                t[element.citizenship] = element.total
            })

            return t
        },
        admissions(){
            let t = {}
            let a = this.stats.admissions
            let m = a.forEach(element=> {
                t[element.year] = element.total
            })

            return t
        }
    },
    data(){
        return {
        }
    },

}
</script>