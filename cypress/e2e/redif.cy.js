describe('rediffmail login functionality', () => {
  it('passes', () => {
    cy.visit('https://register.rediff.com/register/register.php?ref_id=&cbcb')
    cy.get('[type="text"]').eq(0).type('Madann Gowdaaa')
    cy.get('[type="text"]').eq(1).type('madann1234@rediffmail.com')
    cy.get('[value="Check availability"]').click()
    cy.get('#newpasswd').type('Shivareddy123$')
    cy.get('#newpasswd1').type('Shivareddy123$')
    cy.get('[type="text"]').eq(2).type('davanca@rediffmail.com')
    cy.get('[id="altid_msg"]').click()
    cy.get('input[id="mobno"]').type('8970800911')
    cy.get('[onchange="fieldTrack(this);"]').eq(1).select('01').should('have.value', '01')
    cy.get('[onchange="fieldTrack(this);"]').eq(2).select('02').should('have.value', '02')
    cy.get('[onchange="fieldTrack(this);"]').eq(3).select('2022').should('have.value', '2022')

    cy.get('[type="radio"]').eq(1).click()
    
    cy.get('[id="div_city"]').type('bangalore')
    cy.get('input[class="captcha"]').type()
    cy.contains('[value="Create my account >>"]').click()

 })
})