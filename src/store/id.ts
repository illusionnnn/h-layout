/*
 * @Description: 组件唯一标识
 * @Author: Hedgehog96
 * @Date: 2022-06-22 15:47:40
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 14:58:45
 */
import { defineStore } from "pinia";

export const useIdStore = defineStore("id", {
    state: () => {
        return { id: 7 };
    },

    actions: {
        increment() {
            this.id++;
        },
    },
});
