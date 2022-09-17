/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-09-13 16:18:40
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-17 21:51:22
 */
import { defineStore } from "pinia";

type $_C = "c";
type $_L = "l";

export const useFieldsConfigStore = defineStore("fieldsConfig", {
    state: () => {
        return {
            tabName: "l"
        };
    },

    actions: {
        changeTabName(name: $_C | $_L) {
            this.tabName = name;
        }
    }
});