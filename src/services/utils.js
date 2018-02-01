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

export const isAnimatedRequired = (pR) => {
  if(pR > 13) {
    return true;
  } else {
    return false;
  }
}

export const isFirstAnimation = (i) => {
  if(i === 7 || i === 9 || i === 12 || i === 14 || i > 13) {
  // console.log(items[i]);
    return true;
  } else {
    return false;
  }
}

  /* 실제 서비스에선 필요 없음 */
export const isScaleRequired = (url) => {
  let cn = '';
  const regex = /jpg/g;
  if(regex.test(url)) {
    cn += 'img_scale_down';
  }
  return cn;
}

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}