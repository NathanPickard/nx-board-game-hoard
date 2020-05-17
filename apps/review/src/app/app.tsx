import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ReviewFeatureDetails } from '@nx-board-game-hoard/review/feature-details';
import { ReviewFeatureList } from '@nx-board-game-hoard/review/feature-list';

export const App = () => {

  return (
  <>
    <BrowserRouter basename="/review">
      <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
      <Route exact path="/" render={() => <ReviewFeatureList />} />
      <Route
        path="/:game"
        render={({ match }) => (
          <ReviewFeatureDetails gameId={match.params.game} />
        )}
      />Î
    </BrowserRouter>

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
