import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../service/api';
import { addReserveRequest } from '../../store/modules/reserve/actions';
import './styles.css';
export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips() {
      const response = await api.get('/trips');
      setTrips(response.data);
    }
    loadTrips();
  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
            <button type="button" onClick={() => handleAdd(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>Solicitar Reserva</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
