/*
 * @Description: 缓存
 * @Author: Hedgehog96
 * @Date: 2023-01-15 19:20:01
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 19:44:12
 */
type Storage = 'local' | 'session'

export function useStorage(stroage: Storage) {
    const stroageMapping = {
        'session': sessionStorage,
        'local': localStorage
    }

    return {
        get(key: string) {
            return stroageMapping[stroage].getItem(key)
        },
        set(key: string, value: any) {
            stroageMapping[stroage].setItem(key, value)
        },
        delete(key: string) {
            stroageMapping[stroage].removeItem(key)
        },
        clear() {
            stroageMapping[stroage].clear()
        }
    }
}