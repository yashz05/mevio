<template>
    <homelayout>
        <div class="text-white" v-if="pending">LOADING</div>
        <div v-else class="w-full pt-16">
            <div class="w-full relative" :style="{
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
                <div class="absolute bottom-10 ml-10 flex">

                    <img :src='"https://image.tmdb.org/t/p/w500/"+movie.poster_path'
                         class="sm:w-[170px] sm:h-[250px] rounded-xl sm:mx-0 w-full mx-auto w-[140px] -mb-20"/>
                    <div class="text-white mx-4 my-3">
                        <div class="text-3xl"> {{ movie.title }}</div>
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
                            <div class="ml-3"> {{ movie.release_date }}</div>

                        </div>
                        {{ movie.overview }}

                    </div>

                </div>

            </div>
            <div class=" mt-10 bg-gray-900 px-10">
                <div class="font-bold text-m text-gray-50/25 mt-12">Genres</div>

                <div class="flex mt-3">
                    <div v-for="genre in movie.genres"
                         class="bg-gray-50/10 text-center rounded-lg mr-3 p-4  text-xs pt-1 font-thin h-7 text-white text-ellipsis overflow-hidden">

                        {{ genre.name }}
                    </div>
                </div>
            </div>
        </div>
    </homelayout>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const {
    pending,
    data: movie
} = useLazyFetch(`${runtimeConfig.public.apiBase}movie/${route.params.id}?api_key=${runtimeConfig.public.apiSecret}&language=en-US`)
watch(movie, (moviedetail) => {

})

</script>

<style scoped>

</style>