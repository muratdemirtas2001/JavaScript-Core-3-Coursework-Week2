const addButton = document.getElementById("add-button");
const dogListElement = document.getElementById("dog-list");
addButton.addEventListener("click", () => {
  const dog = document.createElement("img");
  dogListElement.appendChild(dog);

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dog.src = data.message;
    });
});
