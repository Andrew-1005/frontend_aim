const newArrivals = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
    img: "./images/cards/card-black-t-short.png",
  },
  {
    title: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    img: "./images/cards/card-jeens.png",
  },
  {
    title: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    img: "./images/cards/card-checkered-shirt.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    img: "./images/cards/card-sleeve-t-shirt.png",
  },
];

const topSelling = [
  {
    title: "Vertical Striped Shirt",
    rating: 5.0,
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    img: "./images/cards/card-vertical-shirt.png",
  },
  {
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    price: 145,
    img: "./images/cards/card-cuarage-t-shirt.png",
  },
  {
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: 80,
    img: "./images/cards/card-shorts.png",
  },
  {
    title: "Faded Skinny Jeans",
    rating: 4.5,
    price: 210,
    img: "./images/cards/card-black-jeens.png",
  },
];

function getStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const HalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars += `<img class="card__star-img" src="./images/icons/icon-star-full.png" alt="star" />\n`;
  }

  if (HalfStar) {
    stars += `<img class="card__star-img" src="./images/icons/icon-star-half.png" alt="half-star" />\n`;
  }

  return stars;
}

function renderCards(arr, content) {
  const container = document.querySelector(content);

  const cards = arr.map((item) => {
    return `
    <div class="card">
      <div class="card__block-img">
        <img class="card__img" src="${item.img}" alt="${item.title}" />
      </div>
      <p class="card__title">${item.title}</p>
      <div class="card__content">
        <div class="card__stars">${getStars(item.rating)}</div>
        <p class="card__rating">${item.rating}/<span class="card__rating-span">5</span></p>
      </div>
      ${
        item.oldPrice
          ? `<div class="card__price">
             <p class="card__price-now">$${item.price}</p>              
             <p class="card__price-earlier">$${item.oldPrice}</p>
             <p class="card__price-discount">${item.discount}</p>
           </div>`
          : `<div class="card__price">
             <p class="card__price-now">$${item.price}</p>
           </div>`
      }
    </div>
  `;
  });

  container.innerHTML = cards.join("");
}

renderCards(newArrivals, ".new-arrivals__list");
renderCards(topSelling, ".top-selling__list");
