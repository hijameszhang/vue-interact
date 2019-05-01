import interact from 'interactjs'
export default function ($resizeDragElement) {
  interact($resizeDragElement)
    .draggable({
      onmove: dragMoveListener,
      modifiers: [
        interact.modifiers.restrict({
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        })
      ]
    })
    .resizable({
    // resize from all edges and corners
    // 可以通过哪些边来调整元素的大小, 此处为: 上, 下, 左, 右 都可以resize
      edges: { left: true, right: true, bottom: true, top: true },

      modifiers: [
      // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 }
        })
      ],

      // 是否启用惯性
      inertia: false
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
