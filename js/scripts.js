const schemeSvg = document.querySelector('.schemeSvg')
const totalPriceTag = document.querySelector('.total-price')
let unitPrice = 500,
  totalPrice = 0,
  countPlace = 0
schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    if (!event.target.classList.contains('light')) {
      if (!event.target.classList.contains('schemeSvg')) {
        event.target.classList.toggle('active')
        countPlace = document.querySelectorAll('.active').length
        totalPrice = unitPrice * countPlace
        totalPriceTag.textContent = totalPrice
      }
    }
  }
})
