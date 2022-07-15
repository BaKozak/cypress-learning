// // const formsContentValues = [
// //     'Account ID',
// //     'Organization ID',
// //     'Full Name',
// //     'Job Title',
// //     'Company Name',
// //     'Skills',
// //     'Short Bio',
// //     'Preferred Contact Email',
// //     'Discord Username',
// //     'My Website URL',
// //     'GitHub URL',
// //     'Twitter URL',
// //     'Join Discord!',
// //     'What brings you to LiveChat Developer Program?'
// //   ]




// //   const formsContentValues2 = {
// //     "titles" : ['Account ID',
// //     'Organization ID',
// //     'Full Name',
// //     'Job Title',
// //     'Company Name',
// //     'Skills',
// //     'Short Bio',
// //     'Preferred Contact Email',
// //     'Discord Username',
// //     'My Website URL',
// //     'GitHub URL',
// //     'Twitter URL',
// //     'Join Discord!',
// //     'What brings you to LiveChat Developer Program?'],

// //     "IDs": [
// //       '#name',
// //       '#jobTitle',
// //       '#company',
// //       '#skills',
// //       '#bio',
// //       '#website',
// //       '#twitter',
// //       '#contactEmail'
// //     ]
// //   }


// const mockIDs = [
//   '#name',
//   '#company',
//   '#skills',
//   '#bio',
//   '#website',
//   '#twitter',
//   '#contactEmail'
// ]

// const mockIDsvalues = [
// {'#name': 'BartoszMOCK'},
// {'#company': 'Best'},
// {'#skills': 'JavaScript'},
// {'#bio': 'Sprawdzam Mocking'},
// {'#name': 'BartoszMOCK'},
// {'#twitter': 'dont use it'},
// {'#contactEmail': 'private'}
// ]


// function mockingCheck(hashtag) { if(hashtag == '#skills') {
// cy.get(hashtag).children().first().invoke('prop', 'textContent').should('contain', mockIDsvalues)
// } else {
// cy.get(hashtag).should('have.value', mockIDsvalues)
// }}

// describe('prototyp', () =>{
//   it.only('testowo', () => {
//     mockCheck(mockIDs)
//   })
// })


// // cy.get('#name').should('have.value', 'BartoszMOCK')
// // cy.get('#company').should('have.value', 'Best')
// // cy.get('#skills').children().first().invoke('prop', 'textContent').should('contain', 'JavaScript') //need to analyze
// // cy.get('#bio').should('have.value', 'Sprawdzam Mocking')
// // cy.get('#website').should('have.value', 'I have none')
// // cy.get('#twitter').should('have.value', 'dont use it')
// // cy.get('#contactEmail').should('have.value', 'private')



        // cy.get('#accountID').within(() => {
        //   cy.contains('Copy').click().should('have.text', 'Copied!')
        // })     //ANALYZE



// it('Functionalities - copy account ID and organization ID', () => {
//   cy.get('#accountID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")  //check if is working
//   cy.get('#organizationID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")
//   // write code to check if the account ID has decidaded number of characters - selectionStart: 36
// })



          // cy.intercept('POST', '**/v2/survey', {fixture: 'mockSurvey2.json'}).as('mocker2')