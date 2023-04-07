import { ListChecks } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <ListChecks size={24} />
        <h2>Focused</h2>
      </div>

      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </nav>
    </HeaderContainer>
  );
}
