const deltaForceServices = [
    {
      title: "Daily Task",
      image: "assets/images/odin/daily.png",
      priceNow: "Rp. 50.000",
      features: [
        "🟣 Complete Daily Task",
        "🟣 Skip the grind",
        "🟣 Get Rewards"
      ]
    },
    {
      title: "Power Leveling",
      image: "assets/images/odin/leveling.png",
      priceNow: "Rp. 300.000",
      features: [
        "🟣 Achieve desired level",
        "🟣 Fast completion time",
        "🟣 Progress faster"
      ]
    },
    {
      title: "Piloting 24/7",
      image: "assets/images/odin/piloting.png",
      priceNow: "Rp. 1.000.000",
      features: [
        "🟣 Skip the grind",
        "🟣 Dont waste energy",
        "🟣 Save your time",
        "🟣 Just play the game, without doing any task."
      ]
    },
    {
      title: "Diamonds",
      image: "assets/images/odin/diamonds.png",
      priceNow: "Rp. 75.000",
      features: [
        "🟣 Any amount of Diamonds",
        "🟣 Fast completion",
        "🟣 Safe Delivery"
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
  