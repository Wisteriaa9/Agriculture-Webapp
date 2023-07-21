import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * `COMPONENT`
 * ## Modal
 * @param props Contains the following attributes: `children`, `handleClose`
 * @returns `React.ReactElement`
 */
const Modal = (props: {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
}): React.ReactPortal => {
  const [openAnimation, setOpenAnimation] = useState(false);

  useEffect(() => {
    setOpenAnimation(props.isOpen);
  }, [props.isOpen]);

  useEffect(()=>{
    const handleEscKeyPress = (event: { key: string }) => {
      if (event.key === 'Escape') {
        if(props.isOpen){props.handleClose()}
      }
    };
    document.addEventListener('keydown', handleEscKeyPress);
    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  },[props.isOpen])

  const twStyles = {
    backdrop: `transition ${
      openAnimation ? 'opacity-100' : 'opacity-0'
    } z-50 bg-[#000000BF] fixed flex min-h-screen min-w-screen top-0 left-0 right-0 bottom-0 overflow-y-auto sm:p-8 p-4`,
    modal: `transition ${
      openAnimation ? 'scale-100' : 'scale-75'
    } min-h-[60px] min-w-[120px] m-auto relative bg-white rounded-lg overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]`,
    close:
      'absolute top-[8px] right-[8px] p-2 cursor-pointer rounded-full transition hover:bg-[#5655C626]'
  };

  return ReactDOM.createPortal(
    props.isOpen && (
      <div className={twStyles.backdrop} onClick={props.handleClose}>
        <div className={twStyles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={twStyles.close} onClick={props.handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              <path
                className="stroke-[#5655C6]"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </div>
          {props.children}
        </div>
      </div>
    ),
    document.getElementById('root') as Element
  );
};

export default Modal;
