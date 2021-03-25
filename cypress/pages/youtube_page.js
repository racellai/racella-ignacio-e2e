export class YoutubePage{

    /* Launches youtube.com and waits for 4 seconds to make
       sure that the page loads completely before the next step
    */
    navigate(url){
        cy.visit(url)
        cy.wait(4000)
    }


    // Inputs the text to search in the search box
    inputSearchText(search_text){
        cy.get('#search-input > #search').type(search_text)
    }


    /* Clicks on the search button and waits for 4 seconds
     to make sure that all the page links loads before the next step
    */
    submitSearch(){
        cy.get('#search-icon-legacy').click()
        cy.wait(4000)
    }


    /* Clicks on the link that matches the searched text
       and waits for 2 seconds before the assertion steps
    */
    clickLink(search_text){
        cy.contains(search_text).click()
        cy.wait(2000)
    } 


    /* Asserts that clicked page link goes to the correct page
       that matches the searched text 
    */
    verifySearchLandingPage(search_text){
       cy.get('.ytd-watch-flexy > :nth-child(1) > .title > .style-scope')
         .should('contain', search_text)
    }


    // Asserts that uploader is Apple
    verifyUploader(){
     cy.get('a')
       .should('contain', 'Apple')
       .and('have.class', 'yt-simple-endpoint')
       .and('have.attr', 'href')
     }
}
