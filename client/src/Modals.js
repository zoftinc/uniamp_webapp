//Modal.js
import React, { useRef, useState } from "react";
import ReactDom from "react-dom";


export const ResponseWindow = ({title, setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <span style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</span>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindowSelf = ({title}) => {
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" >
      <div className="modal">
        <div style={{position:"absolute",left:20,top:100,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindowOk = ({title, setShowModal }) => {
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" >
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
        <button style={{position:"absolute",left:140, top:100, width:50,height:30}} onClick={() => {setShowModal(false)}}>OK</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindowEdit = ({title, setShowModal,setEditData }) => {
  const [edit_data,SetEdit_data] = useState("");
  //render the modal JSX in the portal div

  return ReactDom.createPortal(
    <div className="container" >
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
				<input type="text"  
          style={{position:"absolute",left:100,top:100, width:150,height:30}}
          value={edit_data}
					onChange={(event) => SetEdit_data(event.target.value)} 
				/>
        <button style={{position:"absolute",left:140, top:150, width:50,height:30}} onClick={() => {setEditData(edit_data);setShowModal(false)}}>OK</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindowYesNo = ({title, setShowModal, setResponse}) => {
  // close the modal when clicking outside the modal.
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {setResponse(1);setShowModal(false)}}>Yes</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {setResponse(0);setShowModal(false)}}>No</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindowOkCancel = ({title, setShowModal, setResponse}) => {
  // close the modal when clicking outside the modal.
 
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {setResponse(1);setShowModal(false)}}>OK</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {setResponse(0);setShowModal(false)}}>Cancel</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindow2Options = ({title,Option1,Option2,setShowModal, setResponse}) => {
  // close the modal when clicking outside the modal.
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {setResponse(1);setShowModal(false)}}>{Option1}</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {setResponse(2);setShowModal(false)}}>{Option2}</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindow3Options = ({title,Option1,Option2,Option3,setShowModal, setResponse}) => {
  // close the modal when clicking outside the modal.
 
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
        <button style={{position:"absolute",left:50, top:100, width:50,height:30}} onClick={() => {setResponse(1);setShowModal(false)}}>{Option1}</button>
        <button style={{position:"absolute",left:160, top:100, width:50,height:30}} onClick={() => {setResponse(2);setShowModal(false)}}>{Option2}</button>
        <button style={{position:"absolute",left:270, top:100, width:50,height:30}} onClick={() => {setResponse(3);setShowModal(false)}}>{Option3}</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindowSelf2 = ({title}) => {
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" >
      <div className="modal">
        <div style={{position:"absolute",left:20,top:100,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindowOk2 = (props) => {
  // close the modal when clicking outside the modal.
  
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <span style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>{props.title}</span>
        <button style={{position:"absolute",left:280, top:20, width:50,height:30}} onClick={() => {props.setShowModal(false)}}>OK</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindowYesNo2 = (props) => {
  // close the modal when clicking outside the modal.
 
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{props.title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {props.setResponse(1);props.setShowModal(false)}}>Yes</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {props.setResponse(0);props.setShowModal(false)}}>No</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindowOkCancel2 = (props) => {
  // close the modal when clicking outside the modal.
 
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{props.title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {props.setResponse(1);props.setShowModal(false)}}>OK</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {props.setResponse(0);props.setShowModal(false)}}>Cancel</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const ResponseWindow2Options2 = (props) => {
  // close the modal when clicking outside the modal.
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{props.title}</div>
        <button style={{position:"absolute",left:80, top:100, width:50,height:30}} onClick={() => {props.setResponse(1);props.setShowModal(false)}}>{props.Option1}</button>
        <button style={{position:"absolute",left:210, top:100, width:50,height:30}} onClick={() => {props.setResponse(2);props.setShowModal(false)}}>{props.Option2}</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export const ResponseWindow3Options2 = (props) => {
  // close the modal when clicking outside the modal.
 
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container">
      <div className="modal">
        <div style={{position:"absolute",left:20,top:20,width:300,height:60,textAlign:"center",fontSize:16,fontWeight:"bold"}}>{props.title}</div>
        <button style={{position:"absolute",left:50, top:100, width:50,height:30}} onClick={() => {props.setResponse(1);props.setShowModal(false)}}>{props.Option1}</button>
        <button style={{position:"absolute",left:160, top:100, width:50,height:30}} onClick={() => {props.setResponse(2);props.setShowModal(false)}}>{props.Option2}</button>
        <button style={{position:"absolute",left:270, top:100, width:50,height:30}} onClick={() => {props.setResponse(3);props.setShowModal(false)}}>{props.Option3}</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

/*
import React, { useRef } from "react";
import ReactDom from "react-dom";
export const ResponseWindow = ({title, setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  
  //render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <span style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>{title}</span>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
*/