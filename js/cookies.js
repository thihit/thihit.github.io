/* =========================================================
   COOKIE CONSENT
   ========================================================= */

const cookieBanner = document.querySelector("#cookie-banner");
const cookieModal = document.querySelector("#cookie-modal");

const cookieAccept = document.querySelector("#cookie-accept");
const cookieReject = document.querySelector("#cookie-reject");
const cookiePreferences = document.querySelector("#cookie-preferences");

const cookieSave = document.querySelector("#cookie-save");
const cookieModalClose = document.querySelector("#cookie-modal-close");
const cookieModalOverlay = document.querySelector(".cookie-modal-overlay");

const cookieAnalytics = document.querySelector("#cookie-analytics");
const cookieMarketing = document.querySelector("#cookie-marketing");

const cookieSettings = document.querySelector("#cookie-settings");


/* =========================================================
   STORAGE
   ========================================================= */

const COOKIE_STORAGE_KEY = "cookiePreferences";


function getCookiePreferences() {

    const savedPreferences =
        localStorage.getItem(COOKIE_STORAGE_KEY);

    if (!savedPreferences) {
        return null;
    }

    try {

        return JSON.parse(savedPreferences);

    } catch (error) {

        console.error(
            "Unable to read cookie preferences:",
            error
        );

        return null;
    }
}


/* =========================================================
   SAVE PREFERENCES
   ========================================================= */

function saveCookiePreferences(analytics, marketing) {

    const preferences = {

        essential: true,

        analytics: Boolean(analytics),

        marketing: Boolean(marketing),

        timestamp: new Date().toISOString()

    };

    localStorage.setItem(
        COOKIE_STORAGE_KEY,
        JSON.stringify(preferences)
    );

    return preferences;
}


/* =========================================================
   BANNER
   ========================================================= */

function showCookieBanner() {

    if (!cookieBanner) {
        return;
    }

    cookieBanner.classList.add("is-visible");
}


function hideCookieBanner() {

    if (!cookieBanner) {
        return;
    }

    cookieBanner.classList.remove("is-visible");
}


/* =========================================================
   MODAL
   ========================================================= */

function openCookieModal() {

    if (!cookieModal) {
        return;
    }

    const preferences = getCookiePreferences();

    if (preferences) {

        if (cookieAnalytics) {
            cookieAnalytics.checked =
                Boolean(preferences.analytics);
        }

        if (cookieMarketing) {
            cookieMarketing.checked =
                Boolean(preferences.marketing);
        }

    } else {

        if (cookieAnalytics) {
            cookieAnalytics.checked = false;
        }

        if (cookieMarketing) {
            cookieMarketing.checked = false;
        }

    }

    cookieModal.classList.add("is-open");

    cookieModal.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeCookieModal() {

    if (!cookieModal) {
        return;
    }

    cookieModal.classList.remove("is-open");

    cookieModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   ACCEPT ALL
   ========================================================= */

if (cookieAccept) {

    cookieAccept.addEventListener("click", () => {

        saveCookiePreferences(true, true);

        hideCookieBanner();

        closeCookieModal();

    });

}


/* =========================================================
   REJECT OPTIONAL
   ========================================================= */

if (cookieReject) {

    cookieReject.addEventListener("click", () => {

        saveCookiePreferences(false, false);

        hideCookieBanner();

        closeCookieModal();

    });

}


/* =========================================================
   MANAGE PREFERENCES
   ========================================================= */

if (cookiePreferences) {

    cookiePreferences.addEventListener("click", () => {

        openCookieModal();

    });

}


/* =========================================================
   SAVE CUSTOM PREFERENCES
   ========================================================= */

if (cookieSave) {

    cookieSave.addEventListener("click", () => {

        const analytics =
            cookieAnalytics
                ? cookieAnalytics.checked
                : false;

        const marketing =
            cookieMarketing
                ? cookieMarketing.checked
                : false;

        saveCookiePreferences(
            analytics,
            marketing
        );

        hideCookieBanner();

        closeCookieModal();

    });

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

if (cookieModalClose) {

    cookieModalClose.addEventListener("click", () => {

        closeCookieModal();

    });

}


if (cookieModalOverlay) {

    cookieModalOverlay.addEventListener("click", () => {

        closeCookieModal();

    });

}


/* =========================================================
   COOKIE SETTINGS
   ========================================================= */

if (cookieSettings) {

    cookieSettings.addEventListener("click", (event) => {

        event.preventDefault();

        openCookieModal();

    });

}


/* =========================================================
   INITIALIZE
   ========================================================= */

const savedCookiePreferences =
    getCookiePreferences();

if (!savedCookiePreferences) {

    showCookieBanner();

}