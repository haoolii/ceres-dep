import * as math from 'mathjs';

export enum UnitsEnum {
  平方公尺,
  坪,
  公頃,
  甲,
  分,
  公畝,
  英畝,
  市畝,
}

export interface Units {
  平方公尺: number;
  坪: number;
  公頃: number;
  甲: number;
  分: number;
  公畝: number;
  英畝: number;
  市畝: number;
}

const 平方公尺換算表 = {
  [UnitsEnum.平方公尺]: 1,
  [UnitsEnum.坪]: 3.3058,
  [UnitsEnum.公頃]: 10000,
  [UnitsEnum.甲]: 9699.17,
  [UnitsEnum.分]: 969.917,
  [UnitsEnum.公畝]: 100,
  [UnitsEnum.英畝]: 4046.85,
  [UnitsEnum.市畝]: 666.666,
};

export const use平方公尺 = (平方公尺: number): Units => {
  return {
    平方公尺: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.平方公尺]))
      .valueOf(),
    坪: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.坪]))
      .valueOf(),
    公頃: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.公頃]))
      .valueOf(),
    甲: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.甲]))
      .valueOf(),
    分: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.分]))
      .valueOf(),
    公畝: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.公畝]))
      .valueOf(),
    英畝: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.英畝]))
      .valueOf(),
    市畝: +math
      .divide(平方公尺, math.bignumber(平方公尺換算表[UnitsEnum.市畝]))
      .valueOf(),
  };
};

export const calc = (type: UnitsEnum, num: number) => {
  const 平方公尺 = math
    .multiply(math.bignumber(平方公尺換算表[type]), math.bignumber(num))
    .valueOf();
  return use平方公尺(+平方公尺);
};
