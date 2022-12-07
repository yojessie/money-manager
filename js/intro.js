// open setting page
function addStartDayOptionse() {
  for (let i = 1; i <= 30; i++) {
    const option = document.createElement('option')
    option.value = `${i}`
    option.text = `${i}일`
    startDaySelect.appendChild(option)
  }
}

function openSettingPage() {
  introPage.classList.toggle('visually-hidden')
  settingPage.classList.toggle('visually-hidden')
  addStartDayOptionse()
}

introPlusButton.addEventListener('click', openSettingPage)
