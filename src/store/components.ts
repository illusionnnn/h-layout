/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-06-30 14:58:31
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-05 17:35:06
 */
import { defineStore } from "pinia";
import { cloneDeep } from "lodash-es";
import { ElMessage } from 'element-plus';
import { ComponentConfig, ComponentsStore } from "@/config/interfaces";

const $_reloadState = (state: string) => {
    switch (state) {
    case 's':
        return window.localStorage.getItem('h-layout-s') !== null ?  JSON.parse(window.localStorage.getItem('h-layout-s') as string) : -1;
    case 'sc':
        return window.localStorage.getItem('h-layout-sc') !== null ?  JSON.parse(window.localStorage.getItem('h-layout-sc') as string) : [];
    case 'c':
        return window.localStorage.getItem('h-layout-c') !== null ?  JSON.parse(window.localStorage.getItem('h-layout-c') as string) : [];
    }
};

export const useComponentsStore = defineStore("components", {
    state: (): ComponentsStore => {
        return {
            snapshotIdx: $_reloadState('s'),
            snapshotcomponents: $_reloadState('sc'),
            components: $_reloadState('c'),
            layout: {
                hidden: false
            },
        };
    },

    actions: {
        $_setComponents(cs: ComponentConfig[]) {
            this.components = cs;
        },

        add(c: ComponentConfig) {
            this.components.push(c);
        },

        clear() {
            this.$_setComponents([]);
            this.recordSnapshot();
        },

        save() {
            try {
                window.localStorage.setItem(
                    "h-layout-s",
                    JSON.stringify(this.snapshotIdx)
                );
                window.localStorage.setItem(
                    "h-layout-sc",
                    JSON.stringify(this.snapshotcomponents)
                );
                window.localStorage.setItem(
                    "h-layout-c",
                    JSON.stringify(this.components)
                );
                ElMessage.success('保存成功');
            }
            catch {
                ElMessage.error('保存失败');
            }
            
        },

        undo() {
            if (this.snapshotIdx >= 0) {
                this.snapshotIdx --;
                const _ = cloneDeep(this.snapshotcomponents[this.snapshotIdx]);
                this.$_setComponents(Array.isArray(_) ? _ : []);
            }
        },

        redo() {
            if (this.snapshotIdx < this.snapshotcomponents.length - 1) {
                this.snapshotIdx ++;
                this.$_setComponents(cloneDeep(this.snapshotcomponents[this.snapshotIdx]));
            }
        },

        setLayoutProperty(key: string, value: boolean) {
            this.layout[key] = value;
        },

        recordSnapshot() {
            const _ = cloneDeep(this.components);
            this.snapshotIdx ++;
            this.snapshotcomponents[this.snapshotIdx] = _;

            // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
            if (this.snapshotIdx < this.snapshotcomponents.length - 1) {
                this.snapshotcomponents = this.snapshotcomponents.slice(0, this.snapshotIdx + 1);
            }
        },
    },
});