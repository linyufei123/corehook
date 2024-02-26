
/**
 *
 * 处理亚马逊图片
 *
 * 
 */

/**
 * @description       imageToUS400  通常用于头像
 * @param val         入参值
 * @todo              处理亚马逊图片，400尺寸
 * @return            https://m.media-amazon.com/images/I/41Z1W7tAwYL._AC_US400.jpg
 */
export const imageToUS400 = (url) => {
  if (!url) {
    return
  }
  return url.replace(/\._.*\./, "._AC_US400.")
};


/**
 * @description       imageToUS600  通常用于封面
 * @param val         入参值
 * @todo              处理亚马逊图片，600尺寸
 * @return            https://m.media-amazon.com/images/I/41Z1W7tAwYL._AC_US600.jpg
 */
export const imageToUS600 = (url) => {
  if (!url) {
    return
  }
  const reg = /(\._).*(_\.)/gi;
  return url.replace(reg, '._AC_US600.');
};


/**
 * @description       imageToUS800  高清图
 * @param val         入参值
 * @todo              处理亚马逊图片，800尺寸
 * @return            https://m.media-amazon.com/images/I/41Z1W7tAwYL._AC_US800.jpg
 */
export const imageToUS800 = (url) => {
  if (!url) {
    return
  }
  return url.replace(/\._.*\./, "._AC_US800.")
};

