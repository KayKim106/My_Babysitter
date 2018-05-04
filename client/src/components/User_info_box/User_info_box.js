import React,{Component} from "react";


export default class User_info_box extends Component{
	render(){
		const style={
			info_box:{
				border:"1px solid black",
				width:"40%",
				float:"right",
				background:"#eee"
			}
		}
		return(
		<div className="row info_box" style={style.info_box}>
				<div className="col-md-4">
					<img className="user_picture" alt="userPicture"/>
				</div>
				<div className="col-md-8">
					<ul>
						<li className="user_name">User name</li>
						<li className="user_location">Location</li>
						<li className="user_phone">Phone</li>
					</ul>
				</div>
		</div>



			);
	}
}
