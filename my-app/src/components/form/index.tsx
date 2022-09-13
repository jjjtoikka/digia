import React from 'react';
import { useState } from '@hookstate/core';
import useGlobalState from '../../provider/store';
import { Data, ErrorData } from '../../types';
import { haveErrors, validate } from '../../utils';
import { initialErrorModel } from '../../data';
type Props = {
  model: Data;
};

export const Form = ({ model }: Props) => {
  const state = useGlobalState();
  const errorData = initialErrorModel();

  const formData = useState<Data>(model);
  const errors = useState<ErrorData>(errorData);

  const saveItem = () => {
    // if (haveErrors(errors.get())) return;
    const id = (state.getData().length + 1).toString();
    state.addDataItem({ ...formData.get(), id });
    clearForm();
  };

  const updateData = (value: string, key: keyof Data) => {
    formData.merge({
      [key]: value
    });
    errors.merge({ [key]: validate(value, key) });
  };

  const clearForm = () => {
    errors.set(errorData);
    formData.set(model);
  };

  return (
    <form className="row lightest-bg">
      {Object.entries(formData.get()).map(
        ([key, value], i: number) =>
          key !== 'id' && (
            <input
              key={key}
              type={key === 'name' ? 'text' : key}
              placeholder={key}
              // required
              value={value}
              onChange={(e: any) =>
                updateData(e.target.value, key as keyof Data)
              }
            ></input>
          )
      )}
      <div className="cell right">
        <button
          type="button"
          disabled={haveErrors(errors.get())}
          onClick={() => saveItem()}
        >
          Add new
        </button>
      </div>
    </form>
  );
};

export default Form;
