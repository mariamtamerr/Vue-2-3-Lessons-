
<script>

    export default {
        name: 'PropsLessons',
        props: {
            name: String,
            age: {
                type:Number,
                required: true,
                default: 200, 
            },
            isDisplayed: Boolean  ,
        },
        inject: ['injected']

    }
</script>


<template >
    <br/>
     <h2 v-bind="$attrs" style="font-weight: bold">
        Props Content & RULES : 
     </h2>

     <h2 style="margin-top: 3rem;">
        1) Props is reusing component without rewriting them all over again, and also passing data from parent component to child component <br/>
        2) in parent component : <child property="value"/> <br/>
        3) in child component : <h4 v-pre>{{ value }}</h4> and in script : export default { props:['array of props', 'two'] } <br/>
        4) you can pass props as static values or dynamic values from data script <br/>
        5) there are prop types and validations <br/>
        6) prop types & validations are important when you don't know the type of props you're accepting from someone else where string or number, .... <br/>
        7) to write prop types & validations .. you write props in an object instead of an array .. 
        syntax : props: {
            key: type
        } <br/>
        8) <h4 v-pre>
        if you want a prop to be of a type other than string 
            props: {
                name: {
                    type: String,
                    required: true,
                    default: 'no name untill changed'

                }
            } 
            ..where name is changed to a new object with 3 properties (the default one is optional) .. insetad of name being a property itself <br/>
            and if you want to accept the property that's not a string but is a number or something else, like age ,, then you should use v-bind so vue knows it's a number not a string ..
            for example in parent component : <child :age="3" :isDisplayed="false" />
        </h4> <br/>
        9) Non-Prop Attributes ( id, class, style, ..) <br/>
        10) you don't have to accept them in the props object as they will be applied to your  component container big div that holds ur entire component because it's the default behaviour ..  <br/>
        11) if you want to disable this behavior, you add a new property like watchers, computed, data, props,.. called : inheritAttrs: false  <br/>
        12) if you want a certain element to inherit the non prop attr , you v-bind it to something called $attrs .. example : v-bind="$attrs" <br/>

     </h2>
     <br/>

     <h4 style="color:red; margin-top: 3rem;">************** Provide & inject ************** </h4>
          <br/>
         
        <h2>
            1) Provide and inject .. is used to pass data from a parent to a very nested child  without having to pass it manually as props .. it's like passing data from great grandfather to grandchildren in one step without having to pass it manually as props first to parents so children could take it <br/>
            2) they're treated as properties like watchers, computed, methods, ... <br/>
            3) provide is passed from parent ... inject is accepted at children <br/>
            4) there are 2 syntaxes depending if you only wanna use the attribute in children or the parent as well <br/>
            5) if in children only then at parent write .. provide: {name:'maro'} and at children .. inject: ['name'] <br/>
            6) if you wanna use the value at parent as well .. then at parents write the provide as a function that returns an object, but first add it in data .. example: data() { return { name: 'maro'} }, provide() { return { name : this.name } } <br/>
        </h2>

        <br/>




    <h4 style="color:red; margin-top: 3rem;">************** props ************** </h4>
          <br/>
          <br/>

        <h2 style="margin-top: 3rem;">hello {{ name }} passed from props with age {{age}} and isDisplayed value of {{ isDisplayed ? "yes" : "no" }}</h2>

          <br/>



          <h4 style="color:red; margin-top: 3rem;">************** injected ************** </h4>
          <br/>
          <br/>

        <h2 style="margin-top: 3rem;"> injected name is {{ injected }}</h2>

        <br/>




        
<br/>
          <br/>

<br/> <br/><h5 style="margin-top: .5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/> <br/>


</template>

