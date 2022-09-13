import React from 'react';
import { Data } from '../../types';
import { unique } from '../../utils';
import { Row } from './row';

type Props = {
  data: Data[];
  model: Data;
};

export const Table = ({ data, model }: Props) => {
  return (
    <section>
      <div className="row thead">
        {Object.entries(model).map(
          ([key]) =>
            key !== 'id' && (
              <div className="cell" key={`th-${key}`}>
                {key}
              </div>
            )
        )}
      </div>
      {data.map((item: Data, index: number) => (
        <Row data={item} key={`row-${item.id}`} index={index}></Row>
      ))}
    </section>
  );
};
