

<script>
export default { 
    data() {
        return {
            num:10, 
            isDisplayed: true,
            isDisplayed2: false,
        }
    }
}
</script>



<template>
    <!-- ========= RULES ================= -->
    <!-- 1) this is called CONDITIONAL RENDERING -->
    <!-- 2) they must follow each other or condition won't be displayed -->
    <!-- 3) the v-if condition is to MOUNT OR UNMOUNT from the browser .. meaning if it's not true, it will appear as commented on browser like it doesn't exist -->
    <!-- 4) the TEMPLATE is like an invisible wrapper that won't be available on DOM, 
    the div is also a wrapper, but will be visible on DOM and take place -->
    <!-- 5) v-show is like v-if but instead of being mounted or not, it toggles the CSS display property from display:show to display:hidden and IS ALWAYS MOUNTED on DOM  -->
    <!-- 6) TEMPLATE wrapper itself CAN'T render v-show, only renders v-if, but any CHILD INSIDE IT can render v-show -->
   
    <h2 style="font-weight: bold">
        Conditional Rendering  Content & RULES : 
     </h2>
<br/>
<br/>
     <h2>
        1) this is called CONDITIONAL RENDERING <br/>
        2) they must follow each other or condition won't be displayed  <br/>
        3) the v-if condition is to MOUNT OR UNMOUNT from the browser .. meaning if it's not true, it will appear as commented on browser like it doesn't exist <br/>
        4) the TEMPLATE is like an invisible wrapper that won't be available on DOM, 
        the div is also a wrapper, but will be visible on DOM and take place <br/>
        5) v-show is like v-if but instead of being mounted or not, it toggles the CSS display property from display:show to display:hidden and IS ALWAYS MOUNTED on DOM <br/>
        6) TEMPLATE wrapper itself CAN'T render v-show, only renders v-if, but any CHILD INSIDE IT can render v-show 


     </h2>
         

<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


    <h4 style="color:red">************** v-if , v-else-if , v-else , v-show ************** </h4>
          <br/>
          <br/>


    <h4 v-if="num === 0">v if when number is 0</h4>
    <h4 v-else-if="num < 0">v else if when number is negative </h4>
    <h4 v-else-if="num > 0">v else if when number is positive </h4>
    <h4 v-else>v else when this is not a number</h4> <br/>

    <template v-if="isDisplayed">
        <h4 v-show="isDisplayed">this is using v-show which is always mounted on dom and only toggles the css display property </h4>
        <h4 v-show="isDisplayed2">appears in inspect as display:"none" .. this is using v-show which is always mounted on dom and only toggles the css display property </h4>
    </template>


<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>




</template>
