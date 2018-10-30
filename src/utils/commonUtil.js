/**
 * @Author: 陈树鸿
 * @Date: 2018-10-31
 */
export function sleep(time=1000){
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
 