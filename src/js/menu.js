export function menu(content) {
  const menuGrid = document.querySelector(".left");

  menuGrid.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const src = event.target.src;

      switch (event.target.classList.value) {
        case "sinigang":
          updateMenu(
            src,
            "Sinigang",
            "Sinigang is a popular Filipino soup known for its distinctive tangy flavor, typically derived from tamarind. This hearty dish combines a rich broth with various vegetables like kangkong (water spinach), eggplant, radish, and string beans, along with tender cuts of meat, commonly pork or shrimp. Sinigang's signature sourness makes it a refreshing and satisfying meal, often enjoyed with rice for a complete Filipino dining experience."
          );
          break;

        case "adobo":
          updateMenu(
            src,
            "Adobo",
            `Adobo is a classic Filipino dish made by marinating meat, usually
            chicken or pork, in a mixture of vinegar, soy sauce, garlic, and
            other spices. It's then slow-cooked until tender, resulting in a
            savory, tangy flavor with a rich, deep sauce. This beloved comfort
            food is a staple at family gatherings and showcases the unique blend
            of traditional Filipino cooking techniques.`
          );
          break;

        case "bistek":
          updateMenu(
            src,
            "Bistek",
            `Bistek, short for "bistek Tagalog," is a Filipino dish featuring thinly sliced beef marinated in a blend of soy sauce, calamansi (or lemon), and garlic. It's then pan-fried and simmered with onions until the meat is tender and infused with a savory, citrusy flavor. The caramelized onions add a sweet note to the dish, complementing the umami-rich sauce. Bistek is typically served with steamed rice, making it a comforting and satisfying meal.`
          );
          break;

        case "nilaga":
          updateMenu(
            src,
            "Nilaga",
            "Nilaga is a comforting Filipino soup that typically features tender cuts of meat—like beef, pork, or chicken—simmered with a variety of vegetables. Common vegetables used in nilaga include potatoes, corn on the cob, cabbage, and carrots. The dish is known for its clear, lightly seasoned broth, allowing the natural flavors of the meat and vegetables to shine through. Nilaga is a popular dish for its simplicity, heartiness, and ability to warm the soul, often served with a side of rice."
          );
          break;
        default:
          return;
          break;
      }
    }
  });
}

function updateMenu(newPic, newName, newDesc) {
  const picInRight = document.querySelector(".right img");
  const text = document.querySelector(".food-name");
  const desc = document.querySelector(".food-description");

  picInRight.src = newPic;
  text.textContent = newName;
  desc.textContent = newDesc;
}
