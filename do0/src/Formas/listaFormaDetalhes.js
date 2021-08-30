import React from 'react';  
import axios from 'axios'; 

import './listaFormaDetalhes.css';

class listaFormaDetalhes extends React.Component {  
    constructor() {  
        super();  
        this.state = {  
            FormasData: []  
        }  
        
    }  
  
    componentDidMount() {  
        axios.get("http://localhost:49548/api/Formas").then(response => {  
            //console.log(response.data);  
            this.setState({  
                FormasData: response.data  
            });  
        });  
    }  
  
    render() {  
  
        return (  
            <section>  
            <div class="container">
                <h4>Listagem de Formas Geométricas com Detalhes</h4>  
                <div>  
                    <table id="table">  
                        <thead id="table_thead"><tr><th>Guid</th><th>Nome</th><th>Diretório Guid</th><th>Tipo</th><th>Cor</th><th>Tamanho</th></tr></thead>  
                        <tbody>  
                            {  
                                this.state.FormasData.map(p => {  
                                    return <tr id="tr_row"><td> {p.FormasId}</td><td> {p.NomeForma}</td><td>{p.DiretorioId}</td><td>{p.TipoForma}</td><td>{p.Cor}</td><td>{p.TamanhoPixels}</td></tr>;  
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
  
export default listaFormaDetalhes;  