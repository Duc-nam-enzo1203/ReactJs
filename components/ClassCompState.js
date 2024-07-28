import React, { Component } from "react";

export default class ClassCompState extends Component {
  // Constructor
  constructor(props) {
    super(props);
    //Tạo đối tượng state
    this.state = {
      name: "Đức Nam",
      age: 23,
      email: "namdoan.ka@gmail.com",
      list: ["Toán", "Văn", "Anh"],
    };
  }

  // Hàm xử lý xự kiện
  ChangeName = () => {
    this.setState({
      name: "Nam Dung",
      age: 24,
    });
  };

  render() {
    return (
      <div className="alert alert-primary">
        <h1>Demo state - Hiển thị / thay đổi dữ liệu trong state</h1>
        <br></br>
        <h3>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Email: {this.state.email}</h3>
        <h3>list: {this.state.list}</h3>
        <button onClick={this.ChangeName}>Change name</button>
      </div>
    );
  }
}
