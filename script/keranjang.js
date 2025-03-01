const data = JSON.parse(sessionStorage.getItem("keranjang")) || [];

function showCart() {
  const divContainer = document.querySelector(".container");
  divContainer.innerHTML = "";
  if (data.length === 0) {
    const h2 = document.createElement("h2");
    h2.textContent = "Produk masih kosong!!";
    h2.classList.add("info-keranjang");
    divContainer.appendChild(h2);
    return;
  }
  data.forEach((item) => {
    // element pembungkus
    const body = document.querySelector("body");

    const cardProduct = document.createElement("div");
    const productInfo = document.createElement("div");
    const productPrice = document.createElement("div");
    const itemButton = document.createElement("div");

    cardProduct.classList.add("card-product");
    productInfo.classList.add("product-info");
    productPrice.classList.add("product-price");
    itemButton.classList.add("item-button");

    cardProduct.setAttribute("id", `product-${item.id}`);

    // element utama
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const stok = document.createElement("p");
    const btnBuy = document.createElement("button");
    const btnDelete = document.createElement("button");

    // mengisi item ke dalam element utama
    img.setAttribute("src", `asset/${item.image}`);
    title.textContent = `${item.name}`;
    price.textContent = `Rp ${item.price.toLocaleString()}`;
    price.classList.add("price");
    stok.textContent = `${item.stok}`;
    stok.classList.add("stok");
    btnDelete.innerText = "Hapus";
    btnDelete.classList.add("btn-delete");
    btnBuy.innerText = "Beli";
    btnBuy.classList.add("btn-buy");

    // btnBuy.onclick = function () {
    //   addKeranjang(item.id);
    // };

    btnDelete.onclick = function () {
      deleteCart(item.id);
    };

    // masukkan element ke dalam setiap pembungkus
    productPrice.append(price, stok);
    itemButton.append(btnBuy, btnDelete);
    productInfo.append(title, productPrice, itemButton);
    cardProduct.append(img, productInfo);
    divContainer.append(cardProduct);

    body.appendChild(divContainer);
  });
}

function deleteCart(id) {
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    sessionStorage.setItem("keranjang", JSON.stringify(data));
  }

  const productElement = document.getElementById(`product-${id}`);
  if (productElement) {
    productElement.remove();

    const AlertDelete = document.querySelector(".alert-delete");
    AlertDelete.classList.add("aktif");
    setTimeout(() => {
      AlertDelete.classList.remove("aktif");
    }, 3000);
  }
}

showCart();
