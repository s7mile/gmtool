import { useState } from "react";

const useChange = () => {
  const [isChange, setChange] = useState(false);
  const handler = () => {
    setChange(true);
  };
  return [isChange, handler];
};

export default useChange;