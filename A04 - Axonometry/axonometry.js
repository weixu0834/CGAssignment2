function PortMatrix(w, a, n ,f){
	Port = utils.identityMatrix();
	Port[0] = 1/w;
	Port[5] = a/w;
	Port[10] = -2/(f-n);
	Port[11] = -(f+n)/(f-n);

	return Port;
}


function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	// var A1 =  [
	// 	6.123233995736766e-20,0.0,0.0,0.0,
	// 	0.0,0.0005928494132445639,-0.0,0.0,
	// 	-0.0,0.0,-2.0419625708615858e-20,-0.0,
	// 	0.0,0.0,0.0,1.0
	// 	];
	var A1 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];

	Port_1 = PortMatrix(50,16/9,1,101);
	Trans = utils.multiplyMatrices(utils.multiplyMatrices(Port_1,utils.MakeRotateXMatrix(35.26)), utils.MakeRotateYMatrix(45))
	A1 = utils.multiplyMatrices(Trans, A1);

	console.log(A1);
			   
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	// var A2 =[
	// 	6.123233995736766e-20,0.0,0.0,0.0,
	// 	0.0,0.0013618567877670723,-0.0,0.0,
	// 	-0.0,0.0,-4.690669376351367e-20,-0.0,
	// 	0.0,0.0,0.0,1.0
	// 	];
	var A2 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	Port_2 = PortMatrix(50,16/9,1,101);
	Trans = utils.multiplyMatrices(utils.multiplyMatrices(Port_2,utils.MakeRotateXMatrix(20)), utils.MakeRotateYMatrix(45))
	A2 = utils.multiplyMatrices(Trans, A1);

	console.log(A2);
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	// var A3 =[
	// 	0.0005000000000000001,0.0,0.0,0.0,
	// 	0.0,0.0008888888888888891,0.0,0.0,
	// 	-0.0,-0.0,-0.0002500000000000001,-0.0,
	// 	0.0,0.0,0.0,1.0,
	// 	];
	var A3 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	Port_2 = PortMatrix(50,16/9,1,101);
	Trans = utils.multiplyMatrices(utils.multiplyMatrices(Port_2,utils.MakeRotateXMatrix(-30)), utils.MakeRotateYMatrix(30))
	A3 = utils.multiplyMatrices(Trans, A3);

	console.log(A3);
	   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	// var O1 =  [
	// 	0.001,0.0,-0.0,0.0,
	// 	0.0,0.0017777777777777779,-0.0,0.0,
	// 	0.0,0.0,-0.001,-0.0,
	// 	0.0,0.0,0.0,1.0
	// 	];
	var O1 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	Port_3 = PortMatrix(50,16/9,1,101);	
	Cavalier = utils.MakeShearZMatrix(-Math.cos(utils.degToRad(45)),-Math.sin(utils.degToRad(45)));
	O1 = utils.multiplyMatrices(utils.multiplyMatrices(Port_3,Cavalier),O1);
	console.log(O1);
	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  [
		0.001,0.0,0.0,0.0,
		0.0,0.0017777777777777779,-0.0,0.0,
		0.0,0.0,-0.001,-0.0,
		0.0,0.0,0.0,1.0
		];

	return [A1, A2, A3, O1, O2];
}