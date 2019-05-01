import interact from 'interactjs'

export default function (element) {
  var x = 0; var y = 0
  interact(element)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            //  x轴方向每移动一步是30px, y轴方向每移动一步是30px, 小于30px不移动
            interact.createSnapGrid({ x: 30, y: 30 })
          ],
          range: Infinity,
          relativePoints: [ { x: 0, y: 0 } ]
        }),
        interact.modifiers.restrict({
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        })
      ],
      inertia: true
    })
    .on('dragmove', function (event) {
      x += event.dx
      y += event.dy

      event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'
    })
}
