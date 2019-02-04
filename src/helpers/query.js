import { host } from "../config";

String.prototype.toUnderscore = function() {
  return this.replace(/([A-Z])/g, function($1) {
    return `_${$1.toLowerCase()}`;
  });
};

const isKeyDefined = (key, keys) => keys[key] !== undefined;

const isNotLast = (current, last) => current !== last;

const createQueryString = keys => {
  let url = "?";
  const last = keys.length - 1;
  Object.keys(keys).map((key, current) => {
    if (isKeyDefined(key, keys)) {
      const paramSnakeCase = key.toUnderscore();
      const value = keys[key];
      url = `${url}${paramSnakeCase}=${value}`;
      if (isNotLast(current, last)) {
        url += "&";
      }
    }
  });
  return host + url;
};

export default createQueryString;
