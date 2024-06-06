// adding elements for Dark Mode
let headerTitle = document.querySelector(".header-title");
let darkLightMode = document.querySelector(".dark-light-toggle");
let darkLightModeText = document.querySelector(".dark-light-mode");
let searchBox = document.querySelector(".search-box");
let searchInput = document.querySelector("#search-input");
let profileCard = document.querySelector(".profile-card");
let userName = document.querySelector(".user-name");
let userNick = document.querySelector(".user-nickname");
let joinDate = document.querySelector(".join-info");
let userBio = document.querySelector(".user-bio");
let statBox = document.querySelector(".stat-box");
let statTitle = document.querySelectorAll(".stat-title");
let statValue = document.querySelectorAll(".stat-value");
let linkAnchor = document.querySelectorAll(".link-anchor");
let form = document.querySelector(".submit");
let searchBtn = document.querySelector(".search-btn");
let result = document.querySelector(".result");

// Stats

let follower = document.querySelector(".follower");
let followerValue = document.querySelector(".follower-value");

let following = document.querySelector(".following");
let followingValue = document.querySelector(".following-value");

let repositories = document.querySelector(".repos");
let repositoriesValue = document.querySelector(".repos-value");

// links

let locationName = document.querySelector(".location");
let githubLink = document.querySelector(".github");
let twitterLink = document.querySelector(".twitter");
let officeLink = document.querySelector(".office");

// adding local storage

if (localStorage.getItem("theme") === "dark") {
  // if theme is dark already
  document.body.classList.toggle("dark");
  headerTitle.classList.toggle("header-title-toggle");
  searchBox.classList.toggle("search-box-toggle");
  searchInput.classList.toggle("search-field");
  profileCard.classList.toggle("profile-card-toggle");
  userName.classList.toggle("user-name-toggle");
  userBio.classList.toggle("user-bio-toggle");
  joinDate.classList.toggle("join-info-toggle");
  statBox.classList.toggle("stat-box-toggle");
  statTitle.forEach((element) => {
    element.classList.toggle("stat-title-toggle");
  });
  statValue.forEach((element) => {
    element.classList.toggle("stat-value-toggle");
  });

  linkAnchor.forEach((element) => {
    element.classList.toggle("aref");
  });
}

darkLightMode.addEventListener("click", () => {
  // toggle
  document.body.classList.toggle("dark");
  headerTitle.classList.toggle("header-title-toggle");
  searchBox.classList.toggle("search-box-toggle");
  searchInput.classList.toggle("search-field");
  profileCard.classList.toggle("profile-card-toggle");
  userName.classList.toggle("user-name-toggle");
  userBio.classList.toggle("user-bio-toggle");
  joinDate.classList.toggle("join-info-toggle");
  statBox.classList.toggle("stat-box-toggle");
  statTitle.forEach((element) => {
    element.classList.toggle("stat-title-toggle");
  });
  statValue.forEach((element) => {
    element.classList.toggle("stat-value-toggle");
  });

  linkAnchor.forEach((element) => {
    element.classList.toggle("aref");
  });

  // changing theme value

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // entering the value which the user wrote
  let url = `https://api.github.com/users/${searchInput.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message === "Not Found") {
        // result not found
        result.classList.add("no-result");
      } else {
        // result found
        result.classList.remove("no-result");

        //name / nickname

        if (data.name == null) {
          userName.textContent = "No Name Found";
        } else {
          userName.textContent = data.name;
        }
        userNick.textContent = `@${data.login}`;

        // bio

        if (data.bio == null) {
          userBio.textContent = "This profile has no bio";
        } else {
          userBio.textContent = data.bio;
        }

        // stats
        repositoriesValue.textContent = data.public_repos;
        followerValue.textContent = data.followers;
        followingValue.textContent = data.following;

        // links
        if (data.twitter_username == null) {
          twitterLink.textContent = "Not Avalible";
        } else {
          twitterLink.textContent = data.twitter_username;
        }

        if (data.location === null) {
          locationName.textContent = "Not Avalible";
        } else {
          locationName.textContent = data.location;
        }

        if (data.blog === "") {
          githubLink.textContent = "Not Avalible";
        } else {
          githubLink.textContent = data.blog;
        }

        // join date

        joinDate.textContent = `joined ${data.created_at}`;
      }
    });
});
