function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  [
		6.123233995736766e-17, 0.0, -1.0, -3.061616997868383e-16, 
		-0.49999999999999994, 0.8660254037844387, -3.0616169978683824e-17, 0.3349364905389028, 
		0.8660254037844387, 0.49999999999999994, 5.3028761936245346e-17, -5.580127018922194, 
		0.0, 0.0, 0.0, 1.0
		];
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 =  [
		-0.6645844181465339, 0.6830127018922193, -0.30302013169214265, -0.832087956568494, 
		0.7281440624935039, 0.6830127018922194, -0.0574445237541965, 0.3957900831212369, 
		0.16773125949652096, -0.25881904510252074, -0.9512512425641977, -5.01507525792351, 
		0.0, 0.0, 0.0, 1.0
		];
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var A3 =  [
			-0.7474093186836599, 3.7135709873824083e-17, 0.6643638388299198, -0.3321819194149606, 
			0.1606078913391618, 0.970339343507436, 0.180683877756557, -0.5755116106319967, 
			-0.6446583712203042, 0.2417468892076141, -0.7252406676228422, -5.963089933787813, 
			0.0, 0.0, 0.0, 1.0
			];
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  [
			0.0, -1.0, 0.0, 0.0, 
			0.9745551866148994, 0.0, 0.2241476929214269, -2.5046068296002915, 
			-0.22414769292142686, 0.0, 0.9745551866148995, 0.576059570808067, 
			0.0, 0.0, 0.0, 1.0
			];



	return [A1, A2, A3, A4];
}