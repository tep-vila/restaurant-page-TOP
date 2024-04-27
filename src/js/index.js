import "../styles/index.css";
import "../js/menu.js";
import { menu } from "../js/menu.js";

const contentSection = document.querySelector("#content");
const headerBtn = document.querySelector(".tabs");

headerBtn.addEventListener("click", (event) => {
  switch (event.target.textContent) {
    case "About":
      contentSection.innerHTML = `<div class="about">
        <img class="cherry-tree" src="images/cherry-tree.jpg" alt="" />
        <div class="about-text">
          <p class="title">Experience Authentic Home-Cooked Delights</p>
          <p class="text">
            Welcome to Cherry's Karinderya, where every dish is a journey into
            the heart of Filipino cuisine. Our humble eatery is built on the
            principles of tradition, community, and family. For over a year and
            a half, we've been serving hearty, home-cooked meals that bring a
            taste of nostalgia and warmth.
          </p>
        </div>
      </div>`;
      break;

    case "Contact":
      contentSection.innerHTML = `<div class="contact">
        <p class="contact-text">Don't contact us pls...</p>
      </div>`;
      break;

    case "Menu":
      contentSection.innerHTML = `<div class="menu">
      <div class="left">
        <div>
          <img
            class="adobo"
            src="
          https://hips.hearstapps.com/vidthumb/images/pork-adobo-1-jpg-1654712703.jpg?crop=0.657xw:0.876xh;0.175xw,0.0534xh&resize=1200:*
          "
            alt=""
          />
        </div>
        <div>
          <img
            class="sinigang"
            src="
          https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sinigang_na_Baboy_DSCF4234.jpg/1200px-Sinigang_na_Baboy_DSCF4234.jpg
          "
            alt=""
          />
        </div>
        <div>
          <img
            class="bistek"
            src="https://theskinnypot.com/wp-content/uploads/2021/02/Bistek-Tagalog-Recipe.jpg "
            alt=""
          />
        </div>
        <div>
          <img
            class="nilaga"
            src="https://images.deliveryhero.io/image/foodpanda/recipes/nilagang-baboy-recipe-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="right">
        <img
          src="https://hips.hearstapps.com/vidthumb/images/pork-adobo-1-jpg-1654712703.jpg?crop=0.657xw:0.876xh;0.175xw,0.0534xh&resize=1200:*"
          alt=""
        />
        <h2 class="food-name">Adobo</h2>
        <p class="food-description">
          Adobo is a classic Filipino dish made by marinating meat, usually
          chicken or pork, in a mixture of vinegar, soy sauce, garlic, and
          other spices. It's then slow-cooked until tender, resulting in a
          savory, tangy flavor with a rich, deep sauce. This beloved comfort
          food is a staple at family gatherings and showcases the unique blend
          of traditional Filipino cooking techniques.
        </p>
      </div>
    </div>`;
      menu(contentSection);
      break;
    default:
      return;
      break;
  }
});

function clearContent() {
  contentSection.innerHTML = "";
}

function generateAbout() {
  contentSection.innerHTML = `<div class="about">
    <img class="cherry-tree" src="images/cherry-tree.jpg" alt="" />
    <div class="about-text">
      <p class="title">Experience Authentic Home-Cooked Delights</p>
      <p class="text">
        Welcome to Cherry's Karinderya, where every dish is a journey into
        the heart of Filipino cuisine. Our humble eatery is built on the
        principles of tradition, community, and family. For over a year and
        a half, we've been serving hearty, home-cooked meals that bring a
        taste of nostalgia and warmth.
      </p>
    </div>
  </div>`;
}

menu(contentSection);
// https://theskinnypot.com/wp-content/uploads/2021/02/Bistek-Tagalog-Recipe.jpg
// https://images.deliveryhero.io/image/foodpanda/recipes/nilagang-baboy-recipe-1.jpg
// https://hips.hearstapps.com/vidthumb/images/pork-adobo-1-jpg-1654712703.jpg?crop=0.657xw:0.876xh;0.175xw,0.0534xh&resize=1200:*
// https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sinigang_na_Baboy_DSCF4234.jpg/1200px-Sinigang_na_Baboy_DSCF4234.jpg
