/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2023-02-21 15:24:08
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:25:37
 */
import { computed } from 'vue'
import { useComponentsStore } from '@/store/components'

export const useComponentSize = () => {
    function computedSize (elem: any) {
        const componentStore = useComponentsStore()
        return computed(() => elem.props.size !== '' ? elem.props.size : componentStore.layout.size)
    }

    return { computedSize }
}