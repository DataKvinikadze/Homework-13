// getting dark/light button

let dark_lightButton = document.querySelector(".dark_light");

// setting theme

localStorage.setItem("theme", "light");

dark_lightButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
  }

  if (localStorage.getItem("theme") == "dark") {
  }
});

let url = "https://api.github.com/users";

fetch(url, { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log();
  });
