/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-06-30 14:58:31
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 15:12:37
 */
import { defineStore } from "pinia";
import { ComponentConfig } from "@/config/interfaces";

export const useComponentsStore = defineStore("components", {
    state: () => {
        return {
            components: []
        }
    },

    actions: {
        add(c: ComponentConfig) {
            this.components.push(c);
        },
    },
});