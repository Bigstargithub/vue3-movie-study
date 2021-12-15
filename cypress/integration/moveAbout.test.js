describe('About 페이지로 이동', () => {
  it('메인페이지로 접근합니다.', () => {
    cy.visit('/');
    cy.get('header .nav-link.active')
      .contains('Search')
  })

  it('About 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(3000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('Bigstar')
  })

  it('영화 상세페이지로 이동합니다.',() => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()
      .should('include', '/movie')
  })

  it('About 페이지로 이동합니다.', () => {
    cy.get('header .user')
      .click()
    cy.url()
      .should('include', '/about')
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('Bigstar')
  })
})