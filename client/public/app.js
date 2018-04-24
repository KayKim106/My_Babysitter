function displauAllUser(users){
	users.forEach(function(user){
		console.log("--------");
		console.log(user);
		console.log("--------");
		console.log(user.firstName);
		console.log(user.id);
			
	})
}
$.getJSON("/api/alluser",function(data){
	displauAllUser(data)

});