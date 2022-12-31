import React, { useState } from 'react';

function Sidebar() {
  let [sideCart, setSideCart] = useState('closed');

  return (
    <div className='sidebar'>
      THIS
      <div
        className='sidebar-button'
        onClick={() => {
          console.log('side menu clicked');
        }}
      >
        Sidebar cart
      </div>
      <div className='sidebar-content'>Sidebar content</div>
    </div>
  );
}

export default Sidebar;
