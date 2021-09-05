const setToLocalStorage = ({ authToken }) => {
  localStorage.setItem("token", authToken);
};

const getFromLocalStorage = key => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
