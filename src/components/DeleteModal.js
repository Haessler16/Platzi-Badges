import React from 'react'
import Modal from "./Modal"
import "./styles/DeleteBadgeModal.css"

export default function DeteleModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className="DeleteBadgeModal">
                <h1>Are You Sure?</h1>
                <p>You are about to detele this badge</p>
                <div>
                    <button className="btn btn-primary" onClick={props.onClose}>Cancel</button>
                    <button className="btn btn-danger" onClick={props.DeleteBadge}>Delete</button>
                </div>
            </div>
        </Modal>
    )
}
