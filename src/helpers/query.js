String.prototype.toUnderscore = function() {
  return this.replace(/([A-Z])/g, function($1) {
    return `_${$1.toLowerCase()}`;
  });
};

const isKeyDefined = (key, keys) => keys[key] !== undefined;

const isNotLast = (current, last) => current !== last;

const createQueryString = keys => {
  if (keys !== null) {
    let queryString = "?";
    const last = Object.keys(keys).length - 1;
    Object.keys(keys).map((key, current) => {
      if (isKeyDefined(key, keys)) {
        const paramSnakeCase = key.toUnderscore();
        const value = keys[key];
        queryString += `${paramSnakeCase}=${value}`;
        if (isNotLast(current, last)) {
          queryString += "&";
        }
      }
    });
    return queryString;
  }
  return "";
};

export default createQueryString;
