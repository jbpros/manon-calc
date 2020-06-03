import { x } from '../index'

window.onkeypress = (evenement) => {
  const valeurALécran = x(evenement.key)
  const ecran = document.getElementById('ecran')
  ecran.innerText = valeurALécran.toString()
}
