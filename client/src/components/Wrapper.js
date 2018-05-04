import React from "react";

const style={
	container:{
		width:"1200px",
		height:"1000px",
		background:"green"
	}
	
}

		
const Wrapper = props =>( <div className="wrapper" style={style.container}>
						{props.children}

						</div>
);

export default Wrapper;