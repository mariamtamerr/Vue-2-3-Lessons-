<!-- <script set
  components: { BindingBasics },up>

</script> -->

<script>


export default {
  
  data() {
    return {
      name: 'maro',
      showPopUp: false, // closed by default

      showChild: true
    }
  },
  provide() {
    return {
      // injected: 'injected from parent',
      injected: this.name
    }
  },
  methods: {
    showFromChild(name) {
      this.showPopUp = false
      console.log('name : ', name)
    }
  }
}
</script>

<template>

<h2>click on the lesson you want to view</h2>

<router-link :to="{name: 'bindingBasics' }">Binding Basics</router-link> <br/>
<router-link to="/if-elseif-else-show">if-elseif-else-show</router-link> <br/>
<router-link to="/list-rendering">list-rendering</router-link> <br/>
<router-link to="/methods-intro">methods-intro</router-link> <br/>
<router-link to="/event-handling">EventHandling</router-link> <br/>
<router-link to="/form-handling-modifiers">FormHandlingModifiers</router-link> <br/>
<router-link to="/watchers-lessons">watchers-lessons </router-link> <br/>
<router-link to="/form-handling-modifiers">FormHandlingModifiers</router-link> <br/>
<router-link to="/props-lessons">props-lessons</router-link> <br/>
<router-link to="/emit-custom-events">emit-custom-events</router-link> <br/>
<router-link to="/http-get">http-get</router-link> <br/>
<router-link to="/life-cycle-parent"> life cycle parent</router-link> <br/>
<router-link to="/template-refs">template-refs</router-link> <br/>
<router-link to="/composition-api">composition-api</router-link> <br/>
<router-link to="/composition-api2">composition-api2</router-link> <br/>
<router-link to="/composition-api3">composition-api3</router-link> <br/>
<router-link to="/composition-api5">composition-api5</router-link> <br/>
<router-link to="/composition-api6">composition-api6</router-link> <br/>

  
<main>
  <router-view/>
</main>

  <!-- <props-lessons id="props-lesson" name="Mariam" :age="3" :isDisplayed="true" /> -->
  <!-- <emit-custom-events v-show="showPopUp" @close="showFromChild" /> <br /> -->


  <!-- Button to show the popup -->
  <!-- <button @click="showPopUp = true">Show Popup</button> -->
  <br />
  <br />
  <h5 style="margin-top: 3.5rem">
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  </h5>
  <br />
  <br />
  <br />

  <!-- -------- -->


</template>

<style></style>
