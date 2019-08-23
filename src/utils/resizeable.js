import interact from 'interactjs'
let maxZindex = 0
export default function ($selector, initZindex = 0) {
  maxZindex = initZindex
  interact($selector)
    .draggable({
      onmove: dragMoveListener,
      modifiers: [
        // interact.modifiers.snap({
        //   targets: [
        //     //  x轴方向每移动一步是30px, y轴方向每移动一步是30px, 小于30px不移动
        //     interact.createSnapGrid({ x: 10, y: 10 })
        //   ],
        //   range: Infinity,
        //   relativePoints: [ { x: 0, y: 0 } ]
        // }),
        interact.modifiers.restrict({
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        })
      ]
    })
    .resizable({
      preserveAspectRatio: false,
      // resize from all edges and corners
      // 可以通过哪些边来调整元素的大小, 此处为: 上, 下, 左, 右 都可以resize
      edges: { left: false, right: true, bottom: true, top: false },

      modifiers: [
      // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 10, height: 5 }
        })
      ],

      // 是否启用惯性
      inertia: true
    })
    .on('resizemove', function (event) {
      var target = event.target
      var x = (parseFloat(target.getAttribute('data-x')) || 0)
      var y = (parseFloat(target.getAttribute('data-y')) || 0)

      // update the element's style
      target.style.width = event.rect.width + 'px'
      target.style.height = event.rect.height + 'px'

      // translate when resizing from top or left edges
      // x += event.deltaRect.left
      // y += event.deltaRect.top

      target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)'

      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
      target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    })
    .on('doubletap', function (event) {
      console.log('hello james')
    })
    .on('hold', function (event) {

    })
    .on('tap', function (event) {
      event.target.style.zIndex = maxZindex
      maxZindex += 1
      console.log('click, or on touch')
    })
}

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
