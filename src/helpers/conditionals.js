const hasOptionalParams = params => params !== undefined;

const isJson = contentType => {
  return contentType && contentType.indexOf("application/json") !== -1;
};

const isSuccessful = status => status >= 200 && status < 300;

const hasNoBody = bodyContent =>
  bodyContent === null || bodyContent === undefined;

const isKeyDefined = (key, keys) => keys[key] !== undefined;

const isNotLast = (current, last) => current !== last;

export {
  hasNoBody,
  hasOptionalParams,
  isJson,
  isKeyDefined,
  isNotLast,
  isSuccessful
};
