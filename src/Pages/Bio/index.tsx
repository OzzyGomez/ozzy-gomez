import React from "react";
import Container from "../../Components/Container";
import classes from "./Bio.module.css";
import Card from "../../Components/Card";
import classNames from "classnames";

const Bio = () => {
  return (
    <div>
      <Container>
        <Card>
          <div className={classNames(classes.banner, "mb-4")}>
            <img
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Chicago, IL; The Bean"
              className={classes.img}
            />
          </div>
          <div>
            <div className="page-title">Chicago, IL</div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Bio;
