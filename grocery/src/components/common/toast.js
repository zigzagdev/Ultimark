import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const gareth = {
  backgroundColor: "white",
  color: "darkblue"
}

function Toast () {
  const notify = () => {
    toast('very delicious !')
  }
  return (
    <div>
      <button onFocus={notify}>
        Detail
      </button>
      <ToastContainer/>
    </div>
  );
}
export default Toast;