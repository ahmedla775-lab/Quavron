console.log("🚀 Quavron Loaded Successfully");

/* ========================================
NAVIGATION ACTIVE STATES
======================================== */

const navButtons = document.querySelectorAll(
".top-btn, .dashboard-sidebar li"
);

navButtons.forEach(button => {

button.addEventListener("click", () => {

navButtons.forEach(item => {
  item.classList.remove("active-menu");
});

button.classList.add("active-menu");

});

});

/* ========================================
DASHBOARD BUTTONS
======================================== */

const dashboardButtons = document.querySelectorAll(
".dashboard-btn"
);

dashboardButtons.forEach(button => {

button.addEventListener("click", () => {

console.log(
  button.innerText + " clicked"
);

});

});

/* ========================================
QUICK ACTIONS
======================================== */

const actionButtons = document.querySelectorAll(
".actions-grid button"
);

actionButtons.forEach(button => {

button.addEventListener("click", () => {

alert(
  button.innerText + " feature coming soon 🚀"
);

});

});

/* ========================================
AUTH FORMS
======================================== */

/* ========================================
AUTH SYSTEM WITH SUPABASE
======================================== */

// SUPABASE CONFIG

const supabaseUrl =
"https://bxjsfbexfjvqjiaqtmbm.supabase.co";

const supabaseKey =
"ضع_هنا_anon_public_key";

const supabaseClient =
supabase.createClient(
supabaseUrl,
supabaseKey
);

/* ========================================
AUTH FORMS
======================================== */

const authForms =
document.querySelectorAll(".auth-form");

authForms.forEach(form => {

form.addEventListener(
"submit",
async (e) => {

e.preventDefault();

const emailInput =
form.querySelector(
'input[type="email"]'
);

const passwordInput =
form.querySelector(
'input[type="password"]'
);

if (
!emailInput ||
!passwordInput
) {

alert("Missing form fields");

return;

}

const email =
emailInput.value.trim();

const password =
passwordInput.value.trim();

if (!email || !password) {

alert(
"Please enter email and password"
);

return;

}

/* ========================================
REGISTER
======================================== */

const isRegisterForm =
form.innerText
.toLowerCase()
.includes("create");

if (isRegisterForm) {

const { data, error } =
await supabaseClient.auth.signUp({

email,
password

});

if (error) {

alert(error.message);

console.error(error);

return;

}

alert("Account Created 🚀");

console.log(
"REGISTER SUCCESS",
data
);

return;

}

/* ========================================
LOGIN
======================================== */

const { data, error } =
await supabaseClient
.auth
.signInWithPassword({

email,
password

});

if (error) {

alert(error.message);

console.error(error);

return;

}

alert("Login Success 🚀");

console.log(
"LOGIN SUCCESS",
data
);

/* ========================================
SAVE SESSION
======================================== */

localStorage.setItem(
"quavron_user",
JSON.stringify(data.user)
);

/* ========================================
REDIRECT
======================================== */

window.location.href =
"/dashboard.html";

}

);

});

/* ========================================
AUTO LOGIN CHECK
======================================== */

async function checkSession() {

const {
data: { session }
} =
await supabaseClient.auth.getSession();

if (session) {

console.log(
"User already logged in"
);

}

}

checkSession();

/* ========================================
LANGUAGE SWITCHER
======================================== */

const languageSwitcher = document.querySelector(
".language-switcher"
);

if (languageSwitcher) {

languageSwitcher.addEventListener(
"change",
() => {

  const selectedLanguage =
    languageSwitcher.value;

  console.log(
    "Language Changed:",
    selectedLanguage
  );

}

);

}

/* ========================================
SEARCH BAR
======================================== */

const searchBars = document.querySelectorAll(
".search-bar"
);

searchBars.forEach(search => {

search.addEventListener("input", () => {

console.log(
  "Searching:",
  search.value
);

});

});

/* ========================================
PROJECT CARDS
======================================== */

const projectButtons = document.querySelectorAll(
".project-card button"
);

projectButtons.forEach(button => {

button.addEventListener("click", () => {

window.location.href = "/editor";

});

});

/* ========================================
FUTURE THEME SYSTEM
======================================== */

let currentTheme = "dark";

function toggleTheme() {

if (currentTheme === "dark") {

document.body.classList.add(
  "light-theme"
);

currentTheme = "light";

} else {

document.body.classList.remove(
  "light-theme"
);

currentTheme = "dark";

}

}

console.log("Theme System Ready");

/* ========================================
FUTURE NOTIFICATIONS
======================================== */

function showNotification(message) {

console.log(
"Notification:",
message
);

}

/* ========================================
INITIALIZATION
======================================== */

window.addEventListener("load", () => {

console.log(
"Quavron Initialized Successfully"
);

});
