// Logout button click event
document.getElementById("logoutButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link

    // Perform logout actions here if needed

    // Redirect the user to the index.html page
    window.location.href = "index.html";

    // Clear browsing history
    window.history.replaceState({}, document.title, "index.html");
});

// Home button click event
document.getElementById("homeButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link

    // Redirect the user to the home.html page
    window.location.href = "index.html";

    // Clear browsing history
    window.history.replaceState({}, document.title, "index.html");
});

// About button click event
document.getElementById("aboutButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link

    // Redirect the user to the home.html page
    window.location.href = "index.html";

    // Scroll to the about section in index.html
    document.getElementById("target_aboutSec").scrollIntoView({ behavior: "smooth" });


    // Clear browsing history
    window.history.replaceState({}, document.title, "index.html");
});
