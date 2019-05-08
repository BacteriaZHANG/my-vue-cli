export default Vue => {
  Vue.$myForm = {}

  Vue.directive('validate', {
    inserted(el, binding) {
      console.log(binding.value)
      console.log(binding.arg)
      if(binding.modifiers.submit) {
        el.classList.add('v-submit')
      }
    },
    update (el, binding, vnode) {
      let len = el.value.toString().length
      let max = binding.value.maxLength
      let min = binding.value.minLength
      Vue.$myForm[`${binding.value.name}`] = (len < min || len > max) ? false : true
    }
  })

  Vue.directive('submit', {
    inserted(el) {
      el.addEventListener('click', function() {
        console.log(Vue.$myForm)
      })
    }
  })
}

function popups(msg) {
  console.log(msg)
}
