const deltaForceServices = [
    {
      title: "Rank Boost",
      image: "assets/images/delta-force/rank-boost-operation.png",
      priceNow: "Rp. 40.000",
      features: [
        "🟣 Get Unique game mode title",
        "🟣 Collect all ranked rewards",
        "🟣 Operation mode"
      ]
    },
    {
      title: "Rank Boost Warfare",
      image: "assets/images/delta-force/rank-boost-warfare.png",
      priceNow: "Rp. 100.000",
      features: [
        "🟣 Get Unique game mode title",
        "🟣 Collect all ranked rewards",
        "🟣 Warfare mode"
      ]
    },
    {
      title: "Operators Leveling",
      image: "assets/images/delta-force/leveling.png",
      priceNow: "Rp. 20.000",
      features: [
        "🟣 Get all operator rewards",
        "🟣 Choose any desired operator",
        "🟣 Unlock complete mastery"
      ]
    },
    {
      title: "Get The Title",
      image: "assets/images/delta-force/title.png",
      priceNow: "Rp. 25.000",
      features: [
        "🟣 Show others how good you are!",
        "🟣 All ranked rewards included",
        "🟣 Be one of the 500 best players"
      ]
    },
  ];
  
  const cardContainer = document.getElementById('card-container');
  
  for (let i = 0; i < deltaForceServices.length; i++) {
    const service = deltaForceServices[i];
  
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
  