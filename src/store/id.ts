/*
 * @Description: 组件唯一标识
 * @Author: Hedgehog96
 * @Date: 2022-06-22 15:47:40
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 16:27:00
 */
import { defineStore } from "pinia";

export const useIdStore = defineStore("id", {
    state: (): { id: number } => {
        return { id: 7 };
    },

    actions: {
        increment() {
            this.id++;
        },
    },
});
