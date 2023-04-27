<template>
    <homelayout>
        <div class="pt-20 font-bold text-m text-gray-50/25 ml-5 mb-5" v-on:click="new_page">{{ type.toString().toUpperCase() + '~' + name }}</div>
        <div class="mx-2 my-5  overflow-x-hidden grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2" @scroll="scroll">
            <div v-if="!pending" v-for="(tm,i) in movies['results']"
                 class="group transition ease-in-out delay-150 mx-auto  pt-2 hover:-translate-y-1 hover:scale-105 z-10">
                <NuxtLink :to="/movie/+tm.id">
                    <movie_card_1 :name="tm.title" :image="tm.poster_path" :rate="tm.vote_average"
                                  :year="tm.release_date"></movie_card_1>
                </NuxtLink>
            </div>

        </div>
        <div class="text-center text-gray-700">
            Data Provided by
            <img class="w-24 h-20 mx-auto -mt-5" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/>

        </div>

    </homelayout>
</template>

<script setup>


const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const page_no = ref(1);
const type =  route.params.type
const name =  route.params.name

function new_page() {
    if (page_no.value <= 50) {
        page_no.value++;
        const {
            pending,
            data: new_movies
        } = useFetch(`${runtimeConfig.public.apiBase}discover/${type}?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page_no.value}&with_genres=${route.params.id}&with_watch_monetization_types=flatrate`)
        watch(new_movies, (newCount) => {
            for (let i = 0; i < newCount['results'].length; i++) {
                movies.value.results.push(newCount['results'][i])
            }

        })
    }

}

onMounted(async () => {
    scroll();
})

function scroll() {
    window.onscroll = () => {
//TODO: add scroll down page
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        new_page();
    }
}

const {
    pending,
    data: movies,
    refresh
} = useLazyFetch(`${runtimeConfig.public.apiBase}discover/${type}?api_key=${runtimeConfig.public.apiSecret}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page_no.value}&with_genres=${route.params.id}&with_watch_monetization_types=flatrate`);
watch(movies, (newCount) => {
    useHead({
        title: "Genre "+ name || runtimeConfig.public.appname,
        ogTitle: "Genre "+name || runtimeConfig.public.appname,
        description:"Genre "+ name || runtimeConfig.public.appname,
        ogDescription:"Genre "+name || runtimeConfig.public.appname,
        meta: [
            {name: 'description', content:name}
        ]
    })
  })


</script>

<style scoped>

</style>