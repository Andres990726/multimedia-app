import { categoryData } from "../mocks/data";
import { ICategory } from "../utils/models";
import { keys } from "../utils/storage";

const auth = {
  email: "codegods@codegods.com",
  fullname: "codegods",
  jwt: "",
  username: "codegods",
};

const deleteAuth = () => {
  window.localStorage.removeItem(keys.auth);
};

const setAuth = () => {
  window.localStorage.setItem(keys.auth, JSON.stringify(auth));
};

const getAuth = () => {
  if (window.localStorage.getItem(keys.auth) !== undefined)
    return JSON.parse(window.localStorage.getItem(keys.auth) ?? "");
  else return undefined;
};

const signInWithEmailAndPassword = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      setAuth();
      resolve(auth);
    }, 1000);
  });
};

const signOut = () => {
  deleteAuth();
};

const getCategories: () => Promise<ICategory[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 1000);
  });
};
export const api = {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  getCategories,
};
