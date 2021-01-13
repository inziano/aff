<template>
    <div>
        <div class="bg-teal-700">
            <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                <div class="p-5 w-48 ">
                    <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/news" >News Feed</router-link> <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/profiles">Profiles</router-link> <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/events">Events</router-link> <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/publications">Publications</router-link> <span class="text-white text-xs p-1">New</span></a> 
                </div>
                <div class="p-5 w-48 ">
                    <div class="text-xs uppercase text-gray-500 font-medium">User</div>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/message">Messages</router-link> <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500" to="/gallery">Gallery</router-link> <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <router-link class =" text-white  hover:border-transparent hover:text-teal-500"to="/vacancies">Vacancies</router-link><span class="text-white text-xs p-1"> We're hiring </span></a>
                </div>
                <div class="p-5 w-48 ">
                    <div class="text-xs uppercase text-gray-500 font-medium">Social Media</div>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="https://afforum.org/"> Website <span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="https://twitter.com/africanff">Twitter <span class="text-white text-xs p-1"></span></a> 
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500" href="/#"> <span class="text-white text-xs p-1"></span></a> 
                </div>
                <div class="p-5 w-48 ">
                    <div class="text-xs uppercase text-gray-500 font-medium">Contact us</div>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500">United Nations Avenue<span class="text-white text-xs p-1"></span></a>
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500">P.O.Box 30677-00100 Nairobi,Kenya <span class="text-white text-xs p-1"></span></a>                    
                    <a class="my-3 block leading-none text-white  hover:border-transparent hover:text-teal-500">exec.sec@afforum.org <span class="text-white text-xs p-1"></span></a> 
                </div>
            </div>
        </div>

        <div class="bg-teal-700 pt-2 ">
            <div class="flex pb-5 px-3 m-auto pt-5 border-t text-white text-sm flex-col md:flex-row max-w-6xl">
                <div class="mt-2">© Copyright 2020. Africa Forest Forum </div> 
            </div>
        </div>
    </div>
</template>