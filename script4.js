const modal = document.getElementById('modal')
const openModal = document.getElementById('open-button')
const closeModal = document.getElementById('close-modal')
const passwordButton = document.getElementById('password-button')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

function modalClose () {
  modal.close()
  name.value = ''
  email.value = ''
  password.value = ''
}

openModal.addEventListener('click', () => {
  modal.showModal()
})

closeModal.addEventListener('click', () => {
  modalClose()
})

passwordButton.addEventListener('pointerdown', () => {
  password.type = 'text'
})
passwordButton.addEventListener('pointerup', () => {
  password.type = 'password'
})

function validateInput (input, errorMessage) {
  if (!input.validity.valid) {
    input.setAttribute('aria-invalid', true)
    errorMessage.removeAttribute('hidden')
  } else {
    input.removeAttribute('aria-invalid')
    errorMessage.setAttribute('hidden', true)
  }
}

name.addEventListener('blur', () => {
  const errorMessage = document.getElementById('name-error')
  validateInput(name, errorMessage)
})

email.addEventListener('blur', () => {
  const errorMessage = document.getElementById('email-error')
  validateInput(email, errorMessage)
})

password.addEventListener('blur', () => {
  const errorMessage = document.getElementById('password-error')
  validateInput(password, errorMessage)
})

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  if (name.validity.valid && email.validity.valid && password.validity.valid) {
    const data = new FormData()
    data.append('name', name.value)
    data.append('email', email.value)
    data.append('password', password.value)
    console.log(`Имя: ${data.get('name')}, Почта: ${data.get('email')}, Пароль: ${data.get('password')}`)
    modalClose()
  } else {
    if (!name.validity.valid) {
      name.focus()
    } else if (!email.validity.valid) {
      email.focus()
    } else {
      password.focus()
    }
  }
})
