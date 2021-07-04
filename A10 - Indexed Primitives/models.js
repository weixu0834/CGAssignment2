function buildGeometry() {
	var i;
	

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices
	var vert2 = [];
	var k = 0;
	for(i = 0; i <= 6; i=i+0.125) {
		for(j = 0; j <= 6; j=j+0.125) {
			x = i - 3;
			z = j - 3;
			vert2[k++] = [x, Math.sin(x)*Math.cos(z), z];

		}
	}
	////// Creates indices
	var ind2 = [];
	for(i = 0; i < 48; i++) {
		for(j = 0; j < 48; j++) {
			ind2[48*(i*48+j)  ] = 49*j+i;
			ind2[48*(i*48+j)+1] = 49*j+i+1;
			ind2[48*(i*48+j)+2] = 49*(j+1)+i+1;
			ind2[48*(i*48+j)+3] = 49*j+i;
			ind2[48*(i*48+j)+4] = 49*(j+1)+i+1;
			ind2[48*(i*48+j)+5] = 49*(j+1)+i;
		}
	}


	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);






	// Draws a Half Sphere
	///// Creates vertices
	var vert3 = [[0.0, 1.0,0.0]];  // center of the upper circle on top
	///// Creates vertices
	k = 1;
	for(j = 1; j <= 9; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			vert3[k++] = [x, y, z];
		}
	}
	vert3[k++] = [0.0, 0.0,0.0]; // center of the lower circle on bottom
	console.log(k);
	////// Creates indices
	var ind3 = [];
	var k =0;
	///////// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 9; j++) {
			ind3[k++] = i + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}
	//////// Upper Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 0;
		ind3[k++] = i + 1;
		ind3[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 325;
		ind3[k++] = (i + 1) % 36 + 289;
		ind3[k++] = i + 289;
	}
	
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}

