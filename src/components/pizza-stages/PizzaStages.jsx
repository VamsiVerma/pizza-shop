import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateOrderStage,
  incrementTotalDelivered,
} from "../../container/actions";
import { calculateTimeSpent } from "../helper";
import "./PizzaStages.css";

function PizzaStages() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  const handleMoveToNextStage = (orderId, currentStage) => {
    const nextStages = ["Order In Making", "Order Ready", "Order Picked"];
    const nextStage = nextStages[nextStages.indexOf(currentStage) + 1];
    const order = orders.find((order) => order.id === orderId);
    if (order && order.stage !== "Order Picked") {
      if (nextStage) {
        dispatch(updateOrderStage(orderId, nextStage, Date.now()));
        if (nextStage === "Order Picked") {
          dispatch(incrementTotalDelivered());
        }
      }
    }
  };

  return (
    <div className="pizza-stages">
      <h2>Pizza Stages</h2>
      <div className=" d-flex stage-container">
        {["Order Placed", "Order In Making", "Order Ready", "Order Picked"].map(
          (stage) => (
            <div key={stage} className="stage-column d-flex flex-column">
              <h3>{stage}</h3>
              {orders
                .filter((order) => order.stage === stage)
                .map((order) => (
                  <div
                    key={order.id}
                    className={`pizza-card d-flex flex-column ${
                      calculateTimeSpent(order.startTime, currentTime) > 3
                        ? "red"
                        : ""
                    }`}
                  >
                    <p>Order No.: {order.id}</p>
                    {order.stage === "Order Picked" ? (
                      <React.Fragment>
                        <p className="text-success picked-msg">Picked</p>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          Time:
                          {calculateTimeSpent(order.startTime, currentTime)}
                        </p>
                        <button
                          className="next-btn"
                          onClick={() =>
                            handleMoveToNextStage(order.id, order.stage)
                          }
                        >
                          {order.stage === "Order Picked"
                            ? "Delivered"
                            : "Next"}
                        </button>
                      </React.Fragment>
                    )}
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PizzaStages;
