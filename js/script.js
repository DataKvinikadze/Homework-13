let url = "https://api.github.com/users/mind1a";

fetch(url, { method: "GET" })
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  });
