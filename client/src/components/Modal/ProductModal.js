import Modal from 'react-modal'
import React from 'react'
import '../../css/Modal/ProductModal.css'
export default function ProductModal(props) {
    const {clickeditem,closeModal} =props
    return (
        <Modal isOpen={!!clickeditem} onRequestClose={closeModal}>
            <span className='close-icon' onClick={closeModal}>&times;</span>
            <div className='product-info'>
                <img src={clickeditem.imageurl} />
                <p>{clickeditem.desc}</p>
            </div>
        </Modal>
    )
}


