/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-06-08 18:00:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-15 18:05:46
 */
import { ElMessage, ElMessageBox } from "element-plus";
import { MessageBox } from "../config/interfaces";

// 消息提示框
const showMessageBox = (params: MessageBox) => {
  const {
    title,
    type,
    confirmButtonText,
    cancelButtonText,
    confirmMessageType,
    confirmMessageText,
  } = params;

  ElMessageBox.confirm(params.content ? params.content : "", title, {
    confirmButtonText,
    cancelButtonText,
    type,
  })
    .then(() => {
      ElMessage({
        type: confirmMessageType,
        message: confirmMessageText,
      });
    })
    .catch(() => {
      console.log("删除组件");
    });
};

export type showMessageBoxInterface = MessageBox;
export { showMessageBox };
