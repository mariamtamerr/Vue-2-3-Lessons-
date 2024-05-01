<!-- provide and inject PARENT -->

<script>
import { provide, reactive, ref, toRefs } from 'vue'
import CompositionApi4 from './CompositionApi4.vue'
export default {
  components: { CompositionApi4 },

  //   compoisition api
  setup() {
    const c_parent = provide('c_name', 'composition from parent using provide & inject')

    //    using ref & reactive
    const count = ref(0)
    const state = reactive({
      fname: 'Mariam',
      lname: 'Tamer'
    })

    // Providing data to child components
    provide('count', count)
    provide('state', state)

    // providing a function handler to child .. can work from both parent and child
    // it's better to provide it from parent to child and not create one for child
    function incrementCount() {
        count.value++
    } 

    provide('incrementCount', incrementCount )

    return {
      c_parent,
      count,
      ...toRefs(state),
      incrementCount,
    }
  },
// ************************************************************************
  // options api
  data() {
    return {
      name: 'test'
    }
  },
  provide() {
    return {
      username: this.name
    }
  }
}
</script>

<template>
  <div>
    <h4 style="color: blue; margin-top: 3rem">
      ******** replacing PROVIDE & INJECT with provide & inject functions in setup using ref and
      reactive **********
    </h4>
    <br />

    <h2>options parent : {{ name }}</h2>
    <!-- we put here name NOT username mlnash d3wa bll fl inject da byt7t fl child msh hna flparent -->

    <h2>parent counter : {{count}}</h2>
    <button @click="incrementCount"> parent button increment count </button>

    <br/>
    <br/>
    <br/>

    <composition-api-4 />
  </div>
</template>

<style scoped></style>
