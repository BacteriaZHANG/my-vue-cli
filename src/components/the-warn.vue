<template>
  <div>
    <the-popups v-if="warn.popupShow">
      <p class="error_prompt">{{warn.warnTxt}}</p>
      <template slot="btn">
        <base-button-confirm @click.native="popupsHide">确定</base-button-confirm>
      </template>
    </the-popups>
  </div>
</template>

<script>
  import ThePopups from '@/components/popups'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: "the-warn",
    methods: {
      popupsHide() {
        this.createWarn({
          popupShow: false,
          warnTxt: ''
        })

        if(this.routeTo) {
          this.$router.replace({
            path: this.routeTo
          })
        }
      },
      ...mapMutations({
        createWarn: 'CREATE_WARN'
      })
    },
    computed: {
      ...mapGetters([
        'warn',
        'routeTo'
      ])
    },
    components: {
      ThePopups
    }
  }
</script>

<style scoped lang="scss">
  .error_prompt { font-size: $font_size_medium_xx; margin-bottom: 60px; text-align: center;}
</style>
