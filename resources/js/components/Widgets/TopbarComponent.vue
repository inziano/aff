<template>
    <div class="w-full flex bg-white">
        <div class="sm:w-1/5 md:1/5 w-1/6 h-10 border-r border-gray-400">
            <p class="font-medium font-serif text-3xl tracking-wide">
                {{ title }}
            </p> 
        </div>
        <div class="w-5/6 flex content-center">
            <!-- Search component -->
            <slot name="searchField"></slot>
            <!-- <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search> -->
            <div class="flex-grow content-center h-full p-2">
                <slot name="flt-a"></slot>
                <slot name="flt-b"></slot>
                <slot name="flt-c"></slot>
                <slot name="flt-d"></slot>
            </div>
            <div class="w-2/24 content-center h-full p-2">
               <slot name="modalb"></slot>
            </div>  
        </div>
    </div>
</template>

<script>

export default {
    props: {
        moduleName: { type: String },
        title: { type: String }
    },
}
</script>