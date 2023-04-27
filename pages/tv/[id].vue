<template>
    <homelayout>
        <youtube-video-popup :show="videopop" :id="videoid"/>
        <div class="text-white" v-if="movie == null">LOADING</div>
        <div v-else class="w-full pt-16">
            <div class="w-full sm:hidden block relative" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')  `,
                                                            'background-repeat': 'no-repeat',
                                                                'background-size': 'cover',
                                                                'background-position': 'center center',
                                                                'height': '60vh',
                                                                'width': '100vw',
                                                        'z-index':-10
                                               }">
                <div class="absolute bottom-0 bg-gradient-to-t h-[50vh] from-black w-full">

                </div>

                <div class="text-white mx-4  absolute bottom-10">
                    <div class="text-3xl"> {{ movie.original_name }}</div>
                    <div class="text-white/25   my-2 w-full text-sm flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 class="w-4 h-4 text-yellow-500">
                                <path fillRule="evenodd"
                                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div class="ml-3">{{ movie.vote_average.toFixed(1) }}</div>
                        <div class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 class="w-5 h-5">
                                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"/>
                            </svg>

                        </div>
                        <div class="ml-1 text-white">{{ movie.vote_count }}</div>
                    </div>

                </div>
            </div>
            <div class="sm:hidden text-white/25 px-4">
                <div class="  my-2 w-full text-sm flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             class="w-5 h-5">
                            <path fill-rule="evenodd"
                                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                  clip-rule="evenodd"/>
                        </svg>

                    </div>
                    <div class="ml-3"> {{ movie.first_air_date }}</div>

                </div>
                {{ movie.overview }}
            </div>


            <div class="w-full hidden sm:block relative" :style="{
                                                   background: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')  `,
                                                            'background-repeat': 'no-repeat',
                                                                'background-size': 'cover',
                                                                'background-position': '0% 50%',
                                                                'height': '60vh',
                                                                'width': '100vw',
                                                        'z-index':-10
                                               }">
                <div class="absolute bottom-0 bg-gradient-to-t h-[50vh] from-black w-full">

                </div>


                <div class="absolute  bottom-10 ml-10 flex">
                    <nuxt-img :src='"https://image.tmdb.org/t/p/w300/"+movie.poster_path'
                              :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                              class="sm:w-[170px] sm:h-[250px] rounded-xl sm:mx-0  mx-auto w-[140px] -mb-20"/>

                    <div class="text-white mx-4 my-3">
                        <div class="text-3xl"> {{ movie.original_name }}</div>
                        <div class="text-white/25   my-2 w-full text-sm flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     class="w-4 h-4 text-yellow-500">
                                    <path fillRule="evenodd"
                                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div class="ml-3">{{ movie.vote_average.toFixed(1) }}</div>
                            <div class="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     class="w-5 h-5">
                                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"/>
                                </svg>

                            </div>
                            <div class="ml-1 text-white">{{ movie.vote_count }}</div>
                        </div>
                        <div class="text-white/25   my-2 w-full text-sm flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                          clip-rule="evenodd"/>
                                </svg>

                            </div>
                            <div class="ml-3"> {{ movie.first_air_date }}</div>

                        </div>
                        {{ movie.overview }}

                    </div>

                </div>

            </div>
            <div class=" mt-10 bg-gray-900 sm:10 px-4">
                <div class="font-bold text-m text-gray-50/25 mt-12">Genres</div>
                <div class="flex mt-3">
                    <div v-for="genre in movie.genres"
                         class="bg-gray-50/10 text-center rounded-lg mr-3 p-4  text-xs pt-1 font-thin h-7 text-white text-ellipsis overflow-hidden">
                        <NuxtLink :to="'/genre-tv-'+genre.name+'/'+genre.id" >  {{ genre.name }}</NuxtLink>
                    </div>
                </div>
                <div class="font-bold text-m text-gray-50/25 mt-12">Seasons</div>
                <div class="flex mt-3   overflow-x-scroll">
                    <div v-for="season in movie.seasons" :class="s_selected === season.name ? 'bg-gray-900' : ''"
                         class="bg-gray-50/10 text-center w-44
                         rounded-lg mr-3 p-4  text-xs pt-1
                         font-thin h-12 text-white ">
                        {{ season.name }}
                    </div>
                </div>
                <div v-if="casts['cast'].length > 0" class="font-bold text-m text-gray-50/25 mt-5">Casts</div>
                <div class="h-[170px] mt-3  overflow-x-scroll  w-full flex">
                    <div v-if="casts != null" v-for="cast in casts['cast']"
                    >

                        <nuxt-link :to="'/cast-'+cast.original_name.replace(' ', '_')+'/'+cast.id">


                            <div style="height: 100px;width: 100px" class="mx-2 relative ">
                                <nuxt-img :src='"https://image.tmdb.org/t/p/w300/"+cast.profile_path'
                                          class="rounded-lg object-cover"
                                          :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                                          :style="{
                                                            'background-repeat': 'no-repeat',
                                                                'background-size': 'cover',
                                                                'background-position': 'center center',
                                                                'height': '100px',
                                                                'width': '100px',
                                                        'z-index':'-10',
                                               }"/>
                                <div class="absolute bottom-0 rounded-lg bg-gradient-to-t h-10 from-black w-full">

                                </div>

                            </div>
                        </nuxt-link>
                        <div class="font-bold text-sm text-center text-gray-50/25 mt-2">{{ cast.original_name }}</div>
                    </div>
                </div>

                <div v-if="videos['results'].length > 0" class="font-bold text-m text-gray-50/25 mt-0">Videos</div>
                <div class=" my-5 overflow-x-scroll w-full flex ">
                    <div v-if="!pending" v-for="(vi,i) in videos['results']"
                         class="group transition ease-in-out delay-150  pt-2 hover:-translate-y-1 hover:scale-105">
                        <video-card :id="vi.key" v-on:click="video_popup(true,vi.key)" :title="vi.name"></video-card>
                    </div>
                </div>
                <div v-if="recommended_tvshow['results'].length > 0" class="font-bold text-m text-gray-50/25 mt-0">
                    Recommended
                    TV Shows
                </div>
                <div class=" my-5 overflow-x-scroll  w-full flex ">
                    <div v-if="!pending" v-for="(rm,i) in recommended_tvshow['results']"
                         class="group transition ease-in-out delay-75  pt-2 hover:-translate-y-1 hover:scale-105">
                        <NuxtLink :to="/tv/+rm.id">
                            <movie_card_1 :name="rm.title" :image="rm.poster_path" :rate="rm.vote_average"
                                          :year="rm.release_date"></movie_card_1>
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

<script setup>
import Movie_card_1 from "~/components/movie_card_1.vue";
import {integer} from "vscode-languageserver-types";

const videopop = ref(false);
const videoid = ref(1);
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const s_selected = ref(0)
const {
    pending,
    data: movie
} = useLazyFetch(`${runtimeConfig.public.apiBase}tv/${route.params.id}?api_key=${runtimeConfig.public.apiSecret}&language=en-US`)
watch(movie, (moviedetail) => {
    useHead({
        title: moviedetail["title"] || runtimeConfig.public.appname,
        ogTitle: moviedetail["title"] || runtimeConfig.public.appname,
        description: moviedetail['overview'] || runtimeConfig.public.appname,
        ogDescription: moviedetail['overview'] || runtimeConfig.public.appname,
        ogImage: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
        twitterCard: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
        meta: [
            {name: 'description', content: moviedetail['overview'] || runtimeConfig.public.appname}
        ]

    })

})

function video_popup(show, id) {
    videopop.value = show;
    videoid.value = id;
}


const [{data: casts}, {data: recommended_tvshow}, {data: videos}] = await Promise.all([
    useFetch(`${runtimeConfig.public.apiBase}tv/${route.params.id}/credits?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`),
    useFetch(`${runtimeConfig.public.apiBase}tv/${route.params.id}/recommendations?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`),
    useFetch(`${runtimeConfig.public.apiBase}tv/${route.params.id}/videos?api_key=${runtimeConfig.public.apiSecret}&language=en-US&page=1`),


])
</script>

<style scoped>

</style>