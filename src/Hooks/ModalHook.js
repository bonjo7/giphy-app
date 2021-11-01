import { useState } from "react";

const UseModal = () => {
  const [copy, setCopy] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const onSwitchAction = () => {
    setResponsive(!responsive);
  };

  const onClickCopy = (value) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(value).then(function () {
          console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
          console.error('Async: Could not copy text: ', err);
      });
  }
  else if(window.clipboardData) {
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
  };
};

export default UseModal;
