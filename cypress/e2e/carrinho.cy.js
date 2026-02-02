describe('Carrinho', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Adicionar produtos(s) ao carrinho', () => {
    cy.contains('.shelf-item', 'iPhone 12')
      .find('.shelf-item__buy-btn')
      .click()     
    cy.contains('.shelf-item', 'Galaxy S20')
      .find('.shelf-item__buy-btn')
      .click()

      // Aumenta quantidade (+)
    cy.get('.float-cart__content')
      .find('.change-product-button')
      .contains('+')
      .click()

      // Assert de um requisito mensagem de "Adicionado ao carrinho"
    cy.contains('Adicionado ao carrinho')
      .should('be.visible')
          
  })

})  