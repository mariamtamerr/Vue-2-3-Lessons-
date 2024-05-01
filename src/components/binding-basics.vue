<!-- <script setup>

</script> -->

<script>
export default {
  name:'App',
  data() {
    return {
      name: 'Mariam',
      question: 'How are you?',
      html: '<h1>H1 Heading</h1>',
      html2: `<a href='#' onclick="alert('You have been hacked!')">Win a prize ALERT! </a>`,
      headingId: 'headingId',
      isDisabled: true,
      singleClass:'singleClass',
      isPromoted: true,
      bindingColor: 'blue',
      bindingColor2: 'purple',
      // object
      stylesObjectForArray : {
        backgroundColor:'#eee',
        'margin-top':'17px'
      }, 
      bindingShorthandClass: 'hello',
    }
  }
}
</script>

<template>

  <!-- content -->
    <!-- 1) binding text or text interpolation ( using double braces / v-text) -->
    <!-- 2) Binding HTML -->
    <!-- 3) Binding Attributes (id, disabled) -->
    <!-- 4) Binding Attributes Classes 
              - Single DYnamic or Static classes
              - Conditional Rendering 
              - Multiple classes using Objects
              - Multiple classes using  Arrays -->
    <!-- 5) Binding Styles ( Object , Array )  -->
    <!-- 6)  v-bind shorthand -->



     <h2 style="font-weight: bold">
     Binding Basics Content : 
     </h2>
<br/>
<br/>
     <h2>
    1) binding text or text interpolation ( using double braces / v-text) <br/>
    2) Binding HTML <br/>
    3) Binding Attributes (id, disabled) <br/>
    4) Binding Attributes Classes <br/>
              - Single DYnamic or Static classes <br/>
              - Conditional Rendering <br/>
              - Multiple classes using Objects <br/>
              - Multiple classes using  Arrays  ) <br/> 
    5) Binding Styles ( Object , Array ) <br/>
    6)  v-bind shorthand


     </h2>
         

<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>

<br/>
<br/>
<br/>

<!-- 1) binding text or text interpolation -->
<h4 style="color:red">1) binding text or text interpolation</h4>
          <br/>
          <br/>
        <!-- first way : using mustache 'double curly braces' -->
      
          <h4 style="color:orangered; ">first way : using mustache 'double curly braces'</h4>
          <br/>

<!-- =========== example  ================== -->
          <div>
            Hello {{name}}. {{ question }}
        </div>
<!-- ==================== end example ====================== -->
        

<br/> <br/> <br/>
        
        <!-- second way : using v-text ... can't have children --> 
        <h4 style="color:orangered">second way : using v-text ... can't have children </h4>
        <br/>

<!-- =========== example  ================== -->
        <div v-text="name">
        </div> 
<!-- =========== end example  ================== -->

        <br/>
        <br/> <br/><h5> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>

<!-- ------------------------------------------------------------------------------------ -->
<!-- 2) binding html .. can't have children -->
<h4 style="color:red">2) binding html .. can't have children </h4>        
<br/>

<!-- =========== example 1 ================== -->
        <div v-html="html">
        </div>
<!-- =========== END example 1   ================== -->

        <br/>
<!-- =========== example 2 ================== -->
        <div v-html="html2">
        </div>
<!-- =========== END example 2   ================== -->

<br/> <br/><h5> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


<!-- --------------------------------------------------------------------------- -->
<!-- 3) binding attributes (id, disabled for inputs, class) -->
<h4 style="color:red">3) Binding attributes (id, disabled for inputs, class) </h4>        
<br/><br/>


<h4 style="color:orangered">id </h4>        
<br/>

<!-- id -->
<div v-bind:id="headingId">
id appears in inspect
</div>

<!-- -------- -->

<br/><Br/><h4 style="color:orangered">Disabled Button</h4>        
<br/>

<!-- Disabled Button-->
<button v-bind:disabled="isDisabled">
  Submit Button Disabled
</button>

<br/><br/>
<h4 style="color:orangered; margin-top: 3rem">Disabled Input  </h4>        


<!-- Disabled Input -->
<br/>
<input type="text" v-bind:disabled="isDisabled" value="Name input is disabled"/>


    

<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


<!-- ----------------------------------------------- -->

<!-- Binding Classes Both Static & Dynamic -->
<br/>
<h4 style="color:red">4) Binding Classes Both Static & Dynamic </h4>        
<br/><br/>

    <!-- single class -->
    <div v-bind:class="singleClass">
      4) 1. Single Dynamic Class in inspect
    </div>

    <br/>
    <br/>
    <!-- conditional binding  -->
    <div v-bind:class="isPromoted ? 'promoted1' : '' ">
      4) 2. conditional binding in inspect using ternary operator
    </div>

    <br/>
    <br/>

    <div v-bind:class="isPromoted && 'promoted2' ">
      4) 2. conditional binding in inspect using and operator
    </div>

    <br/> <br/>
<!-- multiple or many classes -->
<!-- using arrays -->
<div v-bind:class="[isPromoted && 'promoted1' , 'new' ]">
  4) 3. multiple classes or many classes using ARRAYS conditional rendering
</div>

<br/> <br/>

<!-- using objects -->
<!-- {
  class: value of contional rendering
} -->
<div v-bind:class="{
promoted1: isPromoted, // means promoted1 will be applies if isPromoted is true
}">
  4) 4. multiple classes or many classes using OBJECTS conditional rendering
</div>





<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>

 <!-- --------------------------------------------------------- -->

 <!-- 5) Binding Styles -->
 <br/>
<h4 style="color:red">5) Binding Styles ( object , array )</h4>        
<br/><br/>

 <!-- using OBJECT sytax -->
 <div v-bind:style="{
  backgroundColor:'gray',
  marginBottom: '10px', 
  color: bindingColor,
 }">
Binding Styles using OBJECT syntax :  using v-bind:style="{

}"
 </div>

 <br/><br/>

  <!-- using ARRAY sytax -->
  <div v-bind:style="[bindingColor2,stylesObjectForArray]">
      Binding Styles using ARRAY syntax :  using v-bind:style="[bindingColor2,stylesObjectForArray]"
 </div>


 <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


<!---------------------------------------------->

<br/> 

<!-- 6)  v-bind shorthand -->

<br/>
<h4 style="color:red">6)  v-bind shorthand</h4>        
<br/><br/>

<div :class="bindingShorthandClass">
  v-bind:class="attribute" <br/> has a shorthand where you remove the v-bind and just leave <br/>  <b> :class="attribute" </b>
</div>


<br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> -------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


<!---------------------------------------------->




<!-- ------------------------------------------- -->

</template>

<style scoped>

.promoted1, .promoted2 {
  font-family:cursive;
  font-weight: bold;
  font-size: 1.2rem;
}

.promoted1 {
  color: rgb(240, 94, 119);
}

.promoted2 {
  color: blue; 
}

.new {
  color:green; 
  line-height: 2;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
