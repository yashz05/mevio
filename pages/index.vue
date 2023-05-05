<template>

    <homelayout v-if="!error ">
        <div>
            <div class="w-full pt-10  text-white overflow-y-auto h-screen">
                <div class="md:h-[460px] snap-mandatory snap-x h-[250px] my-5 overflow-x-scroll  w-full flex">
                    <div v-if="!pending" v-for="(s,i) in slider['results']" class="w-22 group">
                        <NuxtLink :to="`/${s.media_type}/${s.id}`" v-if="i < 7">
                            <!--  MOBILE START -->
                            <div class="relative snap-center animate__animated animate__fadeIn animate__faster  md:hidden"
                                 v-if="i <= 4" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/w500/${s['backdrop_path']}')`,
                                                      ' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height':'250px',
                                                        width : '100vw',
                                                        'z-index':-10
                                               }">
                                <div class="absolute  bg-gradient-to-t  from-black w-full text-center transition-all ease-in-out duration-300 h-44 bottom-0 font-bold text-3xl">
                                    <div class="mt-12 ">
                                        {{ s['media_type'] == 'movie' ? s["title"] : s['name'] }}
                                    </div>
                                    <div class="line-clamp-2 text-sm px-10 font-thin">
                                        {{ s["overview"] }}
                                    </div>
                                </div>

                            </div>

                            <!-- MOBILE END-->
                            <!--BIG SCREEN START-->
                            <div class="hidden md:block">
                                <div class="h-[450px] relative  w-screen overflow-y-hidden snap-center  bg-black bg-no-repeat  flex ">
                                    <div class="bg-black w-[55%]  h-full transform origin-bottom flex">
                                        <div class="mt-10 ">
                                            <div class="font-black text-5xl px-7 w-[50vw]">
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
                                        <div class="bg-gradient-to-r from-black via-black to-transparent h-full w-24 absolute -right-16 transform skew-x-6">

                                        </div>


                                    </div>


                                    <div class="bg-yellow-300 w-[45%] h-full">
                                        <nuxt-img :src="`https://image.tmdb.org/t/p/w780/`+s['backdrop_path']"
                                                  class="h-full w-full object-cover"/>
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

                            <nav class=" flex space-x-8 snap-mandatory snap-x -mt-3 mb-0 overflow-x-scroll overflow-y-hidden w-full "
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
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5 mt-2">Top Rated Movies</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
                    <div v-if="!pending" v-for="(tm,i) in top_movies['results']"
                         class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                        <NuxtLink :to="/movie/+tm.id">
                            <LazyMovieCard1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                            :year="tm.release_date" type="movie"></LazyMovieCard1>
                        </NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Top Rated TV shows</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
                    <div v-if="!pending" v-for="(tv,i) in top_tvshow['results']"
                         class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                        <NuxtLink :to="/tv/+tv.id">
                            <LazyMovieCard1 :name="tv.name" :image="tv.poster_path" :rate="tv.vote_average"
                                            :year="tv.first_air_date" type="tv"></LazyMovieCard1>
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="top_rated_movie != null" class="relative mx-3">
                    <NuxtLink :to="/movie/+top_rated_movie['results'][random_movie_top_rated]['id']">
                        <div class="absolute bg-gray-900/75 h-full w-full">
                            <div class="absolute sm:bottom-10 bottom-5 px-5  sm:text-left text-center">
                                <div class="text-white/25  my-2 w-min text-sm flex text-center sm:ml-0 ml-[45%]">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                             class="w-4 h-4 text-yellow-500">
                                            <path fillRule="evenodd"
                                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>

                                    <div class="ml-1 text-white ">
                                        {{
                                        top_rated_movie['results'][random_movie_top_rated]['vote_average'].toFixed(1)
                                        }}
                                    </div>

                                </div>
                                <div class="sm:text-6xl  text-2xl font-bold mb-5">
                                    {{ top_rated_movie['results'][random_movie_top_rated]['title'] }}
                                </div>
                                <div class="sm:w-1/2 w-[100%] sm:line-clamp-4 line-clamp-3">
                                    {{ top_rated_movie['results'][random_movie_top_rated]['overview'] }}
                                </div>


                            </div>
                        </div>
                        <LazyNuxtImg
                                class="rounded-xl  lg:h-[350px] sm:h-[300px] h-[200px] w-[100vw] object-cover bg-no-repeat -z-10"
                                :src="top_rated_movie['results'][random_movie_top_rated]['backdrop_path'] != null ? 'https://image.tmdb.org/t/p/w780'+top_rated_movie['results'][random_movie_top_rated]['backdrop_path'] :'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                                width="300"
                                height="169"
                                :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                                lazy
                        />
                    </NuxtLink>


                </div>

                <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Upcomming Movies</div>
                <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex pb-10">
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

    <div v-if="error" class="text-center text-white h-screen ">
        Something went wrong
    </div>


</template>

<script setup lang="ts">


const random_movie_top_rated = ref(Math.floor(Math.random() * 10));
const runtimeConfig = useRuntimeConfig()
useHead({
    title: runtimeConfig.public.appname,
})

const {
    pending,
    error,

    data: slider
} = useFetch(runtimeConfig.public.apiBase + "trending/all/day", {
    params: {
        "api_key": runtimeConfig.public.apiSecret
    },
    immediate: true
})
const {data: top_movies} = useFetch(`${runtimeConfig.public.apiBase}discover/movie`, {
    params: {
        "api_key": runtimeConfig.public.apiSecret,
        "language": "en-US",
        "sort_by": "popularity.desc",
        "include_adult": true,
        "include_video": false,
        "page": 1,
        "with_watch_monetization_types": "flatrate"
    }
});
const {data: top_tvshow} = useFetch(`${runtimeConfig.public.apiBase}discover/tv`, {
    params: {
        "api_key": runtimeConfig.public.apiSecret,
        "language": "en-US",
        "sort_by": "popularity.desc",
        "include_adult": true,
        "include_video": false,
        "page": 1,
        "with_watch_monetization_types": "flatrate"
    }
});
const {data: upcomming_movies} = useFetch(`${runtimeConfig.public.apiBase}movie/upcoming`, {
    params: {
        "api_key": runtimeConfig.public.apiSecret,
        "language": "en-US",
        "page": 1,
    }
});
const {data: genre} = useFetch(runtimeConfig.public.apiBase + "genre/movie/list", {
    params: {
        "api_key": runtimeConfig.public.apiSecret
    }
})
const {data: top_rated_movie} = useFetch(runtimeConfig.public.apiBase + "movie/top_rated", {
    params: {
        "api_key": runtimeConfig.public.apiSecret,
        "page": 1,
        "include_video": true,
    }
})


</script>

