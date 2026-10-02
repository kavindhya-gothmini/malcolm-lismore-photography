/* =========================================================
MALCOLM LISMORE PHOTOGRAPHY
MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

handleNavbarScroll();

window.addEventListener("scroll", handleNavbarScroll);


/* =====================================================
   CLOSE MOBILE NAVIGATION AFTER CLICK
===================================================== */

const navigationLinks =
    document.querySelectorAll("#mainNavigation .nav-link");

const navigationMenu =
    document.getElementById("mainNavigation");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            window.innerWidth < 992 &&
            navigationMenu &&
            navigationMenu.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navigationMenu);

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            }

        }

    });

});


});
