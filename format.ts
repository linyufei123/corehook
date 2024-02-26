

/**
 *
 * 本文件用于：接口层数据字段值转化  request传参 | 报文响应 
 * 
 */

import { RegexThousand } from './regexp'

/**
 * @description       foramtV 处理后端返回的数据，
 *                    1、为null,undefined,或外层无数据时，前端自动补 -- 样式
 *                    2、int类型数值，前端加千分位
 *                    3、占比类数值，统一后端处理，前端只需加百分号 
 * @param val         入参值
 * @param type        数值 | 百分比
 * @todo              数值展示千分位， 比率处理成百分比保留一位小数， 无值展示横杠
 * @return            4,123 | 1.1% | --
 */
export const formatV = (val, type = undefined) => {
  if (val === null || val === undefined || val === '') return '--';
  if (type === 'rate') return `${val}%` // 后端统一 *100  前端加%
  return `${val}`?.replace(RegexThousand, ',');
};


/**
 * @description       formatRealVaule 输出真实值， 过滤掉null undefined 空字符 
 * @param val         入参值
 * @todo              1、通常用于string类型，前端只展示 不做数据转化处理
 * @return            something
 */
export const formatRV = (val) => {
  if (typeof val === 'undefined' || val === null || val?.toString()?.trim() === '') {
    return '--';
  }
  return val;
};

/**
 * @description       textCropping 文字限制 超出打点
 * @param val         入参值
 * @todo              1、文字超长处理， 通常用语图表横纵坐标
 * @return            something
 */
// 
export const textCropping = (val, len = 6) => {
  if (typeof val === 'undefined' || val === null || val?.toString()?.trim() === '') {
    return '--';
  }
  return val.length > len ? val.slice(0, len) + '...' : val
}