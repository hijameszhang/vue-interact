import interact from 'interactjs'

export default function ($yes) {
  /* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

  // enable draggables to be dropped into this
  interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
    accept: $yes,
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
    // add active dropzone feedback
    // drop 事件激活时的回调函数
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target

      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
    // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
    // remove active dropzone feedback
    // drop 事件失效时的回调函数
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })

  interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrict({
          restriction: 'parent',
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      onmove: dragMoveListener
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
