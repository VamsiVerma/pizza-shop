export const placeOrder = (orderDetails) => ({
  type: "PLACE_ORDER",
  payload: orderDetails,
});

export const cancelOrder = (orderId) => ({
  type: "CANCEL_ORDER",
  payload: orderId,
});

export const updateOrderStage = (orderId, stage, startTime) => ({
  type: "UPDATE_ORDER_STAGE",
  payload: { id: orderId, stage, startTime },
});

export const incrementTotalDelivered = () => ({
  type: "INCREMENT_TOTAL_DELIVERED",
});
