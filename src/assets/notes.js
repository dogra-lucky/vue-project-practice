// api or coding styles in vue.js are optional and compositions
// option types were practiced before vue3 and follow oops concepts 


//components and its types
//sfc- single file component that contains js, css , html block.
//these components contains manly three langue i.e template block, script block and styling block.
// use src for importing seperate styling, script or template block.
// i.e.
//  <template src = "./abc.html">

//  </template>





//chapter 2 (vue components and its types)

// local components and global components 

//local components are imported in script block of component and used in parent components 
// i.e 
// <script > import compA from "./components/compA" </script>
// <template> <compA/>  </template>


// global components are imported in main.js file and can be used in other components without import
// i.e
// code in main.js file 
// import compA from "./components/compA"
// const app = createApp({});
// app.component('compA', compA); // Register globally
// app.mount('#app');


// chapter3 html tag attribute binding
// 
// <img v-bind:attr_name="attr_value">  </img>
// <img :attr_name="attr_value">  </img>



