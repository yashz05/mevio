<template>

    <div class="rounded-md">
        <iframe class="rounded-xl mr-5" width="360" height="215" :src="'https://www.youtube.com/embed/'+id"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: "video_card",
    props: [
        "id", "type"
    ]
}
</script>

<style scoped>

</style>