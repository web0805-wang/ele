
<template>
  <div class="rating">
    <div class="pingfen">
      <div class="p-left">
        <P class="p1">4.2</P>
        <P class="p2">综合评分</P>
        <P class="p3">高于周边商家69.2%</P>
      </div>
      <div class="p-right">
        <div class="sp">
          <i>服务评分</i>
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
        <div class="gp">
          <i>商品评分</i>
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
        <p class="time">
          <i>送达时间</i>
          <span>38分钟</span>
        </p>
      </div>
    </div>
    <div class="main">
      <div class="m-top">
        <p class="m1">全部24</p>
        <p class="m2">满意18</p>
        <p class="m3">不满意6</p>
      </div>
      <div class="m-text">
        <van-icon name="checked" color="#00c850" size="25" />
        <i>只看有评价的内容</i>
      </div>
      <div class="m-con">
        <div class="box">
          <div class="b-title">
            <img src="../../assets/p3.jpg" alt="" />
            <div class="t-center">
              <p>3******C</p>
              <van-rate
                v-model="value"
                :size="10"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <i>30</i>
            </div>
            <div class="t-time">
              <i>2016-07-23</i>
              <i>21:52</i>
            </div>
          </div>
          <div class="b-text">
            不错，粥很好喝不错，粥很好喝不错，粥很好喝不错，粥很好喝不错，粥很好喝不错，粥很好喝
          </div>
          <div class="b-bottom">
            <van-icon name="thumb-circle" color="#00a0dc" size="20" />
            <p>南瓜粥</p>
            <p>皮蛋瘦肉粥</p>
            <p>扁豆焖面</p>
            <p>南瓜粥</p>
            <p>南瓜粥</p>
            <p>皮蛋瘦肉粥</p>
            <p>扁豆焖面</p>
            
          </div>
        </div>
      </div>
       <div class="m-con">
        <div class="box">
          <div class="b-title">
            <img src="../../assets/p3.jpg" alt="" />
            <div class="t-center">
              <p>3******C</p>
              <van-rate
                v-model="value"
                :size="10"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <i>30</i>
            </div>
            <div class="t-time">
              <i>2016-07-23</i>
              <i>21:52</i>
            </div>
          </div>
          <div class="b-text">
            不错，粥很好喝不错，粥很好喝不错
          </div>
        </div>
      </div>
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
.rating {
  background: #f3f5f7;
  .pingfen {
    height: 2.35rem;
    background: #fff;
    display: flex;
    border-bottom: 5px solid #e9ebed;
    .p-left {
      width: 2.75rem;
      height: 1.6rem;
      margin-top: 0.36rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 2px solid #ecedee;
      .p1 {
        font-size: 0.38rem;
        color: #ff9900;
        line-height: 0.8rem;
      }
      .p2 {
        font-size: 0.22rem;
        color: #273039;
        line-height: 1;
      }
      .p3 {
        font-size: 0.18rem;
        color: #9ea3a8;
        margin-top: 0.15rem;
      }
    }
    .p-right {
      width: 4.08rem;
      height: 1.6rem;
      margin-top: 0.36rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .sp,
      .gp {
        height: 0.3rem;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
      }
      p {
        margin-left: -1.6rem;
        margin-top: 0.15rem;
        span {
          color: #b5b9bd;
        }
      }
      i {
        font-size: 0.22rem;
        color: #373f48;
        margin-right: 0.28rem;
      }
    }
  }
  .main {
    margin-top: 0.3rem;
    background: #fff;
    border-top: 5px solid #e9ebed;
    .m-top {
      display: flex;
      padding: 0.35rem;
      p {
        font-size: 0.22rem;
        padding: 0.22rem;
        margin-right: 0.16rem;
      }
      .m1 {
        background: #00a0dc;
        color: #fff;
      }
      .m2 {
        background: #ccecf8;
      }
      .m3 {
        background: #dbdddf;
      }
    }
    .m-text {
      padding: 0.35rem 0 0.55rem 0.35rem;
      display: flex;
      align-items: center;
      i {
        font-size: 0.22rem;
        color: #a0a5aa;
        margin-left: 0.12rem;
      }
    }
    .m-con {
      .box {
        padding: 0.35rem 0 0.4rem 0.35rem;
        .b-title {
          display: flex;
          img {
            width: 0.58rem;
            height: 0.58rem;
          }
          .t-center {
            margin-left: 0.23rem;
            p {
              font-size: 0.18rem;
              line-height: 0.3rem;
            }
            i {
              font-size: 0.18rem;
              color: #b0b5b9;
              margin: -0.1rem 0 0 0.13rem;
            }
          }
          .t-time {
            font-size: 0.2rem;
            margin-left: 2.35rem;
            i {
              margin-right: 0.1rem;
            }
          }
        }
        .b-text {
          width: 5.9rem;
          font-size: 0.23rem;
          line-height: 0.36rem;
          margin-left: 0.8rem;
          margin-top: 0.22rem;
        }
        .b-bottom {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0.25rem;
          margin-left: 0.8rem;
          p {
            font-size: 0.18rem;
            color: #b0b5ba;
            padding: 0.05rem 0.12rem;
            border: 1px solid #b0b5ba;
            margin-left: 0.15rem;
            margin-bottom: 0.15rem;
          }
        }
      }
    }
  }
}
</style>