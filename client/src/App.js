
import React from "react";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import User_info_box from "./components/User_info_box/User_info_box";
import User_info_box_container from "./components/User_info_box_container/User_info_box_container";


class App extends Component {
  render() {
    return (
       <Wrapper>
    <SearchBar/>
  
    <User_info_box/>
  

  </Wrapper>
    );
  }
}

export default App;


