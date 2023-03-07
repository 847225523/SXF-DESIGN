import React from 'react';
import { Button } from 'sxf-design';

export default function index() {
  const margin = { margin: '15px 0' };
  return (
    <div>
      <Button type="info" content="Here is an info text" style={margin} />
      <Button type="success" content="Here is an success text" style={margin} />
      <Button type="warning" content="Here is an warning text" style={margin} />
      <Button type="error" content="Here is an error text" style={margin} />
    </div>
  );
}
