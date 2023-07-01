const menu = [
  {
    id: 1,
    title: "Lash Text Base",
    category: "textBase",
    price: 65,
    img: "./images/lash.jpeg",
    desc: `Text base logo for lash artist `,
  },
  {
    id: 2,
    title: "Dog logo",
    category: "cartoonLogo",
    price: 70,
    img: "./images/dog.jpeg",
    desc: `Cartoon logo for dogs trainer `,
  },
  {
    id: 3,
    title: "Cartoon logo",
    category: "illustration",
    price: 170,
    img: "./images/3in1.jpeg",
    desc: `3 people in one cartoon logo `,
  },
  {
    id: 4,
    title: "Single Image",
    category: "textBase",
    price: 60,
    img: "./images/boti.jpeg",
    desc: `illustration logo for botiques, `,
  },
  {
    id: 5,
    title: "Logo",
    category: "cartoonLogo",
    price: 65,
    img: "./images/single3.jpeg",
    desc: `colorful logo design for chef`,
  },
  {
    id: 6,
    title: "Illustration logo",
    category: "illustration",
    price: 95,
    img: "./images/illust.jpeg",
    desc: `Illustrate base on request`,
  },
  {
    id: 7,
    title: "logo",
    category: "textBase",
    price: 60,
    img: "./images/single4.jpeg",
    desc: `classic logo designs for chef `,
  },
  {
    id: 8,
    title: "Toon classic",
    category: "cartoonLogo",
    price: 100,
    img: "./images/single2.jpeg",
    desc: ` multipurpose designs for chef`,
  },
  {
    id: 9,
    title: "4images",
    category: "illustration",
    price: 250,
    img: "./images/4in1.jpeg",
    desc: `Four cartoon images one design`,
  },
  {
    id: 10,
    title: "hmmm",
    category: "cartoonLogo",
    price: 90,
    img: "./images/4in1.jpeg",
    desc: `Four cartoon images one design`,
  },
  {
    id: 11,
    title: "tsglogo",
    category: "illustration",
    price: 40,
    img: "./images/lash.jpeg",
    desc: `tsg rainer `,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
