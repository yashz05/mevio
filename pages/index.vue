<template>
    <homelayout>
        <div class="flex">
            <div class="w-2/12 sm:block  hidden">
                <SideMenu/>
            </div>
            <div class="w-full pt-10  text-white overflow-y-auto h-screen">
                <div class="sm:h-[460px] snap-mandatory snap-x h-[250px] my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(s,i) in slider['results']" class="w-22 group">
                        <NuxtLink :to="/movie/+s.id">
                            <!--  MOBILE START -->

                                <div class="relative snap-center   sm:hidden" v-if="i <= 4" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${s['backdrop_path']}')`,
                                                      ' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height':'250px',
                                                        width : '100vw',
                                                        'z-index':-10
                                               }">
                                    <div class="absolute  bg-gradient-to-t  from-black w-full text-center transition-all ease-in-out duration-300 h-44 bottom-0 font-bold text-3xl ">
                                        <div class="mt-12 hover:text-red-500"> {{ s["title"] }}</div>
                                        <div class="line-clamp-2 text-sm px-10 font-thin">
                                            {{ s["overview"] }}
                                        </div>
                                    </div>

                                </div>

                            <!-- MOBILE END-->
                            <!--BIG SCREEN START-->
                            <div class="relative h-[500px] snap-center hidden sm:block" v-if="i <= 4" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${s['backdrop_path']}')`,
                                                      ' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height':'460px',
                                                        width : '86vw',
                                                        'z-index':-10
                                               }">

                                <div class="absolute flex  bg-gradient-to-t px-5  from-black w-full text-left transition-all ease-in-out duration-300   bottom-0 font-bold text-3xl ">
                                    <div>
                                        <div class="mt-[100px] hover:text-red-500"> {{ s["title"] }}</div>
                                        <div class=" w-[60%] text-sm  line-clamp-2 text-gray-300 font-thin">
                                            {{ s["overview"] }}
                                        </div>
                                        <div class=" w-[60%] text-sm flex mb-10 mt-3  text-gray-300 font-thin">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 class="w-4 h-4 text-yellow-500 mr-2">
                                                <path fillRule="evenodd"
                                                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            {{ s["vote_average"] }}
                                        </div>
                                    </div>
                                    <div class="absolute right-0 mt-[40px] mr-24 hover:text-red-500">
                                        <img :src="'https://image.tmdb.org/t/p/original/'+s['poster_path']"
                                             style="height:200px;width: 150px"/>
                                    </div>
                                </div>

                            </div>
                            <!--BIG SCREEN END-->
                        </NuxtLink>
                    </div>
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
                    <img class="w-24 h-20 mx-auto -mt-5" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/>

                </div>
            </div>

        </div>


    </homelayout>
</template>
<script setup lang="ts">

import moment from 'moment';
import {ref} from "#imports";
import Movie_card_1 from "~/components/movie_card_1.vue";

useHead({
    title: 'Mevio',

})
const runtimeConfig = useRuntimeConfig()
const {
    pending,
    data: slider
} = useLazyFetch(runtimeConfig.public.apiBase + "trending/all/day" + "?api_key=" + runtimeConfig.public.apiSecret)
const {data: top_movies} = await useFetch(`${runtimeConfig.public.apiBase}discover/movie?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
const {data: top_tvshow} = await useFetch(`${runtimeConfig.public.apiBase}discover/tv?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
const {data: upcomming_movies} = await useFetch(`${runtimeConfig.public.apiBase}movie/upcoming?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`);

</script>