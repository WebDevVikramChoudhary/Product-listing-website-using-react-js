import Dispatcher from "../dispatcher/Dispatcher";
import ProductApi from "../data/ProductApi";
import * as ActionTypes from "../constants/ActionTypes";

export default class InitializeActions {
  static initProducts() {
    ProductApi.getAllProducts().then((data) =>
      Dispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE,
        products: data
      })
    );
  }
}
