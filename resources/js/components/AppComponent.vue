<template>
    <div class="w-full h-full">
        <nav class="w-full flex items-center justify-between flex-wrap p-2 bg-green-700" >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
               <!-- <object height="60" width="60" type="image/svg+xml" data="/images/icraf.svg">
               </object> -->
               <router-link  class="flex items-center flex-shrink-0 text-white mr-6 hover:text-teal-300" to="/">
                    <span class="font-semibold text-sm tracking-wider subpixel-antialiased">African Forest Forum</span>
               </router-link>
               
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <router-link to="/" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Dashboard</router-link>
                    <router-link to="/profiles" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Profiles</router-link>
                    <router-link to="/message" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Messages</router-link>
                    <router-link to="/events" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Events</router-link>
                    <router-link to="/vacancies" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Vacancies</router-link>
                    <router-link to="/publications" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Publications</router-link>
                    <router-link to="/gallery" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Gallery</router-link>
                    <router-link to="/forum" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Forum</router-link>

                </div>
                <div class="text-sm pr-4">
                    <router-link v-if="currentUser === null" to="/login" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Login</router-link>
                    <Dropdown v-if="currentUser !== null" placement="left-end">
                        <a href="javascript:void(0)" class="inline-block text-sm px-2 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">
                            <Avatar icon="ios-person" />
                            <span class="inline-block text-sm leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"> {{currentUser.username}} </span>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>
                                <router-link to="/bio" class="inline-block text-sm px-4 py-2 leading-none text-gray-900  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Settings</router-link>
                            </DropdownItem>
                            <DropdownItem>
                                <a @click="logout" class="inline-block text-sm px-4 py-2 leading-none text-gray-900  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Logout</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </nav>
        
        <div class="w-full h-full bg-white">
            <router-view class="relative"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentUser(){
            // 
            const user = this.$store.state.current_user
            // If user is empty return null
            return Object.keys(user).length ===0 ? null : user
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout')
            // Current user
            this.currentUser
            // redirect to dashboard
            setTimeout(()=> this.$router.push({path: 'login' }), 1000)
        }
    }
    
}
</script>