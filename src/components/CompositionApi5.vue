<!-- life cycle hooks  -->

<script>
 import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'
    export default {
       
        // here we have 6 instead of 8 bc the created ones are replaced with setup function itself
        // we put ON before each function name + import it from vue

        // composition api
        setup() {
            
            onBeforeMount(() => {
                
            }),(() => {
                console.log('Composition Life cycle onBeforeMount')
            })

            onMounted(() => {
                console.log('Composition Life cycle onMounted')
            })


            onBeforeUpdate(() => {
                console.log('Composition Life cycle onBeforeUpdate')
            })

            onUpdated(() => {
                console.log('Composition Life cycle onUpdated')
            })

            onBeforeUnmount(() => {
                console.log('Composition Life cycle onUpdated')
            })

            onUnmounted(() => {
                console.log('Composition Life cycle onMounted')
            })




            // for input ref focus using composition api
            const c_inputRef = ref(null)



            
            onMounted(() => {
                c_inputRef.value.focus()
            })

            

        return{
            c_inputRef,
        }
        } , 




        // options api
        mounted() {
            this.$refs.inputRef.focus()
        },
        
    }
</script>

<template>
    <div>
        <h4 style="color: blue; margin-top: 3rem">
      ******** replacing life cycle hooks **********
    </h4>
    <br />
        <input type="text" placeholder="options template ref" ref="inputRef"/> <br/>
        <input type="text" placeholder="composition template ref" ref="c_inputRef"/> <br/>
    </div>
</template>


<style scoped>

</style>