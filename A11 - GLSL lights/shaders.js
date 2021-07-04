function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//vec3  Pos;		// Position of first (or single) light
//vec3  Dir;		// Direction of first (or single) light
//float ConeOut;	// Outer cone (in degree) of the light (if spot)
//float ConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float Decay;		// Decay factor (0, 1 or 2)
//float Target;		// Target distance
//vec4  lightColor;	// color of the first light
//		
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 OlightDir;
//
//and intensity is returned into:
//
//vec4 OlightColor;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light, constant ambient
var S1 = `
	OlightDir = Dir;
	OlightColor = lightColor;
	
	ambientColor = ambientLightColor;
`;

// Single point light without decay
var S2 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor;
`;

// Single spot light (without decay), constant ambient
var S3 = `
	float CosOut = cos(radians(ConeOut / 2.0));
	float CosIn = cos(radians(ConeOut * ConeIn / 2.0));
	float CosAngle = dot(normalize(Pos - fs_pos), Dir);

	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor * clamp((CosAngle - CosOut) / (CosIn - CosOut), 0.0, 1.0);

	ambientColor = ambientLightColor;
`;

// Single point light with decay
var S4 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor * pow(Target / length(Pos - fs_pos), Decay);
	
`;

// Single spot light (with decay)
var S5 = `
	float CosOut = cos(radians(ConeOut / 2.0));
	float CosIn = cos(radians(ConeOut * ConeIn / 2.0));
	float CosAngle = dot(normalize(Pos - fs_pos), Dir);
	
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor * pow(Target / length(Pos - fs_pos), Decay) * clamp((CosAngle - CosOut) / (CosIn - CosOut), 0.0, 1.0);
`;

// Single point light, hemispheric ambient 
var S6 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor * pow(Target / length(Pos - fs_pos), Decay);

	float amBlend = (dot(normalVec, ADir) + 1.0) / 2.0;
	vec4 ambientHemi = (ambientLightColor * amBlend + ambientLightLowColor * (1.0 - amBlend));
	ambientColor = ambientHemi;
`;

// Single spot light, spherical harmonics ambient
var S7 = `
	float CosOut = cos(radians(ConeOut / 2.0));
	float CosIn = cos(radians(ConeOut * ConeIn / 2.0));
	float CosAngle = dot(normalize(Pos - fs_pos), Dir);

	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor * pow(Target / length(Pos - fs_pos), Decay) * clamp((CosAngle - CosOut) / (CosIn - CosOut), 0.0, 1.0);

	const mat4 McInv = mat4(vec4(0.25,0.0,-0.25,0.7071),vec4(0.25,0.6124,-0.25,-0.3536),vec4(0.25,-0.6124,-0.25,-0.3536),vec4(0.25,0.0,0.75,0.0));
	mat4 InCols = transpose(mat4(ambientLightLowColor, SHRightLightColor, SHLeftLightColor, ambientLightColor));
	mat4 OutCols = McInv * InCols;
	vec4 ambientSH = vec4((vec4(1,normalVec) * OutCols).rgb, 1.0);
	ambientColor = ambientSH;

`;
	return [S1, S2, S3, S4, S5, S6, S7];
}

