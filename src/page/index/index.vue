<template>
    <div>
      <base-button></base-button>
      <input v-validate:length.submit='{required: true, minLength: 3, maxLength: 10, name: "value1", error: "长度在3-10范围内"}' v-model="val1" />
      <input v-validate:length.submit='{required: true, minLength: 4, maxLength: 15, name: "value2", error: "长度在4-15范围内"}' v-model="val2" />
      <button v-submit>提交</button>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: () => {
      return {
        val1: '11111',
        val2: '11111'
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
