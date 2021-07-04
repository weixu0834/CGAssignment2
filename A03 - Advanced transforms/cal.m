T =[1.0 		0.0 		0.0 		0.0; 
	 0.0 		1.0 		0.0 		1.0; 
	 0.0 		0.0 		1.0		    -1.0; 
	 0.0 		0.0 		0.0 		1.0];

s60 = sin(pi/180 * 60);
c60 = cosd(60);

s45 = sind(45);
c45= cosd(45);

s15 = sind(15);
c15 = cosd(15);

s30 = sind(30);
c30 = cosd(30);

Rx60=[1.0 		0.0 		0.0 		0.0; 
	 0.0 		c60 		-s60 		0.0; 
	 0.0 		s60 		c60 		0.0; 
	 0.0 		0.0 		0.0 		1.0];
 
Rz45=[c45 	   -s45	     	0.0 		0.0; 
	 s45 		c45		    0.0 		0.0; 
	 0.0 		0.0 		1.0		    0.0; 
	 0.0 		0.0 		0.0 		1.0];
 
Ry15=[c15 		0.0	     	s15 		0.0; 
	 0.0 		1.0		    0.0 		0.0; 
	 -s15 		0.0 		c15		    0.0; 
	 0.0 		0.0 		0.0 		1.0];
 
R1 = T * Ry15 * Rz45 * Rx60 * (Rz45^-1) * (Ry15^-1) * (T^-1);

T3 =[1.0 		0.0 		0.0 		1.0; 
	 0.0 		1.0 		0.0 		1.0; 
	 0.0 		0.0 		1.0		    1.0; 
	 0.0 		0.0 		0.0 		1.0];
 
Rx15=[1.0 		0.0 		0.0 		0.0; 
	 0.0 		c15 		-s15 		0.0; 
	 0.0 		s15 		c15 		0.0; 
	 0.0 		0.0 		0.0 		1.0];
 
 
Mi =[-1.0 		0.0 		0.0 		0.0; 
	 0.0 		-1.0 		0.0 		0.0; 
	 0.0 		0.0 		1.0 		0.0; 
	 0.0 		0.0 		0.0 		1.0];

S2 =T3 * Ry15 * Rx15*(T3^-1);

Ry30=[c30 		0.0	     	s30 		0.0; 
	 0.0 		1.0		    0.0 		0.0; 
	 -s30 		0.0 		c30		    0.0; 
	 0.0 		0.0 		0.0 		1.0];


T4 =[1.0 		0.0 		0.0 		0.0; 
	 0.0 		1.0 		0.0 		0.0; 
	 0.0 		0.0 		1.0		    5.0; 
	 0.0 		0.0 		0.0 		1.0];
 
 S3 = [3.0 		0.0 		0.0 		0.0; 
	 0.0 		3.0 		0.0 		0.0; 
	 0.0 		0.0 		3.0		    0.0; 
	 0.0 		0.0 		0.0 		1.0];
 
 I1 = (S3 * T4 * Ry30)^-1;
 
I2 = (Ry30^-1) * (T4^-1) * (S3^-1);