<template>
  <div class="seller">
    <div class="title-con">
      <div class="title">
        <div class="t-left">
          <p>粥品香坊（回龙观）</p>
          <div class="pf">
            <van-rate
              v-model="value"
              :size="18"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <i>(24)</i>
            <span>月售90单</span>
          </div>
        </div>
        <div class="t-right">
          <van-rate v-model="value" icon="like" void-icon="like-o" :count="1" />
          <p>已收藏</p>
        </div>
      </div>
    </div>
    <div class="price">
      <div class="p-box">
        <p>起送价</p>
        <div>
          <span>20</span>
          <i>元</i>
        </div>
      </div>
      <div class="p-box p-center">
        <p>商家配送</p>
        <div>
          <span>4</span>
          <i>元</i>
        </div>
      </div>
      <div class="p-box">
        <p>平均配送时间</p>
        <div>
          <span>38</span>
          <i>分钟</i>
        </div>
      </div>
    </div>
    <div class="notice">
      <p class="n-title">公告与活动</p>
      <p class="n-text">
        公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动公告与活动
      </p>
    </div>
    <div class="subtitle">
      <div class="s-box">
        <p class="red">减</p>
        <span>在线支付满28减5</span>
      </div>
      <div class="s-box">
        <p class="blue">折</p>
        <span>在线支付满28减5</span>
      </div>
      <div class="s-box">
        <p class="green">特</p>
        <span>在线支付满28减5</span>
      </div>
      <div class="s-box">
        <p class="purple">票</p>
        <span>在线支付满28减5</span>
      </div>
      <div class="s-box">
        <p class="green">保</p>
        <span>在线支付满28减5</span>
      </div>
    </div>
    <div class="pic">
      <div class="pic-title">商家实景</div>
      <div class="pics">
        <img src="../../assets/p4.jpg" alt="" />
        <img src="../../assets/p4.jpg" alt="" />
        <img src="../../assets/p4.jpg" alt="" />
      </div>
    </div>
    <div class="info">
      <div class="info-title">商家信息</div>
      <p class="info-text">
        <i>该商家支持发票</i>
      </p>
      <p class="info-text">
        <i>该商家支持发票该商家支持发票</i>
      </p>
      <p class="info-text">
        <i>该商家支持发票该商家支</i>
      </p>
      <p class="info-text">
        <i>该商家支持发票该</i>
      </p>
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
      value: 3,
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
.seller {
  background: #f3f5f7;
  .title-con {
    background: #fff;
    width: 100%;
  }
  .title {
    display: flex;
    padding-bottom: 0.38rem;
    margin: 0.38rem 0.38rem 0 0.38rem;
    justify-content: space-between;
    border-bottom: 3px solid #f2f4f5;

    .t-left {
      p {
        font-size: 0.28rem;
      }
      .pf {
        height: 0.3rem;
        display: flex;
        align-items: center;
        margin-top: 0.15rem;
        i {
          font-size: 0.22rem;
          margin-left: 0.19rem;
        }
        span {
          font-size: 0.22rem;
          margin-left: 0.3rem;
        }
      }
    }
    .t-right {
      p {
        font-size: 0.2rem;
        margin: 0.2rem 0 0 -0.1rem;
      }
    }
  }
  .price {
    background: #fff;
    display: flex;
    padding: 0.35rem 0.7rem;
    border-bottom: 3px solid #e6e8eb;
    .p-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 2rem;

      p {
        font-size: 0.2rem;
        color: #a6aaaf;
        margin-bottom: 0.15rem;
      }
      span {
        font-size: 0.38rem;
      }
      i {
        font-size: 0.2rem;
      }
    }
  }
  .notice {
    background: #fff;
    margin-top: 0.3rem;
    border-top: 3px solid #e6e8eb;
    .n-title {
      font-size: 0.3rem;
      padding: 0.35rem 0.37rem;
    }
    .n-text {
      font-size: 0.2rem;
      padding: 0 0.6rem;
      color: red;
      line-height: 0.45rem;
    }
  }
  .subtitle {
    background: #fff;
    border-bottom: 3px solid #e6e8eb;
    .s-box {
      display: flex;
      height: 0.92rem;
      align-items: center;
      margin: 0 0.6rem;
      border-top: 2px solid #eff1f3;
      p {
        width: 0.3rem;
        height: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.22rem;
        color: #fff;
      }
      .red {
        background: red;
      }
      .blue {
        background: #00a0dc;
      }
      .green {
        background: rgb(55, 228, 55);
      }
      .purple {
        background: rgb(204, 33, 204);
      }

      span {
        font-size: 0.2rem;
        margin-left: 0.13rem;
      }
    }
  }
  .pic {
    background: #fff;
    margin-top: 0.28rem;
    border-top: 3px solid #e6e8eb;
    padding: 0.38rem;
    border-bottom: 3px solid #e6e8eb;
    .pic-title {
      font-size: 0.28rem;
    }
    .pics {
      margin-top: 0.24rem;
      display: flex;
      width: 6.73rem;
      overflow-x: auto;
      img {
        width: 2.4rem;
        height: 1.78rem;
        margin-right: 0.06rem;
      }
    }
  }
  .info {
    background: #fff;
    margin-top: 0.28rem;
    border-top: 3px solid #e6e8eb;
    padding: 0.38rem;
    .info-title {
      font-size: 0.28rem;
      margin-bottom: 0.18rem;
    }
    .info-text {
      display: flex;
      height: 0.92rem;
      align-items: center;
      border-top: 2px solid #eff0f1;
      i {
        margin-left: 0.22rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>