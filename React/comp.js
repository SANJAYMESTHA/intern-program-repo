//1. Creating Components in React
// component is a reusable piece of UI. You can create functional components or class components
// Example 1 – Functional Componentsfunction Header() {

function Header() {
  return <h2>This is the Header</h2>;
}

function Footer() {
  return <h2>This is the Footer</h2>;
}

//  Example 2 – Class Components
class Header extends React.Component {
  render() {
    return <h2>This is the Header</h2>;
  }
}

class Footer extends React.Component {
  render() {
    return <h2>This is the Footer</h2>;
  }
}

// 2. Nesting Components in React
// Nesting means calling a component inside another component .
// Example 1 – Functional Component Nesting
function Header() {
  return <h2>This is the Header</h2>;
}

function Footer() {
  return <h2>This is the Footer</h2>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to our site!</p>
      <Footer />
    </div>
  );
}

//  Example 2 – Class Component Nesting
class Header extends React.Component {
  render() {
    return <h2>This is the Header</h2>;
  }
}

class Footer extends React.Component {
  render() {
    return <h2>This is the Footer</h2>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Welcome to our site!</p>
        <Footer />
      </div>
    );
  }
}
