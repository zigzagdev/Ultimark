import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const gareth = {
  backgroundColor: "white",
  color: "darkblue"
}

function toastapp() {
  const notify = () => {
    toast('fuck you')
  }
  return (
    <div>
    <button onClick={notify}>Detail</button>
    <ToastContainer/>
    </div>
  );
}
export default toastapp;