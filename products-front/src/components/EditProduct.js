import { useEffect, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAsync,
  getAllProductsAsync,
  selectProductToEdit,
  updateProductAsync,
} from "../slices/productSlices";

const EditProduct = ({ show, handleHide }) => {
  const dispatch = useDispatch();
  const productToEdit = useSelector(selectProductToEdit);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const activeRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;

    const product = {
      name: elements[0].value,
      description: elements[1].value,
      price: elements[2].value,
      discount: elements[3].value,
      active: elements[4].checked,
    };

    const { _id: idProduct } = productToEdit;

    await dispatch(updateProductAsync({ id: idProduct, ...product }));
    dispatch(getAllProductsAsync());
  };

  useEffect(() => {
    console.log("useEffect...", productToEdit);
    console.log("REF NAME", nameRef.current);

    if (productToEdit) {
      const { name, description, price, discount, active } = productToEdit;

      // Initial values to edit form
      nameRef.current.value = name;
      descriptionRef.current.value = description;
      priceRef.current.value = price;
      discountRef.current.value = discount;
      activeRef.current.checked = active;
    }
  }, [productToEdit]);

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control required ref={nameRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <Form.Control required ref={descriptionRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price: </Form.Label>
            <Form.Control type="number" required ref={priceRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount: </Form.Label>
            <Form.Control
              type="number"
              required
              ref={discountRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Active" ref={activeRef} />
          </Form.Group>
          <Button type="submit">Edit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProduct;
