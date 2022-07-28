
//import { destroyCookie, parseCookies, setCookie } from "nookies";
import { removeSuccess } from "./cartRedux";

export const clearCart = async (dispatch: ((arg0: { payload: undefined; type: string; }) => void)) => {

  try {

    const productCurrent = {
      id: '',
      type: [''],
      name: '',
      description: '',
      img: '',
      price: 0,
      quantityOfCoffee: 0,
    }

    dispatch(removeSuccess(productCurrent))

  } catch (error) {
    console.log(error)
  }
}