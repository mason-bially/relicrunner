import t from './actionTypes';

const initialState = {
    results: []
    players: [{}, {}, {}, {}]
};

export (state = initialState, action: any): State => {
  switch (action.type) {
    case t.CHOOSE_ERA:
      return { ...state,
        ...action.payload
      };
    case t.CHOOSE_RELIC:
      players = state.players.slice()
      players[action.player] = { ...state.players[action.player], ...action.payload }
      return { ...state,
        players: players
      };
    case t.CLEAR_RELIC:
      players = state.players.slice()
      players[action.player] = { }
      return { ...state,
        players: players
      };
    case t.RELIC_RESULT:
      players = state.players.slice()
      players[action.player] = { ...state.players[action.player], ...action.payload }
      return { ...state,
        players: players
      };
    case t.NEXT_ROUND:
      return { ...state,
        results: [ ...state.results, state.players],
        players: [{}, {}, {}, {}]
      };
    case t.NEXT_GAME:
      return initialState;
      
    default:
      return state;
  }
};
