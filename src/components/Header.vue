
<template>
  <div class="header">
    <div class="head">
      <div class="h-top">
        <img src="../assets/t1.jpg" alt="" />
        <div class="right">
          <div class="r-top">
            <i>品牌</i>
            <span>粥品香坊（回龙观）</span>
          </div>
          <p>蜂鸟专送/38分钟送达</p>
          <div class="r-bottom">
            <i>减</i>
            <span>在线支付满28减5</span>
          </div>
        </div>
        <div class="btn">5个<van-icon name="arrow" /></div>
      </div>
      <div class="bottom">
        <i class="b-left">公告</i>
        <p>
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="nav-con">
        <ul>
          <router-link to="/goods" tag="li">商品</router-link>
          <router-link to="/rating" tag="li">评价</router-link>
          <router-link to="/seller" tag="li">商家</router-link>
        </ul>
      </div>
    </div>
    <div class="content"></div>
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
    return {};
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
.header {
  width: 100%;
  height: 2.65rem;
  background: #716860;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.h-top {
  display: flex;
  img {
    width: 1.28rem;
    height: 1.28rem;
    margin-top: 0.48rem;
    margin-left: 0.48rem;
  }
  .right {
    margin-top: 0.48rem;
    margin-left: 0.32rem;
    .r-top {
      display: flex;
      align-items: center;
      color: #fff;
      i {
        display: inline-block;
        width: 0.62rem;
        height: 0.35rem;
        background: #f01414;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        margin-left: 0.12rem;
        font-size: 0.31rem;
      }
    }
    p {
      color: #fff;
      font-size: 0.21rem;
      margin-top: 0.16rem;
    }
    .r-bottom {
      display: flex;
      margin-top: 0.2rem;
      align-items: center;
      i {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: #fff;
        color: #f01414;
        font-size: 0.14rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        margin-left: 0.16rem;
        color: #fff;
        font-size: 0.21rem;
      }
    }
  }
  .btn {
    margin-top: 1.32rem;
    width: 1rem;
    height: 0.5rem;
    background: #4c4138;
    color: #fff;
    font-size: 0.2rem;
    border-radius: 0.24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.78rem;
  }
}
.bottom {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.54rem;
  background: #5f5c5a;
  position: absolute;
  bottom: 0;
  left: 0;
  .b-left {
    display: inline-block;
    width: 0.45rem;
    height: 0.25rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.14rem;
    margin-left: 0.25rem;
  }
  p {
    margin-left: 0.06rem;
    font-size: 0.2rem;
    color: #fff;
    width: 6.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .van-icon {
    color: #fff;
  }
}
.nav-con {
    width:100%;
     height: 0.8rem;
     background:#fff;
  ul {
    margin: 0.8rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5.5rem;
    height: 0.8rem;
    li {
      font-size: 0.28rem;
      color: #858c91;
    }
    .active {
      color: #f01414;
    }
  }
}

.content {
  margin-top: 3.45rem;
}
</style>