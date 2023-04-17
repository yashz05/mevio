<template>

    <div class="rounded-md mx-4 relative" style="width:360px; height:190px">
        <div class="absolute h-44 bottom-0 rounded-md  bg-gradient-to-t  from-black w-full  text-white">
            <div class="absolute bottom-5 left-5">{{ title }}</div>
        </div>
        <nuxt-img :src="'https://img.youtube.com/vi/'+id+'/0.jpg'" class="rounded-xl mr-5 "
                  style="width:360px; height:180px;object-fit: cover"/>
        <div class="absolute bottom-[35%] rounded-md   right-[45%]  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="text-red-500 w-20 h-20">
                <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clip-rule="evenodd"/>
            </svg>

        </div>

    </div>
</template>

<script>
export default {
    name: "video_card",
    props: [
        "id", "type", "title"
    ]
}
</script>

<style scoped>

</style>