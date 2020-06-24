import { x } from '../index'

const ajouterEntrée = (entrée: string) => {
  const valeurALécran = x(entrée)
  const ecran = document.getElementById('ecran')
  ecran.innerText = valeurALécran.toString()
}

window.onkeypress = (evenement: KeyboardEvent) => {
  ajouterEntrée(evenement.key)
  evenement.preventDefault()
}

document.querySelectorAll('[data-entrée-calc]').forEach((button) => {
  button.addEventListener('click', () => {
    const entrée = button.getAttribute('data-entrée-calc')?.toString() || ''
    ajouterEntrée(entrée)
  })
})
