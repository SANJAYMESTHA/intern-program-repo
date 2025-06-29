//  4)How to Render Condition and List in React
// 1. Conditional Rendering in React
/*--You can conditionally render elements using:
   A.if statements
   B.Ternary operator condition ? true : false
   C.Logical AND condition && element--*/
//  Example 1 – Using Ternary Operator
function GreetUser(props) {
  return (
    <div>
      {props.isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}

//  Example 2 – Using Logical AND (&&)
function Notification(props) {
  return (
    <div>
      <h3>Dashboard</h3>
      {props.showMessage && <p>You have a new message!</p>}
    </div>
  );
}


//  2. List Rendering in React
// To render a list of items, use the .map() method on arrays. You must include a unique key for each item.
//  Example 1 – Rendering a List of Names
function NameList() {
  const names = ["Sanjay", "Asha", "Ravi"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// Example 2 – Rendering List of Objects
function UserList() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Meera" }
  ];

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>User: {user.name}</p>
      ))}
    </div>
  );
}

