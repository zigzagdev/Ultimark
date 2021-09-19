import React, {Component} from "react";

const style = {
    minWidth: 64,
    lineHeight: "32px",
    borderRadius: 4,
    border: "none",
    padding: "0 16px",
    color: "#fff",
    background: "red"
};

class Home extends Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.message = props.message;
    }

    render() {
        return <div>
            <h1>React</h1>
            <p style={style}>{this.title}</p>
            <p>{this.message}</p>
        </div>;
    }
}
export default Home ;

// Reactでのcssは自分で開発する際はconst定義でとして取り出すことをメインとして書いてみる。
// また、propsでの渡しに関しては、渡す先で渡したい文言等を書く。定義するファイル内ではプロパティを渡せる枠組みを書くイメージ