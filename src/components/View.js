import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const element = location.state.element.ele;
  return (
    <div className="blog-container-view">
      <Card body color="light" className="text-center blog-item-view">
        <CardBody>
          <div className="blog-title-view">
            <CardTitle tag="h5" className="blog-title-text">
              {element.title}
            </CardTitle>
          </div>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {element.date}
          </CardSubtitle>
          <CardText className="blog-content-view">{element.content}</CardText>
          <div className="button-container">
            <div className="multiple-buttons">
              <Button color="dark" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default View;
