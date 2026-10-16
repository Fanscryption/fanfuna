/**
 * moving events in list, if they are in the future
 * @param {HTMLElement} element
 */
function modifyElementIfInFuture(element) {
  const datestring = element.dataset.date
  if (!datestring) {
    console.warn('missing date parameter?', element)
    return
  }

  const date = new Date(datestring)
  if (Number.isNaN(date.getTime())) {
    console.warn('found invalid date:', datestring, element)
    return
  }

  if (date < Date.now()) {
    return
  }

  element.dataset.future = ''
}
