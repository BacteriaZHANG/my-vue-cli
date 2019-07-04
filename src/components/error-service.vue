<template>
    <div class="searching_errors">
      <div class="page_status_tw">
        <img src="~images/500.png" alt="">
        <p>服务器出现小状况，正在抢修中。</p>
      </div>

    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "service-error"
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
