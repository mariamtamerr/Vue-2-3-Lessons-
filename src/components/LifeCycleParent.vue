<script>
import LifeCycleHooks from './LifeCycleHooks.vue'
export default {
  components: { LifeCycleHooks },

  data() {
    return {
      showChild: true
    }
  },

 
    // life cycle hooks
    beforeCreate() {
      console.log('parent beforeCreate')
    },
    created() {
      console.log('parent created')
    },
    beforeMount() {
      console.log('parent beforeMount')
    },
    mounted() {
      console.log('parent mounted')
    },
    beforeUpdate() {
      console.log('parent beforeUpdate')
    },
    updated() {
      console.log('parent updated')
    },
    beforeUnmount() {
      console.log('parent beforeUnmount')
    },
    unmounted() {
      console.log('parent unmounted')
    }
  
}
</script>

<template>
  <div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
    
    <h5 style="margin-top: 3.5rem">
      ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </h5>
    <p>Parent comonent</p>
    <button @click="showChild = !showChild">Toggle Child</button>
    <life-cycle-hooks v-if="showChild" />
  </div>
  <br/> <br/> <br/> <br/> 
</template>

<style scoped></style>
