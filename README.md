# racella-ignacio-e2e
You tube e2e test

This is an end to end test that does a search on youtube for a specfic text input and clicks on a selected video.
Text to search and video to select - "The whole working-from-home thing — Apple".

There are 2 files created for this project for code maintainability and clean coding:
1. Test file under the integration folder - youtube.spec.js 
2. Page file under the pages folder which contains functions and element locators - youtube_page.js

To run the test on Cypress:
1. Make sure that your IDE example: VSCode has support for Javascript and have Cypress and nodejs installed to be able to run the test on the Cypress test runner
2. Clone this project
3. Open the folder on your IDE where the project resides. For this project the folder is YOUTUBE
4. On your IDE terminal type "npx cypress open" to launch the Cypress test runner console
5. On the Cypress console click on a test to run the test

Note: 
Due to time constraint implicit assertion was used instead of explicit assertion and hard wait instead of timeout.

Node_Modules folder is not included in the repository as there are too many files in it. Installing Cypress will create this folder and the files in it.

