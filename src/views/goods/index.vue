<template>
  <div class="goods">
    <!-- left左侧导航条 -->
    <div class="left" ref="leftWrapper">
      <ul class="leftCon">
        <li
          v-for="(item, index) in goods"
          :key="index"
          :class="{ current: currentIndex === index }"
          @click="selectMenu(index, $event)"
        >
          <!--判断类别前面是否有个图标-->
          <span
            v-show="item.type > 0"
            class="icon"
            :class="classMap[item.type]"
          ></span>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- right右边商品  -->
    <div class="right" ref="rightWrapper">
      <div class="rightCon">
        <div class="box" v-for="(item, index) in goods" :key="index">
          <!-- 商品分割标题 -->
          <p class="title">
            <span>
              {{ item.name }}
            </span>
          </p>
          <!-- 主要内容 -->
          <div class="main" v-for="(items, index) in item.foods" :key="index">
            <!-- 图片 -->
            <img :src="items.icon" alt="" />
            <div class="text">
              <p class="t-title">{{ items.name }}</p>
              <!--  商品名 -->
              <p class="t-describe">
                {{ items.decription }}
                <!--描述 -->
              </p>
              <p class="t-sell">
                <i>月售{{ items.sellCount }}</i>
                <i>好评率{{ items.rating }}%</i>
              </p>
              <!-- 价格 -->
              <div class="t-bottom">
                <i class="t-price">￥{{ items.price }}</i>
                <i class="t-old">{{ items.oldPrice }}</i>
                <p>
                  <span class="iconfont icon-jiabeifen"></span>
                  <i>1</i>
                  <span class="iconfont icon-jia"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="f-left">
        <div class="cart">
          <div class="cart-con">
            <span class="iconfont icon-gouwuche"></span>
          </div>
        </div>
      </div>
      <p class="price">￥0元</p>
      <p class="send">另需配送费￥4元</p>
      <div class="f-right">￥20元起送</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import axios from "axios";
import BScroll from "better-scroll"; // 导入滚动类库
import goodData from "../../common/goods"; //导入数据
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      goods: [], //所有的商品数据
      scrollY: 0, // 当期滚动的高度
      listHeight: [], // 用来存放右侧每一个分类.box的商品高度
    };
  },
  //监听属性 类似于data概念
  computed: {
    //计算当前右侧的高度，来决定左边导航栏选中那个
    currentIndex() {
      console.log(this.listHeight);
      //console.log(JSON.parse(JSON.stringify(this.listHeight)))
      for (let i = 0; i < this.listHeight.length; i++) {
        console.log(i);
        let height1 = this.listHeight[i]; // 获取当前的上高度
        let height2 = this.listHeight[i + 1]; // 获取当前的下高度
        console.log(height1, height2);
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i; // 返回当前索引
        }
      }
      return 0;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //获取右侧商品box的整个高度
    _calculateHeight: function () {
      let foodlist = this.$refs.rightWrapper.getElementsByClassName("box"); //获取所有的box
      //console.log(foodlist, foodlist.length);
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodlist.length; i++) {
        let item = foodlist[i];
        height += item.clientHeight;
        console.log(height);
        this.listHeight.push(height);
      }
      console.log(this.listHeight);
    },

    //初始化滚动事件
    _initScroll() {
      //左边导航滚动
      this.leftScroll = new BScroll(this.$refs.leftWrapper, {
        click: true,
      });
      //右边商品滚动
      this.rightScroll = new BScroll(this.$refs.rightWrapper, {
        click: true,
        probeType: 3, //实时派发scroll事件
      });
      //监听
      this.rightScroll.on("scroll", (pos) => {
        this.scrollY =  Math.abs(Math.round(pos.y));
        //console.log(this.scrollY)
      });
    },

    // 左侧菜单点击右侧内容滚动到对应区域事件
    selectMenu(index, event) {
      if (!event._constructed) {
        return; // 原生的浏览器的event没有 vue的这个 better-scroll 中event有_constructed 属性，所以当没有这个时，直接return。避免在pc端点击时事件执行（触发）2次的效果
      }
      console.log(index);
      let foodList = this.$refs.rightWrapper.getElementsByClassName("box");
      let el = foodList[index]; // 滚动到响应的元素
      console.log(el);
      this.rightScroll.scrollToElement(el, 300);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(goodData);
    this.goods = goodData;
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]; //导航文字前图标
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.goods {
  position: relative;
  .left {
    width: 1.6rem;
    height: 8.95rem;
    overflow: hidden;
    .leftCon {
      width: 1.6rem;
      li {
        padding: 0.42rem 0.4rem 0.42rem 0.24rem;
        font-size: 0.24rem;
        line-height: 0.32rem;
        background: #f3f5f7;
        vertical-align: middle;
        .icon {
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          background-size: 0.32rem 0.32rem;
          vertical-align: top;
          &.discount {
            //折
            background-image: url("../../assets/discount_3@2x.png");
          }
          &.special {
            //特
            background-image: url("../../assets/special_3@2x.png");
          }
        }
      }
      .current {
        background: #fff; //选中时显示白色
      }
    }
  }
  .right {
    width: 5.8rem;
    height: 8.95rem;
    position: absolute;
    top: 0;
    left: 1.6rem;
    overflow: hidden;
    .box {
      .title {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        background: #f3f5f7;
        color: #969ca2;
        font-size: 0.24rem;
        border-left: 5px solid #d8dce0;
        span {
          margin-left: 0.28rem;
        }
      }
      .main {
        margin-top: 0.37rem;
        margin-left: 0.37rem;
        display: flex;
        img {
          width: 1.13rem;
          height: 1.13rem;
        }
        .text {
          margin-left: 0.2rem;
          .t-title {
            font-size: 0.28rem;
          }
          .t-describe {
            width: 3.7rem;
            color: #a2a7ac;
            font-size: 0.2rem;
            margin-top: 0.2rem;
          }
          .t-sell {
            color: #a2a7ac;
            font-size: 0.2rem;
            margin-top: 0.2rem;
            i {
              margin-right: 0.25rem;
            }
          }
          .t-bottom {
            position: relative;
            display: flex;
            height: 0.4rem;
            align-items: center;
            .t-price {
              font-size: 0.23rem;
              color: red;
            }
            .t-old {
              font-size: 0.14rem;
              color: #a2a7ac;
              text-decoration: line-through;
              margin-left: 0.27rem;
            }
            p {
              position: absolute;
              top: 0;
              right: 0;
              display: flex;
              height: 0.4rem;
              align-items: center;
              .icon-jiabeifen {
                font-size: 0.3rem;
                color: #00a0dc;
              }
              .icon-jia {
                font-size: 0.4rem;
                color: #00a0dc;
              }
              i {
                margin-left: 0.2rem;
                margin-right: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 0.95rem;
    background: #141d27;
    position: fixed;
    left: 0;
    bottom: 0;
    .f-left {
      position: relative;
      .cart {
        height: 1.1rem;
        width: 1.1rem;
        background: #141d27;
        border-radius: 50%;
        position: absolute;
        left: 0.25rem;
        top: -0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .cart-con {
          height: 0.88rem;
          width: 0.88rem;
          background: #868d96;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 0.4rem;
            color: #cecece;
          }
        }
      }
    }
    .price {
      width: 1.4rem;
      height: 0.5rem;
      color: #fff;
      font-size: 0.32rem;
      font-weight: 600;
      margin-left: 1.5rem;
      margin-top: 0.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 2px solid #212c35;
    }
    .send {
      font-size: 0.23rem;
      color: #646970;
      position: absolute;
      top: 0.39rem;
      left: 3.12rem;
    }
    .f-right {
      width: 2.09rem;
      height: 095rem;
      background: #00b43c;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.25rem;
      color: #fff;
      font-weight: 600;
      display: flex;
      justify-content: center;
      line-height: 0.95rem;
    }
  }
}
</style>