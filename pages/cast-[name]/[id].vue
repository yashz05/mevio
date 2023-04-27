<template>
    <homelayout>
        <div v-if="!pending" class="sm:flex sm:h-40">
            <div class="w-1/5 lg:block h-screen  hidden">
                <cast_sidebar :cast="cast"/>
            </div>

            <div class="w-full text-white sm:overflow-y-auto sm:h-screen">
                <div class="h-[60vh] relative  sm:hidden block mt-10">
                    <nuxt-img :src='"https://image.tmdb.org/t/p/w300/"+cast.profile_path'
                              :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                              class="w-full relative" :style="{
                                                                'background-repeat': 'no-repeat',
                                                                'background-size': 'contain',
                                                                'background-position': 'center center',
                                                                'height': '60vh',
                                                                'width': '100vw',
                                                        'z-index':-10
                      }"/>
                    <div class="absolute bottom-0 bg-gradient-to-t h-[50vh] from-black w-full">

                    </div>
                </div>
                <div class="text-white   overflow-x-hidden  sm:pt-20 pt-2">
                    <div class="mx-2 bg-gray-800 p-4 rounded-lg">
                        <div class="text-white sm:hidden block">
                            <div class="font-bold text-3xl left line-clamp-3 mb-4 w-40">
                                {{ cast.name }}
                            </div>

                            <div class=" ">
                                <div>
                                    Birth Date : &nbsp;
                                    {{ cast.birthday }}
                                </div>


                                <div>
                                    Known For : &nbsp;
                                    {{ cast.known_for_department }}
                                </div>
                                <div>
                                    Birth Place : &nbsp;
                                    {{ cast.place_of_birth }}
                                </div>
                            </div>

                            <div class="my-3 text-gray-400 " v-if="cast.also_known_as.length > 0">
                                Also Known as
                                <div v-for="name in cast.also_known_as">
                                    {{ name }}
                                </div>

                            </div>


                        </div>
                        <div class="text-gray-400 text-2xl font-bold mb-2" v-if="cast.biography.length >  0">
                            Biography
                        </div>
                        {{ cast.biography }}
                    </div>
                    <div class="  my-5  w-full  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 sm:gap-0  gap-0">
                        <div v-if="movies != null" v-for="(tm,i) in movies['results']"
                             class="group transition ease-in-out sm:mx-0 mx-auto delay-150 pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                            <NuxtLink :to="/movie/+tm.id">
                                <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                              :year="tm.release_date"></movie_card_1>
                            </NuxtLink>
                        </div>
                    </div>
                    {{ m }}

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