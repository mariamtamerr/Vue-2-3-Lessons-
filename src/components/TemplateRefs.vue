<script>
export default {
    mounted() {
        this.$refs.inputRef.focus();
    }
}
</script>

<template>
  <div>
    <h2 v-bind="$attrs" style="font-weight: bold">Template Refs  Content & RULES :</h2>
    <br />

    <h2>
        1) we give a refernce to the element so we can access it directly in dom , and we do that when page reloads using mounted life cycle hook <br/>
        2) we use it with mounted instead of created because at created, <br/>
        the The reason is related to the timing of when child components are mounted and accessible within the parent component. <br/>
         When created() is called, child components may not have been mounted yet, <br/>
          meaning they may not be fully initialized or accessible via ref. <br/> 
        3) you call the ref using this.$refs.RefrenceName.function -->  this.$refs.inputRef.focus(); <br/>
        4) you can even use it with child components not just elements .. like "  Child ref="childRef" />"  <br/>
        
    </h2>
     <br />

    <input type="text" ref="inputRef" />

    <br />
    <br />
    <h5 style="margin-top: 3.5rem">
      ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </h5>
    <br />
  </div>
</template>

<style scoped></style>
