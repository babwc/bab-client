import { useState, useEffect, useRef } from "react";

import { useGetSettingsQuery } from "../../api/services/settings";

import Loading from "../../components/Loading";
import Button from "../../components/Button";

import "./Reserve.scss";

const Reserve = () => {
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);

  const { data } = useGetSettingsQuery(undefined);
  const { reservations } = data?.content || {};

  const ref = useRef<any>();

  const handleReserv = () => {
    setReservationOpen(!reservationOpen);
  };

  useEffect(() => {
    if (ref.current && reservationOpen) {
      const script = document.createElement("script");
      script.src =
        "//www.opentable.com/widget/reservation/loader?rid=1285345&type=standard&theme=standard&color=1&dark=true&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website";
      script.async = true;

      ref.current.appendChild(script);
    }

    if (!reservationOpen) ref.current = null;
  }, [reservationOpen]);
  console.log(ref.current);

  if (!reservations) return null;

  return reservations ? (
    <div className="reserve">
      <Button handleClick={handleReserv}>Reserve</Button>
      <div className={`reserve__popup ${reservationOpen ? "open" : ""}`}>
        <div className="reserve__widget__wrap">
          <div ref={ref} className="reserve__widget" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Reserve;
