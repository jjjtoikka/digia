import React from 'react';
import { useState } from '@hookstate/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import useGlobalState from '../../../provider/store';
import { Data } from '../../../types';

type Props = {
  data: Data;
  index: number;
};

export const Row = ({ data, index }: Props) => {
  const state = useGlobalState();
  const open = useState<boolean>(false);
  const rowData = useState<Data>({ ...data });

  const deleteItem = () => {
    state.deleteData(index);
  };

  const saveItem = () => {
    state.updateData(rowData.get(), index);
    open.set(false);
  };

  const updateItem = (key: keyof Data, value: string) => {
    rowData.merge({ [key]: value });
  };

  const clear = () => {
    rowData.merge(data);
    open.set(false);
  };

  return (
    <div className={`${open.get() ? 'open' : ''} row tbody`}>
      {Object.entries(rowData.get()).map(
        ([key, value]) =>
          key !== 'id' && (
            <div key={`cell-${key}`} className={open ? 'cell open' : 'cell'}>
              {!open.get() ? (
                value
              ) : (
                <input
                  type={key === 'name' ? 'text' : key}
                  value={value}
                  onChange={(e: any) =>
                    updateItem(key as keyof Data, e.target.value)
                  }
                ></input>
              )}
            </div>
          )
      )}

      {open.get() ? (
        <div className="cell right grid small">
          <button type="button" onClick={() => clear()}>
            Cancel
          </button>
          <button type="button" className="primary" onClick={() => saveItem()}>
            Save
          </button>
        </div>
      ) : (
        <div className="cell right grid large">
          <a onClick={() => open.set(true)}>
            <FontAwesomeIcon
              fixedWidth
              size="lg"
              icon={faPencil}
            ></FontAwesomeIcon>
          </a>
          <a onClick={() => deleteItem()}>
            <FontAwesomeIcon
              fixedWidth
              size="lg"
              icon={faTrash}
            ></FontAwesomeIcon>
          </a>
        </div>
      )}
    </div>
  );
};
