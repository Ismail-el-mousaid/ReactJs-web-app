import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./hitItem";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
            currentKeyword:'paris',
            totalPages:1,      //Pour pagination
            pages:[]           //tab des pages
        }
    }
    componentDidMount() {    //Pour faire une recherche par défaut
        this.getHits();
    }

    getHits(){      //Get From API
        let url = "https://pixabay.com/api/?key=23308682-c6fa77acaf4315bb19c2e08d8&q="+this.state.currentKeyword+"&page="
                    +this.state.currentPage+"&per_page="+this.state.pageSize;
        axios.get(url).then((resp)=>{
            let totalP=(resp.data.totalHits%this.state.pageSize==0)
                        ?resp.data.totalHits/this.state.pageSize: 1+Math.floor(resp.data.totalHits/this.state.pageSize);  //Math.floor(x): renvoie le plus grand entier qui est inférieur ou égal à un nombre x
            this.setState({
                hits:resp.data.hits,
                totalPages: totalP,
                pages: new Array(totalP).fill(0)      //Dimension de ce tab == nbr total des pages
            });
        }).catch((err=>{
            console.log(err);
        }))
    }
    setKeyword=(event)=>{
        this.setState({
            currentKeyword:event.target.value
        })
    }
    search=(event)=>{     //Pour chercher
        event.preventDefault();
        this.getHits();
    }
    goToPage=(page)=>{
        this.setState({
            currentPage:page
        },()=>{    // ()=>{ c à d que la méthode qui se trouve apres doit etre executé quand currentPage varie
            this.getHits();
        });
    }

    render() {
        return (       //Affichage
            <div>
                <form onSubmit={this.search}>
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input type="text" value={this.state.currentKeyword} onChange={this.setKeyword} className="form-control" placeholder="keyword"/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success">Chercher</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.hits.map(hit=>
                            <HitItem hit={hit} details={false}/>
                        )
                    }
                </div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                                    <li>
                                        <button className={this.state.currentPage==index+1?'btn btn-primary':'btn'} onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;
