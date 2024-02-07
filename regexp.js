
/**
  正则校验 - 千分位
 */
export const RegexThousand = /\B(?=(\d{3})+(?!\d))/g;


/**
  正则校验 - 手机号
 */
export const regMobile = /^((\+|00)86)?1\d{10}$/;
export const mobileCheck = (str) => {
  if (!str) return false;
  return regMobile.test(str);
};

/**
  正则校验 - 短信验证
 */
export const regCode = /^\d{6}$/;

/**
 * 正则校验 -过滤特殊字符和空格
 */
export const regspecial = /^[\S]{6,}$/g;

/**
 * 正则校验 -过滤指定字符
 */
export const regcustomized = /\&/g;

/**
 * 正则校验 - 全是 空格，空白符
 */
export const regspace = /\s\S+|S+\s|\S/;
const Utils = {
  mobileCheck,
};

export default Utils;
