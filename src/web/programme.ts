import { x } from '../index'

const ajouterEntrée = (entrée: string) => {
  const valeurALécran = x(entrée)
  const ecran = document.getElementById('ecran')
  ecran.innerText = valeurALécran.toString()
}

window.onkeypress = (evenement) => {
  ajouterEntrée(evenement.key)
}

document.querySelectorAll('[data-entrée-calc]').forEach((button) => {
  button.addEventListener('click', () => {
    const entrée = button.getAttribute('data-entrée-calc')?.toString() || ''
    ajouterEntrée(entrée)
  })
})
