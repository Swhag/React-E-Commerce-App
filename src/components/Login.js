import React, { useState, useEffect } from 'react';

function LoginModal(props) {
  let login = props.login;
  let setLogin = props.setLogin;

  return (
    <div className={`black-bg ${login}`}>
      <div class='white-bg'>
        <h4>Please login</h4>

        <form action='#!'>
          <div class='my-3'>
            <label for='username'>Username</label>
            <input id='username' type='text' class='form-control' />
          </div>
          <div class='my-3'>
            <label for='password'>Password</label>
            <input id='password' type='password' class='form-control' />
          </div>
          <button id='send' type='submit' class='btn btn-primary'>
            Send
          </button>
          <button
            id='close'
            type='button'
            class='btn btn-danger'
            onClick={() => {
              setLogin('');
            }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
