// title(spend)
const modalTitle = document.querySelector('.modal-add-content h3')

modalTitle.innerText = '소비 내역'

// date input
// const spendDate = document.querySelector('.calendar-button span')
spendDate.innerText = `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowDay}`

// calendar modal
const calendarIcon = document.querySelector('.calendar-button button')

function openCalendarModal() {
  overlay.classList.toggle('visually-hidden')
  calendarModal.classList.toggle('visually-hidden')
}

calendarIcon.addEventListener('click', openCalendarModal)

// catagories
const catagorySelect = document.querySelector('.spend-catagories')
const spendCatagories = [
  '식비',
  '커피/간식',
  '술/유흥',
  '생활용품',
  '뷰티/미용',
  '의료/건강',
  '패션/의류',
  '전자제품',
  '문화/여가',
  '여행',
  '교육비',
  '교통비',
  '주거/통신',
  '반려동물',
  '자녀/육아',
  '경조/선물',
]

for (let i of spendCatagories) {
  const option = document.createElement('option')
  option.value = `${i}`
  option.text = `${i}`
  catagorySelect.appendChild(option)
}

// change color of select
function changeColor() {
  catagorySelect.style.color = '#3d434b'
}

catagorySelect.addEventListener('change', changeColor)

// star icon (unexpected spend)
const starIcon = document.querySelector('.star-button i')

function checkStar() {
  starIcon.classList.toggle('star-button-red')
}

starIcon.addEventListener('click', checkStar)
