import axios from "axios";

const BASE_URL = "http://localhost:3000/datas";

export default class ProductsApi {
  static async fetchDatas() {
    return (await axios.get(`${BASE_URL}`)).data;
  }
}
