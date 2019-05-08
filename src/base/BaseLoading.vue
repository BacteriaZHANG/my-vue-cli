<template>
  <div class="base_loading">
    <img class="base_loading_img" src="~@/common/images/pre_loading.png">
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "BaseLoading"
    }
</script>

<style scoped lang="scss">
  .base_loading { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2; background-color: rgba(0, 0, 0, .6);
    .base_loading_img { width: 128px; height: 120px; position: absolute; top: 50%; left: 50%; margin-left: -64px; margin-top: -60px; animation: pre_loading 1500ms linear infinite;}
    @keyframes pre_loading {
      from { transform: rotate(0); }
      to { transform: rotate(360deg); }
    }
  }
</style>
