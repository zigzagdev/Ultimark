import React from 'react';

const rightchrt: { [key: string]: string } = {
    color: "white",
    textAlign: "center",
    paddingLeft: "60px",
};

const outline: { [key: string]: string } = {
    marginTop: "42px",

};

const outword: { [key: string]: string } = {
    color: "snow",
    fontSize: "30px",
    textAlign: "left",
    marginLeft: "160px"
};

const formword: { [key: string]: string } = {
    color: "snow",
    textAlign: "center",
    fontSize: "27px",
}

const nameform: { [key: string]: string } = {
    width: "410px",
    height: "43px",
    margin: "0 40px",
    paddingLeft: "11px"
}

const textform: { [key: string]: string } = {
    dispkay: "flex",
    flexDirection: "row",

}



function Form () {

    return(
      <div style={outline}>
        <h1 style={outword}>Contact Form(お問い合わせ)</h1>
        <div>
          <h2 style={formword}>Fullfill the form(以下、入力ください)</h2>
          <form>
            <div>
              <label htmlFor="nameForm">Your Name (氏名)</label>
            </div>
            <div style={textform}>
              <input
                type = "text"
                id = "nameForm"
                className = "formInput"
                placeholder = "Name(氏名)"
                style={nameform}
              />
              <input
                type = "text"
                id = "mailForm"
                className = "formInput"
                placeholder = "Address(メールアドレス)"
                style={nameform}
                />
            </div>
            <div>

            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;