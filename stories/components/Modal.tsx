import { useState } from "react"
import './Modal.css'


type ModalProps = {
  primary? : boolean;
}

const Modal = ({primary = true}: ModalProps) => {
  const [modal, setModal] = useState(true);

  const techs = ['React','NextJs','NodeJs','ExpressJs','MongoDb']

  return (
    <div>
        {
          modal && (
            <div className='modal-container'>
              {
                techs.map((item) => (
                  <h3>{item}</h3>
                ))
              }
            </div>
          )
        }
      
      <button className="button" onClick={
        ()=> setModal(!modal)
      }>{
        modal ? 'Close Modal' : 'Open Modal'
      }</button>
    </div>
  )
}

export default Modal
