import React from 'react';
import { MdDelete } from 'react-icons/md';
import './style.css';
export default function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reservas</h1>
      <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" />
        <strong>Viagem a maceio</strong>
        <span>Quantidade</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>
      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  );
}
