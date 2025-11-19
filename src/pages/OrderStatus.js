import React, { useEffect, useState, useMemo } from "react";

function OrderStatus() {
  const [status, setStatus] = useState("Order Accepted");

  // Use useMemo → so the array is stable & does not recreate every render
  const stages = useMemo(
    () => ["Order Accepted", "Preparing", "Out for Delivery", "Delivered"],
    []
  );

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < stages.length) {
        setStatus(stages[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [stages]); // now perfectly safe & no ESLint warnings

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-3">🚚 Live Order Status</h2>

      <div className="status-box mx-auto mt-4 p-4 rounded shadow-lg">
        <h4 className="text-warning fw-bold">{status}</h4>

        <div className="progress mt-3" style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{
              width: `${((stages.indexOf(status) + 1) / stages.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
