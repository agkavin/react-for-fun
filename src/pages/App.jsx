import { Link } from 'react-router-dom'
function App() {
  return(
    <>
    <h2>day 1</h2>
    <Link to="/Card">Home from Card</Link>
    <br />
    <h2>day 2</h2>
    <Link to="/Button">Home from Button</Link>
    <br />
    <h2>day 3</h2>
    <Link to="/Student">Home from Student</Link>
    <br />
    <h2>day 4</h2>
    <Link to="/UserGreeting">Home from UserGreeting</Link>
    <br />
    <h2>day 5</h2>
    <Link to="/ListFunctions">Home from List Functions</Link>
    <br />
    <h2>day 6</h2>
    <Link to="/ListAsProps">Home from List As Props</Link>
    </>
  );
}

export default App;
