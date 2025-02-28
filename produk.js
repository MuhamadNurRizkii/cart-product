// manajemen produk dan keranjang

// menampilkan data
// mencari data
// masukan data ke keranjang
// strukut data = {id, namaProduk, harga, stok}

/* "img1.jpeg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpeg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg", */

const produk = [
  {
    name: "kursi gaming",
    image: "img1.jpeg",
    price: 350000,
    stok: 20,
  },
  {
    name: "Keyboard",
    image: "img2.jpg",
    price: 500000,
    stok: 20,
  },
  {
    name: "Controller PS",
    image: "img3.jpg",
    price: 200000,
    stok: 15,
  },
  {
    name: "Headset",
    image: "img4.jpg",
    price: 180000,
    stok: 10,
  },
  {
    name: "Virtual Reality (VR)",
    image: "img5.jpeg",
    price: 250000,
    stok: 20,
  },
  {
    name: "Smartwatch",
    image: "img6.jpg",
    price: 450000,
    stok: 25,
  },
  {
    name: "Iphone",
    image: "img7.jpg",
    price: 14000000,
    stok: 10,
  },
  {
    name: "Monitor PC",
    image: "img8.jpg",
    price: 25000000,
    stok: 20,
  },
];

const Keranjang = [];

// fungsi menampilkan produk
function showProduk() {
  produk.forEach((item) => {
    // element pembungkus
    const body = document.querySelector("body");
    const divContainer = document.querySelector(".container");
    const cardProduct = document.createElement("div");
    const productInfo = document.createElement("div");
    const productPrice = document.createElement("div");

    cardProduct.classList.add("card-product");
    productInfo.classList.add("product-info");
    productPrice.classList.add("product-price");

    // element utama
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const stok = document.createElement("p");
    const btnBuy = document.createElement("buttton");

    // mengisi item ke dalam element utama
    img.setAttribute("src", `asset/${item.image}`);
    title.textContent = `${item.name}`;
    price.textContent = `${item.price}`;
    price.classList.add("price");
    stok.textContent = `${item.stok}`;
    stok.classList.add("stok");
    btnBuy.textContent = "Beli";
    btnBuy.classList.add("btn-buy");
    btnBuy.setAttribute("type", "submit");

    // masukkan element ke dalam setiap pembungkus
    productPrice.append(price, stok);
    productInfo.append(title, productPrice, btnBuy);
    cardProduct.append(img, productInfo);
    divContainer.append(cardProduct);

    body.appendChild(divContainer);
  });
}

showProduk();
