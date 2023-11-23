describe('guarantee scheme', () => {
    it('gruha jyothi', () => {
    cy.visit('https://sevasindhugs.karnataka.gov.in')
    cy.contains('[id="gruhaJoythi"]').click()
    cy.contains('English').click()
    cy.get('[value="BESCOM"]').select('BESCOM').should('have.value','1')
    
       
     
    })
})
