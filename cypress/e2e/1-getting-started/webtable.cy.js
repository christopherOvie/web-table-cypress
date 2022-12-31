/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });


  it("Calculate and assert the total age of all users", () => {

    var userDetail = [];
    let numb =0;

    cy.get('#thumbnail-1 td').each(($el, index,$list)=>{

  userDetail[index]=   $el.text();

    }).then(()=>{

      var i;
      for(i=5;i<userDetail.length;i++){
        //cy.log(userDetail[i])
        numb += Number(userDetail[i])
        
      }
    })
     
  });
});
