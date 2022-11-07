import { useSelector } from "react-redux";

import { GameLayout } from "../../layouts/GameLayout";
import { GameController } from "./components/GameController/GameController";
import { GameOver } from "./components/GameOver/GameOver";

export const GamePage = () => {
  const { finished } = useSelector((state) => state.game);

  return (
    <div>
      <GameLayout>{finished ? <GameOver /> : <GameController />}</GameLayout>
    </div>
  );
};
