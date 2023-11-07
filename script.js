document.getElementById("showHomeLink").addEventListener("click", function () {
    var hiddenHome = document.getElementById("hiddenHome");

    if (hiddenHome.style.display === "none") {
        hiddenHome.style.display = "block";
        hiddenContacts.style.display = "none";
        hiddenPortfolio.style.display = "none";
    } else {
        hiddenHome.style.display = "none";
    }

});

document.getElementById("showPortfolioLink").addEventListener("click", function () {
    var hiddenPortfolio = document.getElementById("hiddenPortfolio");

    if (hiddenPortfolio.style.display === "none") {
        hiddenPortfolio.style.display = "block";
        hiddenContacts.style.display = "none";
        hiddenHome.style.display = "none";
    } else {
        hiddenPortfolio.style.display = "none";
    }

});

document.getElementById("showContacts").addEventListener("click", function () {
    var hiddenContacts = document.getElementById("hiddenContacts");
    if (hiddenContacts.style.display === "none") {
        hiddenContacts.style.display = "block";
        hiddenPortfolio.style.display = "none";
        hiddenHome.style.display = "none";
    } else {
        hiddenContacts.style.display = "none";
    }
});