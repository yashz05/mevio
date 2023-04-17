<template>
    <homelayout>
        <div class="flex h-40">
            <div class="w-2/12 sm:block  hidden">
                <SideMenu/>
            </div>
            <div class="w-full pt-10 h-screen text-white overflow-y-auto h-screen">
                <div class="h-[400px] my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(s,i) in slider['results']" class="w-22 group">

                        <div class="relative " v-if="i <= 4" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${s['backdrop_path']}')  `,
                                                      ' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height':'400px',
                                                        width : '86vw',
                                                        'z-index':-10
                                               }">

                            <div class="absolute  bg-gradient-to-t  from-black w-full text-center transition-all ease-in-out duration-300 group-hover:h-44 h-28 bottom-0 font-bold text-3xl ">
                                <div class="mt-12 hover:text-red-500"> {{ s["title"] }}</div>
                                <div class="group-hover:block hidden text-xl px-10 font-thin">
                                    {{ s["overview"] }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class=" my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(tm,i) in top_movies['results']" class="  group">

                        <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"></movie_card_1>
                    </div>
                </div>
            </div>
        </div>

    </homelayout>
</template>
<script setup lang="ts">

import {ref} from "#imports";
import Movie_card_1 from "~/components/movie_card_1.vue";

const runtimeConfig = useRuntimeConfig()
const {
    pending,
    data: slider
} = useLazyFetch(runtimeConfig.public.apiBase + "trending/all/day" + "?api_key=" + runtimeConfig.public.apiSecret)
const {data: top_movies} = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e17a6dcd6b3e85fcc2b1207a20002539&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);

</script>