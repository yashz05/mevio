<template>
    <div>
        <div class=" mx-3 rounded-xl" :style="{ background: `url('https://image.tmdb.org/t/p/w300/${image}')  `,
                                                            'background-repeat': 'no-repeat',
                                                                'background-size': '100% 180%',
                                                                'background-position': '0% 80%',
                                                                'height': '150px',
                                                                'width': '210px',
                                                        'z-index':-10
                                               }">


        </div>
        <div class="text-white/25 ml-3 my-2 w-full text-sm flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     class="w-4 h-4 text-yellow-500">
                    <path fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <div class="ml-3">{{ rate }}</div>

        </div>
    </div>

</template>

<script lang="ts">

export default {
    props: [
        'name', 'image', 'rate', 'year'
    ]
}
</script>

<style scoped>

</style>