import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';

const ControlledRefPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);
  const toggleTooltip = () => setIsOpen(!isOpen);

  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        open
      </button>
      <button type="button" className="button" onClick={closeTooltip}>
        close
      </button>
      <button type="button" className="button" onClick={toggleTooltip}>
        toggle
      </button>
      {isOpen && (
        <div ref={ref}>
          <Popup>
            <div>Lorem ipsum dolor sit</div>
          </Popup>
        </div>
      )}
      <button onClick={openTooltip} type="button" className="button">
        I am the trigger
      </button>
    </div>
  );
};

export default ControlledRefPopup;
