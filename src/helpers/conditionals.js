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

const isKeyDefined = (key, keys) => keys[key] !== undefined;

const isNotLast = (current, last) => current !== last;

export {
  hasOptionalParams,
  isJsonString,
  hasBodyContent,
  isKeyDefined,
  isNotLast
};
