async function fetchdata() {
  let response = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=wIZWR7YBBHQ945d8rz5rq4wQ41cG3pZn&q=70%27s+rock&limit=35&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
  );
  let giphyJson = await response.json();
  let arrPictures = giphyJson.data;

  let container = document.getElementById("images");

  for (let index = 0; index < arrPictures.length; index++) {
    let img = document.createElement("img");
    img.src = arrPictures[index].images.original.url;
    container.append(img);
    console.log(arrPictures[index].images.original.url);
  }
}

fetchdata();
