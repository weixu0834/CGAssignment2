function PerspMatrix(theta, a, n ,f){
	Persp = utils.identityMatrix();
	Persp[0] = 1/(a*Math.tan(utils.degToRad(theta/2)));
	Persp[5] = 1/(Math.tan(utils.degToRad(theta/2)));
	Persp[10] = (f + n) / (n - f);
	Persp[11] = 2.0 * f * n / (n - f);
	Persp[14] = -1.0;
	Persp[15] = 0.0;	

	return Persp;
}

function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	// var A1 =  [
	// 0.04016666268962198, 0.0, 0.0, 0.0, 
	// 0.0, 0.07140740033710573, 0.0, 0.0, 
	// 0.0, 0.0, -0.051000000000000004, -0.0, 
	// 0.0, 0.0, -0.0, 0.0
	// ];
	var A1 = [0.05, 0.0, 0.0, 0.0,
		0.0, 0.05, 0.0, 0.0,
		0.0, 0.0, 0.05, 0.0,
		0.0, 0.0, 0.0, 1.0];

	Perpe_1 = PerspMatrix(70,16/9,1,101);
	A1 = utils.multiplyMatrices(Perpe_1, A1);

	console.log(A1);

			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  [
		0.010236662838736948,0.0,0.0,0.0,
		0.0,0.018198511713310127,0.0,0.0,
		0.0,0.0,-0.051000000000000004,-0.0,
		0.0,0.0,-0.0,0.0,
		];
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  [
		0.010236662838736948,0.0,0.0,0.0,
		0.0,0.018198511713310127,0.0,0.0,
		0.0,0.0,-0.051000000000000004,-0.0,
		0.0,0.0,-0.0,0.0,
		];
			   
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  [
		2.2962127484012876e-18,0.0,0.0,0.0,
		0.0,3.061616997868383e-18,0.0,0.0,
		0.0,0.0,-0.051000000000000004,-0.0,
		0.0,0.0,-0.0,0.0
		];

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	var O2 =  [
		0.08333333333333334, 0.0, -0.0, 0.0, 
		0.0, 0.14814814814814814, 0.0, 0.0, 
		0.0, 0.0, -0.051000000000000004, -0.0, 
		0.0, 0.0, -0.0, 0.0
		];

	return [A1, A2, A3, O1, O2];
}