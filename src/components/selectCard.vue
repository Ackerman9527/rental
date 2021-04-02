<template>
  <div class="card">
    <div class="cardbody" :style="{backgroundColor:color}" >
      {{ name }}
    </div>
    <div class="cardtext">
      {{ name }}
    </div>
  
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default:''
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='scss' scoped>
.card {
  width: 120px;
  height: 100px;
   .tooltips {
     width: 100%;
     height: 100%;
   }
  .cardbody {
    width: 120px;
    height: 60px;
    // background-color: #fa6f58;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    font-weight: 800;
    color: #fff;
    border-radius: 8px;
  }
  .cardtext {
    text-align: center;
    line-height: 30px;
  }
}
</style>