import {
  ColorPicker,
  DataSource,
  DataValues,
  EswatIo,
  Header
} from "./components"

function App() {
  return (
    <main class="ds1-main">
      <Header label="tinker sld" />
      <EswatIo />
      <DataSource />
      <ColorPicker />
      <hr class="ml-0 mr-0" />
      <DataValues />
    </main>
  )
}

export default App
