/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-06-30 14:58:31
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 16:37:12
 */
import { defineStore } from "pinia";
import { ComponentConfig, ComponentsStore } from "@/config/interfaces";

export const useComponentsStore = defineStore("components", {
    state: (): ComponentsStore => {
        return {
            snapshotIdx: -1,
            snapshotcomponents: [],
            components: []
        }
    },

    actions: {
        add(c: ComponentConfig) {
            this.components.push(c);
        },

        save() {
            window.localStorage.setItem(
                'h-layout',
                JSON.stringify(this.components)
            )
        }
    },
});