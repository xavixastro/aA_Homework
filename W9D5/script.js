document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const addFav = (e) => {
    e.preventDefault();
    const favInput = document.querySelector("input.favorite-input");
    const favValue = favInput.value;
    favInput.value = "";
    const li = document.createElement("li");
    li.textContent = favValue;
    const ul = document.getElementById("sf-places");
    ul.appendChild(li)
  }

  const button = document.getElementsByClassName("favorite-submit")[0];
  button.addEventListener("click", addFav)



  // adding new photos

  // --- your code here!

  const newPhotoButton = document.querySelector("button.photo-show-button");
  newPhotoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const container = document.querySelector("div.photo-form-container");
    if (container.className === "photo-form-container") {
      container.className = "photo-form-container hidden";
    }else{
      container.className = "photo-form-container";
    }
  })


  const addPhoto = (e) => {
    e.preventDefault();
    const inputUrl = document.querySelector("input.photo-url-input");
    const img = document.createElement("img");
    img.src = inputUrl.value;
    const li = document.createElement("li");
    li.appendChild(img);
    const ul = document.querySelector("ul.dog-photos");
    ul.appendChild(li);
    document.querySelector("div.photo-form-container").className = "photo-form-container hidden";
  }

  const suButton = document.querySelector("input.photo-url-submit");
  suButton.addEventListener("click", addPhoto)







});
