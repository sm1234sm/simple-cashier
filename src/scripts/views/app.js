import {
  createProductItemTemplate,
  createBillItemTemplate,
  createTotalBillsTemplate,
  createProductItemHeader,
  createBillItemHeader,
} from "../views/templates/template-creator";
import Home from "../views/pages/home";

let productList = [];

class App {
  constructor() {
    this._content = document.querySelector("#main-content");
  }

  renderPage() {
    this._content.innerHTML += Home.render();

    this.productList = document.querySelector(".list-product");
    this.billList = document.querySelector(".list-bill");
    this.renderProductList();

    document
      .querySelector("#btn-add-item")
      .addEventListener("click", this.insertProduct.bind(this));
    document
      .querySelector("#btn-update")
      .addEventListener("click", this.updateProduct.bind(this));
  }

  renderProductList() {
    this.productList.innerHTML = "";
    this.billList.innerHTML = "";

    this.createProductElements(productList);

    document.addEventListener("click", (event) => {
      if (!event.target) {
        return;
      }

      if (event.target.classList.contains("btn-delete")) {
        this.removeProduct(event);
      }

      if (event.target.classList.contains("btn-edit")) {
        this.renderEditForm(event);
      }

      if (event.target.id === "btn-calculate") {
        this.calculatePrice(event);
      }

      if (event.target.id === "btn-clear") {
        this.clearProduct(event);
      }
    });
  }

  renderEditForm(event) {
    let id = event.target.getAttribute("data-id");

    document.querySelector("#btn-update").setAttribute("data-id", id);

    productList.forEach((item) => {
      if (item.id == id) {
        
        document.querySelector("#edit-product").value = item.product;
        document.querySelector("#edit-price").value = item.price;
        document.querySelector("#edit-quantity").value = item.quantity;
        document.querySelector("#edit-imported").checked = item.imported;
        document.querySelector("#edit-exempted").checked = item.exempted;
      }
    });
  }

  createProductElements(products) {
    let productTable = `
        <table class="table">
    `;

    if (products.length) {
      productTable += createProductItemHeader();
    }
    
    products.forEach((product) => {
      const productItem = createProductItemTemplate(product);
      productTable += productItem;
    });

    if (products.length) {
      productTable += `
      </table>
      <div class="d-grid gap-2">
        <button id="btn-calculate" class="btn btn-success btn-lg">Calculate</button>
        <button id="btn-clear" class="btn btn-danger btn-lg">Clear</button>
      </div>`;
    }

    this.productList.innerHTML += productTable;
  }

  createBillsElements(products, totalTaxes, totalBills) {
    this.billList.innerHTML = "";

    let billTable = `
        <table class="table">
    `;

    if (products.length) {
      billTable += createBillItemHeader();
    }

    products.forEach((product) => {
      const billItem = createBillItemTemplate(product);
      billTable += billItem;
    });

    const totalBillsItem = createTotalBillsTemplate(totalTaxes, totalBills);

    billTable += totalBillsItem + `</table>`;

    this.billList.innerHTML += billTable;
  }

  insertProduct(event) {
    let productName = document.querySelector("#product").value;
    let productPrice = parseFloat(document.querySelector("#price").value);
    let productQuantity = parseInt(document.querySelector("#quantity").value);
    let productIsImported = document.querySelector("#imported").checked;
    let productIsExempted = document.querySelector("#exempted").checked;

    if (productName.length < 3 && !isNaN(productName)) {
      return;
    }

    if (isNaN(productPrice) || productPrice < 0) {
      
      return;
    }

    if (isNaN(productQuantity) || productQuantity < 0) {
      return;
    }

    let newProduct = {
      id: Date.now(),
      product: productName,
      price: productPrice,
      quantity: productQuantity,
      imported: productIsImported,
      exempted: productIsExempted,
    };

    productList.push(newProduct);

    

    document.querySelector("#product").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#imported").checked = false;
    document.querySelector("#exempted").checked = false;

    this.renderProductList();
  }

  removeProduct(event) {
    let id = event.target.getAttribute("data-id");

    productList = productList.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });

    this.renderProductList();
  }

  updateProduct(event) {
    let id = event.target.getAttribute("data-id");

    let editedProductName = document.querySelector("#edit-product").value;
    let editedProductPrice = parseFloat(
      document.querySelector("#edit-price").value
    );
    let editedProductQuantity = parseInt(
      document.querySelector("#edit-quantity").value
    );
    let editedProductIsImported =
      document.querySelector("#edit-imported").checked;
    let editedProductIsExempted =
      document.querySelector("#edit-exempted").checked;

    if (editedProductName.length < 3 && !isNaN(editedProductName)) {
      return;
    }

    if (isNaN(editedProductPrice) || editedProductPrice < 0) {
      return;
    }

    if (isNaN(editedProductQuantity) || editedProductQuantity < 0) {
      return;
    }

    productList = productList.map((item) => {
      if (item.id == id) {
        item["product"] = editedProductName;
        item["price"] = editedProductPrice;
        item["quantity"] = editedProductQuantity;
        item["imported"] = editedProductIsImported;
        item["exempted"] = editedProductIsExempted;
      }

      return item;
    });

    this.renderProductList();
  }

  clearProduct(event) {
    productList = [];
    this.renderProductList();
  }

  calculatePrice(event) {
    if (!productList.length) {
      return;
    }

    const productBills = [...productList];

    let totalTaxes = 0;
    let totalBills = 0;

    productBills.forEach((product) => {
      let taxRate = 0;

      if (product.imported) {
        taxRate += 0.05;
      }

      if (!product.exempted) {
        taxRate += 0.1;
      }

      const sumPrice = product.price * product.quantity;
      const totalTax =
        Math.ceil((sumPrice * taxRate) / 0.05) * 0.05;
      
      product.totalPrice = parseFloat((sumPrice + totalTax).toFixed(2));
      

      totalTaxes += totalTax;
      totalBills += product.totalPrice;
    });

    this.createBillsElements(productBills, totalTaxes, totalBills);
  }

}
export default App;
