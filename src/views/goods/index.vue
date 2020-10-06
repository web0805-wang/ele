<template>
  <div class="goods">
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="热销榜" />
        <van-sidebar-item title="精彩单人套餐" />
        <van-sidebar-item title="冰爽饮品限时特惠" />
        <van-sidebar-item title="精选热菜" />
        <van-sidebar-item title="爽口凉菜" />
        <van-sidebar-item title="精选套餐" />
        <van-sidebar-item title="果拼果汁" />
        <van-sidebar-item title="小吃主食" />
        <van-sidebar-item title="特色粥品" />
      </van-sidebar>
    </div>
    <div class="right">
      <div class="box">
        <p class="title">
          <i>热销榜</i>
        </p>
        <div class="main">
          <img src="../../assets/p2.jpg" alt="" />
          <div class="text">
            <p class="t-title">红枣山药粥套餐</p>
            <p class="t-describe">
              红枣山药粥红枣山药粥红枣山药粥红枣山药粥红枣山药粥红枣山药粥红枣山药粥
            </p>
            <p class="t-sell">
              <i>月售17</i>
              <i>好评率100%</i>
            </p>
            <div class="t-bottom">
              <i class="t-price">￥29</i>
              <i class="t-old">￥36</i>
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

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeKey: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
    overflow-y: auto;
    z-index: -1;
  }
  .right {
    width: 5.91rem;
    position: absolute;
    top: 0;
    left: 1.6rem;
    .box {
      .title {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        background: #f3f5f7;
        color: #969ca2;
        font-size: 0.24rem;
        border-left: 5px solid #d8dce0;
        i {
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
              display: flex;
              height: 0.4rem;
              align-items: center;
              .icon-jiabeifen {
                font-size: 0.3rem;
                color:#00a0dc;
              }
              .icon-jia {
                font-size: 0.4rem;
                color:#00a0dc;
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