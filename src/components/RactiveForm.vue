
<script setup>
import { reactive } from 'vue';
import RefsInVue from './RefsInVue.vue'

let num = reactive({a:44,b:2})

let abc= {
    a:[32,1,3,6]
}

let count =44
setTimeout(() => {
    console.log('num',num.a);
    count=23232
    console.log('FFFFF',num.b)
    num.a=10000
    console.log('FFFFF',abc.a)

}, 3000);

</script>

<template>
    <h1>{{num.a}}</h1><br>
    <h1>{{abc.a[2]}}</h1>
    <RefsInVue />

</template>




