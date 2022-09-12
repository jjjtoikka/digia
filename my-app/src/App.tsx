import React, { useEffect } from 'react';
import { Table } from './components/table';
import { Form } from './components/form';
import useGlobalState from './provider/store';
import { dataArray, initialModel } from './data';
type Props = {};

export const App = ({}: Props) => {
  const state = useGlobalState();
  useEffect(() => {
    state.addData(dataArray);
  }, []);

  const model = initialModel();
  const data = state.getData();
  return (
    <main>
      <header className="grid">
        <span className="logo"></span>
        <h1>toikkaWare</h1>
      </header>
      <div className="content">
        <section>
          <h2>List of participants</h2>
        </section>
        <section className="lightest-bg">
          <Form model={model}></Form>
        </section>
        {state.haveData() && (
          <section className="lightest-bg">
            <Table data={data} model={model}></Table>
          </section>
        )}
      </div>
    </main>
  );
};

export default App;
