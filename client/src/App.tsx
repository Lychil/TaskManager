import GlobalStyles from "./common/styles/GlobalStyles"
import RoutesProvider from "./router/RoutesProvider"

function App() {
  return (
    <>
      <RoutesProvider />
      <GlobalStyles />
    </>
  )
}

export default App
