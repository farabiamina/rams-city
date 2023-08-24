import React, { useState, useEffect } from 'react';
import "./modal.css";
import FormImg from "../../images/form2.png";
import SmallFormImg from "../../images/form3.png";
import Request from '../request/request';
import CloseSvg from "../../svg/closeSvg";

const Modal = ({ isOpen, setIsOpen, id }) => {
    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        }
        else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen])

    const imageSrc = window.innerWidth <= 900 ? SmallFormImg : FormImg;
    const handleOutsideClose = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }
    if (isOpen) {
        return (
            <div onClick={handleOutsideClose} className="modal-container">
                <div className="modal fade-in">
                    <CloseSvg onClick={closeModal} className="close"/>
                    <div className="left">
                        <div className='h2-con'>
                            <span className='h2'>Получи </span>
                            <span className='h2'>консультацию</span>
                        </div>
                        <p>Наши специалисты подберут для Вас лучшие условия приобретения квартиры за 10 минут.</p>
                        <Request color="#3A3A3E" formId={id}/>
                    </div>
                    <div className="right">
                        <div>
                            <img src={imageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;