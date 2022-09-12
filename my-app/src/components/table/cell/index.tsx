import React from 'react';
import useGlobalState from '../../../provider/store';
import { Data } from '../../../types';

type Props = {
  id: keyof Data;
  data: Data;
  open?: boolean;
  change: (value: string) => any;
};

export const Cell = ({ id, data, open = false, change }: Props) => {
  const val = data[id];
  return (
    <div className={open ? 'cell open' : 'cell'}>
      {!open ? (
        val
      ) : (
        <input
          type={id}
          value={val}
          onChange={(e: any) => change(e.target.value)}
        ></input>
      )}
    </div>
  );
};
