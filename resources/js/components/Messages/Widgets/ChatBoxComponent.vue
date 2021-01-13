<template>
    <div class="w-full">
        <div class="m-2 px-4 py-2 rounded-lg clearfix w-3/5 text-xs" :class="t.sender.user_id == user.id ? 'float-right rounded-br-none bg-teal-600 text-white' : 'float-left rounded-bl-none bg-gray-300 text-gray-600' " v-for="t in msg" :key="t.id">
            <span> {{ t.content }} </span>
            <!-- <img class="w-6 h-6 rounded-full"  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144" alt="My profile"> -->
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'msg', 'user']
}
</script>