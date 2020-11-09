<template>
    <div class="w-full h-full">
        <nav class="w-full flex items-center justify-between flex-wrap p-2 bg-green-700" >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
               <!-- <object height="60" width="60" type="image/svg+xml" data="/images/icraf.svg">
               </object> -->
               <router-link  class="flex items-center flex-shrink-0 text-white mr-6 hover:text-teal-300" to="/home">
                    <img class=" w-1/4 object-contain" src="/images/afflogo.png">
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
                    <router-link to="/news" class="inline-block text-sm px-4 py-2 leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">News Feed</router-link>
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
                            <Avatar v-if="currentUser.username"> {{currentUser.username.slice(0,1) }}</Avatar>
                            <Avatar v-else> -- </Avatar>
                            <span class="inline-block text-sm leading-none text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"> {{currentUser.username}} </span>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>
                                <router-link :to="{name: 'profile', params: {id: currentUser.id}}" class="inline-block text-sm px-4 py-2 leading-none text-gray-900  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0">Settings</router-link>
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
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('AuthModule', ['current_user']),
        
        currentUser(){
            // 
            const user = this.current_user

            // If user is empty return null
            return Object.keys(user).length === 0 ? null : user
        }
    },
    created(){
        // fetch news and publications
        this.fetchPublications(),
        this.fetchVacancies(),
        this.fetchNews(),
        this.fetchEvents(),
        this.fetchMembers(),
        this.fetchAnalytics(),
        this.fetchImages()
    },
    methods: {
        // Map actions 
        ...mapActions('AuthModule',{logoutUser: 'logout'}),
        ...mapActions('UserModule', { fetchMembers: 'fetch'}),
        ...mapActions('PublicationModule', { fetchPublications : 'fetch' }),
        ...mapActions('NewsModule', { fetchNews : 'fetch' }),
        ...mapActions('EventModule', { fetchEvents : 'fetch' }),
        ...mapActions('VacancyModule', { fetchVacancies : 'fetch' }),
        ...mapActions('AnalyticsModule', { fetchAnalytics : 'fetch' }),
        ...mapActions('GalleryModule', { fetchImages : 'fetch' }),

        logout(){
            this.logoutUser()
            // Current user
            this.currentUser
            // redirect to dashboard
            setTimeout(()=> this.$router.push({path: '/login' }), 1000)
        }
    }
    
}
</script>