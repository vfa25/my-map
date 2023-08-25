import { v4 as uuidv4 } from 'uuid';
import { IClassify } from "../types/index";
export const addPosUUid = (classify: IClassify[]) => {
  return classify.map((classiesItem) => {
    return {
      ...classiesItem,
      positions: classiesItem.positions.map((item) => {
        return {
          ...item,
          uuid: uuidv4(),
        };
      }),
    };
  });
};
