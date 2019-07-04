export default function (Vue) {
  Vue.prototype.ModalHelper = function () {
    return {
      afterOpen: function () {
        let scrollTop = document.scrollingElement.scrollTop
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
        document.body.style.top = -scrollTop + 'px'
      },
      beforeClose: function () {
        document.body.style.position = ''
        let scrollTop = parseInt(document.body.style.top)
        // scrollTop lost after set position:fixed, restore it back.
        document.scrollingElement.scrollTop = Math.abs(scrollTop)
      }
    }
  }
}
