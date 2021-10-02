import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HitItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.details==false?'col-md-4 mt-2':'mt-2'} key={this.props.hit.id}>
                <div className="card">
                    <div className="card-header">{this.props.details==false?this.props.hit.tags:'Details'} |
                         {this.props.details==false?this.props.hit.webformatWidth:this.props.hit.imageWidth}
                        x {this.props.details==false?this.props.hit.webformatHeight:this.props.hit.imageHeight}</div>
                    <div className="card-body">
                        {
                            (this.props.details==false)?
                                <img className="card-img" height={200} src={this.props.hit.webformatURL}/>
                                :<img src={this.props.hit.largeImageURL}/>
                        }
                    </div>
                    <div className="m-2">
                        {
                            (this.props.details==false)?
                                <Link className="btn btn-success" to={'/hitdetails/'+this.props.hit.id}>Hit Details</Link>
                                :
                                <div>
                                    <div className="row p-2">
                                        <div className="col-auto">
                                            <img src={this.props.hit.userImageURL} className="img-thumbnail"/>
                                        </div>
                                        <div className="col-auto">
                                            <ul className="nav nav-pills">
                                                <li className="list-group-item">Views:<strong>{this.props.hit.views}</strong></li>
                                                <li className="list-group-item">Comments:<strong>{this.props.hit.comments}</strong></li>
                                                <li className="list-group-item">Downloads:<strong>{this.props.hit.downloads}</strong></li>
                                                <li className="list-group-item">Favorites:<strong>{this.props.hit.favorites}</strong></li>
                                                <li className="list-group-item">Likes:<strong>{this.props.hit.likes}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <Link className="btn btn-primary" to={"/gallery"}>Back</Link>
                                    </div>
                                </div>

                        }
                    </div>
                </div>
            </div>

        );

    }
}

export default HitItem;
