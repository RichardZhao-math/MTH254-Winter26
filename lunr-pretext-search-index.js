var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec121-VectorsPlane",
  "level": "1",
  "url": "sec121-VectorsPlane.html",
  "type": "Section",
  "number": "12.1",
  "title": "Vectors in the Plane",
  "body": " Vectors in the Plane   The big question in this section is how to approximate the area under the curve of a function . We will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     define what a vector is in the plane    perform vector addition and scalar multiplication geometrically and component-wise       Vectors in  In case you are not familiar with the notation , it simply means the set of all ordered pairs of real numbers. Symbolically speaking, That is, we will work with vectors in two dimensions in this section.  Let's first define what a vector is in . A vector in is an object determined by two points in the plane: an initial point (the tail) and a terminal point (the tip). We write and we draw as an arrow pointing from to .   The vector in     In , each point is represented by an ordered pair of real numbers. Then we can define the components of a vector using the ordered pairs of the two points as follows.   Components of a Vector   The components of , where and , are the quantities The pair of components is denoted .     P.S.: If you are a linear algebra-ist and want to use the notation of the column vectors instead, be my guest! Just remember that Richard prefers the column vector notation over the sharp-y angle bracket notation (but he is teaching calculus, not linear algebra, so he will have to live with it).   Find the components of the following vectors.           The Attributes of Vectors  When defining a vector, it is important to note its magnitude and the direction .  The magnitude of a vector is the distance from the tail to the tip (aka the length of the vector). This is denoted as .  Given a vector , we can determine its magnitude using the Pythagorean Theorem, as demonstrated in the figure below.   The Magnitude of the vectors and     By the Pythagorean Theorem, we have   The magnitude of a vector is really called the norm or the Euclidean norm of a vector in more advanced math courses. In general, norms must satisfy the following three properties:    , with if and only if .     for all scalars .     for any two vectors and , with equallity only if , , or if where . (This is the famous triangle inequality ).   This isn't a linear algebra or functional analysis class, so we won't go deeper into norms here. If you are interested, feel free to do more digging on your own (or ask Richard!).  Now let's discuss the direction of a vector. The direction of a vector tells us where the vector is pointing. We can indicate the direction of a vector by using the vector itself. As you imagine, the magnitude of a vector has nothing to do with its direction, so we sometimes use a unit vector , which is a vector of length , to indicate the direction, when it is not necessary to specify length.  If we have a unit vector whose tail is at the origin, then its tip lies on the unit circle. We usually denote a unit vector by , defined as where is the angle between and the positive -axis, indicated in the figure below.   The unit vector on the unit circle     But what if we are given an arbitrary non-zero vector and we want to find a unit vector in the same direction? One way to do so is to divide the vector by its magnitude (multiplying a positive scalar doesn't change the direction of a vector). That is, given , the unit vector in the direction of is    A quick proof to show that is a unit vector  Let be a non-zero vector. Then . This implies that Hence, is a unit vector.     Vector Algebra    Homework problems for this section   Below are the homework problems for this section. You will work out each problem on a separate sheet of paper and submit your solutions by the due dates indicated on the course schedule. Reach out to Richard for help if you get stuck or have any questions.  The solution will be posted after the due dates. If you have any question about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of in the figure below.       Find the components of , where and .    Calculate .    Sketch , , , and in the following figure.       Sketch , , , and .    Are and parallel if , , , and ? And if so, do they point in the same direction?     In the following exercises, find the given vector.    Unit vector , where .    Vector of length in the direction of .    Unit vector making an angle of with the -axis.     Calculate the linear combination     Express as a linear combination , where Then sketch , , and the parallelogram formed by and .    Calculate the magnitude of the force on cables 1 and 2 shown in the figure below.       "
},
{
  "id": "sec121-VectorsPlane-2-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-VectorsPlane-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     define what a vector is in the plane    perform vector addition and scalar multiplication geometrically and component-wise    "
},
{
  "id": "subsec-BasicVectorR2-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "sec121-fig-BasicVectorR2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-fig-BasicVectorR2",
  "type": "Figure",
  "number": "12.1.1",
  "title": "",
  "body": " The vector in    "
},
{
  "id": "subsec-BasicVectorR2-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "def-ComponentsVectorR2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#def-ComponentsVectorR2",
  "type": "Definition",
  "number": "12.1.2",
  "title": "Components of a Vector.",
  "body": " Components of a Vector   The components of , where and , are the quantities The pair of components is denoted .   "
},
{
  "id": "subsec-BasicVectorR2-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "P.S.: "
},
{
  "id": "subsec-BasicVectorR2-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-8",
  "type": "Example",
  "number": "12.1.3",
  "title": "",
  "body": " Find the components of the following vectors.        "
},
{
  "id": "subsec-AttributesVector-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude direction "
},
{
  "id": "subsec-AttributesVector-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude "
},
{
  "id": "sec121-fig-VectorMagnitudeR2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-fig-VectorMagnitudeR2",
  "type": "Figure",
  "number": "12.1.4",
  "title": "",
  "body": " The Magnitude of the vectors and    "
},
{
  "id": "subsec-AttributesVector-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "norm Euclidean norm triangle inequality "
},
{
  "id": "subsec-AttributesVector-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction unit vector "
},
{
  "id": "sec121-fig-UnitVector-UnitCircle",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-fig-UnitVector-UnitCircle",
  "type": "Figure",
  "number": "12.1.5",
  "title": "",
  "body": " The unit vector on the unit circle    "
},
{
  "id": "subsec-AttributesVector-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-12",
  "type": "Proof",
  "number": "1",
  "title": "A quick proof to show that <span class=\"process-math\">\\(\\mathbf{e_v}\\)<\/span> is a unit vector.",
  "body": " A quick proof to show that is a unit vector  Let be a non-zero vector. Then . This implies that Hence, is a unit vector.  "
},
{
  "id": "ws-sec121-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-3",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Find the components of in the figure below.     "
},
{
  "id": "ws-sec121-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-4",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": " Find the components of , where and .  "
},
{
  "id": "ws-sec121-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-5",
  "type": "Worksheet Exercise",
  "number": "19",
  "title": "",
  "body": " Calculate .  "
},
{
  "id": "ws-sec121-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-6",
  "type": "Worksheet Exercise",
  "number": "23",
  "title": "",
  "body": " Sketch , , , and in the following figure.     "
},
{
  "id": "ws-sec121-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-7",
  "type": "Worksheet Exercise",
  "number": "25",
  "title": "",
  "body": " Sketch , , , and .  "
},
{
  "id": "ws-sec121-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-8",
  "type": "Worksheet Exercise",
  "number": "35",
  "title": "",
  "body": " Are and parallel if , , , and ? And if so, do they point in the same direction?  "
},
{
  "id": "ws-sec121-9-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-2",
  "type": "Worksheet Exercise",
  "number": "43",
  "title": "",
  "body": " Unit vector , where .  "
},
{
  "id": "ws-sec121-9-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-3",
  "type": "Worksheet Exercise",
  "number": "45",
  "title": "",
  "body": " Vector of length in the direction of .  "
},
{
  "id": "ws-sec121-9-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-4",
  "type": "Worksheet Exercise",
  "number": "49",
  "title": "",
  "body": " Unit vector making an angle of with the -axis.  "
},
{
  "id": "ws-sec121-10",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-10",
  "type": "Worksheet Exercise",
  "number": "61",
  "title": "",
  "body": " Calculate the linear combination   "
},
{
  "id": "ws-sec121-11",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-11",
  "type": "Worksheet Exercise",
  "number": "65",
  "title": "",
  "body": " Express as a linear combination , where Then sketch , , and the parallelogram formed by and .  "
},
{
  "id": "ws-sec121-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-12",
  "type": "Worksheet Exercise",
  "number": "67",
  "title": "",
  "body": " Calculate the magnitude of the force on cables 1 and 2 shown in the figure below.     "
},
{
  "id": "sec122-3DSpaces",
  "level": "1",
  "url": "sec122-3DSpaces.html",
  "type": "Section",
  "number": "12.2",
  "title": "Three-Dimensional Spaces: Surfaces, Vectors, and Curves",
  "body": " Three-Dimensional Spaces: Surfaces, Vectors, and Curves   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec122-3DSpaces-2-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec123-DotProduct",
  "level": "1",
  "url": "sec123-DotProduct.html",
  "type": "Section",
  "number": "12.3",
  "title": "Dot Product and the Angle Between Two Vectors",
  "body": " Dot Product and the Angle Between Two Vectors   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec123-DotProduct-2-2",
  "level": "2",
  "url": "sec123-DotProduct.html#sec123-DotProduct-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec124-CrossProduct",
  "level": "1",
  "url": "sec124-CrossProduct.html",
  "type": "Section",
  "number": "12.4",
  "title": "The Cross Product",
  "body": " The Cross Product   The big question in this section is how to approximate the area under the curve of a function . We will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     define what a vector is in the plane    perform vector addition and scalar multiplication geometrically and component-wise       The Cross Product   The Right Hand Rule for Cross Products   A diagram showing the right hand rule where the index finger points along vector A, middle finger along B, and thumb illustrates the resulting cross product.     "
},
{
  "id": "sec124-CrossProduct-2-2",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     define what a vector is in the plane    perform vector addition and scalar multiplication geometrically and component-wise    "
},
{
  "id": "fig-cross-product-rhr",
  "level": "2",
  "url": "sec124-CrossProduct.html#fig-cross-product-rhr",
  "type": "Figure",
  "number": "12.4.1",
  "title": "",
  "body": " The Right Hand Rule for Cross Products   A diagram showing the right hand rule where the index finger points along vector A, middle finger along B, and thumb illustrates the resulting cross product.   "
},
{
  "id": "sec125-Planesin3D",
  "level": "1",
  "url": "sec125-Planesin3D.html",
  "type": "Section",
  "number": "12.5",
  "title": "Planes in 3-Spaces",
  "body": " Planes in 3-Spaces   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec125-Planesin3D-2-2",
  "level": "2",
  "url": "sec125-Planesin3D.html#sec125-Planesin3D-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec126-QuadricSurfaces",
  "level": "1",
  "url": "sec126-QuadricSurfaces.html",
  "type": "Section",
  "number": "12.6",
  "title": "A Survey to Quadric Surfaces",
  "body": " A Survey to Quadric Surfaces   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec126-QuadricSurfaces-2-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#sec126-QuadricSurfaces-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec127-CylindricalSphericalCoordinates",
  "level": "1",
  "url": "sec127-CylindricalSphericalCoordinates.html",
  "type": "Section",
  "number": "12.7",
  "title": "Cylindrical and Spherical Coordinates",
  "body": " Cylindrical and Spherical Coordinates   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec127-CylindricalSphericalCoordinates-2-2",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#sec127-CylindricalSphericalCoordinates-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec131-VectorFunctions",
  "level": "1",
  "url": "sec131-VectorFunctions.html",
  "type": "Section",
  "number": "13.1",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec131-VectorFunctions-2-2",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec132-CalcVectorFunctions",
  "level": "1",
  "url": "sec132-CalcVectorFunctions.html",
  "type": "Section",
  "number": "13.2",
  "title": "Calculus of Vector-Valued Functions",
  "body": " Calculus of Vector-Valued Functions   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec132-CalcVectorFunctions-2-2",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#sec132-CalcVectorFunctions-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec133-ArcLength",
  "level": "1",
  "url": "sec133-ArcLength.html",
  "type": "Section",
  "number": "13.3",
  "title": "Arc Length and Speed",
  "body": " Arc Length and Speed   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec133-ArcLength-2-2",
  "level": "2",
  "url": "sec133-ArcLength.html#sec133-ArcLength-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec134-Curvature",
  "level": "1",
  "url": "sec134-Curvature.html",
  "type": "Section",
  "number": "13.4",
  "title": "Curvature",
  "body": " Curvature   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec134-Curvature-2-2",
  "level": "2",
  "url": "sec134-Curvature.html#sec134-Curvature-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec141-FunctionsTwoVariables",
  "level": "1",
  "url": "sec141-FunctionsTwoVariables.html",
  "type": "Section",
  "number": "14.1",
  "title": "Functions of Two or More Variables",
  "body": " Functions of Two or More Variables   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec141-FunctionsTwoVariables-2-2",
  "level": "2",
  "url": "sec141-FunctionsTwoVariables.html#sec141-FunctionsTwoVariables-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec142-LimitsContinuity",
  "level": "1",
  "url": "sec142-LimitsContinuity.html",
  "type": "Section",
  "number": "14.2",
  "title": "Limits and Continuity in Several Variables",
  "body": " Limits and Continuity in Several Variables   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec142-LimitsContinuity-2-2",
  "level": "2",
  "url": "sec142-LimitsContinuity.html#sec142-LimitsContinuity-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec143-PartialDerivatives",
  "level": "1",
  "url": "sec143-PartialDerivatives.html",
  "type": "Section",
  "number": "14.3",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec143-PartialDerivatives-2-2",
  "level": "2",
  "url": "sec143-PartialDerivatives.html#sec143-PartialDerivatives-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec144-DifferentiabilityTangentPlane",
  "level": "1",
  "url": "sec144-DifferentiabilityTangentPlane.html",
  "type": "Section",
  "number": "14.4",
  "title": "Differentiability, Tangent Planes, and Linear Approximation",
  "body": " Differentiability, Tangent Planes, and Linear Approximation   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec144-DifferentiabilityTangentPlane-2-2",
  "level": "2",
  "url": "sec144-DifferentiabilityTangentPlane.html#sec144-DifferentiabilityTangentPlane-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec145-GradientDirectionalDerivatives",
  "level": "1",
  "url": "sec145-GradientDirectionalDerivatives.html",
  "type": "Section",
  "number": "14.5",
  "title": "The Gradient and Directional Derivatives",
  "body": " The Gradient and Directional Derivatives   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec145-GradientDirectionalDerivatives-2-2",
  "level": "2",
  "url": "sec145-GradientDirectionalDerivatives.html#sec145-GradientDirectionalDerivatives-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec146-ChainRule",
  "level": "1",
  "url": "sec146-ChainRule.html",
  "type": "Section",
  "number": "14.6",
  "title": "Multivariable Calculus Chain Rules",
  "body": " Multivariable Calculus Chain Rules   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec146-ChainRule-2-2",
  "level": "2",
  "url": "sec146-ChainRule.html#sec146-ChainRule-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec147-Optimization",
  "level": "1",
  "url": "sec147-Optimization.html",
  "type": "Section",
  "number": "14.7",
  "title": "Optimization in Several Variables",
  "body": " Optimization in Several Variables   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec147-Optimization-2-2",
  "level": "2",
  "url": "sec147-Optimization.html#sec147-Optimization-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec148-LagrangeMultipliers",
  "level": "1",
  "url": "sec148-LagrangeMultipliers.html",
  "type": "Section",
  "number": "14.8",
  "title": "Lagrange Multipliers: Optimizing with a Constraint",
  "body": " Lagrange Multipliers: Optimizing with a Constraint   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec148-LagrangeMultipliers-2-2",
  "level": "2",
  "url": "sec148-LagrangeMultipliers.html#sec148-LagrangeMultipliers-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec151-IntegrationTwoVariables",
  "level": "1",
  "url": "sec151-IntegrationTwoVariables.html",
  "type": "Section",
  "number": "15.1",
  "title": "Integration in Two Variables",
  "body": " Integration in Two Variables   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec151-IntegrationTwoVariables-2-2",
  "level": "2",
  "url": "sec151-IntegrationTwoVariables.html#sec151-IntegrationTwoVariables-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec152-DoubleIntegrals",
  "level": "1",
  "url": "sec152-DoubleIntegrals.html",
  "type": "Section",
  "number": "15.2",
  "title": "Double Integrals over More General Regions",
  "body": " Double Integrals over More General Regions   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec152-DoubleIntegrals-2-2",
  "level": "2",
  "url": "sec152-DoubleIntegrals.html#sec152-DoubleIntegrals-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec153-tripleIntegrals",
  "level": "1",
  "url": "sec153-tripleIntegrals.html",
  "type": "Section",
  "number": "15.3",
  "title": "Triple Integrals",
  "body": " Triple Integrals   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec153-tripleIntegrals-2-2",
  "level": "2",
  "url": "sec153-tripleIntegrals.html#sec153-tripleIntegrals-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec154-IntegrationPolarCylindricalSphericalCoordinates",
  "level": "1",
  "url": "sec154-IntegrationPolarCylindricalSphericalCoordinates.html",
  "type": "Section",
  "number": "15.4",
  "title": "Integration in Polar, Cylindrical, and Spherical Coordinates",
  "body": " Integration in Polar, Cylindrical, and Spherical Coordinates   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec154-IntegrationPolarCylindricalSphericalCoordinates-2-2",
  "level": "2",
  "url": "sec154-IntegrationPolarCylindricalSphericalCoordinates.html#sec154-IntegrationPolarCylindricalSphericalCoordinates-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "sec156-ChangeofVariables",
  "level": "1",
  "url": "sec156-ChangeofVariables.html",
  "type": "Section",
  "number": "15.5",
  "title": "Change of Variables",
  "body": " Change of Variables   Just the introduction texts...    After this section, students will be able to:     blahblahblah      "
},
{
  "id": "sec156-ChangeofVariables-2-2",
  "level": "2",
  "url": "sec156-ChangeofVariables.html#sec156-ChangeofVariables-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
