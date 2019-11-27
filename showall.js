		
			var obj = {};
			
			baseurl = "http://localhost:5000/showall"
			var myvar;
			
			$.ajax({
				type:"POST",
				url: baseurl,
				contentType: "application/json; charset= utf-8",
				dataType: "json",
				data: {},
				success: function(data)
				{	myvar = data;

                			for (var prop in data) {
                				var c = document.createElement("p");
                				var b = document.createElement("button");
                				//b.onclick = function() {edit(data,prop)};
                				b.setAttribute("onclick", 'edit('+prop+')');
                				b.setAttribute("class","btns");
                				b.innerHTML = "Edit";
                				var o = document.createElement("button");
                				//o.onclick = {help(prop)};
                				o.setAttribute("class","btns");
                				o.setAttribute("onclick","help('"+data[prop].EmployeeID+"')");
                				// o.setAttribute("href", 'http://localhost:5000/deletee');
                				o.setAttribute("id","test")
                				o.innerHTML = "Delete";
                				c.appendChild(b);
                				c.appendChild(o);
                				var d = document.getElementById("blocks");
                				d.appendChild(c); 
                				var x = Object.keys(data[prop])

                				for (var keys in x){
                					
                					var str = x[keys] + " : " + data[prop][x[keys]];

                					console.log(str)
                					s = document.getElementsByTagName("p")[prop];
                					q = document.createElement("div");
                					
                					q.innerHTML = str;
                					
                					s.appendChild(q)
                					
                					console.log(data[prop][x[keys]])
                				}
                				
							   	
						
							}
                
						
					
				},

				error: function()
				{
					console.log("error")
					document.location.href = "./Failed.html";
				}

			})


			function edit(prop){
					var str = "";
					var x = Object.keys( myvar[prop]);
                	for (var keys in x){
                					
                		str += x[keys] + " = " + myvar[prop][x[keys]]+" ; ";
                	}
                	
				myWindow= window.open('./edit.html?parameter=' + str, '');
				myWindow.focus();
			}
			
			function help(x) {
            $.ajax({
				type:"POST",
				url: "http://localhost:5000/deletee",
				contentType: "application/json; charset= utf-8",
				dataType: "json",
				data: JSON.stringify({"EmployeeID":x}),
				success: function(data)
				{	
					location.reload();

				},

				error: function()
				{
					console.log("error")
					document.location.href = "./Failed.html";
				}

			})


            }

        
          
       

		