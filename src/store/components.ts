/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-06-30 14:58:31
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-21 18:27:43
 */
import { defineStore } from "pinia";
import { cloneDeep } from "lodash-es";
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

        setComponents(cs: ComponentConfig[]) {
            this.components = cs
        },

        undo() {
            if (this.snapshotIdx >= 0) {
                this.snapshotIdx --
                const _ = cloneDeep(this.snapshotcomponents[this.snapshotIdx])
                this.setComponents(Array.isArray(_) ? _ : [])
            }
        },

        redo() {
            if (this.snapshotIdx < this.snapshotcomponents.length - 1) {
                this.snapshotIdx ++
                this.setComponents(cloneDeep(this.snapshotcomponents[this.snapshotIdx]))
            }
        },

        recordSnapshot() {
            const _ = cloneDeep(this.components)
            this.snapshotIdx ++
            this.snapshotcomponents[this.snapshotIdx] = _

            // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
            if (this.snapshotIdx < this.snapshotcomponents.length - 1) {
                this.snapshotcomponents = this.snapshotcomponents.slice(0, this.snapshotIdx + 1)
            }
        },

        save() {
            window.localStorage.setItem(
                "h-layout",
                JSON.stringify(this.components)
            )
        }
    },
});