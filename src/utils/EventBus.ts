/*
 * @Description: 事件总线
 * @Author: Hedgehog96
 * @Date: 2022-06-15 18:04:53
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 15:47:25
 */
export default class EventBus {
    events: object

    constructor() {
        this.events = {}
    }

    on(evtName: string, fn: any) {
        this.events[evtName] = this.events[evtName] || []
        this.events[evtName].push(fn)
    }

    emit(evtName: string, d: any) {
        if (this.events[evtName]) {
            this.events[evtName].forEach(function (fn: any) {
                fn(d)
            })
        }
    }

    off(evtName: string, fn: any) {
        if (this.events[evtName]) {
            for (let i = 0; i < this.events[evtName].length; i++) {
                if (this.events[evtName][i] === fn) {
                    this.events[evtName].splice(i, 1)
                    break
                }
            }
        }
    }
}
