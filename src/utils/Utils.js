printLog = (...data) => {
  if (__DEV__) {
    console.log(data);
  }
};

export const utils = {
  printLog,
};
