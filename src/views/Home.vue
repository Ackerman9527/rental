<template>
  <div class="home">
    <!-- 首页 -->
    <div class="title">
      <div class="title-left">你好，欢迎访问田文轩123租号平台！</div>
      <div class="title-right">
        你好，请 <span style="color: red;  "  @click="login()">登录</span> <span>注册</span>
      </div>
    </div>

    <!-- 弹窗 -->
    <el-dialog
  title="登录"
  :visible.sync="dialogVisible"
  width="14%"
  >
    <el-input
    placeholder="请输入手机号"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
  <div style="height:20px"></div>
    <el-input
    class="inputtwo"
    placeholder="请输入密码"
    prefix-icon="el-icon-search"
    show-password
    v-model="input2">
  </el-input>
  <div style="height:20px"></div>
  <div class="dialog-footer"> 
    <el-button  type="primary" class="loginclick" @click="dialogVisible = false">立即登录</el-button>
  </div>
  <div style="height:10px"></div>
  <div class="wangjibot">
     <span style="color: #3EAFFD;font-size:10px">忘记密码</span>
     <span> |</span> 
     <span style="color: #3EAFFD;font-size:10px">立即注册</span>
  </div>
  
</el-dialog>
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="nav-left">
        <img src="~@/assets/images/nav-left.png" alt="" />
      </div>
      <div class="nav-right">
        <span>首页</span>
        <span>租号试玩</span>
        <span>领券中心</span>
        <span> 优质店铺 </span>
      </div>
    </div>

     <!-- 内容 -->
    <div class="content">
      <div class="content-left"></div>
      <div class="content-center">
           <router-view></router-view>
      </div>
      <div class="content-right"></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  mounted() {
    // this.change1();
  },
  methods: {
 
    // 登录
    login() {
         this.dialogVisible = true
    }
  },
};
</script>
<style lang="scss" >

.home {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    min-width: 1200px;
    height: 34px;
    line-height: 34px;
    background-color: #f8f8f8;
    position: relative;
    line-height: 34px;
    font-size: 12px;
  }
  .title-left {
    position: absolute;
    left: 15%;
  }
  .title-right {
    position: absolute;
    left: 80%;
    
  }
  //   弹窗
  .dialog-footer {
    display: flex;
    justify-content: center;
    width: 100%;
    .loginclick {
      width: 100%;
    }
    .wangjibot {
         position: relative;
     
    }

    // el-input + el-input {
    //    margin-top: 20px;
    // }
  }

  // 导航栏
  .navbar {
    width: 100%;
    min-width: 1260px;
    height: 90px;
    line-height: 90px;
    background: #ffffff;
    border-top: 1px solid #e5e5e5;
    // box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
    position: relative;
    line-height: 90px;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;

    img {
      width: 194px;
      height: 55px;
      position: absolute;
      left: 15%;
      margin-top: 15px;
      // vertical-align: middle;
    }
  }
  .nav-right {
    position: absolute;
    //  right: 14.5%;
    left: 66.5%;
    span + span {
      margin-left: 36px;
    }
  }
   .content {
    width: 100%;
    height: 100%;
    display: flex;
    .content-left {
      width: 22%;
      height: 100%;
      background-color: #f5f5f5;
    }
    .content-center {
      width: 56%;
      height: 100%;
    }
    .content-right {
      width: 22%;
      height: 100%;
      background-color: #f5f5f5;
    }
  }
}
</style>
