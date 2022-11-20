import React from "react";
import Container from "../../Components/Container";
import Button from "../../Components/Button";

const Videos = () => {
  return (
    <div className="text-center">
      <Container>
        <div className="page-title m-4">Videos</div>
        <Button onClick={() => console.log("hello world")}>
          {" "}
          Coming Soon{" "}
        </Button>
      </Container>
    </div>
  );
};

export default Videos;
