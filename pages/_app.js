import '../styles/globals.css'
import { useReducer } from "react";
import {
  DispatchPlayerContext,
  PlayerContext,
  playerInitialState,
  playerReducer,
} from "decent-audio-player";
import "@fontsource/genos";

function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(playerReducer, playerInitialState);

  return (
    
    <PlayerContext.Provider value={state}>
      <DispatchPlayerContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchPlayerContext.Provider>
    </PlayerContext.Provider>
  )
}

export default MyApp
