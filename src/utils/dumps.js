const clickHandler = (status) => {
  switch (status) {
    case 1:
      sendLog('processing')
      jumpTo('IndexPage')
      break
    case 2:
      break
    case 3:
      sendLog('fail')
      jumpTo('FailPage')
      break
    case 4:
      sendLog('success')
      jumpTo('SuccessPage')
      break
    case 5:
      sendLog('cancel')
      jumpTo('CancelPage')
      break
    default:
      sendLog('other')
      jumpTo('Index')
  }
}

const actions = {
  '1': ['processing', 'IndexPage'],
  '2': ['fail', 'FailPage'],
  '3': ['fail', 'FailPage'],
  '4': ['success', 'SuccessPage'],
  '5': ['cancel', 'CancelPage'],
  'default': ['other', 'Index']
}
const clickHandler = (status) => {
  let action = actions[status] || actions['default'], 
  LogName = action[0],
  pageName = action[1]
  sendLog(LogName)
  jumpTo(pageName)
}