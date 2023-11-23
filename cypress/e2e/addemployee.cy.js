describe('verify add employee functionality', () => {
    it('verify add employee with valid details', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    // cy.contains('Dashboard').should("be.visible")
    // cy.contains('PIM').click()
    // cy.contains('Add Employee').click()
    cy.get('input[placeholder="First Name"]').type("madan")
    cy.get('input[placeholder="Last Name"]').type("s")
    cy.get('.oxd-button--secondary').click()
    // cy.contains("Successfully Saved").should('be.visible').and("have.text",'Successfully Saved')
    cy.get(".oxd-text--toast-message").should("have.text",'Successfully Saved')
   

})

    it('verify mandatory details in add employee', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Dashboard').should("be.visible")
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('button[type="submit"]').click()
    cy.contains("Required").should('be.visible')

})
it('verify characters limit for first name field and last name field', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Dashboard').should("be.visible")
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[placeholder="First Name"]').type("madanmadangafsdanmahgfddtyuiokgf")
    cy.get('input[placeholder="Last Name"]').type("smassssddddffgghhhjjkklloppplkkjjj")
    cy.get('button[type="submit"]').click()
    cy.contains('Should not exceed 30 characters').should('be.visible')

})






})