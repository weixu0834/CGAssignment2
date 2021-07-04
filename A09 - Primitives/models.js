function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[-1.0,2.5,0.0], [1.5,2.5,0.0], [1.5,1.5,0.0], [0.0,1.5, 0.0],[0.0,0.5, 0.0],[1.25, 0.5, 0.0],[1.25,-0.5, 0.0],[0.0,-0.5, 0.0],[0.0,-2.5, 0.0],[-1.0,-2.5, 0.0],[-1.0,2.5,0.0]];

	addMesh(vert1, "P", [1.0, 0.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[1.5,3.5,0.0], [1.5,2.5,0.0], [-0.75, 2.5,0.0], [-0.75, 0.5,0.0],[1.5, 0.5,0.0],[1.5, -3.5,0.0],[-1.5, -3.5,0.0],[-1.5, -2.5,0.0],[0.75, -2.5,0.0],[0.75, -0.5,0.0],[-1.5, -0.5,0.0],[-1.5, 3.5,0.0],[1.5,3.5,0.0]];
	addMesh(vert2, "T", [0.0, 0.0, 1.0]);


	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 = [[0.0,0.0, 0.0], [0.0,5.0, 0.0], [5.0,2.0, 0.0], [3.0,-4.0, 0.0], [-3.0,-4.0, 0.0], [-5.0, 2.0, 0.0],[0.0,5.0, 0.0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

