import { IMe } from '../interfaces/i-me';

export const testMes: { 
  new: IMe, 
  basic: IMe 
} = {
  new: {
    name: "",
    id: "",
    friends: [],
    enemies: []
  },
  basic: {
    name: "Broderick",
    handle: "David",
    id: "0",
    enemies: [
      {
        name: "Blumenfeld",
        notes: "Liggett",
        id: "7"
      }
    ],
    friends: [
      {
        name: "Sheedy",
        handle: "Jennifer",
        nickName: "",
        id: "1"
      },
      {
        name: "Chaykin",
        handle: "Jim",
        nickName: "",
        id: "2"
      },
      {
        name: "Deezen",
        handle: "Malvin",
        nickName: "",
        id: "3"
      },
      {
        name: "Wood",
        handle: "Falken",
        nickName: "",
        id: "4"
      },
      {
        name: "Corbin",
        handle: "Beringer",
        nickName: "",
        id: "5"
      },
      {
        name: "Coleman",
        handle: "McKittrick",
        nickName: "",
        id: "6"
      }
    ]
  }
};