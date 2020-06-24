import { expect } from 'chai'

import { x } from '.'

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

  it('retourne le nombre courant après *', () => {
    x(2)
    const resultat = x('*')
    expect(resultat).to.equal(2)
  })

  it('retourne le nombre courant après /', () => {
    x(2)
    const resultat = x('/')
    expect(resultat).to.equal(2)
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

  it('retourne le chiffre tapé après *', () => {
    x(1)
    x(5)
    x('*')
    const resultat = x(9)
    expect(resultat).to.equal(9)
  })

  it('retourne le chiffre tapé après /', () => {
    x(1)
    x(4)
    x('/')
    const resultat = x(7)
    expect(resultat).to.equal(7)
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

  it('retourne le résultat de la multiplication après =', () => {
    x(1)
    x(5)
    x('*')
    x(2)
    const resultat = x('=')
    expect(resultat).to.equal(30)
  })

  it('retourne le résultat de la division après =', () => {
    x(1)
    x(0)
    x('/')
    x(2)
    const resultat = x('=')
    expect(resultat).to.equal(5)
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

  it('enchaîne des opérations après =', () => {
    x(5)
    x('-')
    x('3')
    x('=')
    x('*')
    x(2)
    expect(x('=')).to.equal(4)
  })

  it('peut effectuer une série de toutes les opérations', () => {
    x(1)
    x(3)
    x('+')
    x('9')
    x(0)
    x('-')
    x('5')
    x('=')
    x('*')
    x(2)
    expect(x('=')).to.equal(196)
  })

  xit("peut changer d'opérateur en cours de route", () => {
    x(2)
    x('*')
    x(2)
    expect(x('*')).to.equal(4)
    expect(x('-')).to.equal(4)
    x(1)
    expect(x('=')).to.equal(3)
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

  it('ignore les entrées inconnues', () => {
    x(9)
    expect(x('m')).to.equal(9)
    expect(x(6)).to.equal(96)
  })
})
