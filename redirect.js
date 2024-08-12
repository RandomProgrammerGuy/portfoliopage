// THIS SCRIPT IS USED TO AUTOMATICALLY REDIRECT THE USER TO THE CORRECT PAGE BASED ON THEIR BROWSER LANGUAGE

const lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || "fallback";
const metas = document.getElementsByTagName("meta")


if (lang.indexOf("fr") > -1) {
    metas.refresh.content = "0; url=./fr/accueil.html"
} else {
    metas.refresh.content = "0; url=./en/home.html"
}

metas.refresh.setAttribute("http-equiv", "refresh")

console.log(metas.refresh)