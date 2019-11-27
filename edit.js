		
	var obj = {};	
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    z = vars.parameter.replace(/%20/g," ");
    n = z.split(" ; ");
    
    console.log(n)
    for (i=0; i<n.length ;i++){
    	m = n[i].split(" = ");
    	obj[m[0]] = m[1];
    	if(i==n.length-1)
    		{x = m[1].substring(0, m[1].length - 1);
    	document.getElementById(m[0]).value = x;}
    	else
    	document.getElementById(m[0]).value = m[1];
    }
    console.log(obj)
    

		function add(){
			var obj = {};
			
			baseurl = "http://localhost:5000/edit"
			initial = document.getElementById("form")

			for (i=0; i<initial.children.length; i++) {
 			var child = initial.children[i];
 			
  			if(child.className=="field")
  			{console.log(child)

			obj[child.name] = child.value;
			
			}
		}

		
			$.ajax({
				type:"POST",
				url: baseurl,
				contentType: "application/json; charset= utf-8",
				dataType: "json",
				data: JSON.stringify(obj),
				success: function(data)
				{
					console.log(data)
					document.location.href = "./Success.html";

				},
				error: function()
				{
					console.log("error")
					document.location.href = "./Failed.html";

				}

			})
		}
