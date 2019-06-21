const footballBettingPage = {

    /**
     *  Football betting page
     */
    eventsSelector: {value: '#featured .cell--link [data-js-e-id]+span'},
    bothTeamsToScoreSelector: {value: '[data-test-id="rabMarketsAccordion"] [data-test-market="Both Teams To Score"]'},
    bothTeamsToScoreYesSelector: {value: '//div[@data-test-id="rabMarketsAccordion"]//div[@data-test-name="Yes"]//div[contains(text(),"Yes")]'},
    bothTeamsToScoreYesValueSelector: {value: '[data-test-id="rabMarketsAccordion"] [data-test-name="Yes"] [data-oc-id]'},
    bothTeamsToScoreNoSelector: {value: '[data-test-id="rabMarketsAccordion"] [data-test-name="No"] [data-oc-id]'},
    fullTimeResultsWinSelector: {value: '//div[@data-test-id="rabMarketsAccordion"]//*[text() = "Win"]'},
    fullTimeResultsDrawSelector: {value: '//div[@data-test-id="rabMarketsAccordion"]//*[text() = "Draw"]'},


    select1StEvents() {
        helpers.waitElementAppear(footballBettingPage.eventsSelector.value);
        helpers.clickElementFromListOfElements(footballBettingPage.eventsSelector.value, 0);
    },
    selectBothTeamsToScore() {
        helpers.waitElementAppear(footballBettingPage.bothTeamsToScoreSelector.value);
        helpers.click(footballBettingPage.bothTeamsToScoreSelector.value);
    },
    isSelectBothTeamsToScoreYesDisplayed() {
        helpers.waitElementAppear(footballBettingPage.bothTeamsToScoreYesSelector.value);
        return helpers.isElementDisplayed(footballBettingPage.bothTeamsToScoreYesSelector.value);
    },
    getBothTeamsToScoreYesValue() {
        helpers.waitElementAppear(footballBettingPage.bothTeamsToScoreYesValueSelector.value);
        return helpers.getText(footballBettingPage.bothTeamsToScoreYesValueSelector.value);
    },

    isFullTimeResultWinsDisplayed() {
        helpers.waitElementAppear(footballBettingPage.fullTimeResultsWinSelector.value);
        return helpers.isElementDisplayed(footballBettingPage.fullTimeResultsWinSelector.value);
    },
    isFullTimeResultDrawDisplayed() {
        helpers.waitElementAppear(footballBettingPage.fullTimeResultsDrawSelector.value);
        return helpers.isElementDisplayed(footballBettingPage.fullTimeResultsDrawSelector.value);
    },

};

module.exports = footballBettingPage;
