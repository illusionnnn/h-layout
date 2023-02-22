/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 10:50:18
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 11:15:15
 */
const comps = {}
const modules = (import.meta as any).globEager('./*.vue')
for (const path in modules) {
    const cname = modules[path].default.__name
    comps[cname] = modules[path].default
}

export default comps