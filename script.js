//=========CAPTURES=========\\

const body = document.querySelector("body");
const webTitle =document.querySelector("title");
const header = document.querySelector("header");
const main_section = document.querySelector("section#categories1");
const audioPlay = document.querySelector("#play-music");


//========CLASS MODEL========\\

class Playlist_dataModel {
  constructor(name, rank, category, image, audio) {
    this.name = name;
    this.rank = rank;
    this.category = category;
    this.image = image;
    this.audio = audio;
  }
}

const model_7mz = new Playlist_dataModel(
  "7mz Hits",
  1,
  "NERDRAP",
  "imgs/7mzPoster.jpg",
  "faixas/rapAkatuski.mp3"
);

const model_TheBatman = new Playlist_dataModel(
  "The Batman",
  2,
  "AMBIENCE",
  "imgs/TheBatmanPoster.jpg",
  "faixas/sitw.mp3"
);

const model_FaceOff = new Playlist_dataModel(
  "Face Off",
  1,
  "MOTIVAÇÃO",
  "imgs/FaceOffPoster.jpg",
  "faixas/faceOff.mp3"
);

const modelArray = [model_7mz, model_TheBatman, model_FaceOff]; // this array will be used to count quantity of boxes must be create

//========BOX CREATION========\\

function createBox(title, rank, category, image, audio) {
  const box = document.createElement("div");
  box.classList.add("playlist-div"); //create a box element

  const infoBar = document.createElement("aside");
  infoBar.classList.add("content-aside"); //create grey bar for show the informations about playlist
  const content_infoBar = document.createTextNode(
    `${title} #${rank} | ${category}`
  );

  infoBar.appendChild(content_infoBar);
  box.appendChild(infoBar);

  box.style.backgroundImage = `url(${image})`;

  main_section.appendChild(box);

  box.addEventListener("mouseover", () => {
    box.style.borderWidth = "7px";

    infoBar.style.opacity = "1";
    infoBar.style.animation = "scale-up-ver-bottom 500ms";
  });

  box.addEventListener("mouseleave", () => {
    box.style.borderWidth = "5px";

    infoBar.style.animation = "none";
    infoBar.style.opacity = "0";
  });

  box.addEventListener("click", ()=>{
      console.log(audio);
      audioPlay.setAttribute('src', audio);
      audioPlay.setAttribute('autoplay', '');
      audioPlay.style.opacity = '1'
      audioPlay.style.animation = 'scale-up-ver-bottom 1s'  
      webTitle.innerHTML = `Music Player | ${title}`


      
  })
}

modelArray.forEach((element, index) => {
  createBox(element.name, element.rank, element.category, element.image, element.audio);
});

//========INTERACTION========\\
