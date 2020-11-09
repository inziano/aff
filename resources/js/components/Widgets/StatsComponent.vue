<template>
    <div class="m-2 flex flex-wrap">
        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
            {{ figure }}
        </p>
        <p class="capitalize text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
            {{ title }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        figure: { type: Number },
        title: { type: String }
    }
}
</script>

