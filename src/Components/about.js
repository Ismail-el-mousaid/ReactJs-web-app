import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: "CV",
            contact:{name:"ISMAIL EL MOUSAID", email:"elmousaid@gmail.com",profile:'/logo192.png'},
            skills:[
                {id:1,skill:'Software engeneering'},
                {id:2,skill:'UI Design'},
                {id:3,skill:'Machine Learning'}
            ],
            skillValue:''
        }
    }
    setSkill=(event)=>{
        this.setState({
            skillValue:event.target.value    //Récupérer valeur de input
        })
    }
    addSkill=(event)=>{
        event.preventDefault();    //Empecher a js de synchroniser les données
        let skill={
            id:[...this.state.skills].pop().id +1,  //Get dernière valeur de id dans tab
            skill:this.state.skillValue
        }
        this.setState({
            skills:[...this.state.skills, skill]    // Les ... permet de copier tableau
        })
    }
    onDelete=(skill)=>{
        let index = this.state.skills.indexOf(skill); //Get index de skill souhaité supprimer
        let listSkills = [...this.state.skills];   //Copier tab
        listSkills.splice(index,1);    //Delete skill qui a l'index (deletecount = nbr de suppression)
        this.setState({
            skills:listSkills     //Mise a jour le tableau skills
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong><label>{this.state.title}</label></strong>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col col-auto">
                        <img width={100} src={this.state.contact.profile}/>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.name}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-header">Skills: {this.state.skillValue}</div>
                    <div className="card-body">
                        <form onSubmit={this.addSkill}>
                            <div className="row mb-2">
                                <div className="col">
                                    <input type="text" name="skill" placeholder="New Skill" className="p-1"
                                        value={this.state.skillValue}
                                        onChange={this.setSkill}/>
                                </div>
                                <div className="col col-auto">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Skill</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.skills.map((s,index)=>
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.skill}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>this.onDelete(s)}>X</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
