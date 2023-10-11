const formElement = document.querySelector("#profile-form");
const inputElement = document.querySelector("#profile-input");
const profileArea = document.querySelector("#profile-pic-area")
const BACKEND_URL = "http://localhost:3001/"


async function handlePhotoFile(evt){

  evt.preventDefault();
  const file = inputElement.files[0];
  console.log(`file is `, file);
  const formData = new FormData();

  formData.append("file", file);

  console.log(`our form data is`, formData);
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    body: formData,
  });

  const urlData = await response.json();
  console.log(`Our url is `, urlData.imageUrl)
  const imageUrl = urlData.imageUrl

  console.log(`data about imageUrl`, imageUrl, typeof imageUrl);

  const profileElement = document.createElement("img")
  profileElement.setAttribute("src", imageUrl);

  profileArea.append(profileElement);

}


formElement.addEventListener("submit", handlePhotoFile)