import React from 'react';

function Sidebar(props) {
  let sidebar = props.sidebar;
  let setSidebar = props.setSidebar;

  return (
    <div className={`sidebar ${sidebar}`}>
      <div
        className='toggle-btn'
        onClick={() => {
          sidebar === 'show' ? setSidebar('hidden') : setSidebar('show');
        }}
      >
        <i className='fa-solid fa-angle-left'></i>
      </div>
      <div className='list'>
        <div className='item'>
          <a href='#!' target='_blank'>
            Sidebar content
          </a>
        </div>
        <div className='item'>About us</div>
        <div className='item'>Gallery</div>
        <div className='item'>Contact us</div>
      </div>
    </div>
  );
}

export default Sidebar;
