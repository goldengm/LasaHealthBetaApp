import React, {useEffect, useRef, useState} from 'react';
import ToastContainer from './ToastContainer';

export const ToastContext = React.createContext();

const ToastProvider = ({children, ...props}) => {
  const toastRef = useRef(null);
  const [refState, setRefState] = useState({});

  useEffect(() => {
    setRefState(toastRef.current);
  }, []);

  return (
    <ToastContext.Provider value={refState}>
      {children}
      <ToastContainer ref={toastRef} {...props} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
