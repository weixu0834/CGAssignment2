function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	line(0.3, 0.3,-0.5, 0.3);
	line(0.3,-0.3,-0.5, -0.3);
	line(-0.5, 0.3,-0.5,-0.3);
/*	for(i = 0; i <= 16; i++) {
		y = 1.6*Math.random() - 0.5;
		line(0.4, y,0.4, y+0.01);
	}*/
	//rect(0.5, 0.5, 0.3, 0.3);
	
/*****solution 1********/
	for(var times=0; times<30; times++) {
		var radian = 6 * (Math.PI / 180) *  times;
		var radian_2 = 6 * (Math.PI / 180) *  (times+1);
		r = 0.3; //radius setting
		var X1 = 0.3 + Math.sin(radian) * r;
		var Y1 = 0 + Math.cos(radian) * r    
	   	var X2 = 0.3 + Math.sin(radian_2) * r;
		var Y2 = 0 + Math.cos(radian_2) * r    
		line(X1,Y1,X2,Y2);
		//line(X1,Y1,X1,Y1+0.01);
		}
/*****solution 2********/		
	for(var times=0; times<1200; times++) {
		var radian = 0.15 * (Math.PI / 180) *  times;
		r = 0.3; //radius setting
		var X1 = 0.3 + Math.sin(radian) * r;
		var Y1 = 0 + Math.cos(radian) * r    //  注意此处是“-”号，因为我们要得到的Y是相对于（0,0）而言的。
		//line(X1,Y1,X1,Y1+0.005);
		//point(X1,Y1);
		}

}
