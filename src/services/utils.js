/**
 * check element is in the corners
 * @param {number} id - data's id
 */
export const borderRadius = (id) => {
  switch(id) {
    case 0:
      return 'border_t_l';
    case 5:
      return 'border_t_r';
    case 11:
      return 'border_b_l';
    case 16:
      return 'border_b_r';
    default:
      return '';
  }
}

/**
 * check animation required
 * @param {number} pR - PRIORITY RANK
 */
export const isAnimatedRequired = (pR) => {
  if(pR > 13) {
    return true;
  } else {
    return false;
  }
}

/**
 * Scale image size 200*200 to 100*100, useless for stable service.
 * @param {string} url - image url
 * @param {boolean} fromAnimated - from AnimatedItem Component or Not.
 */
export const isScaleRequired = (url, fromAnimated) => {
  let cn = '';
  const regex = /jpg/g;
  if(regex.test(url)) {
    if(fromAnimated) {
      cn += 'a';
      return cn;
    } else {
      cn += 'img_scale_down';
      return cn;
    }
  }
  return cn;
}

/**
 * Add a comma for every three digits.
 * @param {number} x - goods price
 */
export const numberWithCommas = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}