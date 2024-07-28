import React from "react";

export default function Jsx_Expression() {
  //  Biến
  const name = "Đức Nam";

  // Biến đối tượng
  const person = {
    name: "Đức Nam",
    age: "23",
  };

  // Hàm
  const funInto = (user) => {
    return (
      <h3>
        Xin chào {user.name} - Tuổi {user.age}
      </h3>
    );
  };

  //Element
  const element = (
    <div className="alert alert-danger">
      <h2>Xin chào: {person.name}</h2>
      <h3>Tuổi: {person.age}</h3>
    </div>
  );

  // Điều kiện
  const fnElementSayHello = (param) => {
    if (param > 30) {
      return <h4>Bạn hơi già</h4>;
    } else {
      return <h4>Bạn còn trẻ</h4>;
    }
  };

  return (
    <div>
      <b>jsx_Expression</b>
      <br />
      <h3 style={{ color: "red" }}>Welcome to, {name}</h3>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <br />
      {funInto(person)}
      {element}
      {fnElementSayHello(person.age)}
    </div>
  );
}
