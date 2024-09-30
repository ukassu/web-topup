const priceLists = {
    ml: {
      title: "Mobile Legends",
      image: "MLA.png",
      prices: [
            { amount: "Weekly Diamond Pass", price: "Rp 26.000" },
            { amount: "3 Diamonds", price: "Rp 1.100" },
            { amount: "5 Diamonds", price: "Rp 1.400" },
            { amount: "12 Diamonds", price: "Rp 3.300" },
            { amount: "19 Diamonds", price: "Rp 5.100" },
            { amount: "28 Diamonds", price: "Rp 7.500" },
            { amount: "44 Diamonds", price: "Rp 11.000" },
            { amount: "59 Diamonds", price: "Rp 15.000" },
            { amount: "85 Diamonds", price: "Rp 21.500" },
            { amount: "170 Diamonds", price: "Rp 43.300" },
            { amount: "240 Diamonds", price: "Rp 60.500" },
            { amount: "296 Diamonds", price: "Rp 74.500" },
            { amount: "408 Diamonds", price: "Rp 103.000" },
            { amount: "568 Diamonds", price: "Rp 140.000" },
            { amount: "875 Diamonds", price: "Rp 215.000" },
            { amount: "1136 Diamonds", price: "Rp 276.500" },
            { amount: "2010 Diamonds", price: "Rp 465.000" },
            { amount: "4830 Diamonds", price: "Rp 1.120.000" },
            { amount: "6000 Diamonds", price: "Rp 1.430.000" },
        ],
    },
    genshin: {
      title: "Genshin Impact",
      image: "genshin.png",
      prices: [
            { amount: "Blessing of the Welkin Moon", price: "Rp 60.000" },
            { amount: "60 Genesis Crystals", price: "Rp 13.000" },
            { amount: "330 Genesis Crystals", price: "Rp 60.000" },
            { amount: "1090 Genesis Crystals", price: "Rp 190.000" },
            { amount: "2240 Genesis Crystals", price: "Rp 390.000" },
            { amount: "3880 Genesis Crystals", price: "Rp 600.000" },
            { amount: "8080 Genesis Crystals", price: "Rp 1.200.000" },
        ],
    },
    ff: {
      title: "Free Fire",
      image: "FF.png",
      prices: [
            { amount: "50 Diamonds", price: "Rp 6.500" },
            { amount: "70 Diamonds", price: "Rp 9.000" },
            { amount: "140 Diamonds", price: "Rp 17.000" },
            { amount: "355 Diamonds", price: "Rp 43.000" },
            { amount: "720 Diamonds", price: "Rp 86.000" },
            { amount: "1450 Diamonds", price: "Rp 175.000" },
            { amount: "2180 Diamonds", price: "Rp 260.000" },
            { amount: "3640 Diamonds", price: "Rp 435.000" },
            { amount: "7290 Diamonds", price: "Rp 850.000" },
        ],
    },
    valorant: {
      title: "Valorant",
      image: "valo.png",
      prices: [
            { amount: "475 VP", price: "Rp 50,000" },
            { amount: "1000 VP", price: "Rp 95,000" },
            { amount: "2050 VP", price: "Rp 190,000" },
            { amount: "3650 VP", price: "Rp 325,000" },
            { amount: "5350 VP", price: "Rp 500,000" },
            { amount: "11000 VP", price: "Rp 1,100,000" },
        ],
    },
    steam: {
      title: "Steam Wallet",
      image: "steam.jpg",
      prices: [
            { amount: "Rp 6.000", price: "Rp 6.200" },
            { amount: "Rp 8.000", price: "Rp 8.100" },
            { amount: "Rp 12.000", price: "Rp 12.000" },
            { amount: "Rp 45.000", price: "Rp 45.000" },
            { amount: "Rp 60.000", price: "Rp 60.000" },
            { amount: "Rp 90.000", price: "Rp 90.000" },
            { amount: "Rp 120.000", price: "Rp 120.000" },
            { amount: "Rp 250.000", price: "Rp 250.000" },
            { amount: "Rp 400.000", price: "Rp 400.000" },
            { amount: "Rp 600.000", price: "Rp 600.000" },
        ],
    },
    discord: {
      title: "Discord Nitro",
      image: "discord.jpg",
      prices: [
            { amount: "Nitro Basic Monthly", price: "Rp 30.000" },
            { amount: "Nitro Boost Monthly", price: "Rp 45.000" },
            { amount: "Nitro Boost Yearly", price: "Rp 330.000" },
        ],
    }
};
  
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayGamePrices() {
  const game = getQueryParam("game");
  const priceList = document.getElementById("price-list");
  const gameTitle = document.getElementById("game-title");
  const image = document.getElementById("image");
  if (priceLists[game]) {
    const selectedGame = priceLists[game];
    gameTitle.innerText = selectedGame.title;
    image.src = selectedGame.image;
    let content = "";
    selectedGame.prices.forEach((item) => {
    let message = `Halo, saya ingin memesan ${item.amount} ${selectedGame.title} seharga ${item.price}. Apakah masih tersedia?`;
      content += `
          <div class="col">
            <div class="card h-100 bgcustom text-light">
              <div class="card-body">
                <h5 class="card-title">${item.amount}</h5>
                <p class="card-text">${item.price}</p>
                <a href="https://wa.me/6282249118184?text=${message}" target="blank" class="btn btn-outline-light">Order</a>
              </div>
            </div>
          </div>`;
    });
    priceList.innerHTML = content;
  } else {
    gameTitle.innerText = "Game Not Found";
    priceList.innerHTML = "<p>No price list available for this game.</p>";
  }
}
window.onload = displayGamePrices;