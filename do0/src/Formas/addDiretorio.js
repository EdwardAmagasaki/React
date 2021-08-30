import React from 'react';  
import axios from 'axios';  
import '../Formas/addDiretorio.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class addDiretorio extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
  NomeDiretorio:'' 
}  
}   
addDiretorio=()=>{  
if(this.state.NomeDiretorio != ''){
  axios.post('http://localhost:49548/api/diretorios', {NomeDiretorio:this.state.NomeDiretorio})  
.then(json => {  
 
if(json.data==='OK'){  
  console.log(json.data);  
  alert("Diretório adicionado com sucesso ! ! !");  
}  
else{  
alert('Confira os dados e tente novamente ! ! !');  
debugger;  
}  

})  
}else{
  alert('É necessário digitar o nome do diretório ! ! !');
}

}  

handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  

render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Criar Diretório</h4>  
    <br/>
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="NomeDiretorio" sm={2}>Nome do Diretório</Label>  
          <Col sm={10}>  
            <Input type="text" name="NomeDiretorio" onChange={this.handleChange} value={this.state.Name} placeholder="Digite o nome do diretório"  required="required" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  <br/>
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.addDiretorio} className="btn btn-success">Enviar</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  

}  

export default addDiretorio;  