import React, { useState } from 'react'
import Header from '../components/Header';
import { Modal, Button } from 'react-bootstrap';

const Payment = () => {

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  }
  return (
    <div>
      <Header />
      <br />
      <div class="container">
        <form class="row mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div class="col-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="inputEmail4" required />
          </div>
          <div class="col-12">
            <label for="mobilenumber" class="form-label">Mobile.No</label>
            <input type="number" class="form-control" name="mobilenumber" id="mobilenumber" required />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" name="address" required />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div class="col-sm-6">
            <button type="submit" class="btn btn-primary">Confirm Payment</button>
          </div>
        </form>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your payment has been confirmed. Thank you for your purchase!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Payment
