## My Cypress Project (Cypress_automation)

- Using https://demoqa.com/

First of all:
- install:
- npm init -y
- npm i cypress -D
- Configuration cypress.json and packege.json script
"cypress:open": "cypress open"
- create branch on gitHub(Create a branch on gitHub and sub.branches(develop master and first_test
-npm run cypress:open (open package)

cypress.json:
{
    "baseUrl": "https://demoqa.com/",
    "ignoreTestFiles": "**/examples/*",
    "viewportHeight": 1080,
    "viewportWidth": 1920
}
