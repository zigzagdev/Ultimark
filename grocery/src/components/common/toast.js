import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

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
    <button onClick={notify} style={gareth}>Bale</button>
    <ToastContainer />
    </div>
  );
}
export default toastapp;