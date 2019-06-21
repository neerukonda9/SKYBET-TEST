const homePage = {

    /**
     *  Home page
     */


    eventClassSelector: {value: '#top-sports-nav .icon-nav__link[href="/football"]'},

    navigationToHomePage() {
        helpers.maximize();
        navigation.navigate("HomePage");
    },

    selectEventClass() {
        helpers.waitElementAppear(homePage.eventClassSelector.value);
        helpers.click(homePage.eventClassSelector.value);
    },





};

module.exports = homePage;
