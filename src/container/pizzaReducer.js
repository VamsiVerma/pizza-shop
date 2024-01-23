const initialState = {
  orders: [],
  totalDelivered: 0,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "CANCEL_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case "UPDATE_ORDER_STAGE":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? {
                ...order,
                stage: action.payload.stage,
                startTime: action.payload.startTime,
              }
            : order
        ),
      };
    case "INCREMENT_TOTAL_DELIVERED":
      return {
        ...state,
        totalDelivered: state.totalDelivered + 1,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
