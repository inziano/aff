<template>
    <div>
        <div v-for="vacancy in vacancy" :key="vacancy.id" class="w-2/3 mx-auto pt-5 pl-5">
            <p class="text-4xl font-serif"> {{vacancy.title}}</p>
            <p class="text-gray-600 text-sm tracking-wide font-semibold mb-6">
                <Icon type="ios-pin" /><span>{{vacancy.location}}</span> 
            </p>
            <p class="font-normal tracking-wide font-sans text-lg" v-html="vacancy.description"></p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['vacancy'],
}
</script>