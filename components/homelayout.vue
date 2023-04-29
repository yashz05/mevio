<template>

  <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="fixed backdrop-blur-3xl text-white w-full  top-0 z-20 shadow">
        <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <button type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
                          Icon when menu is closed.

                          Heroicon name: outline/menu

                          Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <!--
                          Icon when menu is open.

                          Heroicon name: outline/x

                          Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <!--                        <img class="block lg:hidden h-8 w-auto"-->
                        <!--                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">-->
                        <!--                        <img class="hidden lg:block h-8 w-auto"-->
                        <!--                             src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"-->
                        <!--                             alt="Workflow">-->
                        <NuxtLink class="order-1 font-bold text-3xl" to="/">
                            Mevio
                        </NuxtLink>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <a href="#"
                           class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Dashboard </a>
                        <a href="#"
                           class="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Team </a>
                        <a href="#"
                           class="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Projects </a>
                        <a href="#"
                           class="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Calendar </a>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" v-on:click="search_show =! search_show"
                            class=" p-1 rounded-full text-gray-400 hover:text-gray-500 ">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>

                    <!--                    &lt;!&ndash; Profile dropdown &ndash;&gt;-->
                    <!--                    <div class="ml-3 relative">-->
                    <!--                        <div>-->
                    <!--                            <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
                    <!--                                <span class="sr-only">Open user menu</span>-->
                    <!--                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                    <!--                            </button>-->
                    <!--                        </div>-->

                    <!--                        &lt;!&ndash;-->
                    <!--                          Dropdown menu, show/hide based on menu state.-->

                    <!--                          Entering: "transition ease-out duration-200"-->
                    <!--                            From: "transform opacity-0 scale-95"-->
                    <!--                            To: "transform opacity-100 scale-100"-->
                    <!--                          Leaving: "transition ease-in duration-75"-->
                    <!--                            From: "transform opacity-100 scale-100"-->
                    <!--                            To: "transform opacity-0 scale-95"-->
                    <!--                        &ndash;&gt;-->
                    <!--                        <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
                    <!--                            &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
                    <!--                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
                    <!--                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
                    <!--                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <!--        <div class="sm:hidden" id="mobile-menu">-->
        <!--            <div class="pt-2 pb-4 space-y-1">-->
        <!--                &lt;!&ndash; Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" &ndash;&gt;-->
        <!--                <a href="#"-->
        <!--                   class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>-->
        <!--                <a href="#"-->
        <!--                   class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>-->
        <!--                <a href="#"-->
        <!--                   class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>-->
        <!--                <a href="#"-->
        <!--                   class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>-->
        <!--            </div>-->
        <!--        </div>-->

        <div>
            <LazyNuxtLoadingIndicator :height="5" :duration="1000"/>
            <NuxtLoadingIndicator :height="5" :duration="1000"/>
        </div>

    </nav>
    <div
            :class="[search_show ? 'ease-out duration-300 opacity-100 block' : 'ease-in duration-200 opacity-0 hidden']"
            class="fixed inset-0 z-20 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">

        <div v-on:click="search_show =! search_show"
             :class="[search_show ?'ease-out duration-300 opacity-100 scale-100':'ease-in duration-200 opacity-0 scale-95']"
             class="fixed inset-0 backdrop-blur-md bg-gray-900/25 transition-opacity" aria-hidden="true"></div>


        <div class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <div class="relative">

                <svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"/>
                </svg>
                <input type="text" v-model="search" v-on:input="search_multi()"
                       class="h-12 w-full border-0 bg-gray-800 pl-11 pr-4 text-sm text-white placeholder-gray-400 focus:ring-0"
                       placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options">
            </div>


            <ul v-if="search_results != null " class="max-h-72 bg-gray-900 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-400"
                id="options" role="listbox">

                <li v-for="all in search_results['data']['results']" class="cursor-default select-none px-4 py-2"
                    role="option" tabindex="-1">
                    <NuxtLink :to="all.media_type !== 'movie' ? '/tv'+'/'+all.id :'/movie' +'/'+all.id">
                        <div class="flex" v-on:click="search_show =! search_show">
                            <div class="mr-4 flex-shrink-0">
                                <nuxt-img class="rounded-xl " :src="'https://image.tmdb.org/t/p/w300/'+all.poster_path"    :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+useRuntimeConfig().public.appname" lazy
                                          :style="{' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height': '44px',
                                                        'width': '44px',
                                                        'z-index':-10
                       }"/>

                            </div>
                            <div>
                                <h4 class="text-md font-thin">{{ all.media_type === 'movie' ? all["title"] : all['name'] }}</h4>
                                 </div>
                        </div>

                    </NuxtLink>
                </li>

            </ul>



        </div>
    </div>

    <slot/>

  <!--    <div class=" h-screen select-none  ">-->
  <!--        <LazyNuxtLoadingIndicator :height="5" :duration="1000" />-->
  <!--        <NuxtLoadingIndicator  :height="5" :duration="1000"/>-->

  <!--        <div class="h-14 fixed backdrop-blur-3xl  top-0 z-20 w-full px-10 py-3 justify-between flex text-white">-->
  <!--            <NuxtLink class="order-1 font-bold text-3xl" to="/">-->
  <!--                Mevio-->
  <!--            </NuxtLink>-->

  <!--            <div class="sm:block hidden order-2">-->

  <!--                <div class="font-bold hover:underline text-xl">-->
  <!--                    Action-->

  <!--                </div>-->

  <!--            </div>-->
  <!--            <div class="order-3 w-2/12">-->

  <!--            </div>-->


  <!--&lt;!&ndash;            <div class="order-last font-bold text-3xl">&ndash;&gt;-->
  <!--&lt;!&ndash;                <div class="mt-1">&ndash;&gt;-->
  <!--&lt;!&ndash;                    <input type="search" name="text" id="search" class="sm:block hidden backdrop-blur-3xl bg-white/[.10] shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-52 sm:text-sm border-transparent rounded-md -mt-2" placeholder="Search ..." />&ndash;&gt;-->
  <!--&lt;!&ndash;                </div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--            <div class="order-last flex">-->
  <!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"-->
  <!--                     class="w-6 h-6 mx-2">-->
  <!--                    <path stroke-linecap="round" stroke-linejoin="round"-->
  <!--                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>-->
  <!--                </svg>-->

  <!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"-->
  <!--                     class="w-6 h-6 mx-1">-->
  <!--                    <path stroke-linecap="round" stroke-linejoin="round"-->
  <!--                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>-->
  <!--                </svg>-->

  <!--            </div>-->

  <!--        </div>-->
  <!--        <slot/>-->


  <!--    </div>-->
</template>
<script setup>

</script>
<script>
export default {
    name: "homelayout",
    data() {
        return {
            search_show: false,
            search: null,
            search_results: null


        }
    },
    methods: {
        async search_multi() {


            this.search_results = await useFetch('https://api.themoviedb.org/3/search/multi', {
                query: {
                    'api_key': useRuntimeConfig().public.apiSecret,
                    'language': 'en-US',
                    'query': this.search,
                    'page': 1,
                    'include_adult': true,
                }
            })
            // console.log(this.search_results.value)


        }

    }
}
</script>

<style scoped>

</style>