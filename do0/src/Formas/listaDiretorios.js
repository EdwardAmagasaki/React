import React from 'react';  
import axios from 'axios'; 

import './listaDiretorios.css';

class listaDiretorios extends React.Component {  
    constructor() {  
        super();  
        this.state = {  
            DiretoriosData: []  
        }  
    }  
  
    componentDidMount() {  
        axios.get("http://localhost:49548/api/diretorios").then(response => {  
            //console.log(response.data);  
            this.setState({  
                DiretoriosData: response.data  
            });  
        });  
    }  
  
    render() {  
  
        return (  
            
            <section>  
            <div class="container">
                <h4>Listagem de Diretórios</h4>  
                <div>  
                    <table id="table">  
                        <thead id="table_thead"><tr><th>Guid</th><th>Nome do Diretório</th></tr></thead>  
                        <tbody>  
                            {  
                                this.state.DiretoriosData.map(p => {  
                                    return <tr id="tr_row"><td>{p.DiretorioId}</td><td> {p.NomeDiretorio}</td></tr>;  
                                })  
                            }  
                        </tbody>  
                    </table>  
                </div>  
            </div>
            </section>  
        )  
    }  
}  
  
export default listaDiretorios;  