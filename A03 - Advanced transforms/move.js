function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	// var R1 =[0.7333, 0.4000, 0.5499, 0.1499,
	// 		0.0830, 0.7500,-0.6562,-0.4062,
	// 		-0.6749, 0.5268, 0.5167,-1.0101,
	// 		0, 0, 0, 1.0000];	
	var T = utils.MakeTranslateMatrix(0,1,-1);
	var RotateY = utils.MakeRotateYMatrix(15);
	var RotateZ = utils.MakeRotateZMatrix(45);
	var RotateX = utils.MakeRotateXMatrix(60);
	//console.log(RotateX);
	var T_in = utils.invertMatrix(T);
	var Y_in = utils.invertMatrix(RotateY);
	var Z_in = utils.invertMatrix(RotateZ);
	//console.log(RotateY);

	R1 = utils.multiplyMatrices(Y_in,T_in);
	//console.log(R1);
	R1 = utils.multiplyMatrices(Z_in,R1);
	//console.log(R1);
	R1 = utils.multiplyMatrices(RotateX,R1);

	R1 = utils.multiplyMatrices(RotateZ,R1);
	R1 = utils.multiplyMatrices(RotateY,R1);
	R1 = utils.multiplyMatrices(T,R1);
	console.log(R1);

	
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var S1 = [0.5,		0.0,		0.0,		0.0,
			   0.0,		0.5,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	S1 = utils.MakeRotateZMatrix(-45);
	S1 = utils.multiplyMatrices(utils.MakeScaleNuMatrix(0.5,1,1),S1);
	S1 = utils.multiplyMatrices(utils.MakeRotateZMatrix(45),S1);
	console.log(S1);
	// Mirror (the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis) the xz plane
// 	var S2 =  [        0.9659,   0.0670,    0.2500,   -0.2829,
//          0,    0.9659,   -0.2588,    0.2929,
//    -0.2588,    0.2500,    0.9330,    0.0758,
//          0,         0,         0,    1.0000];
	var S2 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	S2 = utils.MakeTranslateMatrix(-1,-1,-1);
	S2 = utils.multiplyMatrices(utils.MakeRotateXMatrix(-15),S2);
	S2 = utils.multiplyMatrices(utils.MakeScaleNuMatrix(1,-1,1),S2);
	S2 = utils.multiplyMatrices(utils.MakeRotateXMatrix(15),S2);
	S2 = utils.multiplyMatrices(utils.MakeTranslateMatrix(1,1,1),S2);
	console.log(S2);
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	// var I1 =  [    0.2887,        0,   -0.1667,    2.5000,
	// 			        0,    0.3333,         0,         0,
	// 			   0.1667,        0 ,   0.2887,   -4.3301,
	// 			        0,        0,         0,    1.0000];

	var I1 = utils.MakeRotateYMatrix(30);
	I1 = utils.multiplyMatrices(utils.MakeTranslateMatrix(0,0,5),I1);
	I1 = utils.multiplyMatrices(utils.MakeScaleMatrix(3),I1);
	console.log(I1);
	I1 = utils.invertMatrix(I1);
	console.log(I1);

	return [R1, S1, S2, I1];
}

