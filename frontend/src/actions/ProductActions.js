import Dispatcher from "../dispatcher/Dispatcher";
import ProductsApi from "../data/ProductApi";
import * as ActionTypes from "../constants/ActionTypes";

export default class ProductsActions {
  static addProduct(product) {
    return ProductsApi.saveProduct(product).then((newProduct) => {
      console.log("Dispatching Add products");
      Dispatcher.dispatch({
        actionType: ActionTypes.ADD_PRODUCT,
        product: newProduct
      });
    });
  }
}
