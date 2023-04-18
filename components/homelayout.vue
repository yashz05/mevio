<template>
    <div class=" h-screen">
        <LazyNuxtLoadingIndicator :height="5" :duration="1000" />
        <NuxtLoadingIndicator  :height="5" :duration="1000"/>

        <div class="h-14 fixed backdrop-blur-3xl  top-0 z-20 w-full px-10 py-3 justify-between flex text-white">
            <NuxtLink class="order-1 font-bold text-3xl" to="/">
                Mevio
            </NuxtLink>

            <div class="order-2 font-bold text-3xl">
                <div class="mt-1">
                    <input type="search" name="text" id="search" class="backdrop-blur-3xl bg-white/[.10] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-52 sm:text-sm border-transparent rounded-md -mt-2" placeholder="Search ..." />
                </div>
            </div>
            <div class="order-last flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     class="w-6 h-6 mx-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     class="w-6 h-6 mx-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                </svg>

            </div>

        </div>
        <slot/>
    </div>
</template>

<script>

export default {
    name: "homelayout"
}
</script>

<style scoped>

</style>