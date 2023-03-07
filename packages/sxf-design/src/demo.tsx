import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <Alert>11122</Alert>
    </div>
  );
};
const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
