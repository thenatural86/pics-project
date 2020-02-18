import React from "react"
import axios from "axios"
import SearchBar from "./SearchBar"

class App extends React.Component {
  onSearchSubmit = term => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID E3MgrtDYzwNDsc6_CXeLkAosa9XPjrti8xZJ-sO_7-U"
      }
    })
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
