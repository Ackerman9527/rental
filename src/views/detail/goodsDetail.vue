<template>
  <div style="width:100%;height:100%">
    <div class="header">
      <span class="link-title"
        ><a @click="$router.go(-1)">返回首页</a
        >&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;商品详情</span
      >
    </div>
    <div class="detailcenter">
         <div class="detailtop">
             <div class="detailleft">
                  <img src="~@/assets/images/detailfake.png" alt="">
             </div>
             <div class="detailright">
                  <div class="righttitle">
                       <div>{{info.title}}</div> 
                       <div>游戏区服 <span>{{info.belong}}</span></div>
                  </div>
                  <div>
                     <span>商品编号<span>{{info.id}}</span> </span>
                     <span>商品热度<span>{{info.hot}}</span></span>
                     <span>租号押金<span>{{info.deposit}}</span></span>
                  </div>
                  <div class="商品">
                       <div>￥2.50</div>
                       <div>￥35.00</div>
                       <div>￥247.50</div>
                       <div>￥17.25</div>
                  </div>
                  <div></div>
             </div>
         </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      info:{
        title:'107w/50v/你说你妈呢  什么玩意儿  我了',
        belong:'穿越火线-电信-上海一区',
        id:'34231616197804',
        hot:'2782',
        deposit:'0',
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='scss' scoped>
.header {
  width: 100%;
  min-width: 1200px;
  height: 34px;
  line-height: 34px;
  background-color: #f8f8f8;
  position: relative;
  line-height: 34px;
  font-size: 12px;
}
.detailcenter {
  margin: 17px ;
  box-sizing: border-box;
  width: 97%;
  height: 100%;

}
.detailtop {
  height: 50%;
  background-color: #f8f8f8;
  display: flex;
}
.detailleft {
      width: 390px;
    height: 100%;
    img {
       width: 390px;
       height: 90%;
       margin-top: 50px;
    }
}
.detailright {
  flex: 1;
  padding-left: 50px;
}
.righttitle {
  height: 70px;
  margin-top: 30px;
  div:nth-child(1){
    font-size: 24px;
    font-weight: bold;
  }
}
</style>