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
  .pops { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y2ODAxRUI5M0ZDMTFFOEI1NDhBOEI0N0M2MEI4Q0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y2ODAxRUM5M0ZDMTFFOEI1NDhBOEI0N0M2MEI4Q0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjY4MDFFOTkzRkMxMUU4QjU0OEE4QjQ3QzYwQjhDQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjY4MDFFQTkzRkMxMUU4QjU0OEE4QjQ3QzYwQjhDQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhZdrYwAAAAbSURBVHjaYmRgYJjJQARgYiASjCqkjkKAAAMABFMArWHoyIEAAAAASUVORK5CYII=); font-size: 0; text-align: center; z-index: 2;
    .pops_container { display: inline-block; width: 90%; position: relative; background-color: #fff; vertical-align: middle; font-size: 30px; border-radius: 6px;
      text-align: left;
      .pops_title { font-size: $font_size_large; color: $color_theme; text-align: center; line-height: 118px; margin: 0 40px; border-bottom: 1px solid $color_background_d;}
      .pops_title.has_bottom { margin-bottom: 60px;}
      .pops_main { margin: 0 50px; max-height: 580px; overflow-y: auto; }
      .pops_btn { margin: 0 50px 60px;}
    }
    &:after { content: ''; height: 100%; display: inline-block; vertical-align: middle;}
  }
</style>
