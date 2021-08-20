import React from "react";
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            v1:null,
            v2:null,
            v3:null,
            d:0
        }
        // this.setValue = this.setValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
    }
    setValue(v){
        let v1= this.state.v1;
        let v2= this.state.v2;
        let v3= this.state.v3;
        if(v1 == null){
            v1 = v;
        }else if(v2 ==null && isNaN(parseInt(v))){
            v2 = v;
        }else if(v3 == null){
            v3 = v;
        }
        this.setState({
            v1:v1,
            v2:v2,
            v3:v3,
            d:v
        })
    }
    calculate(){
        let v1= this.state.v1;
        let v2= this.state.v2;
        let v3= this.state.v3;
        let kq = 0;
        switch (v2){
            case "+":kq= v1+v3;break;
            case "-":kq= v1-v3;break;
            case "x":kq= v1*v3;break;
            case "/":kq= v3!=0?v1/v3:0;break;
        }
        this.setState({
            d:kq
        })
    }
    clear(){
        this.setState({
            v1:null,
            v2:null,
            v3:null,
            d:0
        })
    }
    render() {
        const d = this.state.d;
        return <div>
            <table>
                <tbody>
                <tr>
                    <td colSpan={4}>{d}</td>
                </tr>
                <tr>
                    <td onClick={this.setValue.bind(this,7)}>7</td>
                    <td onClick={this.setValue.bind(this,8)}>8</td>
                    <td onClick={this.setValue.bind(this,9)}>9</td>
                    <td onClick={this.setValue.bind(this,"/")}>/</td>
                </tr>
                <tr>
                    <td onClick={this.setValue.bind(this,4)}>4</td>
                    <td onClick={this.setValue.bind(this,5)}>5</td>
                    <td onClick={this.setValue.bind(this,6)}>6</td>
                    <td  onClick={this.setValue.bind(this,"x")}>x</td>
                </tr>
                <tr>
                    <td onClick={this.setValue.bind(this,1)}>1</td>
                    <td onClick={this.setValue.bind(this,2)}>2</td>
                    <td onClick={this.setValue.bind(this,3)}>3</td>
                    <td onClick={this.setValue.bind(this,"-")}>-</td>
                </tr>
                <tr>
                    <td onClick={this.setValue.bind(this,0)}>0</td>
                    <td onClick={this.clear}>C</td>
                    <td onClick={this.calculate}>=</td>
                    <td onClick={this.setValue.bind(this,"+")}>+</td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}