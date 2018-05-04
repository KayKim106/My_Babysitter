

import React, {Component} from "react";

export default class SearchBar extends Component{
	render(){
		const style={
			search_bar:{
				width:"80%"
			},
			search_bar_center:{
			
				textAlign:"center"
			}
		}
		return(
			<div className="box_container" style={style.search_bar_center}>
			<input style={style.search_bar}/> <button className="btn primay-button search">Search</button>
			</div>
			);
	}
}
/*const SearchBar = ()=>(
	<input/>
	);

export default SearchBar;*/