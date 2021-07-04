function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	var R1 =[0.7333, 0.4000, 0.5499, 0.1499,
			0.0830, 0.7500,-0.6562,-0.4062,
			-0.6749, 0.5268, 0.5167,-1.0101,
			0, 0, 0, 1.0000];					   
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var S1 = [0.5,		0.0,		0.0,		0.0,
			   0.0,		0.5,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  [        0.9659,   0.0670,    0.2500,   -0.2829,
         0,    0.9659,   -0.2588,    0.2929,
   -0.2588,    0.2500,    0.9330,    0.0758,
         0,         0,         0,    1.0000];
	/*var S2 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];*/
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	var I1 =  [    0.2887,        0,   -0.1667,    2.5000,
				        0,    0.3333,         0,         0,
				   0.1667,        0 ,   0.2887,   -4.3301,
				        0,        0,         0,    1.0000];

	return [R1, S1, S2, I1];
}

