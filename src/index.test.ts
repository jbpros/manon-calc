import { expect } from 'chai'

describe('calculator', () => {
  it('retourne un chiffre unique', () => {
    const resultat = x(1)
    expect(resultat).to.equal(1)
  })

  it('retourne un nombre à chiffres multiple', () => {
    memoire = 0
    x(1)
    const resultat = x(5)
    expect(resultat).to.equal(15)
  })

  it('retourne le nombre courant après +', () => {
    memoire = 0
    x(1)
    const resultat = x('+')
    expect(resultat).to.equal(1)
  })

  it('retourne le chiffre tapé après +', () => {
    memoire = 0
    x(1)
    x(5)
    x('+')
    const resultat = x(2)
    expect(resultat).to.equal(2)
  })

  it("retourne le résultat de l'addition après =", () => {
    memoire = 0
    x(1)
    x(5)
    x('+')
    x('2')
    const resultat = x('=')
    expect(resultat).to.equal(17)
  })

  it('enchaîne les additions', () => {
    memoire = 0
    x(1)
    x(5)
    x('+')
    x('2')
    x('=')
    x('+')
    x('4')
    x('0')
    const resultat = x('=')
    expect(resultat).to.equal(57)
  })
})

let memoire = 0
let operandeGauche = 0

function x(n: number | string) {
  if (n === '+') {
    operandeGauche = memoire
    memoire = 0
    return operandeGauche
  } else if (n === '=') {
    memoire = operandeGauche + memoire
    return memoire
  } else {
    memoire = memoire * 10 + parseInt(`${n}`)
    return memoire
  }
}
