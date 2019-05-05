import interact from 'interactjs'
export const resizeableSettings = {
  preserveAspectRatio: false,
  edges: {
    left: true,
    right: true,
    top: true,
    bottom: true
  }
}

export const draggableSettings = {
  inertia: true,
  restrict: {
    restriction: 'parent',
    endOnly: true,
    elementRect: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    autoScroll: true,
    onmove: dragMoveListener
  }
}

/**
 * @description: 触发resize事件时的回调函数
 * @param {Event} event
 */
function resizeListener (event) {
  const target = event.target

  target.style.width = `${event.rect.width}px`
  target.style.height = `${event.rect.height}px`

  // this.$emit('onresize', event)
}

/**
 * @description: 触发drag move事件时的回调函数
 * @param {Event} event
 */
function dragMoveListener (event) {
  const target = event.target
  const x = (parseFloat(target.getAttribute('data-x')) || 0 + event.dx)
  const y = (parseFloat(target.getAttribute('data-y')) || 0 + event.dy)

  target.style.webkitTransform = `translate(${x}px, ${y}px)`
  target.style.transfrom = `translate(${x}px, ${y}px)`

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
  // this.$emit('ondrag', event)
}

/**
 * @description: 示例main函数
 * @param {Element} element, element元素, 允许被resize, drag的元素
 * @param {Object} resizeOpts
 * @param {Object} draggableOpts
 */
export function main (element, resizeOpts, draggableOpts) {
  // const resizeClass = '.reisze-handler'
  interact(element)
    .resizable(resizeOpts || resizeableSettings)
    .draggable(draggableOpts || draggableSettings)
    .on('resizemove', resizeListener)
}
