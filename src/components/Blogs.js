import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export const MyBlog = (ele) => {
  console.log(ele.id);
  return (
    <Card body color="light" className="text-center blog-item">
      <CardBody>
        <div className="blog-title">
          <CardTitle tag="h5" className="blog-title-text">
            Casino Night 2022 Recap i this year maybe wadda
          </CardTitle>
        </div>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Date
        </CardSubtitle>
        <CardText className="blog-content">
          On Friday, April 8th, the Herzog family had a Casino Night to benefit
          Cure Rare Disease (CRD) raising over $73,000. Family, friends and
          colleagues of the Herzogs, along with members of the CRD community,
          got together in Branford, CT for a night full of casino games, food,
          cocktails, live music and good company while raising funds for CRD. ‍
          “Thank you to our amazing family, friends and community of warriors we
          have fighting for us every step of the way! #CRDCasinoNight was a
          success all because of you! We truly are the luckiest people in the
          world. I wish I could bottle up the love we feel on the daily and give
          it all back to the world. Until then, we’re going to try our darndest
          to show you all our love and thanks!” - Stephanie Herzog, CRD Board
          Member and Duchenne mom to Max, said in a Facebook post. ‍ Since 2019,
          the Herzog family has raised over $1.5M for Cure Rare Disease. On
          behalf of our entire community, CRD thanks the Herzog family and the
          event committee for everything you do for CRD! ‍ Stephanie finished
          her post by saying, “We truly are the luckiest people in the world. I
          wish I could bottle up the love we feel on the daily and give it all
          back to the world. Until then, we’re going to try our darndest to show
          you all our love and thanks!” ‍ To see the full album of photos from
          CRD Casino Night, click here. ‍ Have an idea for a fundraiser you’d
          like to organize? Contact CRD today!
        </CardText>
        <div className="button-container">
          <div className="multiple-buttons">
            <Button color="dark">View</Button>
            <Button color="success">Edit</Button>
            <Button color="danger">Delete</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
