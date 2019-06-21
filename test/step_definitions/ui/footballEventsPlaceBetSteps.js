const homePage = require('../../pages/frontend/homePage');
const footballBettingPage = require('../../pages/frontend/footballBettingPage');
const axios = require('axios/index');
const chai = require('chai')


module.exports = function () {

    this.Given(/^I am on homepage$/, () => {
        homePage.navigationToHomePage()
    });


    this.When(/^I select football event class$/, () => {
        homePage.selectEventClass()
    });

    this.Then(/^I select first event$/, () => {
        footballBettingPage.select1StEvents()

    });
    this.Then(/^I select Both Teams To Score$/, () => {
        footballBettingPage.selectBothTeamsToScore()
    });

    this.Then(/^I see in the "Both Teams To Score" market name Yes$/, () => {
        expect(footballBettingPage.isSelectBothTeamsToScoreYesDisplayed()).to.be.true;

    });
    this.Then(/^I see a price$/, () => {
        // checking all items are numbers
        expect(/^\d+$/.test(footballBettingPage.getBothTeamsToScoreYesValue().replace("/", ""))).to.be.true;
    });

    this.Then(/^I see full time results Win and Draw$/, () => {
        expect(footballBettingPage.isFullTimeResultWinsDisplayed()[0]).to.be.true;
        expect(footballBettingPage.isFullTimeResultDrawDisplayed()).to.be.true;
    });


};