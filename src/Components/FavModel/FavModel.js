import React from 'react'
import {Modal} from "react-bootstrap"

const FavModel = (props) => {
    return (
      <div>
        <Modal
        {...props}
          size="sm"
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>Added in Favorites</Modal.Body>
        </Modal>
      </div>
    );
}

export default FavModel
