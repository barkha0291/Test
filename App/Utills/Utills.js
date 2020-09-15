
import { IMAGE_URL } from '../Config/Constants';
export default class Utills {
    static getImageSource(uri) {
        return {
            uri,
            method: 'GET',
        }
    }

    static filterImageList(list = []) {

        if (list.length > 0) {
            let newList = [];
            list.map(dataList => {
                 newList.push({"image":`${IMAGE_URL}${dataList.id}`,"name":`${dataList.author}`});
            })
            return newList;
        }
        return false;
    }

   static shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
      }
      


}
