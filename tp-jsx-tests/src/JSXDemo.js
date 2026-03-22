import React from 'react';
import ButtonWithLogging from './ButtonWithLogging';

function JSXDemo() {
  const elementJSX = <h1>Bonjour JSX</h1>;

  const elementJavaScriptPur = React.createElement(
    'h1',
    null,
    'Bonjour JS pur'
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>TP JSX et Composition</h1>

      {elementJSX}
      {elementJavaScriptPur}

      <ButtonWithLogging label="Cliquer ici" />
    </div>
  );
}

export default JSXDemo;