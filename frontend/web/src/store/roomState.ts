import { atom } from "recoil";

import { Room } from "../types/room";

export const roomState = atom<Room>({
  key: "roomState",
  default: {
    roomId: 1, // string 部屋ID
    roomName: "成人式2次会", // string 部屋の名前
    memberAmount: 15, // number その部屋にいる参加者の総数
    summary: "カラオケ：ここにある", // string 部屋の概要
    isOpen: true, // boolean 参加者受付中かどうか
    lastUpdate: "2023-02-20T16:28:06+09:00", //string 最終更新日 ISO形式
    members: [
      {
        memberId: 1, // string ユーザーId
        name: "たなか", // string ユーザーの名前
        comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
        tag: "料金支払い済み",
      },
      {
        memberId: 2, // string ユーザーId
        name: "すずき",
        comment: "",
        tag: "料金支払い済み",
      },
      {
        memberId: 3, // string ユーザーId
        name: "やまだ", // string ユーザーの名前
        comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
        tag: "料金支払い済み",
      },
    
    ],
    roomMaker: "たなか", // string 部屋を作った人の名前
    tags: "カラオケ,居酒屋,ボーリング" // string 部屋に存在するタグの一覧
  }
});
