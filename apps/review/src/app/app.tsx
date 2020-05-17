import React, { useEffect, useState } from 'react';
import { Game } from '@nx-board-game-hoard/api-interfaces';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>
      <div>{JSON.stringify(games)}</div>
    </>
  );
};

export default App;
