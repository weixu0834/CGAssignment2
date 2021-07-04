// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.


var currentQuaterion = new Quaternion();
let rad = Math.PI /180;
var Pitch = 0;
var Yaw = 0;
var Roll = 0;

function catchEulerAngle(dvecmat){
	xaxis = [dvecmat[0],dvecmat[4],dvecmat[8]];
	yaxis = [dvecmat[1],dvecmat[5],dvecmat[9]];
	zaxis = [dvecmat[2],dvecmat[6],dvecmat[10]];

	R11=dvecmat[10];R12=dvecmat[8];R13=dvecmat[9];
	R21=dvecmat[2]; R22=dvecmat[0];R23=dvecmat[1];
	R31=dvecmat[6]; R32=dvecmat[4];R33=dvecmat[5];

	if((R31<1)&&(R31>-1)) {
	theta = -Math.asin(R31);
	phi = Math.atan2(R32/Math.cos(theta), R33/Math.cos(theta));
	psi = Math.atan2(R21/Math.cos(theta), R11/Math.cos(theta));

	} else {
		phi = 0;
		if(R31<=-1) {
		theta = Math.PI / 2;
		psi = phi + Math.atan2(R12, R13);
		} else {
			theta = -Math.PI / 2;
			psi = Math.atan2(-R12, -R13) - phi;
		}
	}
	pitch = theta/Math.PI*180;
	roll = phi/Math.PI*180;
	yaw = psi/Math.PI*180;

	return [pitch,roll,yaw]
}


// function updateWorld(rvx, rvy, rvz) {

// 	var delta = Quaternion.fromEuler(rvx * rad, rvy * rad, rvz * rad,order = "ZXY");
// 	currentQuaterion = currentQuaterion.add(delta);
// 	var ratoteMatrix = currentQuaterion.toMatrix4();
// 	var matrix2Euler = catchEulerAngle(ratoteMatrix)
// 	// compute the rotation matrix
// 	Pitch = Pitch + rvx;
// 	Yaw = Yaw + rvy;
// 	Roll = Roll + rvz;
// 	var out = utils.MakeWorld(0,0,0, matrix2Euler[2], matrix2Euler[0], matrix2Euler[1], 1);

// 	return ratoteMatrix;
// }

var x_wing_orientation = new Quaternion();

function updateWorld(rvx, rvy, rvz) {
	// compute the rotation matrix
	var alpha = 3*(rvx / 180 * Math.PI);
	var beta = 3*(rvy / 180 * Math.PI);
	var gamma = 3*(rvz / 180 * Math.PI);

	var x_deltaQ = new Quaternion(Math.cos(alpha / 2), Math.sin(alpha / 2), 0, 0);
	var y_deltaQ = new Quaternion(Math.cos(beta / 2), 0, Math.sin(beta / 2), 0);
	var z_deltaQ = new Quaternion(Math.cos(gamma / 2), 0, 0, Math.sin(gamma / 2));
	
	var rot = y_deltaQ.mul(x_deltaQ).mul(z_deltaQ).mul(x_wing_orientation);
	x_wing_orientation = y_deltaQ.mul(x_deltaQ).mul(z_deltaQ).mul(x_wing_orientation);
	
	return rot.toMatrix4();
}

