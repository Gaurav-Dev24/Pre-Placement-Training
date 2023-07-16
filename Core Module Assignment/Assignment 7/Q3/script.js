const user = document.querySelector("#name");
const place = document.querySelector("#location");
const followers = document.querySelector("#followers");
const portfolio = document.querySelector("#portfolio");
const repos = document.querySelector("#repos");
const bio = document.querySelector("#bio");
const content = document.querySelector(".content");


function getUser() {
    const username = document.getElementById("username").value;

  
// Make a GET request to GitHub API
    fetch("https://api.github.com/users/" + username)
      .then((response) => response.json())
      .then((data) => {
        // Display user information
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" width="100" height="100">
      `;
        user.innerHTML = `<span> Name :</span>
      <span>${data.name}</span>`;

        place.innerHTML = `<span> Place :</span>
      <span>${data.location}</span>`;

        followers.innerHTML = `<span> Followers :</span>
      <span>${data.followers}</span>`;

        portfolio.innerHTML = `<span> Portfolio :</span>
      <span>${data.blog}</span>`;

        repos.innerHTML = `<span> Public Repos :</span>
      <span>${data.public_repos}</span>`;

        if (data.bio !== null) {
          bio.innerHTML = `<span> Bio :</span>
          <span>${data.bio}</span>`;
        } else {
          bio.innerHTML = "";
        }
      })
      .catch((error) => {
        // Display error message if user not found
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<p>User not found.</p>";
      });
  }


