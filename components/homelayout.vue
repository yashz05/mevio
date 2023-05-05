<template>


    <nav class="fixed backdrop-blur-3xl text-white w-full  top-0 z-20 shadow ">
        <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <button type="button" v-on:click="mobile_menu=!mobile_menu"
                            class="inline-flex items-center justify-center p-2 rounded-md text-white "
                            aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
                          Icon when menu is closed.

                          Heroicon name: outline/menu

                          Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg v-if="!mobile_menu" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>

                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">

                        <NuxtLink class="order-1 font-bold text-3xl " to="/">
                            Mevio
                        </NuxtLink>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <NuxtLink to="/"
                           class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Dashboard </NuxtLink>
                        <NuxtLink to="/movie"
                                  class="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Movies
                        </NuxtLink>
                        <NuxtLink to="/tv"
                                  class="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Tv Shows
                        </NuxtLink>

                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" v-on:click="search_show =! search_show"
                            class=" p-1 rounded-full text-gray-400 hover:text-gray-500 ">
                        <span class="sr-only">Search</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>

                </div>
            </div>
        </div>


        <div v-if="mobile_menu" class="sm:hidden" id="mobile-menu">
            <div class="pt-2 pb-4 space-y-1">
                <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                <a href="#"
                   class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>
                <a href="#"
                   class="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Movies</a>
                <a href="#"
                   class="border-transparent white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Tv
                    Shows</a>
            </div>
        </div>

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


            <ul v-if="search_results != null "
                class="max-h-72 bg-gray-900 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-400"
                id="options" role="listbox">

                <li v-for="all in search_results['data']['results']" class="cursor-default select-none px-4 py-2"
                    role="option" tabindex="-1">
                    <NuxtLink :to="all.media_type !== 'movie' ? '/tv'+'/'+all.id :'/movie' +'/'+all.id">
                        <div class="flex" v-on:click="search_show =! search_show">
                            <div class="mr-4 flex-shrink-0">
                                <nuxt-img class="rounded-xl " :src="'https://image.tmdb.org/t/p/w300/'+all.poster_path"
                                          :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+useRuntimeConfig().public.appname"
                                          lazy
                                          :style="{' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height': '44px',
                                                        'width': '44px',
                                                        'z-index':-10
                       }"/>

                            </div>
                            <div>
                                <h4 class="text-md font-thin">{{
                                    all.media_type === 'movie' ? all["title"] : all['name']
                                    }}</h4>
                            </div>
                        </div>

                    </NuxtLink>
                </li>

            </ul>


        </div>
    </div>

    <slot/>


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
            search_results: null,
            mobile_menu: false


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