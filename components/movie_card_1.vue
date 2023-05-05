<template>
    <div class="snap-both ">
        <div class="mx-3  rounded-xl" :style="{ 'height': '195px',
                                                        'width': '139px'}">
            <nuxt-img class="rounded-xl"
                      :src="image != null ? 'https://image.tmdb.org/t/p/w154'+image :'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                      width="300"
                      height="169"
                      :placeholder="'https://dummyimage.com/500x400/1d2840/fafafa.png&text='+runtimeConfig.public.appname"
                      lazy
                      :style="{' background-repeat':'no-repeat',
                                                        'background-size':'cover',
                                                        'height': '195px',
                                                        'width': '139px',
                                                        'z-index':-10
                       }"/>

        </div>
        <div class="text-white/25 ml-3 my-2 w-full text-sm flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     class="w-4 h-4 text-orange-600">
                    <path fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"/>
                </svg>
            </div>

            <div class="ml-1 text-white">{{ rate.toFixed(1) }}</div>
            <div class="ml-2 w-14 mt-0.5 truncate text-xs">

                <svg v-if="type =='tv'" class="-mt-1 " width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.11861L9.4131 4.70551L11.5371 6.82954L14.3667 4L15.7782 5.41151L13.3137 7.87598H18C19.1046 7.87598 20 8.77141 20 9.87598V16.876C20 17.9805 19.1046 18.876 18 18.876H6C4.89543 18.876 4 17.9805 4 16.876V9.87598C4 8.77141 4.89543 7.87598 6 7.87598H9.75736L8 6.11861ZM18 9.87598H6V16.876H18V9.87598Z" fill="currentColor" /><path d="M8 19.876H16V20.876H8V19.876Z" fill="currentColor" /></svg>
                <svg v-else class="-mt-0.5 " width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                </svg>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import 'animate.css'
const runtimeConfig = useRuntimeConfig()
</script>
<script lang="ts">
export default {
    props: [
        'name', 'image', 'rate', 'year','type'
    ]
}
</script>

<style scoped>

</style>