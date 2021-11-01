import { useState } from "react";

const UseModal = () => {
  const [copy, setCopy] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [showToast, setShow] = useState(false);

  const onSwitchAction = () => {
    setResponsive(!responsive);
  };

  const onClickCopy = (value) => {
    if (navigator.clipboard !== undefined) {
      console.log("in the if")
      navigator.clipboard.writeText(value).then(function () {
          console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
        console.log("in the error ", err)
        setError(true)
        setErrorStatus(`Error: ${err}`)
        setShow(true);
        console.error('Async: Could not copy text: ', err);
      });
  }
  else if(window.clipboardData) {
    console.log("other wan")
      window.clipboardData.setData("Text", value);
  }
 
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return {
    copy,
    responsive,
    onSwitchAction,
    onClickCopy,
    error,
    errorStatus,
    showToast,
    setShow
  };
};

export default UseModal;
