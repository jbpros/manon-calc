import { expect } from 'chai'

describe('calculatrice', () => {
  beforeEach(() => {
    x('AC')
  })

  it('retourne un chiffre unique', () => {
    const resultat = x(1)
    expect(resultat).to.equal(1)
  })

  it('retourne un nombre à chiffres multiple', () => {
    x(1)
    const resultat = x(5)
    expect(resultat).to.equal(15)
  })

  it('retourne le nombre courant après +', () => {
    x(1)
    const resultat = x('+')
    expect(resultat).to.equal(1)
  })

  it('retourne le nombre courant après -', () => {
    x(1)
    const resultat = x('-')
    expect(resultat).to.equal(1)
  })

  it('retourne le chiffre tapé après +', () => {
    x(1)
    x(5)
    x('+')
    const resultat = x(2)
    expect(resultat).to.equal(2)
  })

  it('retourne le chiffre tapé après -', () => {
    x(1)
    x(5)
    x('-')
    const resultat = x(9)
    expect(resultat).to.equal(9)
  })

  it("retourne le résultat de l'addition après =", () => {
    x(1)
    x(5)
    x('+')
    x(2)
    const resultat = x('=')
    expect(resultat).to.equal(17)
  })

  it('retourne le résultat de la soustraction après =', () => {
    x(1)
    x(5)
    x('-')
    x(2)
    const resultat = x('=')
    expect(resultat).to.equal(13)
  })

  it('enchaîne les additions', () => {
    x(1)
    x(5)
    x('+')
    x(2)
    x('=')
    x('+')
    x(4)
    x(0)
    const resultat = x('=')
    expect(resultat).to.equal(57)
  })

  it('considère des opérations intermédiaires avec des soustractions', () => {
    x(1)
    x('-')
    x(2)
    const resultat = x('-')
    expect(resultat).to.equal(-1)
  })

  it('considère des opérations intermédiaires', () => {
    x(1)
    x('+')
    x(2)
    x('-')
    x(4)
    const resultat = x('-')
    expect(resultat).to.equal(-1)
  })

  it('peut mettre la mémoire à zéro', () => {
    x(9)
    x('-')
    x(5)
    x(1)
    const resultat = x('C')
    expect(resultat).to.equal(0)
  })

  it('peut être remise à zéro', () => {
    x(9)
    x('+')
    x(4)
    x('-')
    x(1)
    expect(x('AC')).to.equal(0)
    x(1)
    x('+')
    x(2)
    expect(x('=')).to.equal(3)
  })
})

let memoire = 0
let operandeGauche = 0
let operateur: '+' | '-' = '+'

function appliqueOperation(): number {
  if (operateur === '+') {
    return operandeGauche + memoire
  } else if (operateur === '-') {
    return operandeGauche - memoire
  }
  throw new Error('Opérateur inconnu')
}

function x(n: number | string) {
  if (n === '+' || n === '-') {
    operandeGauche = appliqueOperation()
    memoire = 0
    operateur = n
    return operandeGauche
  } else if (n === '=') {
    memoire = appliqueOperation()
    operandeGauche = 0
    return memoire
  } else if (n === 'AC') {
    operandeGauche = 0
    operateur = '+'
    return (memoire = 0)
  } else if (n === 'C') {
    return (memoire = 0)
  } else {
    memoire = memoire * 10 + parseInt(`${n}`)
    return memoire
  }
}
