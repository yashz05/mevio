<template>
    <homelayout>
        <div v-if="!pending" class="pt-20 px-4">
            <episode_card v-for="(e,i) in episodes['episodes']" :episode="e" />
        </div>
    </homelayout>
</template>


<script setup>

import {useLazyFetch} from "#app";
import Episode_card from "~/components/episode_card.vue";

const runtimeConfig = useRuntimeConfig();
const episode = useRoute().params
const {
    pending,
    data: episodes
} = useLazyFetch(`${runtimeConfig.public.apiBase}tv/${episode.tv_id}/season/${episode.season}`, {
    query: {
        'api_key': runtimeConfig.public.apiSecret,
        'language': 'en-US'
    }
})
</script>
<script>
export default {
    name: "[season]",

}
</script>

<style scoped>

</style>