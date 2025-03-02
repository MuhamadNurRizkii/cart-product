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
    id: 1,
    name: "kursi gaming",
    image: "img1.jpeg",
    price: 350000,
    stok: 20,
  },
  {
    id: 2,
    name: "Keyboard",
    image: "img2.jpg",
    price: 500000,
    stok: 20,
  },
  {
    id: 3,
    name: "Controller PS",
    image: "img3.jpg",
    price: 200000,
    stok: 15,
  },
  {
    id: 4,
    name: "Headset",
    image: "img4.jpg",
    price: 180000,
    stok: 10,
  },
  {
    id: 5,
    name: "Virtual Reality (VR)",
    image: "img5.jpeg",
    price: 250000,
    stok: 20,
  },
  {
    id: 6,
    name: "Smartwatch",
    image: "img6.jpg",
    price: 450000,
    stok: 25,
  },
  {
    id: 7,
    name: "Iphone",
    image: "img7.jpg",
    price: 14000000,
    stok: 10,
  },
  {
    id: 8,
    name: "Monitor PC",
    image: "img8.jpg",
    price: 25000000,
    stok: 20,
  },
];

const Keranjang = [];

if (!sessionStorage.getItem("produk")) {
  sessionStorage.setItem("produk", JSON.stringify(produk));
}

let getProduk = JSON.parse(sessionStorage.getItem("produk")) || [];

// fungsi menampilkan produk
function showProduk() {
  const divContainer = document.querySelector(".container");
  divContainer.innerHTML = "";
  getProduk.forEach((item) => {
    // element pembungkus
    const body = document.querySelector("body");

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
    const btnBuy = document.createElement("button");

    // mengisi item ke dalam element utama
    img.setAttribute("src", `asset/${item.image}`);
    title.textContent = `${item.name}`;
    price.textContent = `Rp ${item.price.toLocaleString()}`;
    price.classList.add("price");
    stok.textContent = `stok: ${item.stok}`;
    stok.classList.add("stok");
    btnBuy.innerText = "Tambah ke keranjang";
    btnBuy.classList.add("btn-buy");
    btnBuy.setAttribute("type", "submit");

    btnBuy.onclick = function () {
      addKeranjang(item.id);
    };

    // masukkan element ke dalam setiap pembungkus
    productPrice.append(price, stok);
    productInfo.append(title, productPrice, btnBuy);
    cardProduct.append(img, productInfo);
    divContainer.append(cardProduct);

    body.appendChild(divContainer);
  });
}

function addKeranjang(id) {
  let cart = JSON.parse(sessionStorage.getItem("keranjang")) || [];

  if (!Array.isArray(cart)) {
    cart = [];
  }

  const item = getProduk.find((item) => item.id === id);

  if (!item) {
    alert(`Prodk dengan id ${id} tidak ditemukan!`);
    return;
  }

  if (item.stok <= 0) {
    alert(`Produk ${item.name} habis!`);
    return;
  }

  // cek produk sudah ada didalam keranjang
  let cartItem = cart.find((cartItem) => cartItem.id === id);

  if (cartItem) {
    cartItem.stok += 1;
  } else {
    cart.push({ ...item, stok: 1 });
  }

  item.stok -= 1;
  sessionStorage.setItem("keranjang", JSON.stringify(cart));
  sessionStorage.setItem("produk", JSON.stringify(getProduk));

  // alert(`Produk ${item.name} berhasil ditambahkan!!`);
  const Alert = document.querySelector(".alert");
  Alert.classList.add("aktif");
  setTimeout(() => {
    Alert.classList.remove("aktif");
  }, 3000);
  showProduk();
}

showProduk();
