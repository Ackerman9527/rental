<template>
  <div class="home">

    <!-- 内容 -->
    <div class="content">
      <div class="content-center">
        <!-- 返回首页 -->
        <div class="goback">返回首页</div>
        <!-- 表单 -->
        <div class="infobody">
          <!-- 标题 -->
          <div class="body-title">租号大厅</div>
          <!-- 筛选 -->
          <div class="infoSelect">
            <div class="hotduanyou">
              <div class="titlebox">
                <img src="@/assets/images/duanyou.png" alt="" />
                热门端游
              </div>
              <div class="cardbox">
                <div
                  class="selectCard"
                  v-for="(item, index) in duanyoulist"
                  :key="index"
                >
                  <el-tooltip
                    class="tooltips"
                    :content="item.name"
                    placement="bottom"
                    effect="light"
                  >
                    <SelectCard
                      class="selectchange"
                      :name="item.name"
                      :color="colorlist[index]"
                    ></SelectCard>
                  </el-tooltip>
                </div>
              </div>
            </div>
            <div class="hotduanyou">
              <div class="titlebox">
                <img src="@/assets/images/shouyou.png" alt="" />
                热门手游
              </div>
              <div class="cardbox">
                <div
                  class="selectCard"
                  v-for="(item, index) in shouyoulist"
                  :key="index"
                >
                  <el-tooltip
                    class="tooltips"
                    :content="item.name"
                    placement="bottom"
                    effect="light"
                  >
                    <SelectCard
                      :name="item.name"
                      :color="colorlist[index + 1]"
                    ></SelectCard>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <!-- 下拉框 -->
          <div class="selectArea">
            <el-col :span="2">
              <div style="margin-left: 20px">全部游戏</div>
            </el-col>
            <el-col :span="4">
              <el-select
                v-model="value1"
                @change="gamechange"
                clearable
                placeholder="请选择游戏"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select
                v-model="value2"
                @change="change2"
                placeholder="请选择游戏区"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select
                v-model="value3"
                @change="change3"
                placeholder="请选择游戏服"
              >
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-input
                placeholder="请输入关键字"
                prefix-icon="el-icon-search"
                v-model="input"
              >
              </el-input>
            </el-col>
          </div>
          <!-- 中间阴影 -->
          <div class="boxshadow"></div>
          <!-- 筛选内容 -->
          <div class="selectInfo">
            <div class="bodyselect">
              <span style="color: blue">综合排序</span>
              <span>价格</span>
            </div>
            <!-- 筛选列表 -->
            <div
              class="infocontent"
              v-for="(item, index) in infolist"
              :key="index"
              @click="gotodetail"
            >
              <div class="info-left">
                <img src="~@/assets/images/infoimg.png" alt="" />
              </div>
              <div class="info-center">
                <div>
                  {{ item.title }}
                </div>
                <div>
                  {{ item.skin }}
                </div>
                <div>商品热度:{{ item.hot }}</div>
                <div>
                  <img src="~@/assets/images/infotag.png" alt="" />
                </div>
              </div>
              <div class="info-right">
                <div>
                  租金 :
                  <span class="highlight" style="margin-left: 8px">{{
                    item.rent
                  }}</span
                  >元/小时
                </div>
                <div>
                  <img
                    src="~@/assets/images/infosvip.png"
                    style="vertical-align: middle"
                    alt=""
                  />
                  <span class="highlight" style="margin-left: 17px">{{
                    item.svip
                  }}</span
                  >元/小时
                </div>
                <div>
                  押金: <span class="highlight">{{ item.yajin }}</span
                  >元|<span class="highlight">{{ item.qizhu }}</span
                  >小时起租
                </div>
              </div>
              <el-button class="info-button" type="primary" plain
                >立即租凭</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import SelectCard from "@/components/selectCard";

export default {
  name: "Home",
  components: {
    SelectCard,
  },
  data() {
    return {
      duanyoulist: [
        { name: "穿越火线" },
        { name: "英雄联盟" },
        { name: "绝地求生" },
        { name: "逆战" },
        { name: "QQ飞车" },
        { name: "GTA5" },
        { name: "糖豆人" },
      ],
      shouyoulist: [
        { name: "王者农药" },
        { name: "枪战王者" },
        { name: "和平精英" },
        { name: "火影忍者" },
        { name: "最强nba" },
        { name: "天浩大作战" },
        { name: "使命召唤" },
      ],
      colorlist: [
        "#FA795D",
        "#69AAFC",
        "#FF9F25",
        "#66B2FC",
        "#FFA62C",
        "#67B3FC",
        "#FA6151",
        "#67B3FC",
      ],
      options1: [
        {
          value: "0",
          label: "选择游戏",
        },
        {
          value: "1",
          label: "穿越火线",
        },
        {
          value: "2",
          label: "英雄联盟",
        },
        {
          value: "3",
          label: "绝地求生",
        },
        {
          value: "4",
          label: "QQ飞车",
        },
        {
          value: "5",
          label: "GTA5",
        },
        {
          value: "6",
          label: "逆战",
        },
        {
          value: "7",
          label: "糖豆人",
        },
      ],
      value1: "",
      options2: [
        {
          value: "1",
          label: "电信",
        },
        {
          value: "2",
          label: "网通",
        },
        {
          value: "3",
          label: "13",
        },
        {
          value: "4",
          label: "教育网",
        },
        {
          value: "5",
          label: "你猜",
        },
      ],
      value2: "",
      options3: [
        {
          value: "1",
          label: "123",
        },
        {
          value: "2",
          label: "456",
        },
        {
          value: "3",
          label: "798",
        },
        {
          value: "4",
          label: "龙须面",
        },
        {
          value: "5",
          label: "北京烤鸭",
        },
      ],
      value3: "",
      input: "",
      infolist: [],
      legend: [
        {
          title: "[黑色玫瑰]角色等级974 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[黑色玫瑰]角色等级974 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[黑色玫瑰]角色等级973 英雄数量158 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[黑色玫瑰]角色等级972  皮肤数量1069 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: " 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
      ],
      cf: [
        {
          title: "[穿越火线]角色等级974 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[穿越火线]角色等级974 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[穿越火线]角色等级973 英雄数量158 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: "[穿越火线]角色等级972  皮肤数量1069 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
        {
          title: " 英雄数量154 皮肤数量1067 无段位 null",
          skin: "1200皮/黑白龙瞎/至臻剑姬/至臻戴安娜/至臻新卡莎",
          hot: "7022",
          rent: "1.25",
          svip: "1.13",
          yajin: "0",
          qizhu: "2",
        },
      ],

      dialogVisible: false
    };
  },
  mounted() {
    // this.change1();
  },
  methods: {
    divclick() {
      console.log("hello");
    },
    gamechange() {
      // console.log(this.value1)
      if (this.value1 === "2") {
        this.infolist = this.legend;
      } else if (this.value1 === "1") {
        this.infolist = this.cf;
      } else if (this.value1 === "0") {
        this.infolist = [];
      }
    },
    change2() {},
    change3() {
      console.log("nihao");
    },
    // 登录
    login() {
         this.dialogVisible = true
    },
    gotodetail(){
        this.$router.push('./detail') 
    }
  },
};
</script>
<style lang="scss" >

.home {
  width: 100%;
  height: 100%;
  
  .content {
    width: 100%;
    height: 100%;
    display: flex;

    .content-center {
      width: 100%;
      height: 100%;
      .goback {
        font-size: 12px;
        background-color: #f5f5f5;
        height: 35px;
        line-height: 35px;
        color: #666666;
      }
      // 表单
      .infobody {
        // 标题

        .body-title {
          height: 44px;
          line-height: 44px;
          font-weight: 600;
          color: #666666;
          margin: 0px 20px 0 20px;
          border-bottom: 1px solid #e5e5e5;
        }
        // 筛选
        .infoSelect {
          width: 100%;
          // height: 200px;
          .hotduanyou {
            width: 100%;
            height: 130px;
            display: flex;
            align-items: center;
            .cardbox {
              display: flex;
              align-items: center;
              border-bottom: 1px solid #e5e5e5;
            }
            .titlebox {
              width: 120px;
              height: 90px;
              margin-left: 25px;
              img {
                vertical-align: middle;
              }
            }
            .selectCard + .selectCard {
              margin-left: 20px;
            }
          }
        }
        // 下拉框
        .selectArea {
          width: 100%;
          height: 60px;
          display: flex;
          line-height: 60px;
        }
        .boxshadow {
          width: 100%;
          height: 15px;
          background-color: #f5f5f5;
        }
        .selectInfo {
          .bodyselect {
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            margin-left: 20px;
            span + span {
              margin-left: 20px;
            }
            border-bottom: 1px solid #f5f5f5;
          }
          .infocontent {
            height: 120px;
            display: flex;
            margin: 0 20px 0 20px;
            background-color: #f5f5f5;
            position: relative;
            align-items: center;
            border-top: 1px solid #e5e5e5;

            .info-left {
              width: 90px;
              vertical-align: middle;
            }
            .info-center {
              width: 60%;
              div:nth-child(1) {
                font-size: 16px;
                font-weight: 600;
                color: #333;
              }
              div:nth-child(2) {
                font-size: 14px;
                color: #666666;
              }
              div:nth-child(3) {
                font-size: 14px;
                color: #666666;
              }
            }
            .info-right {
              font-size: 14px;
              color: #666666;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .highlight {
                color: #ee6723;
              }
            }
            .info-button {
              width: 140px;
              height: 40px;
              position: absolute;
              right: 100px;
              bottom: 30px;
            }
          }
        }
        // .selectInfo + .selectInfo {

        // }
      }
    }

  }
}
</style>
