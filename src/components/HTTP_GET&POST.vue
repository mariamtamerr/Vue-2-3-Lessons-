<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      buttonVisbility: true,

      postPosts: [],

      formData: {
        name: '',
        age: null,
        postTitle: ''
      }, 
    }
  },
  created() {
    this.getPosts();
  },

  methods: {
    // GET request
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response.data)
          this.posts = response.data // Replacing ENTIRE posts array with a NEW ONE 'nested array of posts from response' .. UPDATES DOM EFFECIENTLY
          // this.posts.push(response.data); THIS IS WRONG
        })
        .catch((error) => console.error(error))
    },

    // POST request
    postThePosts() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', this.formData)
        .then((response) => {
          console.log(response.data)
        //   here dont't forget to surround reponse.data with ARRAY BRACKETS
        // because it's actuually an OBJECT not an ARRAY
        // {name: 'Mariam Tamer', age: 45, postTitle: 'bjb', id: 101}
          this.postPosts = [response.data] // OR :  this.postPosts.push(response.data)
        })
        .catch((error) => console.error(error))
    }
  }
}
</script>

<template>
  <div>
    <h2  style="font-weight: bold">HTTP REQUESTS Content & RULES :</h2>
    <br />

    <h4 style="color: red; margin-top: 3rem">**************HTTP REQUETSS **************</h4>
    <br />

    <h2>
      1) Vue doesn't deal with server to fetch requests, instead there's HTTP Libraries in the
      middle that does the job, and ehre we're gonna use axios <br />
      2) install axios library : npm install axios <br />
      3) - make a data string/array/.. to gather the fetched data into <br />
      4) - create a method to fetch using axios , with then and catch <br />
      5) - after fetching , then get reponse.data and change the data array to contain the new
      fetched array <br />
      6) in post , the fetching axios.port(2 params) .. first is url , second is dtaa written to
      submit <br />
      <br/>
      7) what if I wanted to fetch the request when the page loads instead of when clicking on a button ?? <br/>
      here comes the created() life cycle method ... you call it , and inside it you can access any method using the this statement <br/>
    </h2>

    <br />

    <br />

    <button
      @click="
        getPosts();
        buttonVisbility = false
      "
      v-show="buttonVisbility"
    >
      load more
    </button>
    <div v-for="post in posts" :key="post.id">
      <p style="font-weight: bold">{{ post.id }}</p>
      <p style="font-weight: bold">{{ post.title }}</p>
      <p style="font-weight:">{{ post.body }}</p>
      <br />
      <br />
      <hr />
      <br />
    </div>

    <br />
    <br />

    <form @submit.prevent="postThePosts">
      <label for="name">name</label>
      <input type="text" id="name" v-model="formData.name" /> <br /><br />
      <label for="age">age</label>
      <input type="number" id="age" v-model="formData.age" /> <br /><br />
      <label for="post">post title</label>
      <input type="text" id="post" v-model="formData.postTitle" /><br /><br />

      <button>Submit</button>
    </form>

    <br /><br />
    <div v-for="post in postPosts" :key="post.id">
      <p style="font-weight: bold">{{ post.name }}</p>
      <p style="font-weight: bold">{{ post.age }}</p>
      <p style="font-weight:">{{ post.postTitle }}</p>
      <br />
      <br />
      <hr />
      <br />
    </div>

    <br />
    <br />
    <h5 style="margin-top: 3.5rem">
      ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </h5>
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped></style>
