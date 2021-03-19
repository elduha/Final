$(function () {
    $('#myList a:last-child').tab('show')
})

function getInfo() {
    $.get('https://my-json-server.typicode.com/elduha/users/user', function (resp, status, resp_obj) {
        console.log(status);
		
        let src = $('#div4-1').val().toLowerCase();
		let src1 = $('#div4-2').val().toLowerCase();		
		let src2 = $('#div4-3').val();

		let idof = 0;

/*
		for( var i=0;i<resp.length;i++){
		if(resp[i].id === src2) 
		{ 
		idof = i; 
		break;
		}
		}
		console.log(idof);
*/



		for(var i = 0; i< src2; i++){
			
				
			$('#photos1').html(function (ind, old_value) {
			console.log(src);
			if(resp[i].id == src2){
				if(resp[i].email == src1){
					if(resp[i].user == src){
					return "Vy zhashli na account " + "ID : " + resp[i].id ;
					}
					else {
						return "User name ne pravilno , pls register or napishyte username pravilno ";
					}
				}
				else{
					return "id is ok but email dbda zhok proshy sdelat register ili id not true";
				}
				}
			else {
				return "takogo id netu pls register";
			}
			})
		}	
		/*if(resp[i].email == src1){
					if(resp[i].user == src){
						return "Fuck you!";						
					}
					else{
						return "Qotaq";
					}						
				}
				else{
					return "you are mal";
				}
	*/

		
        /*for (var i = 0; i < resp.length; i++) {
            $('#photos1').html(function (ind, old_value) {
				
                if (src1 == resp[i].email) {	 
						  return resp[i].id;
                }
				
				/* else if(src != resp[i].user && src1 == resp[i].email)
				{
					return "This email is busy, but name is free"
				}
				
				else if(src == resp[i].user && src1 != resp[i].email)
				{
					return "This name is busy, but email is free"\
				} 
				
				
				else {
					return "Autentification is done!"
				}
				
            })
				
        }*/
		
		
    })
}