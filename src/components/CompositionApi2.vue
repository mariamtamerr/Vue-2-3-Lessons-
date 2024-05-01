<!-- replacing computed & watchers -->

<script>
import _ from 'lodash';
import { computed, reactive, ref, toRefs, watch } from 'vue';

export default {

    setup() {

// ================  replacing COMPUTED PROPERTIES with computed function in setup using ref ============ 
        const c_ref_firstname = ref('')
        const c_ref_lastname = ref('')

        const c_ref_fullname = computed( () => {
            return c_ref_firstname.value + ' ' + c_ref_lastname.value;
        })

        // replacing COMPUTED PROPERTIES with computed function in setup using reactive
        const c_reactive_names = reactive({
            c_reactive_firstname : '',
            c_reactive_lastname : '',
        }) 

        const c_reactive_fullname = computed( () => {
            return c_reactive_names.c_reactive_firstname + ' ' + c_reactive_names.c_reactive_lastname
        })



// ===================== replacing WATCHERS with watch function in setup using ref ============================
        const name = ref('')
        const text1 = ref('')
        const text2 = ref('')


        // takes 2 arguments : (data value , function to watch) .. might take 3rd as immediate
        // if single data value , then single function new value and old value to watch
        // if multiple data value , then data is array and new value&old value are called new valueS & oldvalueS with S 
        watch(name, (newValue, oldValue) => {
            console.log('old value', oldValue)
            console.log('new value', newValue)

        })

        // multiple watch values in array + immediate 
        watch( [text1,text2] , (newValues, oldValues) => {

            console.log('old text 1 value', oldValues[0])
            console.log('new text 1 value', newValues[0])

            console.log('old text 2 value', oldValues[1])
            console.log('new text 2 value', newValues[1])
        },
        {
            immediate: true,
        })


// ======================== replacing WATCHERS with watch function in setup using reactive ======================================================================= 
        
        // MUST be used with GETTER FUNCTION
        // can be used for single or multiple data values
        // takes 2 arguments : 1) getter .. 2)function of new & old
        // can take third argument : {deep: true} for nested objects in reactive
        const testreactive = reactive({
            name1: '',
            name2: '',
            options: {
                heroName:'', 
            }
        })

        // multiple values first

// getter function that returns a copy of reactive data 3shan msh hyshtaghal reactive a dynamic mn gherha 
        watch( () => {
           return {...testreactive}
        } , 
    
            (oldValue, newValue) => {
                console.log('old name 1 : ', oldValue.name1)
                console.log('old name 2 : ', oldValue.name2)
                console.log('new name 1 : ', newValue.name1)
                console.log('new name 2 : ', newValue.name2)
            }
            )


            // now single value
            watch(()=>testreactive.name1 , (newValue, oldValue)=> {
                console.log('old value : ' , oldValue)
                console.log('new value : ' , newValue)
            })

            // now deep option for nested value + 
            // npm i lodash 
            // import _ from 'lodash';
            // _.cloneDeep(nested objects) to make a copy of it to work .. ya ema msh htshtghl sa7 welnew value htfdl zy el old value
            watch(()=>_.cloneDeep(testreactive.options), (newValue, oldValue)=> {
                console.log('old value : ' , oldValue)
                console.log('new value : ' , newValue)
            }
            
            , { deep: true } 
        
        )





// ==============================================================================

        return {
            c_ref_firstname,
            c_ref_lastname,
            c_ref_fullname,
            ...toRefs(c_reactive_names),
            c_reactive_fullname,
            name,
            text1,
            text2,
            ...toRefs(testreactive),
            
        }
    },


  data() {
    return {
      o_firstname: '',
      o_lastname: ''
    }
  },

  computed: {
    
    fullname() {
        return this.o_firstname + ' ' + this.o_lastname
    }
  }
}
</script>

<template>
  <div>

    <h4 style="color: blue; margin-top: 3rem">******** replacing COMPUTED PROPERTIES with computed function in setup using ref and reactive **********</h4>
    <br />

    <input type="text" placeholder="options firstname" v-model="o_firstname"/> <br/> 
    <input type="text" placeholder="options lastname" v-model="o_lastname"/> <br/> 
    <h2>Options full name is : {{ fullname }}</h2>
    <br /><br />


    <input type="text" placeholder="composition ref firstname" v-model="c_ref_firstname"/> <br/> 
    <input type="text" placeholder="composition ref lastname" v-model="c_ref_lastname"/> <br/> 
    <h2>composition ref full name is : {{  c_ref_fullname }}</h2>
    <br /><br />


    <input type="text" placeholder="composition reactive firstname" v-model="c_reactive_firstname"/> <br/> 
    <input type="text" placeholder="composition reactive lastname" v-model="c_reactive_lastname"/> <br/> 
    <h2>composition reactive full name is : {{  c_reactive_fullname }}</h2>
    <br /><br />


    <h4 style="color: blue; margin-top: 3rem">******** replacing WATCHERS with watch function in setup using ref and reactive **********</h4>
    <br />
    <input type="text" placeholder="watchers single ref " v-model="name"/> <br/> 
    <input type="text" placeholder="watchers multiple ref " v-model="text1"/> <br/> 
    <input type="text" placeholder="watchers multiple ref " v-model="text2"/> <br/> 

    <br />
    <input type="text" placeholder="watchers multiple reactive " v-model="name1"/> <br/> 
    <input type="text" placeholder="watchers multiple reactive " v-model="name2"/> <br/> <br/>

    <input type="text" placeholder="watchers single reactive " v-model="name1"/> <br/> <br/> 

    <input type="text" placeholder="watchers deep for nested reactive " v-model="options.heroName"/> <br/> 




  </div>
</template>

<style scoped></style>
