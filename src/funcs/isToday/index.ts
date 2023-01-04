/**
 * @file 是否为今天
 * @author vanndxh
 * @param date Date格式
 */
export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getFullYear === today.getFullYear &&
    date.getMonth === today.getMonth &&
    date.getDate === today.getDate
  );
};