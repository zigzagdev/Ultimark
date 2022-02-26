import React from 'react';
import Footer from '../layouts/Footer'

const rightchrt: { [key: string]: string } = {
    color: "white",
    textAlign: "center",
    paddingLeft: "60px",
};

const outline: { [key: string]: string } = {
    margin: "42px 0 100px 0",
};

const outword: { [key: string]: string } = {
    color: "snow",
    fontSize: "30px",
    textAlign: "left",
    marginLeft: "160px"
};

const formword: { [key: string]: string } = {
    color: "snow",
    fontSize: "27px",
}

const nameform: { [key: string]: string } = {
    width: "439px",
    height: "43px",
    paddingLeft: "11px"
}

const textform: { [key: string]: string } = {
    dispkay: "flex",
    flexDirection: "row",
    margin: "42px 112px 0 0"
}

const textform2: { [key: string]: string } = {
    marginTop: "40px",
}

const subjectform: { [key: string]: string } = {
    width: "1082px",
    height: "43px",
    marginLeft: "21px",
    paddingLeft: "11px"
}

const content: { [key: string]: string } = {
    marginTop: "20px"
}

const contentform: { [key: string]: string } = {
    width: "1091px",
    height: "123px",
    marginRight: "150px",
    marginLeft: "172px",
    padding: "17px 0 0 11px",
}



function Form () {

    return(
      <div style={outline}>
        <h1 style={outword}>Contact Form(お問い合わせ)</h1>
        <div>
          <h2 style={formword}>Fullfill the form(以下、入力ください)</h2>
          <form>
            <div>
              <div style={textform}>
                <label htmlFor="nameForm">Your Name (氏名)</label>
                <input
                  type = "text"
                  id = "nameForm"
                  className = "formInput"
                  placeholder = "Name(氏名)"
                  style={nameform}
                />
                <label htmlFor="nameForm">Address(メールアドレス)</label>
                <input
                  type = "text"
                  id = "mailForm"
                  className = "formInput"
                  placeholder = "Address(メールアドレス)"
                  style={nameform}
                />
              </div>
              <div style={textform2}>
                <input
                  type = "text"
                  id = "subjectForm"
                  className = "formInput"
                  placeholder = "Subject(件名)"
                  style={subjectform}
                />
              </div>
              <div style={content}>
                <label htmlFor="contentForm">Content(お問い合わせ内容)</label>
                <textarea
                  id="mailContentForm"
                  className="formInput"
                  placeholder = "Content(お問い合わせ内容)"
                  style={contentform}
                  />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;