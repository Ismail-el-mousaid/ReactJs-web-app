import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./hitItem";

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            hit:null
        }
    }
    componentDidMount() {    //Pour faire une recherche par défaut
        this.getHits(this.props.match.params.id);     //Recupère parametre id qui se trouve dans url
    }
    getHits(id){      //Get Data From API
        let url = "https://pixabay.com/api/?key=23308682-c6fa77acaf4315bb19c2e08d8&id="+id;
        axios.get(url).then((resp)=>{
            this.setState({
                hit:resp.data.hits[0]
            });
        }).catch((err=>{
            console.log(err);
        }))
    }


    render() {
        if(this.state.hit!=null)
        return (
            <div>
                <HitItem hit={this.state.hit} details={true}/>
            </div>
        );
        else{
            return(
                <div></div>
            )
        }
    }
}

export default HitDetails;
