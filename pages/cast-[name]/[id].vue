<template>
    <homelayout>
        <div v-if="!pending" class="flex h-40">
            <div class="w-1/5 lg:block h-screen  hidden">
                <cast_sidebar :cast="cast"/>
            </div>
            <div class="w-full text-white overflow-y-auto h-screen">
                <!--                <nuxt-img :src='"https://image.tmdb.org/t/p/w300"+cast.profile_path'-->
                <!--                          placeholder="https://dummyimage.com/500x400/1d2840/fafafa.png&text=Mevio"-->
                <!--                          class="w-full sm:hidden block relative" :style="{-->
                <!--                                                                'background-repeat': 'no-repeat',-->
                <!--                                                                'background-size': 'cover',-->
                <!--                                                                'background-position': 'center center',-->
                <!--                                                                'height': '60vh',-->
                <!--                                                                'width': '100vw',-->
                <!--                                                        'z-index':-10-->
                <!--                      }"/>-->


                <div class="w-full text-white overflow-x-scroll pt-20">
                    <div class="mx-2 bg-gray-800 p-4 rounded-lg">
                        <div class="text-gray-400 text-2xl font-bold mb-2" v-on:click="refresh3">
                            Biography
                        </div>
                        {{ cast.biography }}
                    </div>
                    <div class=" sm:mx-2 my-5  w-full  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 sm:gap-2 gap-0">
                        <div v-if="!pending" v-for="(tm,i) in movies['results']"
                             class="group transition ease-in-out mx-auto delay-150  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                            <NuxtLink :to="/movie/+tm.id">
                                <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                              :year="tm.release_date"></movie_card_1>
                            </NuxtLink>
                        </div>
                    </div>
                    {{ m }}

                </div>
            </div>
        </div>
        <div v-if="error">
            ERROR
        </div>
    </homelayout>

</template>

<script setup>


const route = useRoute()
const id = route.params.id;
const page_no = ref(1);

const runtimeConfig = useRuntimeConfig()

const m = ref()
onMounted(async () => {
    scroll();
})
const {
    pending,
    error,
    data: cast
} = useLazyFetch(`${runtimeConfig.public.apiBase}person/${route.params.id}`, {
    query: {
        "api_key": runtimeConfig.public.apiSecret
    }
})
// const {
//     data: known_for
// }  = await useFetch(`${runtimeConfig.public.apiBase}find/${cast.imdb_id}`,
//     {
//         query: {
//             "api_key": runtimeConfig.public.apiSecret,
//             "language": "en-US",
//             "external_source": "imdb_id"
//         }
//     })
watch(cast, (castdetails) => {


    useHead({
        title: castdetails.name || runtimeConfig.public.appname,
        ogTitle: castdetails.name || runtimeConfig.public.appname,
        description: castdetails.biography || runtimeConfig.public.appname,
        ogDescription: castdetails.biography || runtimeConfig.public.appname,
        meta: [
            {name: 'description', content: castdetails.biography}
        ]

    })

});
const {
    data: movies,
    refresh1
} = useFetch(`${runtimeConfig.public.apiBase}discover/movie`, {
    query: {
        "api_key": runtimeConfig.public.apiSecret,
        "language": "en-US",
        "sort_by": "popularity.desc",
        "include_adult": true,
        "include_video": false,
        "page": page_no,
        "with_people": id,
        "with_watch_monetization_types": "flatrate"
    }
});





</script>

<style scoped>

</style>