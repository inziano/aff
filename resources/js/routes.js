import Router from 'vue-router'

// Templates

import Register from './components/RegisterComponent';
import Bio from './components/BioComponent';
import Login from './components/LoginComponent';
import Profile from './components/ProfileComponent';
import Publication from './components/PublicationComponent';
import Gallery from './components/GalleryComponent';
import Message from './components/MessageComponent';
import Invitation from './components/InvitationComponent';
import ProfilesView from './components/ProfilesViewComponent';
import PublicationsView from './components/PublicationsViewComponent';

// Routes
const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '/bio',
            component: Bio,
            name: 'bio'
        },
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/profile',
            component: Profile,
            name: 'profile'
        },
        {
            path: '/publication',
            component: Publication,
            name: 'publication'
        },
        {
            path: '/publications',
            component: PublicationsView,
            name: 'publications'
        },
        {
            path: '/gallery',
            component: Gallery,
            name: 'gallery'
        },
        {
            path: '/message',
            component: Message,
            name: 'message'
        },
        {
            path: '/invitation',
            component: Invitation,
            name: 'invitation'
        },
        {
            path: '/profiles',
            component: ProfilesView,
            name: 'profilesviews'
        }
    ]
})

// Export
export default router