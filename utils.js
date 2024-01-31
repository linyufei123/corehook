/**
 * @description       处理展示数据
 * @param val         需出来的值
 * @param type        处理类型
 * @todo              数值展示千分位， 比率处理成百分比保留一位小数， 无值展示横杠
 * @return            4,123 | 1.1% | -
 */
export const handleFixedNum = (val, type= undefined) => {
  if (val === null || val === undefined || val === '') return '--';
  if (type === 'rate') return `${val}%` // 后端统一 *100  前端加%
  return `${val}`?.replace(RegexThousand, ',');
};
