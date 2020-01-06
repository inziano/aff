import Router from 'vue-router'

// Templates

import Register from './components/RegisterComponent';
import Bio from './components/BioComponent';
import Login from './components/LoginComponent';
import Profile from './components/ProfileComponent';
import Publication from './components/PublicationComponent';
import Gallery from './components/GalleryComponent';
import Home from './components/HomeComponent';
import Message from './components/MessageComponent';
import Invitation from './components/InvitationComponent';
import ProfilesView from './components/ProfilesViewComponent';
import PublicationsView from './components/PublicationsViewComponent';
import Event from './components/EventComponent';
import Vacancy from './components/VacancyComponent';
import VacancyApplication from './components/VacancyApplicationComponent';
import Forum from './components/ForumComponent';
import ThreadView from './components/ThreadViewComponent';
import Topic from './components/TopicComponent';
import News from './components/NewsComponent';
import Article from './components/ArticleComponent';

// Routes
const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
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
            path: '/login',
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
        },
        {
            path: '/events',
            component: Event,
            name: 'event'
        },
        {
            path: '/vacancies',
            component: Vacancy,
            name: 'vacancy'
        },
        {
            path: '/vacancyapplication',
            component: VacancyApplication,
            name: 'vacancyapplication'
        },
        {
            path: '/forum',
            component: Forum,
            name: 'forum'
        },
        {
            path: '/thread',
            component: ThreadView,
            name: 'thread'
        },
        {
            path: '/topic',
            component: Topic,
            name: 'topic'
        },
        {
            path: '/news',
            component: News,
            name: 'news'
        },
        {
            path: '/article',
            component: Article,
            name: 'article'
        }
    ]
})

// Export
export default router