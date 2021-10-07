import { useState } from "react";
import "./Alert.css";

const Alert = ({ message, type }) => {
  const [hideAlert] = useState(false);

  return (
    <div className={`alert alert-${type} ${hideAlert && "hide"}`}>
      <i className="fas fa-info-circle"></i> {` ` + message}
    </div>
  );
};

export default Alert;
