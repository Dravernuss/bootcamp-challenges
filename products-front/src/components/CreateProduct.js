import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  createProductAsync,
  getAllProductsAsync,
} from "../slices/productSlices";

const CreateProduct = ({ show, handleHide }) => {
  const dispatch = useDispatch();
  const [imageUploaded, setImageUploaded] = useState();
  const [imageId, setImageId] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;

    const product = {
      name: elements[0].value,
      description: elements[1].value,
      price: elements[2].value,
      discount: elements[3].value,
      active: elements[4].checked,
      image: imageUploaded,
      image_id: imageId,
    };

    await dispatch(createProductAsync(product));
    dispatch(getAllProductsAsync());
  };

  const showWidgetCloudinary = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dravernuss",
        uploadPreset: "kkscfaad",
      },
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, public_id } = result.info;
          setImageUploaded(secure_url);
          setImageId(public_id);
        }
      }
    );
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Create product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price: </Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount: </Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Active" />
          </Form.Group>
          <Button onClick={showWidgetCloudinary}>Upload image</Button>
          <br />
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateProduct;
