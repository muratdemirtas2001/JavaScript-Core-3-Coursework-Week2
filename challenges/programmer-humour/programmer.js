function programmer(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Error identified: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
      console.log(data);
      const imageElement = document.createElement("img");
      const root = document.getElementById("root");
      root.appendChild(imageElement);
      imageElement.src = data.img;
    });
}

programmer("https://xkcd.now.sh/?comic=latest");
