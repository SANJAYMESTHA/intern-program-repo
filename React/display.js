// 3)How to Display Data in React 
// In React, you can display data using JSX and JavaScript expressions
// Example 1 – Displaying Data from a Variable
function ShowMessage() {
  const name = "Sanjay";
  return <h2>Welcome, {name}!</h2>;
}

//Example 2 – Displaying Data from Props
function Welcome(props) {
  return <h3>Hello, {props.userName}!</h3>;
}

// Usage
<Welcome userName="Priya" />

// Example 3 – Displaying a List using .map()
function FruitsList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

