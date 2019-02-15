const hasOptionalParams = params => params !== undefined;

const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const hasBodyContent = bodyContent => bodyContent !== undefined;

export { hasOptionalParams, isJsonString, hasBodyContent };
