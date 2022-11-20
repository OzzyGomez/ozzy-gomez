import React from "react";
import classes from "./Contact.module.css";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import TextArea from "../../Components/Textarea";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="page-title mb-4">Contact</div>
        <div className={classes.container}>
          <div className={classes.left}>
            <Card>
              <p className="mb-4">Send me an message! Don't me weird.</p>
              <Input label="Name" className="mb-4" />
              <Input label="Email" className="mb-4" />
              <TextArea label="Message" className="mb-4" />
              <Button>Send</Button>
            </Card>
          </div>
          <div className={classes.right}></div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
