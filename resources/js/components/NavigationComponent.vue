<template>
    <nav class="bg-teal-600 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <router-link  class="flex items-center flex-shrink-0 text-white mr-6 hover:text-teal-300" to="/">
                            <img class=" w-10 h-10 object-contain" src="/images/afflogo.png">
                            <span class="font-semibold text-sm tracking-wider subpixel-antialiased">African Forest Forum</span>
                        </router-link> 
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-baseline space-x-2">
                        <!-- Current: "bg-teal-600 text-white", Default: "text-gray-300 hover:bg-teal-600 hover:text-white" -->
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
                    </div>
                </div>
                <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                    <div class="ml-3 relative">
                        <button @click="showNotifications = !showNotifications" class="bg-gren-600 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: bell -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                        />
                        <div v-show ="showNotifications" style="width:20rem;" class="origin-top-right absolute z-40 right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <div class="py-2">
                                <div v-if="notifications" class="px-2">
                                    <a v-for="notif in notifications" :key="notif" href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                                        <p class="text-gray-600 text-sm mx-2">
                                            <span class="font-bold" v-for="n in notif" :key="n" >{{ n.firstname }} {{ n.lastname }} </span>sent you a message
                                        </p>
                                    </a>
                                </div>
                                <div v-else class="flex flex-wrap content-center justify-center ">
                                    <img class="h-24 w-full mb-4" src="images/notifications.svg">
                                    <p class="font-light text-gray-600">
                                       No notifications
                                    </p>
                                </div>
                               
                             </div>
                        </div>
                    </div>
                    

                    <!-- Profile dropdown -->
                    <div class="ml-3 relative" v-if="currentUser !== null">
                        <div>
                            <button @click="isOpen = !isOpen" class="max-w-xs bg-teal-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <Avatar v-if="currentUser.username"> {{currentUser.username.slice(0,1) }}</Avatar>
                            <Avatar v-else> -- </Avatar>
                            </button>
                        </div>
                        <!--
                            Profile dropdown panel, show/hide based on dropdown state.

                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        -->
                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        />
                        <div v-show ="isOpen" class="origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <router-link :to="{name: 'profile', params: {id: currentUser.id}}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-100" role="menuitem">Your Profile</router-link>
                            <a  @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-100" role="menuitem">Logout</a>
                        </div>

                    </div>
                </div>
                </div>
                <div class="mr-2 flex md:hidden">
                <!-- Mobile menu button -->
                <button @click="mobilemenu = !mobilemenu " class="bg-teal-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg :class="mobilemenu ? 'hidden' : 'block'"  class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg :class="mobilemenu ? 'block' : 'hidden'"  class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>
        </div>
        <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
        -->
        <div class="md:hidden" :class="mobilemenu ? 'block' : 'hidden' ">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-teal-600 text-white", Default: "text-gray-300 hover:bg-teal-600 hover:text-white" -->
                <router-link to="/" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</router-link>
                <router-link to="/news" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">News Feed</router-link>
                <router-link to="/profiles" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Profiles</router-link>
                <router-link to="/message" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Messages</router-link>
                <router-link to="/events" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Events</router-link>
                <router-link to="/vacancies" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Vacancies</router-link>                    
                <router-link to="/publications" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Publications</router-link>
                <router-link to="/gallery" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</router-link>
                <router-link to="/forum" class="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Forum</router-link>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700" v-if="currentUser !== null">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <Avatar v-if="currentUser.username"> {{currentUser.username.slice(0,1) }}</Avatar>
                        <Avatar v-else> -- </Avatar>
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium leading-none text-white">{{currentUser.email}}</div>
                    </div>
                    <button class="ml-auto bg-teal-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                </div>
                <div class="mt-3 px-2 space-y-1">
                    <router-link :to="{name: 'profile', params: {id: currentUser.id}}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-teal-600" role="menuitem">Your Profile</router-link>
                    <a  @click="logout" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-teal-600" role="menuitem">Logout</a>
                </div>
            </div>
        </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['user', 'notifs'],
    computed: {
        currentUser(){
            if ( this.user == 'undefined') {
                return null
            } else {
                return this.user
            }
        },
        notifications(){
            if ( this.notifs == 'undefined') {
                return null
            } else {
                return Object.values(this.notifs).map( e => {
                    return e
                })
            }
        }
    },
    data(){
        return {
            isOpen:false,
            showNotifications: false,
            mobilemenu: false,
        }
    },
    methods: {
        logout(){
            this.$emit('logout')
        }
    }
}
</script>