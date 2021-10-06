import { useState } from "react";
import "./Alert.css";

const Alert = ({ message, type }) => {
  const [hideAlert, setHideAlert] = useState(false);

  return (
    <div className={`alert alert-${type} ${hideAlert && "hide"}`}>
      <i className="fas fa-info-circle"></i> {` ` + message}
      {/* <button onClick={() => setHideAlert(true)}>close</button> */}
    </div>
  );
};

export default Alert;
