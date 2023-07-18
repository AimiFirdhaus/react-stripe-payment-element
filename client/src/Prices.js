import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Prices = () => {
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const { prices } = await fetch("/config").then((r) => r.json());
      setPrices(prices);
    };
    fetchPrices();
  }, []);

  const createSubscription = async (priceId) => {
    const { subscriptionId, clientSecret } = await fetch(
      "/create-subscription",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
        }),
      }
    ).then((r) => r.json());

    setSubscriptionData({ subscriptionId, clientSecret });
  };

  //   if (subscriptionData) {
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: "/subscribe",
  //           state: subscriptionData,
  //         }}
  //       />
  //     );
  //   }

  useEffect(() => {
    if (subscriptionData) {
      navigate("/payment", { state: subscriptionData });
    }
  }, [subscriptionData, navigate]);

  return (
    <div>
      <h1>Select a plan</h1>

      <div className="price-list">
        {prices.map((price) => {
          return (
            <div key={price.id}>
              <h3>{price.product.name}</h3>

              <p>RM{(price.unit_amount / 100).toFixed(2)} / month</p>

              <button onClick={() => createSubscription(price.id)}>
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prices;
