import { ListChecks } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <ListChecks size={24} />
        <h2>Focused</h2>
      </div>

      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/">History</a></li>
      </nav>
    </HeaderContainer>
  );
}
