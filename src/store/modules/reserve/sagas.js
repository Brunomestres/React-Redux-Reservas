import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserve, updateAmountReserve } from './actions';
import api from '../../../service/api';
import history from '../../../service/history';

function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.reserve.find((trip) => trip.id === id),
  );

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Sem Estoque para esse destino');
    return;
  }

  if (tripExists) {
    yield put(updateAmountReserve(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addReserve(data));
    history.push('/reservas');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Sem Estoque para esse destino');
    return;
  }

  yield put(updateAmountReserve(id, amount));
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
]);
