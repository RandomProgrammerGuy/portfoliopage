// THIS SCRIPT IS USED TO AUTOMATICALLY REDIRECT THE USER TO THE CORRECT PAGE BASED ON THEIR BROWSER LANGUAGE

// Detect language
const lang = navigator.language || navigator.userLanguage || "fallback";

// Redirect user
if (lang.startsWith("fr")) {
  window.location.href = "./fr/accueil.html";
} else {
  window.location.href = "./en/home.html";
}
