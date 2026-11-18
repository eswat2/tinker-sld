import {
  ColorPicker,
  DataSource,
  DataValues,
  EswatIo,
  Header,
  SolidBadge
} from "./components"

function App() {
  return (
    <main class="ds1-main">
      <Header label="tinker sld" />
      <SolidBadge offset="2rem" />
      <EswatIo />
      <DataSource />
      <ColorPicker />
      <hr class="ml-0 mr-0" />
      <DataValues />
    </main>
  )
}

export default App
