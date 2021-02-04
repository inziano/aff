<template>
    <div class="w-full h-full">
        <navigation :user = currentUser :notifs = notifications @logout="logout"></navigation>
        
        <div class="w-full min-h-screen bg-white">
            <router-view class="relative" style="min-height: 100vh"></router-view>
        </div>
        <!-- component -->
       <footer-bar></footer-bar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavigationComponent from './NavigationComponent'
import FooterComponent from './FooterComponent'
export default {
    components:{
       'navigation': NavigationComponent,
       'footer-bar': FooterComponent,
    },
    computed: {
        ...mapGetters('AuthModule', ['current_user']),
        ...mapGetters('UserModule', ['notifications']),
        
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
        this.fetchNews(),
        this.fetchEvents(),
        this.fetchMembers({'criteria': 'status', 'term': 'Member' }),
        this.fetchAnalytics(),
        this.fetchImages()
    },
    methods: {
        // Map actions 
        ...mapActions('AuthModule',{logoutUser: 'logout'}),
        ...mapActions('UserModule', { fetchMembers: 'filter'}),
        ...mapActions('PublicationModule', { fetchPublications : 'fetch' }),
        ...mapActions('NewsModule', { fetchNews : 'fetch' }),
        ...mapActions('EventModule', { fetchEvents : 'fetch' }),
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