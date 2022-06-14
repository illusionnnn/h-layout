/*
 * @Description: 拖曳组件类
 * @Author: Hedgehog96
 * @Date: 2022-06-09 16:47:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-14 14:15:15
 */
class BaseComponent {
  key: string; // 唯一名称
  label: string; // 标签

  constructor(c: any) {
    this.key = c.key;
    this.label = c.label;
  }
}

class RateComponent extends BaseComponent {}

class InputComponent extends BaseComponent {}

export { RateComponent, InputComponent };
