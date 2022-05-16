/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-15 17:18:07
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-16 10:03:58
 */

const indexToArray = (path: string | number) =>
  `${path}`.split("-").map((n) => +n);

const isPath = (pathIdx: string | number) => {
  let result = true;
  indexToArray(pathIdx).forEach((item) => {
    if (isNaN(item)) {
      result = false;
      return false;
    }
  });

  return result;
};

export { indexToArray, isPath };
