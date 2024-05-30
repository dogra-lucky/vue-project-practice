<script setup>
import {ref} from 'vue';
let a=ref(1111)
// let a= ref(100)
let b= ref(4444)

setTimeout(()=>{
    // console.log('a',a,"bbbb",b);
    a.value=22222
    b.value=333333
},2000)
</script>


<template>
<h1>{{ a }}</h1>
<h1>{{ b }}</h1>

</template>