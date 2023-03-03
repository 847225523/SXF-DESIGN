import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <div>111</div>;
};
const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
