<template>
    <div class="searching_errors">
      <div class="page_status_tw">
        <img src="~images/404.png" alt="">
        <p>啊哦！访问的页面不存在。</p>
      </div>

    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "empty-error"
}
</script>
<style scoped lang="scss">
  .searching_errors {
    .page_status_tw { margin: 200px auto; text-align: center;
      img {width: 524px;}
      p { color: #b3b3b3; font-size: 34px; font-weight: bold; margin-top: 65px;}
    }
  }
</style>
