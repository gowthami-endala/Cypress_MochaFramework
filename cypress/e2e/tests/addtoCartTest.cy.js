import testData from '../../fixtures/testData.json'
import { homePage } from '../../../pages/homePage.js'


const homePageObj = new homePage()


describe(' test automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);






    })
})