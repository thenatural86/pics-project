import React from "react"
import axios from "axios"
import SearchBar from "./SearchBar"

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID E3MgrtDYzwNDsc6_CXeLkAosa9XPjrti8xZJ-sO_7-U"
      }
    })
    console.log(response.data.results)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
