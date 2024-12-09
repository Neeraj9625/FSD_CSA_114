import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/counter">Counter App</Link>
        </li>
        <li>
          <Link to="/stopw         atch">Stopwatch App</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
