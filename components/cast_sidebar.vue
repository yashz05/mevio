<template>
    <div class="sm:block pt-14 hidden sm:h-screen overflow-y-scroll">
           <div class="m-1 " >
               <nuxt-img :src='"https://image.tmdb.org/t/p/w300"+cast.profile_path'
                         placeholder="https://dummyimage.com/500x400/1d2840/fafafa.png&text=Mevio"
                         class="  relative rounded-l h-56 w-[70%] bg-gray-900 mt-10 mb-4 mx-auto " :style="{
                                                        'z-index':-10
                      }"/>

               <div class="text-white mx-5">

                   <div class="font-bold text-3xl text-center line-clamp-3 mb-4 w-40">
                       {{cast.name}}
                   </div>

                   <div class="bg-gray-800 rounded-lg text-gray-400 text-xs shadow-lg p-5">
                       <div>
                           Birth Date :   &nbsp;
                           {{cast.birthday}}
                       </div>


                      <div>
                          Known For :  &nbsp;
                          {{cast.known_for_department}}
                      </div>
                       <div>
                          Birth Place : &nbsp;
                          {{cast.place_of_birth}}
                      </div>
                   </div>

                   <div class="my-3 text-gray-400 " v-if="cast.also_known_as.length > 0">
                       Also Known as
                        <div v-for="name in cast.also_known_as">
                            {{name}}
                        </div>


                   </div>


               </div>
           </div>

    </div>
</template>


<script >
export default {
    name: "cast_sidebar",
    props : ['cast']
}
</script>

<style scoped>

</style>