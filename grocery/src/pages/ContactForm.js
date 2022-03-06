import React from "react";
import {Button, TextField} from '@material-ui/core';

const outline = {
  margin: '52px 0 11px 73px'
}

const base = {
  fontSize: '56px',
  color: 'white',
  margin: '30px 0 17px 0',
  textAlign: 'center',
}


function ContactForm () {
  return(
    <div style={outline}>
      <h1 style={base}>ContactForm</h1>
      <form>
        <label>E-mail</label>
        <input
          type="email"
          
        />
        <Button><input type="submit" value="a"/></Button>
      </form>
    </div>
  )
}

export default ContactForm ;