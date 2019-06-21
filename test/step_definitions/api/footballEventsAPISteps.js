const footballEventsService = require('../../api/services/footballEventsService');
const sessionStorage = require('../../session/sessionStorage');

const chai = require('chai')
expect = chai.expect;


module.exports = function () {


    this.Given(/^I've get all Football events service$/, () => {

    });
    this.When(/^I get all Football events$/, () => {
        let events = [];
        let response;

        browser.call(async () => {
            response = await footballEventsService.getFootballLiveEvents()
        });
        events = response.data.events
        sessionStorage.setData("events", events);

    });
    this.Then(/^I see Football events returned$/, () => {
        const events = sessionStorage.getData("events");
        expect(events.length).to.be.at.above(0);


    });
    this.Then(/^I see that there is a (.+) and an (.+) competitor for each of the events$/, (positionHome, positionAway) => {
        const  events = sessionStorage.getData("events");
        events.map(function (event) {
            expect(event.competitors).to.have.deep.property('[0].position', positionHome);
            expect(event.competitors).to.have.deep.property('[1].position', positionAway);
        })
    });

};