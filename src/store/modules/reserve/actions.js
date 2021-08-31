export function addReserve(trip) {
  return {
    type: 'ADD_RESERVE',
    trip,
  };
}

export function addReserveRequest(id) {
  return {
    type: 'ADD_RESERVE_REQUEST',
    id,
  };
}

export function deleteReserve(id) {
  return {
    type: 'REMOVE_RESERVE',
    id,
  };
}

export function updateAmountReserve(id, amount) {
  return {
    type: 'UPDATE_RESERVE',
    id,
    amount,
  };
}
export function updateAmountRequest(id, amount) {
  return {
    type: 'UPDATE_RESERVE_REQUEST',
    id,
    amount,
  };
}
