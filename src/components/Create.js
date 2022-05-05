import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// export const CreationForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [date, setDate] = useState("");

//   let handleState = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify({
//           title: title,
//           content: content,
//           date: date,
//         }),
//       });
//       if (res.status === 200) {
//         setTitle("");
//         setContent("");
//         setDate("");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className="form-container">
//       <Form onSubmit={handleState}>
//         <FormGroup>
//           <Label for="title">Title</Label>
//           <Input
//             id="title"
//             name="title"
//             placeholder="Enter Blog Title"
//             type="title"
//           />
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="content">Content</label>
//           <textarea
//             className="form-control"
//             id="content"
//             rows="5"
//             placeholder="Enter Your Content"
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="date">Date</Label>
//           <Input
//             id="date"
//             name="date"
//             placeholder="date placeholder"
//             type="date"
//           />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     </div>
//   );
// };

const axios = require("axios");
export default class CreationForm extends React.Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    function date() {
      var months = [
        "January",
        "Febuaury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var today = new Date();
      var currMonth = months[today.getMonth()];
      var date = today.getDate() + " " + currMonth + " " + today.getFullYear();
      return date;
    }
    var getcurrDate = date();
    this.state.date = getcurrDate;
    axios.post(`http://localhost:3000/blogs`, this.state).then((res) => {
      alert("Data added Successfully");
    });
  };

  render() {
    return (
      <div className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter Blog Title"
              type="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="content">Content</label>
            <Input
              id="content"
              name="content"
              type="textarea"
              placeholder="Enter Your Content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
