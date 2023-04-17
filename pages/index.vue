<template>
    <homelayout>

        <div class="flex h-40">
            <div class="w-2/12 sm:block  hidden">
                <SideMenu/>
            </div>
            <div class="w-full pt-10 h-screen text-white overflow-y-auto h-screen">
                <div class="h-[400px] my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(s,i) in slider['results']" class="w-22 group">

                        <NuxtLink :to="/movie/+s.id">  <div class="relative " v-if="i <= 4" :style="{
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
                        </NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Top Rated Movies</div>
                <div class=" my-5 overflow-x-scroll  w-full flex ">
                    <div v-if="!pending" v-for="(tm,i) in top_movies['results']"
                         class="group transition ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105">
                        <NuxtLink :to="/movie/+tm.id"><movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                      :year="tm.release_date"></movie_card_1></NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Top Rated TV shows</div>
                <div class=" my-5 overflow-x-scroll  w-full flex ">
                    <div v-if="!pending" v-for="(tm,i) in top_tvshow['results']"
                         class="group transition ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105">
                        <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                      :year="tm.release_date"></movie_card_1>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Upcomming Movies</div>
                <div class=" my-5 overflow-x-scroll  w-full flex ">
                    <div v-if="!pending" v-for="(up,i) in upcomming_movies['results']"
                         class="group transition ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105">
                        <upcomming-card  :name="up.title" :image="up.poster_path" :rate="up.vote_average"
                                         :year="up.release_date"></upcomming-card>
                    </div>
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
const {
    pending,
    data: slider
} = useLazyFetch(runtimeConfig.public.apiBase + "trending/all/day" + "?api_key=" + runtimeConfig.public.apiSecret)
const {data: top_movies} = await useFetch(`${runtimeConfig.public.apiBase}discover/movie?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
const {data: top_tvshow} = await useFetch(`${runtimeConfig.public.apiBase}discover/tv?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
const {data: upcomming_movies} = await useFetch(`${runtimeConfig.public.apiBase}movie/upcoming?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`);

</script>