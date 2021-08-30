import React from 'react';  
import axios from 'axios';  
import '../Formas/addFormas.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class addFormas extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
NomeForma:'',
TipoForma:'' ,
Cor:'',
TamanhoPixels:'',
DiretorioId:'',
Select1Options: [],
Select2Options: []
}  

}   
addFormas=()=>{  
  axios.post('http://localhost:49548/api/Formas', {NomeForma:this.state.NomeForma,TipoForma:this.state.TipoForma,Cor:this.state.Cor,TamanhoPixels:this.state.TamanhoPixels,DiretorioId:this.state.DiretorioId})  
.then(json => {  
if(json.data==='OK'){  
  console.log(json.data);  
  alert("Forma gravada com sucesso ! ! !");  
}  
else{  
alert('Confira os dados ! ! !');  
debugger;  
}  
})  
}  

handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
AlterarSelect1= (e)=>{
  this.setState({TipoForma: e.target.value })
}
AlterarSelect2= (e)=>{
  this.setState({DiretorioId: e.target.value })
}

componentWillMount (){
  
  axios.get("http://localhost:49548/api/Formas/GetTipo").then(response => {   
    console.log(response.data); 
     this.setState({  
      Select1Options: response.data
    });  
  });  
  axios.get("http://localhost:49548/api/Diretorios").then(response => {  
    this.setState({  
      Select2Options: response.data  
    });  
  });  
}
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Criar Forma Geométrica</h4>  
    <br/>
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="NomeForma" sm={2}>Nome da Forma</Label>  
          <Col sm={10}>  
            <Input type="text" name="NomeForma" onChange={this.handleChange} value={this.state.NomeForma} placeholder="Digite o Nome da forma" />  
          </Col> 
        </FormGroup><br/>
        <FormGroup row> 
          <Label sm={2}>Diretório</Label>  
          <Col sm={10}>  
         <select class="form-control" value={this.state.DiretorioId} onChange={this.AlterarSelect2}>
         {  
              this.state.Select2Options.map((p, key) => {  
              return <option key={key} value={p.DiretorioId}>{p.NomeDiretorio}</option>;  
              })  
        }
         </select>
          </Col>
          </FormGroup><br/>
          <FormGroup row> 
          <Label sm={2}>Tipo</Label>  
          <Col sm={10}>  
         <select class="form-control"  value={this.state.TipoForma} onChange={this.AlterarSelect1}>
         {  
              this.state.Select1Options.map(p => {  
              return <option value={p.TipoId}>{p.NomeTipo}</option>;  
              })  
        }
         </select>
          </Col>
          </FormGroup><br/>
          <FormGroup row> 
          <Label sm={2}>Cor</Label>  
          <Col sm={10}>  
            <Input type="text" name="Cor" onChange={this.handleChange} value={this.state.Cor} placeholder="Digite a cor" />  
          </Col>  
          </FormGroup><br/>
          <FormGroup row> 
          <Label sm={2}>Tamanho</Label>  
          <Col sm={10}>  
            <Input type="number" name="TamanhoPixels" onChange={this.handleChange} value={this.state.TamanhoPixels} placeholder="Digite o Tamanho em Pixels" />  
          </Col>  
        </FormGroup>  <br/>
      </Col>  
      <Col>  <br/>
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.addFormas} className="btn btn-success">Enviar</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  <br/>
      </Col>  
    </Form>  
  </Container>  
);  
}  

}  

export default addFormas;  