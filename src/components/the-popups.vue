<template>
  <div class="pops">
    <div class="pops_container">
      <h1 class="pops_title" ref="title" :class="{ has_bottom: emptyTitle }">
        <slot name="title"></slot>
      </h1>
      <div class="pops_main">
        <slot></slot>
      </div>
      <div class="pops_btn">
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: "the-popups",
    data() {
      return {
        emptyTitle: false
      }
    },
    created() {
      this.ModalHelper().afterOpen()
      this.$nextTick(() => {
        // title 为空时加一个下边距
        this.emptyTitle = this.$refs.title.innerHTML == ''
      })
    },
    methods: {
      ...mapMutations({
        clearRouteTo: 'ROUTE_TO'
      })
    },
    computed: {
      ...mapGetters([
        'routeTo'
      ])
    },
    beforeDestroy() {
      this.ModalHelper().beforeClose()
      if(this.routeTo) {
        this.clearRouteTo('') // the-warn.vue 警告消息弹窗关闭时删除按钮绑定路由
      }
    }
  }
</script>

<style scoped lang="scss">
  .pops { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.3); font-size: 0; text-align: center; z-index: 2;
    .pops_container { display: inline-block; width: 90%; position: relative; background-color: #fff; vertical-align: middle; font-size: 30px; border-radius: 6px; text-align: left;
      .pops_title { font-size: $font_size_large; color: $color_theme; text-align: center; line-height: 118px; margin: 0 40px; border-bottom: 1px solid $color_background_d;}
      .pops_title.has_bottom { margin-bottom: 60px;}
      .pops_main { margin: 0 50px; max-height: 580px; overflow-y: auto; }
      .pops_btn { margin: 0 50px 60px;}
    }
    &:after { content: ''; height: 100%; display: inline-block; vertical-align: middle;}
  }
</style>
