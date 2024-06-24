var main = document.getElementById("main");
var btn = document.getElementById("src-btn");
var content = document.getElementById("content");
var text_data = document.getElementById("text_data");
btn.addEventListener("click", async function () {
  console.log("hello world");
  console.log(text_data.value);
  let api = `https://api.github.com/users/${text_data.value}`;

  let fetchData = await fetch(api);
  let response = await fetchData.json();
  console.log(response);

  if (response.bio) {
    var bio = response.bio;
  } else {
    var bio = "this profile has no bio";
  }

  content.innerHTML = `





<div class="left"><img class='avatar' src='${response.avatar_url}'/></div>
        <div class="right">
          <div class="right_det">
            <h3 class="h3">${response.login}</h3>
            <p>joined on: ${response.created_at.substring(0, 10)}</p>
          </div>
          <div class="description"> <p>${bio}</p>
</div>
          <div class="repos">
            <div class="qty_box">
              <p class="rep">Repos</p>
              <p class="qty">${response.public_repos}</p>
            </div>
            <div class="qty_box">
              <p class="rep">Followers</p>
              <p class="qty">${response.followers}
            </div>
            <div class="qty_box">
              <p class="rep">Following</p>
              <p class="qty">0</p>
            </div>
          </div>
               <div class='loc_icon'><i class="fa-solid fa-location-dot loc_icon"></i>
               ${response.location}</div>
 <div class='loc_icon'><i class="fa-brands fa-twitter loc_icon"></i></i>
               ${response.twitter_username}</div>

<div class='loc_icon'>  <i class="fa-solid fa-link loc_icon"></i></i></i>
               ${response.html_url}</div>
             
          <div class='view_profile'>
           <button id="btn_view" >View Profile</button>
          </div>
        </div>








`;

  let show_profile = document.getElementById("btn_view");

  show_profile.addEventListener("click", function () {
    console.log("h");
    window.open(response.html_url, "_blank");
  });
});
