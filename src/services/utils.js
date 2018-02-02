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

  /* 실제 서비스에선 필요 없음 */
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

/* comma 변환 */
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


출처: http://fruitdev.tistory.com/160 [과일가게 개발자]

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}