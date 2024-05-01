<!-- provide and inject CHILD -->

<script>
import { inject, toRefs } from 'vue'

export default {
  // composition api
  setup() {
    // static
    const c_child = inject('c_name')

    // dynamic  using ref & reactive
    // Injecting data from parent components
    const childCount = inject('count', 0) // 0 is default if not given from parent
    const childState = inject('state', {}) //empty object is default if not given from parent


    // injecting function from parent
    const childIncrementer =  inject('incrementCount')



    return {
      c_child,
      childCount,
      ...toRefs(childState),
      childIncrementer,
    }
  },

  // options api
  inject: ['username']
}
</script>

<template>
  <div>
    <h2>child injected using options api : {{ username }}</h2>
    <br />

    <h2>child injected using composition api : {{ c_child }}</h2>
    <br />

    <h2>child injected counter using REF composition api : {{ childCount }}</h2>
    <br />

    <button @click="childIncrementer">child incremeneter injected from parent</button>


    <!-- here we take the name of KEYS not the reactive function contant name -->
    <h2>child injected using REACTIVE composition api : {{ fname }} {{ lname }}</h2>
    <br />
    
  </div>
</template>

<style scoped></style>
