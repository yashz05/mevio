<template>
    <div class="flex relative  text-white w-full h-min snap-start bg-gray-800 mb-4">
        <div class="flex">
            <div class="mr-4 flex-shrink-0">
                <nuxt-img class="md:w-[150px] w-[100px] h-full object-cover"
                          :src="'https://image.tmdb.org/t/p/w300/'+episode.still_path"
                          :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"></nuxt-img>

            </div>
            <div>
                <h4 class="text-lg font-bold"> {{ episode.name }}</h4>
                <p class="text-sm text-gray-500">
                    E{{ episode.episode_number }}
                </p>
                <p class=" py-3 text-gray-500 line-clamp-2 overflow-y-auto">{{ episode.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
<script>
export default {
// { "air_date": "2023-01-03", "episode_number": 1, "id": 4122017, "name": "Global Spyware Scandal: Exposing Pegasus (1)", "overview": "Investigating the powerful spyware Pegasus, sold to governments around the world by the Israeli company NSO Group. This two-part series from FRONTLINE and Forbidden Films examines how the hacking tool was used to spy on journalists, activists, the fiancée of Saudi journalist Jamal Khashoggi and others.", "production_code": "", "runtime": 55, "season_number": 42, "show_id": 4384, "still_path": "/xjdX16oCbWrnxZXZm7Gy90DPQVV.jpg", "vote_average": 0, "vote_count": 0, "crew": [], "guest_stars": [] },
    name: "episode_card",
    props: [
        'episode'
    ]
}
</script>

<style scoped>

</style>