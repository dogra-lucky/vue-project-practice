// options api
<script>
export default {
    data() {
        return {
            count:12
        }
    },
    methods: {
       increment(){
        this.count++
       } 
    },
    mounted() {
        console.log(">>>>>>>>>>>>>>>");
    },
}
</script>


// compositions api 
<script>
import {ref,onMounted } from "vue";
const count =ref(12);
function increment(params) {
    count.value++
}
onMounted(() => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}),
</script>