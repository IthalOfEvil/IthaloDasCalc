			
			var n1 = document.getElementById("v1")
			var n2 = document.getElementById("v2")

			

			var res = document.getElementById("resultado")

			function soma(){

				n1 = Number(n1.value)
				n2 = Number(n2.value)

				var soma = n1 + n2
				
				res.innerHTML += soma

			}

			function sub(){

				n1 = Number(n1.value)
				n2 = Number(n2.value)

				var soma = n1 - n2
				
				res.innerHTML = soma

			}

			function mul(){

				n1 = Number(n1.value)
				n2 = Number(n2.value)

				var soma = n1 * n2
				
				res.innerHTML = soma

			}

			function divi(){

				n1 = Number(n1.value)
				n2 = Number(n2.value)

				var soma = n1 / n2
				
				res.innerHTML = soma

			}
