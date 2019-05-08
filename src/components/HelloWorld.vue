<template>
  <div class="hello">
    <h1 class="big">{{ msg }}11</h1>
  </div>
</template>

<script>
import { Radio ,Group} from 'vux'
export default {
  name: 'HelloWorld',
    components: {
    Radio,
    Group
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
    this.init();
  },
  methods:{
    init(){
      console.log(666)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
