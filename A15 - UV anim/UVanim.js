function Anim1(t) {
	// moving car
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.25*t,0.5,0),utils.MakeScaleNuMatrix(0.25,0.25,0));
	//console.log(t);
	//console.log(out);
	return out;
}

var flag = true;
var bump = 0;
function Anim2(t) {
	// bumping code
	if (flag){
		var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.75,0.5+0.25*bump,0),utils.MakeScaleNuMatrix(0.25,0.25,0));
		bump = bump + 0.005;
		if(0.5+0.25*bump >= 0.75){
			flag = false;
			bump = 0;
		}
	}
	else{
		var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.75,0.75-0.25*bump,0),utils.MakeScaleNuMatrix(0.25,0.25,0));
		bump = bump + 0.005;
		if(0.75-0.25*bump <= 0.5){
			flag = true;
			bump = 0;
		}
	}
	return out;
}

function Anim3(t) {
	// rotating fan
	var R1 = utils.MakeTranslateMatrix(-0.5,-0.5,0);
	//var R1 = utils.MakeRotateYMatrix(0);
	R1= utils.multiplyMatrices((utils.invertMatrix(utils.MakeRotateYMatrix(0))),R1);
	R1= utils.multiplyMatrices((utils.invertMatrix(utils.MakeRotateZMatrix(0))),R1);
	R1= utils.multiplyMatrices((utils.MakeRotateXMatrix(0)),R1);
	R1= utils.multiplyMatrices((utils.MakeRotateZMatrix(1000*t)),R1);
	R1= utils.multiplyMatrices((utils.MakeRotateYMatrix(0)),R1);
	R1= utils.multiplyMatrices((utils.MakeScaleNuMatrix(0.25,0.25,0)),R1)
	R1= utils.multiplyMatrices((utils.MakeTranslateMatrix(0.625,0.875,0)),R1);
	var center = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.5,0.75,0),utils.MakeScaleNuMatrix(0.25,0.25,0));
	var out = utils.multiplyMatrices(center,R1);
	return R1;
}


var count =0;
function Anim4(t) {
	// buring flame
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix((count%12)/12,(Math.floor(count/12))/12,0),utils.MakeScaleNuMatrix(1/12,1/12,0));
	count = (count+1)%72;
	return out;
}
