import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const name = "Chloe";
const dadName = "Darren";
const currentDate = new Date();
console.log(currentDate)
const randImg = Math.floor(Math.random()*1100)
console.log(randImg)

const luckyNumber = Math.floor(Math.random() * 10);

const img = "https://picsum.photos/id/"+ randImg +"/200/200"

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading" spellCheck="false">
        Hello, {dadName + " and " + name}
      </h1>

      <h3>I want to tell you something we all know, please pay attention ~!</h3>
      <p>{name}'s Favorite Foods</p>
      <div>
        <img
          className="food-image"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190411-microwaved-bacom-horizontal-2-1555688032.png?crop=0.6668421052631579xw:1xh;center,top&resize=768:*"
          alt="Bacon"
        />
        <img
          className="food-image"
          src="https://data.thefeedfeed.com/recommended/15224149465abe35620e896.jpg"
          alt="Sunny Side Egg"
        />
        <img
          className="food-image"
          src="https://savorjapan.com/gg/content_image/t0039_002_20180115125708.jpg"
          alt="Ramen"
        />
        <img
          className="food-image"
          src="https://assets.bonappetit.com/photos/5c4b21e785b9bd2cf3b17454/16:9/w_2560,c_limit/red-wine-braised-short-ribs.jpg"
          alt="Braised short Ribs"
        />
        <img
          className="food-image"
          src="https://cdn.vox-cdn.com/thumbor/BWbLe84vE5po1cSwDO1repgYXYY=/0x0:960x958/920x613/filters:focal(455x381:607x533):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65724757/hotpot.0.jpg"
          alt="HotPot"
        />
      </div>
      <p>
        And {dadName}'s lucky number is: {luckyNumber}
      </p>
    </div>
    <div className="random-image">
      <h2>
        &#11015;&#65039; This is a random picture from web, enjoy
        &#11015;&#65039;
      </h2>
      <img src={img} alt="Random" />
    </div>
    <div>
      <p>This page is created by {dadName}</p>
      <p>Copyright {currentDate.getFullYear()}</p>
    </div>
  </div>,
  document.getElementById("root")
);




// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
