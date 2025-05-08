const valorantServices = [
  {
    title: "Rank Boosting",
    image: "assets/images/valorant/rank-boosting.png",
    priceNow: "Rp. 36.000",
    features: [
      "🟣 From Iron to Immortal III",
      "🟣 Great KDA and winrate"
    ]
  },
  {
    title: "Win Boosting",
    image: "assets/images/valorant/win-boosting.png",
    priceNow: "Rp. 16.000",
    features: [
      "🟣 Any number of wins",
      "🟣 Boost your win rate"
    ]
  },
  {
    title: "Placement Matches",
    image: "assets/images/valorant/placement-matches.png",
    priceNow: "Rp. 12.000",
    features: [
      "🟣 Get higher rank",
      "🟣 Completed by pro players"
    ]
  },
  {
    title: "Radiant Rank Boosting",
    image: "assets/images/valorant/radiant-boosting.png",
    priceNow: "Rp. 12.000.000",
    features: [
      "🟣 Premium service with a stream",
      "🟣 From Immortal III to Radiant",
      "🟣 Be one of the 500 best players"
    ]
  },
];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i < valorantServices.length; i++) {
  const service = valorantServices[i];

  // Buat fitur jadi <li> list
  let featureList = '';
  for (let j = 0; j < service.features.length; j++) {
    featureList += `<li>${service.features[j]}</li>`;
  }

  // Gabung semua konten card-nya
  const cardHTML = `
    <div class="col-md-3">
      <div class="card card-custom-bg h-100 text-white shadow-lg">
        <div class="position-relative">
          <img src="${service.image}" class="card-img-top" alt="${service.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title fw-bold">${service.title}</h5>
          <ul class="list-unstyled small">${featureList}</ul>
          <span class="text-success fs-5 fw-bold">${service.priceNow}</span>
        </div>
        <div class="card-footer bg-transparent border-0">
          <button class="btn btn-purple w-100" onclick="goToCheckout('${service.title}', '${service.priceNow}')">Order</button>
        </div>
      </div>
    </div>
  `;

  cardContainer.innerHTML += cardHTML;
}

function goToCheckout(title, price) {
  const orderData = { title: title, price: parsePrice(price) };
  localStorage.setItem("orderData", JSON.stringify(orderData));
  window.location.href = "checkout.html";
}

// Fungsi bantu buat convert misal "Rp. 36.000" jadi 36000
function parsePrice(rpString) {
  const numberString = rpString.replace(/[^\d]/g, ''); // Hapus selain angka
  return parseInt(numberString, 10);
}
