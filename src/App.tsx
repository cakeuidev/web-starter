import { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()

  const getData = () => {
    axios.get('/api')
      .then((res) => setData(res.data))
  }

  return (
    <>
      <button onClick={getData}>GET /api</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
