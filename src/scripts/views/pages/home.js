const Home = {
  render() {
    return `
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Product</h5>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <tr><td><label for="edit-product">Product Name</label></td><td><input type="text" id="edit-product" class="form-control"></td></tr>
                            <tr><td><label for="edit-price">Price</label></td><td><input type="number" id="edit-price" class="form-control"></td></tr>
                            <tr><td><label for="edit-quantity">Quantity</label></td><td><input type="number" id="edit-quantity" class="form-control"></td></tr>
                            <tr><td><label for="edit-imported">Imported</label></td><td><input type="checkbox" id="edit-imported" class="form-check-input"></td></tr>
                            <tr><td><label for="edit-exempted">Exempted<label></td><td><input type="checkbox" id="edit-exempted" class="form-check-input"></td></tr>
                        </table>
                    </div>
                        <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" id="btn-update" data-bs-dismiss="modal">Update</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-lg mx-auto my-4">
            <h1 class="display-4 text-center">Cashier</h1>
            <hr>
            <main>
                <div id="cashier">
                    <div class="input-form form-group p-4 m-4">
                        <table class="table">
                            <tr><td><label for="product">Product Name</label></td><td><input type="text" id="product" class="form-control"></td></tr>
                            <tr><td><label for="price">Price</label></td><td><input type="number" id="price" class="form-control"></td></tr>
                            <tr><td><label for="quantity">Quantity</label></td><td><input type="number" id="quantity" class="form-control"></td></tr>
                            <tr><td><label for="imported">Imported Product</label></td><td><input type="checkbox" id="imported" class="form-check-input"></td></tr>
                            <tr><td><label for="exempted">Tax Exempted<label></td><td><input type="checkbox" id="exempted" class="form-check-input"></td></tr>
                        </table>
                        <div class="d-grid gap-2">
                            <button id="btn-add-item" class="btn btn-primary btn-lg">Add</button>
                        </div>
                    </div>
                    <div class="list-product p-4 m-4">
                    </div>
                    <div class="list-bill p-4 m-4">
                    </div>
                </div>
            </main>
        </div>
        `;
  },
};

export default Home;
