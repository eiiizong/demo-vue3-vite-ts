<template>
  <div class="page not-found">
    <img src="http://v.bootstrapmb.com/2021/5/2c46w10089/images/404.png" />
    <div class="title">
      <h2>抱歉，您访问的页面不在了！</h2>
      <!-- <h4>
          为了让您更好的使用系统，我们正在对服务器进行升级，升级期间暂时无法访问。
        </h4>
        <h4>给您带来的不便，敬请谅解！</h4> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.not-found {
  background-color: #7395ff;
  padding-top: 140px;
  img {
    width: 500px;
    margin: 0 auto;
  }
  .title {
    h2 {
      color: #fff;
      font-size: 36px;
      letter-spacing: 4px;
      text-align: center;
      line-height: 120px;
    }
    h4 {
      color: #fff;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
    }
  }
}
</style>
