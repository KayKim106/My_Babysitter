import React from "react";

const style = {
  container:{
  	width:"100%",
  	height:"500px",
  	background:"#111"
  }
};
const User_info_box_container =props=>(
	<div className="entire_info_container" style={style.container}>{props.children}</div>
	);


	export default User_info_box_container;