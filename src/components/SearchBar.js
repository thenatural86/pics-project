import React from "react"

class SearchBar extends React.Component {
  state = {}

  onInputChange = event => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className=" ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Whatcha lookin' for?"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
