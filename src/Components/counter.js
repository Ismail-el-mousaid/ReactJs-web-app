import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter:1,
            imageList:[0]
        }
    }
    compute=(op)=>{
        let sign =op==='+'?1:-1;
        if(this.state.counter==1 && op==='-') sign=0
        let c = this.state.counter+sign;
        this.setState({
            counter:c,
            imageList:new Array(c).fill(0)
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>
                    {this.props.title?this.props.title:'Default titre'} : {this.state.counter}
                    </strong>
                </div>
                <div className="m-lg-auto">
                    <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={()=>this.compute('-')} className="btn btn-primary m-2">-</button>
                </div>
                <div className="card-body">
                    {
                        this.state.imageList.map((v,index)=>
                            <span key={index}>
                                <img width={100} src={this.props.image?this.props.image:'/logo192.png'}/>
                            </span>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Counter;
