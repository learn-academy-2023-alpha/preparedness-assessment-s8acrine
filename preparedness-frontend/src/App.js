import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
  // Create state variable to control view of the modal component
  const [modal, setModal] = useState(false);
  // Create toggle function for modal to change modal state
  const toggle = () => {
    // if user has not entered a name, set it to a generic greeting of Friend and open the modal
    if (name === undefined) {
      setName("Friend");
      setModal(!modal);
      // open the modal
    } else {
      setModal(!modal);
    }
  };
  // Save user input in state
  const [name, setName] = useState();
  // Reset input
  const reset = () => {
    setName("");
  };

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button onClick={toggle}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
        <ModalComponent modal={modal} toggle={toggle} name={name} />
        {/* <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{`Greetings, ${name}`}</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
  </Modal> */}
      </div>
    </div>
  );
};

export default App;
