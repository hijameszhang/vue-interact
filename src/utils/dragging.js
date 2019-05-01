import interact from 'interactjs'

export default function GenInteract (el) {
  return interact(el)
    .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrict({
          restriction: 'parent',
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        })
      ],
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: dragMoveListener,
      // call this function on every dragend event
      onend: function (event) {
        console.log(event)
      }
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
