import {
  ColorPicker,
  DataSource,
  DataValues,
  EswatIo,
} from "./components"

function App() {
  return (
    <main class="ds1-main">
      <EswatIo />
      <DataSource />
      <ColorPicker />
      <hr class="ml-0 mr-0" />
      <DataValues />
    </main>
  )
}

export default App
