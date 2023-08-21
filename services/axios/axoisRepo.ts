import { AppConstant } from "@/constant";
import axios from "axios";

export const apiProduct = {
  getAllProduct: async (params) => {
    const url = AppConstant.baseUrl + "products";
    return await axios.get(url, params);
  },

  getOneProduct: async (productId: string, params? : any) => {
    const url = AppConstant.baseUrl + `products/${productId}`;
    return await axios.get(url, params);
  },

  createOneProduct: async (params) => {
    const url = AppConstant.baseUrl + `products/add`;
    return await axios.post(url, params);
  },
};

export const apiAuth = {
  login: async (params) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = AppConstant.baseUrl + "auth/login";
    return await axios.post(url, params, config);
  },

  getUser: async (userId: string) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = AppConstant.baseUrl + `users/${userId}`;
    return await axios.get(url, config);
  },
};

export const apiCart = {
  getAllCart: async (params, searchText: string) => {
    if (searchText) {
      const url = AppConstant.baseUrl + `carts/search?q=${searchText}`;
      return await axios.get(url, params);
    } else {
      const url = AppConstant.baseUrl + "carts";
      return await axios.get(url, params);
    }
  },

  checkout: async (params) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = AppConstant.baseUrl + "products/add";
    return await axios.post(url, params, config);
  },
};

export const apiPost = {
  getAllPost: async (params, searchText: string) => {
    if (searchText) {
      const url = AppConstant.baseUrl + `posts/search?q=${searchText}`;
      return await axios.get(url, params);
    } else {
      const url = AppConstant.baseUrl + "posts";
      return await axios.get(url, params);
    }
  },

  getOnePost: async (postId: string, params) => {
    const url = AppConstant.baseUrl + `posts/${postId}`;
    return await axios.get(url, params);
  },
};
