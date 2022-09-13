import { createState, useState, none } from '@hookstate/core';
import { Data } from '../types';

const store = createState({
  tableData: <Data[]>[]
});

const useGlobalState = () => {
  const { tableData } = useState(store);
  return {
    haveData: () => tableData.value.length > 0,
    getData: () => tableData.get(),
    addData: (myData: Data[]) => {
      tableData.merge(myData);
    },
    addDataItem: (data: Data) => {
      tableData.merge([data]);
      // console.log(tableData.value);
    },
    updateData: (data: Data, index: number) => {
      tableData[index].merge(data);
    },
    deleteData: (index: number) => {
      tableData[index].set(none);
    }
  };
};
export default useGlobalState;
