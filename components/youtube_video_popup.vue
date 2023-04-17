<template>
    <div v-if="show" v-on:click="show = false" :class="show === true ? 'ease-out duration-300 opacity-100' :'ease-in duration-200 opacity-0' "
         class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


            <span :class="show === true ?'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100': 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95' "
                  class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div class="inline-block align-bottom bg-gray-900  rounded-lg  pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                    <iframe v-if="show" width="330" height="315" :src="'https://www.youtube.com/embed/'+id+'?controls=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="mt-5 sm:mt-6">
                    <button type="button"
                            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "youtube_video_popup",
    props: [
        'id', 'type', 'show'
    ]
}
</script>

<style scoped>

</style>