import { ListChecks } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <ListChecks size={24} />
        <h2>Focused</h2>
      </div>
    </HeaderContainer>
  );
}
