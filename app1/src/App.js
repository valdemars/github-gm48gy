import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));
const RemoteAppTest = React.lazy(() => import('app2/AppTest'));
console.log('RemoteAppTest', RemoteAppTest);

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
      </Suspense>
      {/* <Suspense fallback={'loading...'}>
        <RemoteAppTest />
      </Suspense> */}
    </div>
  );
};

export default App;
