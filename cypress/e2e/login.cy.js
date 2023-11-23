describe('login functionality', () => {
    it('verify login with valid username and valid password', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Dashboard').should("be.visible")
})

    it('verify login with invalid username valid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   
    cy.get('input[placeholder="Username"]').type('Admin1243')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    //cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Invalid credentials').should("be.visible")
})

 it('verify login with valid username invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123123')
    cy.get('button[type="submit"]').click()
    //cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Invalid credentials').should("be.visible")
})
 
it('verify login with invalid username invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   
    cy.get('input[placeholder="Username"]').type('Adminwerr')
    cy.get('input[name="password"]').type('admin123123')
    cy.get('button[type="submit"]').click()
    //cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Invalid credentials').should("be.visible")
})



})