import axios from "axios";

export default class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3001/products")
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  static saveProduct(product) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3001/products", product)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}
