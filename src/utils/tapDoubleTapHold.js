import interact from 'interactjs'

export default function ($tapTarget) {
  interact($tapTarget)
    .on('tap', function (event) {
      event.currentTarget.classList.toggle('switch-bg')
      event.preventDefault()
    })
    .on('doubletap', function (event) {
      event.currentTarget.classList.toggle('large')
      event.currentTarget.classList.remove('rotate')
      event.preventDefault()
    })
    .on('hold', function (event) {
      event.currentTarget.classList.toggle('rotate')
      event.currentTarget.classList.remove('large')
    })
}
