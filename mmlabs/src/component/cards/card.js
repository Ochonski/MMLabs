import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickCard = () => {
        setOpen(true);
    }

    return (
    <>
      <FormDialog
        open={open} 
        setOpen={setOpen} 
        nome={props.nome} 
        email={props.email}
        telefone={props.telefone}
        listCard={props.listCard}
        setListCard={props.setListCard} 
        id={props.id}
      />
      <div className="card--container" onClick={() => handleClickCard()}>
        <h1 className="card--title">{props.nome}</h1>
        <p className="card--email">{props.email}</p>
        <p className="card--phone">{props.telefone}</p>
      </div>
    </>
   );
}