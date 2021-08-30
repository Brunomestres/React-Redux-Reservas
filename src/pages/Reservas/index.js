import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './style.css';
export default function Reservas() {
  const reserves = useSelector((state) => state.reserve);
  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reservas</h1>

      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => {}}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  );
}
