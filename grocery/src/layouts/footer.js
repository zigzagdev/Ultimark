"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style = {
    position: "absolute",
    bottom: '0',
    width: "100%",
    backgroundColor: "black",
};
const chrct = {
    color: "white",
    textAlign: "right",
    paddingRight: "50px",
};
class Footer extends react_1.default.Component {
    render() {
        return (<div style={style}>
          <p style={chrct}>Matthew - Masa</p>
        </div>);
    }
}
exports.default = Footer;
