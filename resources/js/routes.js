import Router from 'vue-router'


// Templates

// Lazy load all non essential components

// Auth components
const Register = () => import(/* webpackChunkName: "group-auth" */'./components/RegisterComponent')
const ResetPassword = () => import(/* webpackChunkName: "group-auth" */'./components/ResetPasswordComponent')
const UpdatePassword = () => import(/* webpackChunkName: "group-auth" */'./components/UpdatePasswordComponent')
const VerifyEmail  = () => import(/* webpackChunkName: "group-auth" */'./components/VerifyEmailComponent')

// Profile Components
const ProfileSettings = () => import(/* webpackChunkName: "group-profile" */ './components/User/ProfileSettingsComponent')
const ProfilesView = ()=> import(/* webpackChunkName: "group-profile" */'./components/User/ProfilesViewComponent')
const Invitation = () => import(/* webpackChunkName: "group-profile" */'./components/User/InvitationComponent')


// Publication Components
const PublicationsView = () => import(/* webpackChunkName: "group-publication" */'./components/Publication/PublicationsViewComponent')
const PublicationView = ()=> import(/* webpackChunkName: "group-publication" */'./components/Publication/PublicationViewComponent')

// Vacancy Components
const Vacancy = () => import(/* webpackChunkName: "group-vacancy" */'./components/Vacancy/VacancyComponent')
const VacancyApplication =() => import (/* webpackChunkName: "group-vacancy" */'./components/Vacancy/VacancyApplicationComponent')

// Forum Components
const Forum = () => import(/* webpackChunkName: "group-forum" */'./components/Forum/ForumComponent')
const ThreadView = () =>import(/* webpackChunkName: "group-forum" */'./components/Forum/ThreadViewComponent')
const Topic = () => import(/* webpackChunkName: "group-forum" */'./components/Forum/TopicComponent')

// News Components
const News = () => import(/* webpackChunkName: "group-news" */'./components/News/NewsComponent')
const Article = () => import(/* webpackChunkName: "group-news" */'./components/News/ArticleComponent')

// Event Components
const Event = () => import(/* webpackChunkName: "group-events" */ './components/Events/EventsViewComponent')
const EventDetails = () => import(/* webpackChunkName: "group-events" */'./components/Events/EventDetailsComponent')

// Message Components
const Message = () => import(/* webpackChunkName: "group-messages" */ './components/Messages/MessageComponent')



const Gallery = () => import('./components/Gallery/GalleryComponent')

import Home from './components/HomeComponent';
import Login from './components/LoginComponent';


// store
import store from './store'

// Routes
const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/dashboard',
            component: Home,
            name: 'home',
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/reset',
            component: ResetPassword,
            name: 'reset',
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/verify',
            component: VerifyEmail,
            name: 'verify',
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/updatepassword',
            component: UpdatePassword,
            name: 'updatepassword',
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/profile',
            component: ProfileSettings,
            name: 'profile',
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/publications',
            component: PublicationsView,
            name: 'publications',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/publication',
            component: PublicationView,
            name: 'publicationview',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/gallery',
            component: Gallery,
            name: 'gallery',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/message',
            component: Message,
            name: 'message',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/invitation',
            component: Invitation,
            name: 'invitation',
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/profiles',
            component: ProfilesView,
            name: 'profilesviews',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/events',
            component: Event,
            name: 'event',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/eventdetail',
            component: EventDetails,
            name: 'eventdetail',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/vacancies',
            component: Vacancy,
            name: 'vacancy',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/vacancyapplication',
            component: VacancyApplication,
            name: 'vacancyapplication',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/forum',
            component: Forum,
            name: 'forum',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/thread',
            component: ThreadView,
            name: 'thread',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/topic',
            component: Topic,
            name: 'topic',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/news',
            component: News,
            name: 'news',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        },
        {
            path: '/article',
            component: Article,
            name: 'article',
            meta: {
                requiresAuth: true,
                requiresMember: true,
            },
        }
    ]
})


function isAuthenticated(){
    // auth
    let isAuth = store.state.AuthModule.currentUser

    // Value
    return !Object.keys(isAuth).length == 0
}

function isMember(){
    // member
    let isMember = store.state.AuthModule.currentUser.status == 'Member' ? true : false
    // 
    return isMember
}


// Logged in
router.beforeEach((to, from, next)=>{
    // Requires auth
    let authed = to.matched.some( record => record.meta.requiresAuth )
    // Check if route requires auth
    if ( authed ) {
        // Is authenticated
        if ( isAuthenticated() ){
            next()
        } else {
            // not authenticated, redirect to login
            next({name: 'login'})
        }

    } else {
       next()
    }
})  

//  Logged in
router.beforeEach((to, from, next)=>{
    // Requires auth
    let authed = to.matched.some( record => record.meta.requiresMember )
    // Check if route requires auth
    if ( authed ) {
        // Is authenticated
        if ( isMember() ){
            next()
        } else {
            // not authenticated, redirect to login
            next({name: 'home'})
        }

    } else {
       next()
    }
})  

// Export
export default router