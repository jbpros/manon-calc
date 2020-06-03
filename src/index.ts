let memoire = 0
let operandeGauche = 0
let operateur: '+' | '-' | '*' = '+'

function appliqueOperation(): number {
  if (operateur === '+') {
    return operandeGauche + memoire
  } else if (operateur === '-') {
    return operandeGauche - memoire
  } else if (operateur === '*') {
    return operandeGauche * memoire
  }
  throw new Error('Opérateur inconnu')
}

export function x(n: number | string) {
  if (n === '+' || n === '-' || n === '*') {
    operandeGauche = appliqueOperation()
    memoire = 0
    operateur = n
    return operandeGauche
  } else if (n === '=') {
    memoire = appliqueOperation()
    operandeGauche = 0
    operateur = '+'
    return memoire
  } else if (n === 'AC') {
    operandeGauche = 0
    operateur = '+'
    return (memoire = 0)
  } else if (n === 'C') {
    return (memoire = 0)
  } else if (/^[0-9]$/.test(n.toString())) {
    memoire = memoire * 10 + parseInt(`${n}`)
    return memoire
  }
  return memoire
}
