import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID E3MgrtDYzwNDsc6_CXeLkAosa9XPjrti8xZJ-sO_7-U"
  }
})
