<template>
    <homelayout>
        <div v-if="!pending">
            <div class="w-full pt-10  text-white overflow-y-auto h-screen">
                <div class="md:h-[460px] snap-mandatory snap-x h-[250px] my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(s,i) in slider['results']" class="w-22 group">
                        <NuxtLink :to="`/${s.media_type}/${s.id}`">
                            <!--  MOBILE START -->
                            <div class="relative snap-center   md:hidden" v-if="i <= 4" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${s['backdrop_path']}')`,
                                                      ' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height':'250px',
                                                        width : '100vw',
                                                        'z-index':-10
                                               }">
                                <div class="absolute  bg-gradient-to-t  from-black w-full text-center transition-all ease-in-out duration-300 h-44 bottom-0 font-bold text-3xl ">
                                    <div class="mt-12 hover:text-red-500">
                                        {{ s['media_type'] == 'movie' ? s["title"] : s['name'] }}
                                    </div>
                                    <div class="line-clamp-2 text-sm px-10 font-thin">
                                        {{ s["overview"] }}
                                    </div>
                                </div>

                            </div>

                            <!-- MOBILE END-->
                            <!--BIG SCREEN START-->
                            <div class=" h-[500px] relative w-screen overflow-y-hidden  justify-center snap-center hidden bg-black bg-no-repeat  md:block "
                                 :style="{
                                                                               background: `url('https://image.tmdb.org/t/p/original/${s['backdrop_path']}')`,
                                                                                    'background-size':'contain',
                                                                                    'background-position': '100% , 0px',
                                                                                     'background-repeat': 'no-repeat',
                                                                                    'height':'460px',
                                                                                    width : '100vw',
                                                                                    'z-index':-10
                                                                           }">


                                <div class="w-[70vw] absolute z-10
                                left-0 h-[500px] bg-gradient-to-r bg-transparent from-black from-65% to-transparent ">
                                    <div class="mt-10 ">
                                        <div class="font-black text-5xl px-7 ">
                                            {{ s['media_type'] == 'movie' ? s["title"] : s['name'] }}
                                        </div>
                                        <div class="w-1/2 px-7 py-5 text-gray-600   line-clamp-4 ">
                                            {{ s["overview"] }}
                                        </div>
                                        <div class="w-1/2 px-7 py-5 text-gray-600">
                                            <div class=" w-[60%] text-sm flex mb-10   text-gray-300 font-thin">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     class="w-4 h-4 text-yellow-500 mr-2">
                                                    <path fillRule="evenodd"
                                                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                {{ s["vote_average"].toFixed(2) }}
                                            </div>
                                            <button type="button"
                                                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600/50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-indigo-700">
                                                View
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <!--BIG SCREEN END-->
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <div class="">
                        <div class="border-b border-gray-900 px-4">

                            <nav class=" flex space-x-8 snap-mandatory snap-x -mt-3 mb-0 overflow-x-scroll w-full "
                                 aria-label="Tabs">
                                <NuxtLink :to="'/genre-movie-'+g.name+'/'+g.id" v-for="g in genre['genres']"
                                          class="border-transparent snap-start text-gray-400 hover:text-indigo-400 hover:border-indigo-300 whitespace-nowrap pb-2 px-1 border-b-2 font-bold text-md">
                                    {{ g.name }}
                                </NuxtLink>
                            </nav>
                        </div>
                    </div>
                    <div class="w-full h-3 bg-black"></div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Top Rated Movies</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
                    <div v-if="!pending" v-for="(tm,i) in top_movies['results']"
                         class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                        <NuxtLink :to="/movie/+tm.id">
                            <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                          :year="tm.release_date"></movie_card_1>
                        </NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Top Rated TV shows</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
                    <div v-if="!pending" v-for="(tv,i) in top_tvshow['results']"
                         class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                        <NuxtLink :to="/tv/+tv.id">
                            <movie_card_1 :name="tv.name" :image="tv.poster_path" :rate="tv.vote_average"
                                          :year="tv.first_air_date"></movie_card_1>
                        </NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Upcomming Movies</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex pb-20">
                    <div v-if="!pending" v-for="(up,i) in upcomming_movies['results']"
                         class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                        <NuxtLink :to="/movie/+up.id">
                            <upcomming-card :name="up.title" :image="up.poster_path" :rate="up.vote_average"
                                            :year="up.release_date"></upcomming-card>
                        </NuxtLink>
                    </div>
                </div>
                <div class="text-center text-gray-700">
                    Data Provided by
                    <img class="w-24 h-20 mx-auto -mt-5"
                         src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/>

                </div>
            </div>

        </div>


    </homelayout>
</template>
<script setup lang="ts">

import moment from 'moment';
import {ref} from "#imports";
import Movie_card_1 from "~/components/movie_card_1.vue";

const runtimeConfig = useRuntimeConfig()
useHead({
    title: runtimeConfig.public.appname,
})

const {
    pending,
    data: slider
} = useFetch(runtimeConfig.public.apiBase + "trending/all/day" + "?api_key=" + runtimeConfig.public.apiSecret)
const {data: top_movies} = await useFetch(`${runtimeConfig.public.apiBase}discover/movie?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
const {data: top_tvshow} = await useFetch(`${runtimeConfig.public.apiBase}discover/tv?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
const {data: upcomming_movies} = await useFetch(`${runtimeConfig.public.apiBase}movie/upcoming?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`);
const {data: genre} = await useFetch(runtimeConfig.public.apiBase + "genre/movie/list" + "?api_key=" + runtimeConfig.public.apiSecret)
</script>