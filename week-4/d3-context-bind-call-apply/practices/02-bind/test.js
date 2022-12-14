// Your code here

const chai = require("chai");
const expect = chai.expect;
const Employee = require(`./employee`);


describe("Employee class", () => {
    let john;
     john = new Employee(`John Wick`,`Dog Lover`)
    
    describe("Employee constructor", () => {
        it("should set the name property", () => {
            expect(john).to.have.property("name");
            expect(john.name).to.eql("John Wick");
        });

        it("should set the occupation property", () => {
            expect(john).to.have.property("occupation");
            expect(john.occupation).to.eql("Dog Lover");
        });



    });

});
