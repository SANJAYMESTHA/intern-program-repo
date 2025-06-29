// 1. How to Add Markup in React
// Markup in React uses JSX syntax, which is similar to HTML but with some differences
//  Example 1 – Basic Markup in Functional Component
function Greeting() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a sample paragraph.</p>
    </div>
  );
}
 
//  Example 2 – JSX with JavaScript Expression
function WelcomeUser(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>We're glad you're here.</p>
    </div>
  );
}


// 2. How to Style in React
// Styling can be done in multiple ways, such as:
/*--A.Inline CSS
    B.CSS Classes
    C.External CSS Files
    D.CSS Modules / Styled Components (advanced)*/
// A. Inline CSS Styling
function InlineStyle() {
  return (
    <div style={{ color: 'blue', fontSize: '20px' }}>
      This text is styled with inline CSS.
    </div>
  );
}
// Example-B
function Box() {
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '10px'
  };

  return <div style={boxStyle}>This is a styled box</div>;
}

