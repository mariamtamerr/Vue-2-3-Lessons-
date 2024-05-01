<script>
export default {
  // emits takes an array of events
  emits: ['close']
}
</script>

<template>
  <div>
    <h2 v-bind="$attrs" style="font-weight: bold">Emits Content & RULES :</h2>
    <br />

    <h4 style="color: red; margin-top: 3rem">**************Emit custom events **************</h4>
    <br />

    <h2>
      1) To emit an event or data from children to parent .. like a pop up modal that is show button
      in parent and when shown, it's close button is on children , so you can emit it from children
      to parent to close it after opening <br />
      2) in script block, you type 'emits' just like methods and props , ... <br/>
      3) to listen to it in your component, you call it via dollar sign : @click="$emit('event name', 'mmkn add params like data like name')" .. but take care enu u listen with 'emit' not 'emits' like in script block <br/>
      4) you accept it in parent component like @click it's @event-name for example if event name is close then : @close="condition" <br/> 
    </h2>

    <br />

    <br />

    <p>this is a pop up child</p>
    <button @click="$emit('close', 'Mariam')">close pop up</button>
  </div>

  <!-- <br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/> -->
</template>

<style scoped></style>
