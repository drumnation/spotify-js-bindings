const hasOptionalParams = params => params !== undefined;

const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export { hasOptionalParams, isJsonString };
