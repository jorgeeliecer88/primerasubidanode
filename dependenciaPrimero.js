

let estudiante = {
	               nombre  :' estudiante1',
				   apellido:' apellido1',
				   notas:{
					   matematicas:2,
					   ingles:4,
					   programacion:5
				   }
}

function calcular(matematicas,ingles, programacion ){
	console.log(matematicas + ingles + programacion );
}

module.exports  = {
	estudiante,
	calcular
}