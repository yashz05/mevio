<template>
    <homelayout v-if="top_movie_random!=null">
        <div  class="h-screen  w-full bg-gray-900 relative">
            <div class="absolute top-0 h-screen w-full bg-gradient-to-t from-black  to-transparent"></div>
            <NuxtImg
                    :src="`https://image.tmdb.org/t/p/w780`+top_movie_random['results'][number ?? 0]['backdrop_path']"
                    class="h-screen w-full object-cover"
                    :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"

            />
            <div class="absolute md:top-1/2 top-1/3 w-full text-white md:font-black font-bold text-5xl">
                <div class="text-center px-5 animate__animated animate__fadeInUp">
                    {{ top_movie_random['results'][number ?? 0]['title'] }}
                </div>
            </div>

            <div class="absolute bottom-10  text-white/50 w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     class="w-5 h-5 mx-auto animate__animated animate__fadeInDown animate__infinite	infinite">
                    <path fill-rule="evenodd"
                          d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                          clip-rule="evenodd"/>
                </svg>

            </div>

        </div>
        <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
            <div v-if="movie_discover != null" v-for="(tm,i) in movie_discover['results']"
                 class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                <NuxtLink :to="/movie/+tm.id">
                    <LazyMovieCard1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                    :year="tm.release_date" type="movie"></LazyMovieCard1>
                </NuxtLink>
            </div>
        </div>
    </homelayout>
</template>

<script setup lang="ts">



const number = 0
console.log(number)
const runtimeConfig = useRuntimeConfig()
const [{data: top_movie_random}, {data: movie_discover}] = await Promise.all([
    useFetch(runtimeConfig.public.apiBase + "trending/movie/day", {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "page": 1
        },

    }),
    useFetch(`${runtimeConfig.public.apiBase}discover/movie`, {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "language": "en-US",
            "sort_by": "popularity.desc",
            "include_adult": false,
            "include_video": false,
            "page": 2,
            "with_watch_monetization_types": "flatrate"
        }
    })
])
</script>

<style scoped>

</style>