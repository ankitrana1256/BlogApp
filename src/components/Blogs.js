import React from "react";
// import blogData from "../database/data.js";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import UpdateForm from "./Update";

const axios = require("axios");

// axios
//   .get("http://localhost:3000/blogs")
//   .then((resp) => {
//     console.log(resp.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// export const MyBlog = ({ ele }) => {
//   return (
//     <div className="blog-container">
//       {blogData.map((ele) => {
//         return (
//           <Card body color="light" className="text-center blog-item">
//             <CardBody>
//               <div className="blog-title">
//                 <CardTitle tag="h5" className="blog-title-text">
//                   {ele.title}
//                 </CardTitle>
//               </div>
//               <CardSubtitle className="mb-2 text-muted" tag="h6">
//                 {ele.date}
//               </CardSubtitle>
//               <CardText className="blog-content">{ele.content}</CardText>
//               <div className="button-container">
//                 <div className="multiple-buttons">
//                   <Button color="dark">View</Button>
//                   <Button color="success">Edit</Button>
//                   <Button color="danger">Delete</Button>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         );
//       })}
//     </div>
//   );
// };
export default class MyBlog extends React.Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/blogs")
      .then((resp) => {
        const blogs = resp.data;
        this.setState({ blogs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBlog(id) {
    console.log(id);
    axios
      .delete(`http://localhost:3000/blogs/${id}/`)
      .then((resp) => {
        alert("Blog Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="blog-container">
        {this.state.blogs.map((ele) => {
          return (
            <Card body color="light" className="text-center blog-item">
              <CardBody>
                <div className="blog-title">
                  <CardTitle tag="h5" className="blog-title-text">
                    {ele.title}
                  </CardTitle>
                </div>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {ele.date}
                </CardSubtitle>
                <CardText className="blog-content">{ele.content}</CardText>
                <div className="button-container">
                  <div className="multiple-buttons">
                    <Button color="dark">View</Button>
                    <Button color="success">Edit</Button>
                    <Button
                      color="danger"
                      onClick={() => this.deleteBlog(ele.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  }
}
