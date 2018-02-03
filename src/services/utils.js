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
      return;
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