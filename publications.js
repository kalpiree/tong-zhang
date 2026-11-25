const form = document.querySelector('form[role=search]')
const field = form.querySelector('input')
const status = form.querySelector('[role=status]')
const groups = document.querySelectorAll('main section')
function filterPapers() {
  const query = field.value.trim().toLowerCase()
  let count = 0
  groups.forEach(group => {
    let matches = 0
    group.querySelectorAll('article').forEach(paper => {
      paper.hidden = !paper.textContent.toLowerCase().includes(query)
      if (!paper.hidden) matches++
    })
    group.hidden = !matches
    count += matches
  })
  status.textContent = query ? (count === 1 ? '1 matching paper' : count + ' matching papers') : ''
}
form.hidden = false
form.addEventListener('submit', event => event.preventDefault())
form.addEventListener('reset', () => {
  field.value = ''
  filterPapers()
  field.focus()
})
field.addEventListener('input', filterPapers)
