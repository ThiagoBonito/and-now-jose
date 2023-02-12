import { Sidebar } from "../../components/Sidebar";
import { RankingContainer } from "./styles";

export const Rankings = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  return (
    <RankingContainer>
      <Sidebar name={storedFullName ?? ""} />
    </RankingContainer>
  );
};
