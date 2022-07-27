/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-27 16:57:19
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [
        vue(),
        eslintPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
                additionalData: '@import "./src/styles/index.scss";',
            },
        },
    },
});
