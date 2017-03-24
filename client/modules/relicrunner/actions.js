
import * as t from './actionTypes';

export const choose_era = (era) => ({
  type: t.CHOOSE_ERA,
  payload: {
    era: era
  }
});

export const choose_relic = (player, relic) => ({
  type: t.CHOOSE_RELIC,
  player: player,
  payload: {
    relic: relic
  }
});

export const clear_relic = (player) => ({
  type: t.CLEAR_RELIC,
  player: player
  payload: {
  }
});

export const relic_result = (player, item) => ({
  type: t.RELIC_RESULT,
  player: player
  payload: {
    result: item
  }
});

export const next_round = () => ({
  type: t.NEXT_ROUND
});

export const next_game = () => ({
  type: t.NEXT_GAME
});
