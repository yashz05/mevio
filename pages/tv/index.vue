<template>
    <homelayout v-if="top_tv_random!=null">
        <div class="h-screen  w-full bg-gray-900 relative">
            <div class="absolute top-0 h-screen w-full bg-gradient-to-t from-black  to-transparent"></div>
            <NuxtImg
                    :src="`https://image.tmdb.org/t/p/w780`+top_tv_random['results'][number ?? 0]['backdrop_path']"
                    class="h-screen w-full object-cover"
                    :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"

            />
            <div class="absolute md:top-1/2 top-1/3 w-full text-white md:font-black font-bold text-5xl">
                <div class="text-center px-5 animate__animated animate__fadeInUp">
                    {{ top_tv_random['results'][number ?? 0]['original_name'] }}
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
            <div v-if="tv_discover != null" v-for="(tm,i) in tv_discover['results']"
                 class="transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                <NuxtLink :to="/tv/+tm.id">
                    <LazyMovieCard1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                    :year="tm.release_date" type="movie"></LazyMovieCard1>
                </NuxtLink>
            </div>
        </div>
        <div class="border-b border-gray-900 px-4">

            <nav class=" flex space-x-8 snap-mandatory snap-x -mt-3 mb-0 overflow-x-scroll overflow-y-hidden w-full "
                 aria-label="Tabs">
                <NuxtLink :to="'/genre-movie-'+g.name+'/'+g.id" v-for="g in tv_genre['genres']"
                          class="border-transparent snap-start text-gray-400 hover:text-indigo-400
                           hover:border-indigo-300 whitespace-nowrap pb-2 p-2 px-3 rounded-full bg-gray-800
                           border-b-2 font-bold text-md">
                    {{ g.name }}
                </NuxtLink>
            </nav>
        </div>
        <div class=" my-5 overflow-x-scroll snap-mandatory snap-x scroll-pl-10  w-full flex pb-2">
            <div v-if="upcoming_tv != null" v-for="(up,i) in upcoming_tv['results']"
                 class="group transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                <NuxtLink :to="/tv/+up.id">
                    <upcomming-card :name="up.title" :image="up.poster_path" :rate="up.vote_average"
                                    :year="up.release_date"></upcomming-card>
                </NuxtLink>
            </div>
        </div>
        <div v-if="top_rated != null" class="relative mx-3">
            <NuxtLink :to="/tv/+top_rated['results'][number]['id']">
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
                                top_rated['results'][number]['vote_average'].toFixed(1)
                                }}
                            </div>

                        </div>
                        <div class="sm:text-6xl text-white  text-2xl font-bold mb-5">
                            {{ top_rated['results'][number]['original_name'] }}
                        </div>
                        <div class="sm:w-1/2 w-[100%] text-white sm:line-clamp-4 line-clamp-3">
                            {{ top_rated['results'][number]['overview'] }}
                        </div>


                    </div>
                </div>
                <LazyNuxtImg
                        class="rounded-xl  lg:h-[350px] sm:h-[300px] h-[200px] w-[100vw] object-cover bg-no-repeat -z-10"
                        :src="top_rated['results'][number]['poster_path'] != null ? 'https://image.tmdb.org/t/p/w780'+top_rated['results'][number]['poster_path'] :'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                        width="300"
                        height="169"
                        :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                        lazy
                />
            </NuxtLink>


        </div>


        <div class="font-bold text-m text-gray-50/25 ml-5 mb-5">Now Playing</div>
        <div class=" my-5 overflow-x-scroll snap-mandatory snap-x  w-full flex ">
            <div v-if="now_playing != null" v-for="(tm,i) in now_playing['results']"
                 class="transition snap-start ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                <NuxtLink :to="/tv/+tm.id">
                    <LazyMovieCard1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                    :year="tm.release_date" type="movie"></LazyMovieCard1>
                </NuxtLink>
            </div>
        </div>
    </homelayout>
</template>

<script setup lang="ts">
const rn = random_number()
const number = rn.value
const runtimeConfig = useRuntimeConfig()
useHead({
    title: 'Movies ~' + runtimeConfig.public.appname,
    meta: [
        {name: 'description', content: 'Movies'}
    ]
})


const [
    {data: top_rated},
    {data: top_tv_random},
    {data: tv_discover},
    {data: tv_genre},
    {data: now_playing},
    {data: upcoming_tv}
] = await Promise.all([
    useFetch(runtimeConfig.public.apiBase + "tv/top_rated", {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "page": 2
        },

    }),
    useFetch(runtimeConfig.public.apiBase + "trending/tv/day", {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "page": 1
        },

    }),
    useFetch(`${runtimeConfig.public.apiBase}discover/tv`, {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "language": "en-US",
            "sort_by": "popularity.desc",
            "include_adult": false,
            "include_video": false,
            "page": 2,
            "with_watch_monetization_types": "flatrate"
        }
    }),
    useFetch(runtimeConfig.public.apiBase + "genre/tv/list", {
        params: {
            "api_key": runtimeConfig.public.apiSecret
        }
    }),
    useFetch(runtimeConfig.public.apiBase + "tv/on_the_air", {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "page": 1
        }
    }),
    useFetch(`${runtimeConfig.public.apiBase}tv/airing_today`, {
        params: {
            "api_key": runtimeConfig.public.apiSecret,
            "language": "en-US",
            "page": 2,
        }
    })
])
</script>

<style scoped>

</style>