import React, {useState, useEffect} from "react"
import './App.css';
import Axios from "axios"; 
import Card from "./component/cards/card";
import Xicoria from'./component/img/xicoria.png';
import MaskedInput from "./MaskedInput"


function App() {
  const [values, SetValues] = useState({});
  const [listCadastros, setListCadastros] = useState();

  const handleChangeValues = (value) => {
    SetValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  function handleChange(event) {
    SetValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
    nome: values.nome,
    email: values.email, 
    telefone: values.telefone,
  }).then((response) => {
    console.log(Response);
  });
  document.location.reload()
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCadastros(response.data);
  });
  }, []);

//  const[values, SetValues] = useState({})

  return <div className="app--container">
    <header>
      <div>
        <h1 className="register--titlepage">
        <img className="app--img" src={Xicoria}/>
          Agenda
        </h1>
      </div>
    </header>
     <div className="register--container">
        <h1 className="register--title"> Adicione seus contatos:</h1>
        <h3 className="register--inputLabel">Nome*</h3>
        <input type="text" name="nome" placeholder="Nome" className="register--input" onChange={handleChangeValues}/>
        <h3 className="register--inputLabel">E-mail*</h3>
        <input type="text" name="email" placeholder="E-mail" className="register--input"onChange={handleChangeValues}/>
        <h3 className="register--inputLabel">Telefone*</h3>
        <MaskedInput name="telefone" mask="(99) 99999-9999" value={values.telefone}  onChange={handleChange}/>

        <button className="register--button" onClick={() => handleClickButton()} >Enviar</button>
     </div>
     {console.log(listCadastros)}
     {typeof listCadastros !== "undefined" && 
        listCadastros.map((value) =>{
        return (
           <Card
              key={value.id} 
              listCadastros={listCadastros} 
              setListCadastros={setListCadastros}
              id={value.pessoa_id}
              nome={value.nome}
              email={value.email}
              telefone={value.telefone}
            ></Card>
        );
      })}
   </div>
  ;
}

export default App;
