const createProductItemTemplate = (product) => `
    <tr>
        <td><span id="product-product-${product.id}">${product.product}</span></td>
        <td><span id="product-price-${product.id}">${product.price.toFixed(2)}</span></td>
        <td><span id="product-quantity-${product.id}">${product.quantity}</span></td>
        <td><span id="product-imported-${product.id}">${product.imported ? "YES" : "NO"}</span></td>
        <td><span id="product-exempted-${product.id}">${product.exempted ? "YES" : "NO"}</span></td>
        <td><button class="btn-edit btn btn-warning" data-id="${product.id}" data-bs-toggle="modal" data-bs-target="#editModal">✎</button></td>
        <td><button class="btn-delete btn btn-danger" data-id="${product.id}">✘</button></td>
    </tr>
`;

const createBillItemTemplate = (product) => `
    <tr>
        <td><span id="bill-product-${product.id}">${product.product}</span></td>
        <td><span id="bill-price-${product.id}">${product.price.toFixed(2)}</span></td>
        <td><span id="bill-quantity-${product.id}">${product.quantity}</span></td>
        <td><span id="bill-imported-${product.id}">${product.imported ? "YES" : "NO"}</span></td>
        <td><span id="bill-exempted-${product.id}">${product.exempted ? "YES" : "NO"}</span></td>
        <td><span id="bill-total-price-${product.id}">${product.totalPrice.toFixed(2)}</span></td>
    </tr>
`;

const createTotalBillsTemplate = (totalTaxes, totalBills) => `
    <tr>
      <td colspan="5"><b>Sales Taxes</b></td>
      <td><b>${totalTaxes.toFixed(2)}</b></td>
    </tr>
    <tr>
      <td colspan="5"><b>Total</b></td>
      <td><b>${totalBills.toFixed(2)}</b></td>
    </tr>
`;

const createProductItemHeader = () => `
    <tr>
        <th scope="col">Product Name</td>
        <th scope="col">Price</td>
        <th scope="col">Quantity</td>
        <th scope="col">Imported Product</td>
        <th scope="col">Tax Exempted</td>
        <th scope="col">Edit</td>
        <th scope="col">Delete</td>
    </tr>
`;

const createBillItemHeader = () => `
    <tr>
        <th scope="col">Product Name</td>
        <th scope="col">Price</td>
        <th scope="col">Quantity</td>
        <th scope="col">Imported Product</td>
        <th scope="col">Tax Exempted</td>
        <th scope="col">Total Price</td>
    </tr>
`;

export {
  createProductItemTemplate,
  createBillItemTemplate,
  createTotalBillsTemplate,
  createProductItemHeader,
  createBillItemHeader,
};
