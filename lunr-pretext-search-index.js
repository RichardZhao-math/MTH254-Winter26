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
  "body": " Vectors in the Plane   In this section, we transition from single-variable calculus to the geometry of the plane by introducing vectors . We will learn how to describe quantities that have both magnitude and direction, perform algebraic operations on them, and use them to model physical forces.    After this section, students will be able to:     distinguish between points, scalars, and vectors using correct notation    calculate the components, magnitude, and direction of a vector in     perform vector addition and scalar multiplication geometrically and component-wise    express vectors as linear combinations of standard basis vectors    solve static equilibrium problems using vector forces       Vectors in  In case you are not familiar with the notation , it simply means the set of all ordered pairs of real numbers. Symbolically speaking, That is, we will work with vectors in two dimensions in this section.  Let's first define what a vector is in . A vector in is an object determined by two points in the plane: an initial point (the tail) and a terminal point (the tip). We write and we draw as an arrow pointing from to .   The vector in     Why is bolded but not or ?  This is a notation convention. There is a difference between a vector and a point (or scalar). To specify the difference, we usually bold the vector notation.  For example, if you see something like , then this indicates that is a vector. As a comparison, if you see something like , then this indicates that is a scalar (a number).  But why don't we bold the vector as , but instead put an arrow on top of it?  That is because the arrow notation specifies the tail and the tip of the vector! There is a difference between and ! They have the opposite tail and tip, so they point in opposite directions!  Another reason why sometimes we use the arrow notation is because it is super difficult to write in bold font! This is why Richard often writes on the board to indicate the vector , since he can't write in bold font easily...   In , each point is represented by an ordered pair of real numbers. Then we can define the components of a vector using the ordered pairs of the two points as follows.   Components of a Vector   The components of , where and , are the quantities The pair of components is denoted .     P.S.: If you are a linear algebra-ist and want to use the notation of the column vectors instead, be my guest! Just remember that Richard prefers the column vector notation over the sharp-y angle bracket notation (but he is teaching calculus, not linear algebra, so he will have to live with it).   Find the components of the following vectors with tail and tip . Then sketch the vectors.     and      and      and      and      We can find the components of each vector using the definition:                         The sketches of the vectors are shown below:       Observe that and are parallel . Moreover, is a translation of (i.e., we can obtain by sliding to the left and down). We call these two vectors equivalent vectors if one is a translation of the other.  In fact, two vectors are equivalent if and only if they have the same components. So instead of studying millions of the same vectors in different locations, we can just study one representative vector for each group of equivalent vectors.  But which location should we choose for the representative vector? To keep things easier, we usually choose the representative vector whose tail is at the origin . Then the tip of the vector is at the coordinate point , where are the components of the vector. This is called the position vector .   Sketch the position vectors of the vectors in the previous example.   The vectors in the previous example are The position vectors are sketched below.         The Attributes of Vectors  When defining a vector, it is important to note its magnitude and the direction .  The magnitude of a vector is the distance from the tail to the tip (aka the length of the vector). This is denoted as .  Given a vector , we can determine its magnitude using the Pythagorean Theorem, as demonstrated in the figure below.   The Magnitude of the vectors and     By the Pythagorean Theorem, we have   The magnitude of a vector is really called the norm or the Euclidean norm of a vector in more advanced math courses. In general, norms must satisfy the following three properties:    , with if and only if .     for all scalars .     for any two vectors and , with equallity only if , , or if where . (This is the famous triangle inequality ).   This isn't a linear algebra or functional analysis class, so we won't go deeper into norms here. If you are interested, feel free to do more digging on your own (or ask Richard!).   Find the magnitude of the vectors in the previous examples.   The vectors in the previous examples are Then     Now let's discuss the direction of a vector. The direction of a vector tells us where the vector is pointing. We can indicate the direction of a vector by using the vector itself. As you imagine, the magnitude of a vector has nothing to do with its direction, so we sometimes use a unit vector , which is a vector of length , to indicate the direction, when it is not necessary to specify length.  If we have a unit vector whose tail is at the origin, then its tip lies on the unit circle. We usually denote a unit vector by , defined as where is the angle between and the positive -axis, indicated in the figure below.   The unit vector on the unit circle     But what if we are given an arbitrary non-zero vector and we want to find a unit vector in the same direction? One way to do so is to divide the vector by its magnitude (multiplying a positive scalar doesn't change the direction of a vector). That is, given , the unit vector in the direction of is    A quick proof to show that is a unit vector  Let be a non-zero vector. Then . This implies that Hence, is a unit vector.   When we are given the magnitude of a vector and its direction as the angle , we can find the components of the vector as follows:    Find the vector with magnitude and make an angle of with the positive -axis.   If you want to see what the vector looks like...  The goal of the question is to find the length of the red vector in the figure below.       We can first find the unit vector in the direction of the vector: Then the vector with magnitude in the same direction is     Observe that we essentially multiplied the unit vector (a vector) by the magnitude (a scalar) to obtain the desired vector. This is one of the two operations in vector algebra, which we will discuss in the next section.    Vector Algebra  Vectors live in a place called the vector space . Usually, two operations are defined in a vector space, and they are vector addition and scalar multiplication . We will discuss these two operations in this section.   Vector addition tells us how to add two vectors together. Geometrically speaking, we can imagine a vector as the movement from the tail to the tip. Then adding two vectors means performing the movements one after another. That is, we will need to find the equivalent vector of the second vector whose tail is at the tip of the first vector , and the resulting vector is the vector from the tail of the first vector to the tip of the second vector. This is sometimes referred to as the Triangle Law .    Vector Addition using the Triangle Law   But sometimes we are given the position vectors and their tails are both at the origin (or at the same point). Alternatively, rather than finding the equivalent vector of the second vector, we can construct a parallelogram using the two vectors as adjacent sides, and the resulting vector is the diagonal of the parallelogram starting from the common tail of the two vectors. This is called the Parallelogram Law .    Vector Addition using the Parallelogram Law   Now let's look at scalar multiplication . The term scalar refers to a real number. That is, scalar multiplication tells us how to multiply a vector by a real number. The scalar will \"scale\" or \"resize\" the vector.  When the scalar is positive, the resulting vector points in the same direction, and the size of the vector is scaled by the scalar.    Vector Addition using the Parallelogram Law   When the scalar is negative, the resulting vector points in the opposite direction, and the size of the vector is scaled by the absolute value of the scalar.    Vector Multiplication by a Negative Scalar   But what if the scalar is zero? We can quickly see that the magnitude of the resulting vector is zero, so the resulting vector is the zero vector , denoted by . We can imagine the zero vector has the tail and tip at the same point, which means it doesn't have a specific direction. Alternatively, we can say that the zero vector points in all directions.  Once we have vector addition and scalar multiplication defined, we can subtract two vectors. Recall subtraction is really the same thing as adding the opposite. That is, Graphically, we can find as follows:    Vector Subtraction   But we work with components of vectors as well... How do we perform these operations using components? It turns out that vector addition and scalar multiplication can be performed component-wise .   Vector Operations using Components   If and , then:                           Calculate .   The vector sum is     Observe that vector operations are (kind of) similar to operations with numbers component-wise. Then some properties of number operations also hold for vector operations.   Basic Properties of Vector Algebra   For all vectors , , , and for all scalars ,      Linear Combinations of Vectors  Given two vectors and , we define a linear combination of them as a vector of the form where and are scalars. Linear combinations are the fundamental mechanism for \"building\" new vectors from existing ones.   Express as a linear combination , where Then sketch , , , and the parallelogram formed by and .   Consider the vectors and are the two building blocks that we can use to construct the vector . The moves we can do are the scalar multiplications (to resize the building blocks) and the vector addition (to combine the building blocks).  So, the question here is: how should we resize the building blocks and such that when we combine them together, we get the desired vector ?    Using the definition of linear combinations, there are two scalars and such that This implies that Solving this system of equations, we obtain and . Hence, the linear combination is The sketches of the vectors and the parallelogram are shown below.       One of the reasons why linear combinations are important is that we can decompose vectors into linear combinations of other vectors. Usually, we want to decompose vectors into linear combinations of the simplest vectors possible. In , the simplest vectors are the standard basis vectors , defined as Any vector in can be expressed as a linear combination of these two vectors. Or using fancy linear algebra terminology, the set  spans the vector space .    Linear Combination using the standard basis vectors in    Calculate the linear combination    The building blocks here are the standard basis vectors and . So we will need to perform scalar multiplications and vector additions to obtain the resulting vector.            Applications of Vectors  Vectors are widely used in various fields, including physics, engineering, computer science, and more. They are particularly useful in representing quantities that have both magnitude and direction, such as velocity, force, and acceleration. In this section, we will explore a basic application of vectors: force vectors.   Force Vectors  A 400-lb engine is suspended from two chains that form 60° angles with a horizontal ceiling. How much weight does each chain support?      Let and denote the forces exerted by the chains on the engine and let be the downward force due to the weight of the engine. Then we can place the origin at the point where the engine is located and construct a Cartesian coordinate plane.  Then we can draw the vectors , , and . Can we find the components of these vectors?  Since the engine is stationary, the forces must be balanced. That is, adding these three vectors together must give us the zero vector.    Following the setup in the hint, we can construct a Cartesian coordinate plane with the origin at the engine. Then the vectors are        Since the engine is stationary, we have This implies that Equating the components, we obtain the system of equations: Solving this system, we find that lbs.  Hence, each chain must be able to support a weight of approximately 230.94 lbs.      Assigned Problems for Section 12.1   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of the unit vector  in the figure below.      Since makes an angle of with the positive -axis, its components are      Find the components of , where and .   Using the definition of components of a vector, we have      Calculate .   Using vector algebra, we obtain      Sketch , , , and in the following figure.      The scalar multiple points in the same direction as and its length is twice the length of . It is the vector .    The sketch of and .    has the same length as but points to the opposite direction. It is the vector .    The sketch of and .   The vector sum is the vector: The vector is shown in the following figure:    The sketch of , , and .   The vector is the vector: It is shown next:    The sketch of , , and .      Sketch , , , and .   We compute the vectors and then sketch them:      The sketch of and .      Are and parallel if , , , and ? And if so, do they point in the same direction?   We compute the vectors and :  Since , the vectors are parallel and point in the same direction.      In the following exercises, find the given vector.    Unit vector , where .   We find the length of : Then the unit vector in the direction of is      Vector of length in the direction of .   We first find the unit vector in the direction of :   We now multiply by to obtain the desired vector:      Unit vector making an angle of with the -axis.   The unit vector is the following vector:       Calculate the linear combination          Express as a linear combination , where Then sketch , and the parallelogram formed by and .   We have which becomes the system of equations Solving the above system of equations, we obtain and .  Hence, the linear combination is The sketch is shown below.    The sketch of and the parallelogram formed by and .      Calculate the magnitude of the force on cables 1 and 2 shown in the figure below.      The three forces acting on the point are:   The force of magnitude lb that acts vertically downward.    The forces and that act through cables 1 and 2 respectively.   The diagram below shows the vectors representing these forces.     Since the point is not in motion, we have We compute the forces. Let and . We have Substituting the forces into the equation gives We equate corresponding components and get Solving the above system of equations, we obtain and .  We conclude that the magnitude of the force on cable 1 is lb and the magnitude of the force on cable 2 is lb.     "
},
{
  "id": "sec121-VectorsPlane-2-1",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-VectorsPlane-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors "
},
{
  "id": "sec121-VectorsPlane-2-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#sec121-VectorsPlane-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     distinguish between points, scalars, and vectors using correct notation    calculate the components, magnitude, and direction of a vector in     perform vector addition and scalar multiplication geometrically and component-wise    express vectors as linear combinations of standard basis vectors    solve static equilibrium problems using vector forces    "
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
  "body": " The vector in   "
},
{
  "id": "subsec-BasicVectorR2-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-5",
  "type": "Note",
  "number": "12.1.2",
  "title": "Why is <span class=\"process-math\">\\(\\v{v}\\)<\/span> bolded but not <span class=\"process-math\">\\(P\\)<\/span> or <span class=\"process-math\">\\(Q\\text{?}\\)<\/span>",
  "body": " Why is bolded but not or ?  This is a notation convention. There is a difference between a vector and a point (or scalar). To specify the difference, we usually bold the vector notation.  For example, if you see something like , then this indicates that is a vector. As a comparison, if you see something like , then this indicates that is a scalar (a number).  But why don't we bold the vector as , but instead put an arrow on top of it?  That is because the arrow notation specifies the tail and the tip of the vector! There is a difference between and ! They have the opposite tail and tip, so they point in opposite directions!  Another reason why sometimes we use the arrow notation is because it is super difficult to write in bold font! This is why Richard often writes on the board to indicate the vector , since he can't write in bold font easily...  "
},
{
  "id": "subsec-BasicVectorR2-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-6",
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
  "number": "12.1.3",
  "title": "Components of a Vector.",
  "body": " Components of a Vector   The components of , where and , are the quantities The pair of components is denoted .   "
},
{
  "id": "subsec-BasicVectorR2-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "P.S.: "
},
{
  "id": "subsec-BasicVectorR2-9",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-9",
  "type": "Example",
  "number": "12.1.4",
  "title": "",
  "body": " Find the components of the following vectors with tail and tip . Then sketch the vectors.     and      and      and      and      We can find the components of each vector using the definition:                         The sketches of the vectors are shown below:      "
},
{
  "id": "subsec-BasicVectorR2-10",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent vectors "
},
{
  "id": "subsec-BasicVectorR2-11",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "subsec-BasicVectorR2-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position vector "
},
{
  "id": "subsec-BasicVectorR2-13",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-BasicVectorR2-13",
  "type": "Example",
  "number": "12.1.6",
  "title": "",
  "body": " Sketch the position vectors of the vectors in the previous example.   The vectors in the previous example are The position vectors are sketched below.      "
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
  "number": "12.1.8",
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
  "type": "Example",
  "number": "12.1.9",
  "title": "",
  "body": " Find the magnitude of the vectors in the previous examples.   The vectors in the previous examples are Then    "
},
{
  "id": "subsec-AttributesVector-9",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-9",
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
  "number": "12.1.10",
  "title": "",
  "body": " The unit vector on the unit circle    "
},
{
  "id": "subsec-AttributesVector-13",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-13",
  "type": "Proof",
  "number": "1",
  "title": "A quick proof to show that <span class=\"process-math\">\\(\\v{e_v}\\)<\/span> is a unit vector.",
  "body": " A quick proof to show that is a unit vector  Let be a non-zero vector. Then . This implies that Hence, is a unit vector.  "
},
{
  "id": "subsec-AttributesVector-15",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-AttributesVector-15",
  "type": "Example",
  "number": "12.1.11",
  "title": "",
  "body": " Find the vector with magnitude and make an angle of with the positive -axis.   If you want to see what the vector looks like...  The goal of the question is to find the length of the red vector in the figure below.       We can first find the unit vector in the direction of the vector: Then the vector with magnitude in the same direction is    "
},
{
  "id": "subsec-VectorAlgebra-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space vector addition scalar multiplication "
},
{
  "id": "subsec-VectorAlgebra-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector addition Triangle Law "
},
{
  "id": "subsec-VectorAlgebra-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-4",
  "type": "Figure",
  "number": "12.1.13",
  "title": "",
  "body": "  Vector Addition using the Triangle Law  "
},
{
  "id": "subsec-VectorAlgebra-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parallelogram Law "
},
{
  "id": "subsec-VectorAlgebra-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-6",
  "type": "Figure",
  "number": "12.1.14",
  "title": "",
  "body": "  Vector Addition using the Parallelogram Law  "
},
{
  "id": "subsec-VectorAlgebra-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar multiplication "
},
{
  "id": "subsec-VectorAlgebra-9",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-9",
  "type": "Figure",
  "number": "12.1.15",
  "title": "",
  "body": "  Vector Addition using the Parallelogram Law  "
},
{
  "id": "subsec-VectorAlgebra-11",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-11",
  "type": "Figure",
  "number": "12.1.16",
  "title": "",
  "body": "  Vector Multiplication by a Negative Scalar  "
},
{
  "id": "subsec-VectorAlgebra-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "subsec-VectorAlgebra-14",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-14",
  "type": "Figure",
  "number": "12.1.17",
  "title": "",
  "body": "  Vector Subtraction  "
},
{
  "id": "thm-thm-VectorOperationsComponents",
  "level": "2",
  "url": "sec121-VectorsPlane.html#thm-thm-VectorOperationsComponents",
  "type": "Theorem",
  "number": "12.1.18",
  "title": "Vector Operations using Components.",
  "body": " Vector Operations using Components   If and , then:                         "
},
{
  "id": "subsec-VectorAlgebra-17",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-17",
  "type": "Example",
  "number": "12.1.19",
  "title": "",
  "body": " Calculate .   The vector sum is    "
},
{
  "id": "thm-PropertiesVectorAlgebra",
  "level": "2",
  "url": "sec121-VectorsPlane.html#thm-PropertiesVectorAlgebra",
  "type": "Theorem",
  "number": "12.1.20",
  "title": "Basic Properties of Vector Algebra.",
  "body": " Basic Properties of Vector Algebra   For all vectors , , , and for all scalars ,    "
},
{
  "id": "subsubsec-LinearCombinations-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "subsubsec-LinearCombinations-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-3",
  "type": "Example",
  "number": "12.1.21",
  "title": "",
  "body": " Express as a linear combination , where Then sketch , , , and the parallelogram formed by and .   Consider the vectors and are the two building blocks that we can use to construct the vector . The moves we can do are the scalar multiplications (to resize the building blocks) and the vector addition (to combine the building blocks).  So, the question here is: how should we resize the building blocks and such that when we combine them together, we get the desired vector ?    Using the definition of linear combinations, there are two scalars and such that This implies that Solving this system of equations, we obtain and . Hence, the linear combination is The sketches of the vectors and the parallelogram are shown below.      "
},
{
  "id": "subsubsec-LinearCombinations-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard basis vectors "
},
{
  "id": "subsubsec-LinearCombinations-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-5",
  "type": "Figure",
  "number": "12.1.23",
  "title": "",
  "body": "  Linear Combination using the standard basis vectors in  "
},
{
  "id": "subsubsec-LinearCombinations-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-6",
  "type": "Example",
  "number": "12.1.24",
  "title": "",
  "body": " Calculate the linear combination    The building blocks here are the standard basis vectors and . So we will need to perform scalar multiplications and vector additions to obtain the resulting vector.        "
},
{
  "id": "subsec-VectorApplication-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorApplication-3",
  "type": "Example",
  "number": "12.1.25",
  "title": "Force Vectors.",
  "body": " Force Vectors  A 400-lb engine is suspended from two chains that form 60° angles with a horizontal ceiling. How much weight does each chain support?      Let and denote the forces exerted by the chains on the engine and let be the downward force due to the weight of the engine. Then we can place the origin at the point where the engine is located and construct a Cartesian coordinate plane.  Then we can draw the vectors , , and . Can we find the components of these vectors?  Since the engine is stationary, the forces must be balanced. That is, adding these three vectors together must give us the zero vector.    Following the setup in the hint, we can construct a Cartesian coordinate plane with the origin at the engine. Then the vectors are        Since the engine is stationary, we have This implies that Equating the components, we obtain the system of equations: Solving this system, we find that lbs.  Hence, each chain must be able to support a weight of approximately 230.94 lbs.   "
},
{
  "id": "ws-sec121-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-3",
  "type": "Worksheet Exercise",
  "number": "12.1.5",
  "title": "",
  "body": " Find the components of the unit vector  in the figure below.      Since makes an angle of with the positive -axis, its components are    "
},
{
  "id": "ws-sec121-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-4",
  "type": "Worksheet Exercise",
  "number": "12.1.11",
  "title": "",
  "body": " Find the components of , where and .   Using the definition of components of a vector, we have    "
},
{
  "id": "ws-sec121-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-5",
  "type": "Worksheet Exercise",
  "number": "12.1.19",
  "title": "",
  "body": " Calculate .   Using vector algebra, we obtain    "
},
{
  "id": "ws-sec121-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-6",
  "type": "Worksheet Exercise",
  "number": "12.1.23",
  "title": "",
  "body": " Sketch , , , and in the following figure.      The scalar multiple points in the same direction as and its length is twice the length of . It is the vector .    The sketch of and .    has the same length as but points to the opposite direction. It is the vector .    The sketch of and .   The vector sum is the vector: The vector is shown in the following figure:    The sketch of , , and .   The vector is the vector: It is shown next:    The sketch of , , and .    "
},
{
  "id": "ws-sec121-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-7",
  "type": "Worksheet Exercise",
  "number": "12.1.25",
  "title": "",
  "body": " Sketch , , , and .   We compute the vectors and then sketch them:      The sketch of and .    "
},
{
  "id": "ws-sec121-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-8",
  "type": "Worksheet Exercise",
  "number": "12.1.35",
  "title": "",
  "body": " Are and parallel if , , , and ? And if so, do they point in the same direction?   We compute the vectors and :  Since , the vectors are parallel and point in the same direction.   "
},
{
  "id": "ws-sec121-9-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-2",
  "type": "Worksheet Exercise",
  "number": "12.1.43",
  "title": "",
  "body": " Unit vector , where .   We find the length of : Then the unit vector in the direction of is    "
},
{
  "id": "ws-sec121-9-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-3",
  "type": "Worksheet Exercise",
  "number": "12.1.45",
  "title": "",
  "body": " Vector of length in the direction of .   We first find the unit vector in the direction of :   We now multiply by to obtain the desired vector:    "
},
{
  "id": "ws-sec121-9-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-4",
  "type": "Worksheet Exercise",
  "number": "12.1.49",
  "title": "",
  "body": " Unit vector making an angle of with the -axis.   The unit vector is the following vector:    "
},
{
  "id": "ws-sec121-10",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-10",
  "type": "Worksheet Exercise",
  "number": "12.1.61",
  "title": "",
  "body": " Calculate the linear combination        "
},
{
  "id": "ws-sec121-11",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-11",
  "type": "Worksheet Exercise",
  "number": "12.1.65",
  "title": "",
  "body": " Express as a linear combination , where Then sketch , and the parallelogram formed by and .   We have which becomes the system of equations Solving the above system of equations, we obtain and .  Hence, the linear combination is The sketch is shown below.    The sketch of and the parallelogram formed by and .    "
},
{
  "id": "ws-sec121-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-12",
  "type": "Worksheet Exercise",
  "number": "12.1.67",
  "title": "",
  "body": " Calculate the magnitude of the force on cables 1 and 2 shown in the figure below.      The three forces acting on the point are:   The force of magnitude lb that acts vertically downward.    The forces and that act through cables 1 and 2 respectively.   The diagram below shows the vectors representing these forces.     Since the point is not in motion, we have We compute the forces. Let and . We have Substituting the forces into the equation gives We equate corresponding components and get Solving the above system of equations, we obtain and .  We conclude that the magnitude of the force on cable 1 is lb and the magnitude of the force on cable 2 is lb.   "
},
{
  "id": "sec122-3DSpaces",
  "level": "1",
  "url": "sec122-3DSpaces.html",
  "type": "Section",
  "number": "12.2",
  "title": "Three-Dimensional Spaces: Surfaces, Vectors, and Curves",
  "body": " Three-Dimensional Spaces: Surfaces, Vectors, and Curves   We live in a three-dimensional world, yet our study of calculus has so far been largely restricted to the flat, two-dimensional plane. In this section, we will upgrade our coordinate system from to . We will see that many familiar concepts, such as the distance formula, vectors, and lines, extend naturally into this new dimension.    After this section, students will be able to:     locate points in a three-dimensional Cartesian coordinate system and identify the octants.    calculate the distance between two points in using the distance formula.    identify and write equations for basic surfaces in , including planes, spheres, and cylinders.    perform vector operations (addition, scalar multiplication, and magnitude) in .    determine vector and parametric equations for lines in given a point and a direction, or two points.    analyze the relationship between two lines in space to determine if they are parallel, intersecting, or skew.      To discuss stuff in three-dimensional space, we need to first determine how to represent points in . Just like points in , we can use an ordered triple of real numbers to represent a point in .  You may guess that we can graph stuff in using three orthogonal axes, one for each coordinate. This is indeed the case, and the three axes are usually labeled , , and , following the right-hand rule : if the curled fingers of the right hand are rotated from the positive -axis to the positive -axis, the thumb points in the direction of the positive -axis.    Right-hand rule for labeling axes in   The point where the three axes intersect is called the origin and is denoted by . An ordered triple represents the point that is units along the -axis, units along the -axis, and units along the -axis.    Plotting the following points in   To visualize this point, it is helpful to construct a rectangular box with one vertex at the origin and the opposite vertex at the point .  Recall that the two axes in divide the plane into four quadrants. Similarly, the three axes in divide the space into eight regions called octants . We call the region where , , and the first octant . Unlike how quadrants are usually numbered in , there is no consistent way to number the octants in .  Next, we can talk about the distance between two points in . The distance formula in is an extension of the distance formula in using the Pythagorean Theorem twice.   Distance Formula in   The distance between the points and is      A quick proof to show the distance formula in  Let and be two points in . We first construct the point . Then, by applying the Pythagorean Theorem in the right triangle , we have     in   We can see that . To find the hypotenuse , we need to find first.  To find , we will need to construct another point .    in   We apply the Pythagorean Theorem again in the triangle to find :   Hence, we obtain Taking the square root of both sides gives the desired result.   Now that we know how works, let's move on to discussing some other important objects in , including surfaces, vectors, and lines.   Surfaces  It is difficult to put a precise mathematical definition of what a surface is. One way to think about it is that a surface is a generalization of a plane in the sense that surfaces can be curved (this is similar to how curves are generalizations of lines).  The most easiest planes in are the -plane, -plane, and -plane.   Setting defines the -plane .    Setting defines the -plane .    Setting defines the -plane .       -, -, and -planes in   Similarly, we can get a plane by setting one of the coordinates to be a constant. These types of planes are called the coordinate planes .   The equation defines a plane parallel to the -plane that intersects the -axis at .    The equation defines a plane parallel to the -plane that intersects the -axis at .    The equation defines a plane parallel to the -plane that intersects the -axis at .      Describe the following surfaces in and sketch them:                    The equations describe planes in as follows:   The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .   The sketch of these planes is shown below.    Planes , , and in     There are other types of planes in as well. In general, a plane in can be determined by a point on the plane and a normal vector to the plane. We will discuss planes in 3D more in detail in Section 12.5.  Let's shift our focus to other types of surfaces in . To describe surfaces in , we need some equations to put some constraints on the coordinate(s).  For example, we can describe the surface of a sphere by thinking about the constraint of the points on it. Imagine there is a sphere in centered at the point with radius . Then any point on the sphere must be exactly units away from the center . Using our distance formula in , we have We can \"simplify\" this equation by squaring both sides to get rid of the square root. This gives us the standard equation of a sphere in    Standard Equation of a Sphere in   An equation of the sphere in of radius centered at is       Sphere of radius centered at in    Hey Richard, can we call this a ball instead of a sphere?  The short answer is no... There is a big difference between a sphere and a ball in mathematics.  Observing the standard equation of a sphere, we can see that it only describes the surface of the sphere, not the interior.  Yet, a ball includes both the surface and the interior. An equation of a ball of radius centered at is given by the inequality   If you took MTH 252 (or 252Z) with Richard, you may remember he pointed out the difference between a circle and a disk when he taught the Disk Method. This is the same idea here.    Give an equation of the sphere of radius centered at .   Using the standard equation of a sphere, we have which simplifies to     We can put more constraints on the equation of a sphere to get other surfaces. One thing to do so is to restrict the domain of the coordinate(s).   Describe the surface with .   If we drop the constraints , then the equation describes a sphere of radius centered at the origin. But we don't get the whole sphere because of the constraints...  Then which part of the sphere do we get if we only allow ?    The equation describes a sphere of radius centered at the origin. However, since we have the constraints , we only get the portion of the sphere that is in the first octant. That is, the surface is one eighth of the sphere.  The surface is shown in the figure below.   Portion of the sphere in the first octant        Another way to get a different surface is to relax the constraints on the coordinate(s). For example, consider the equation We know that this is an equation of a circle in (or more specifically, in the -plane) with radius centered at . If we consider this equation in , then there is no constraint on the -coordinate. That is, can take any real value. When we allow to vary freely, the circle will \"extend\" infinitely in both positive and negative -directions, forming a surface called a right circular cylinder , a cylinder whose cross-sections are circles and whose axis is perpendicular to the base.    Right circular cylinder of radius whose central axis is the vertical line through    Standard Equation of a Cylinder in   An equation of the right circular cylinder in of radius whose central axis is the vertical line through is      Describe the surface with .   If we drop the constraints , then the equation describes a cylinder of radius whose central axis is the vertical line through the origin. But we don't get the whole cylinder because of the constraints...  Then which part of the cylinder do we get if we only allow ?    The equation describes a cylinder of radius whose central axis is the vertical line through the origin. However, since we have the constraints , we only get the portion of the cylinder where and . That is, we get one fourth of the cylinder.  The surface is shown in the figure below.   Fourth-cylinder with        We can create many other surfaces in by putting different types of constraints on the coordinates. We will explore more surfaces in section 12.6 and even more in chapter 14. Spheres and cylinders are the two most basic surfaces in with a lot more applications (for example, we can construct coordinate systems based on them) so make sure you understand them well!    Vectors in 3-Space  Vectors in are super similar to vectors in we discussed in . Two points in can determine a vector. Let and be two points in . Then we can define a vector as follows where the -component is , the -component is , and the -component is .   Find the components of the vector , where and . Then sketch the vector.   By the definition of the vector components we have   The sketch of the vector is shown below.   Vector in        The vector terminologies remain the same as in :   Two non-zero vectors are parallel if one is a scalar multiple of the other.    Two vectors are equivalent if they have the same components.    The position vectors are the ones whose tails are at the origin .      Determine whether or not the two vectors and are parallel.   Since the two vectors are parallel.  In addition, since the scalar here is negative, we know that the two vectors point in opposite directions.    Just like how we can find the magnitude and the direction of a vector in , we can do the same(ish) thing in . Given a vector , its magnitude is Also, the vector itself can tell us about its direction . If you really want to work with a unit vector in the same direction as , you can find it by dividing the vector by its magnitude:   In addition, vector algebra works similarly in as it does in . Vector addition and scalar multiplication are defined component-wise . That is, if and , then and for a scalar , Then we can construct new vectors through linear combinations .  The standard basis vectors in are and every vector in can be expressed as a linear combination of these basis vectors. Using fancy linear algebra terminology, the set spans .   Which vector has the smaller magnitude: or ?   We first find the components of each vector: and Then we compute their magnitudes: and Since , we conclude that has the smaller magnitude.      Curves and Lines  Most curves in can be represented parametrically than using a single equation. That is, we use three functions to represent the -, -, and -coordinates of the points on the curve with a parameter . This can be visualized as representing the coordinates of a particle moving through space as a function of time , and the curve is the path traced out by the particle.    The curve is traced out by the tip of a moving position vector   Alternatively, we can construct a function of the position vectors with tips on the curve Essentially, the tips of this \"vector function\" trace out the curve as varies. This is called the vector-valued function . You will learn all the fun stuff about vector-valued functions in Chapter 13. In this section, we will focus on the simplest type of curves in , lines.  Remember back when you first learned about lines in , you probably remember that we need both the slope and a point on the line to define a line.   The slope tells us the direction of the line. Yet knowing just the slope doesn't tell us a unique line... There can be thousands of parallel lines with the same slope!    A point on the line can pin down the location of the line. Yet knowing just a point on the line doesn't tell us the direction of the line... We can draw infinitely many lines through a single point!   This is also the case in ! In order to determine a line in , we need to know both the direction of the line and a point on the line.  Unlike stuff in , there is no \"slope\" in to represent the direction of a line, since \"slope\" is a concept that only works in two dimensions. Instead, we use a vector to represent the direction of the line.  We can find a point in just fine, since points in are represented by ordered triples.  Hence, a line in is determined by a point on the line and a direction vector .   Equation of a Line in   The line through in the direction of is described by   Vector Parametrization:  where .   Parametric Equations:  The parameter takes on values .      The line in   Observe that the parametric equations specify the -, -, and -coordinates of the points on the line as functions of the parameter . These three parametric equations is itself a linear function in the parameter . What we did here is essentially to extend this idea in the notion of vector parametrization.   Find an equation of the line that passes through the point in the direction of .   We are given . Therefore, an equation of the line is for . The corresponding parametric equations are for .    Back in algebra 2, you may also have learned that two points can also determine a line in . This is also true in . The trick here is to determine the direction vector using the two points.   Find an equation of the line that passes through the points and .   To find an equation of a line, we need a point on the line and a direction vector. So there are really things we need to find out.  The easier part is to find a point on the line (we are given two points on the line!)  The slightly trickier part is to find a direction vector. Can we find a vector parallel to the line using the two points?    A directional vector is . Then we obtain We can use either point or as the point on the line. Using point , we have . Therefore, an equation of the line is for . The corresponding parametric equations are for .    You may feel like the equation of a line is not unique since we can choose different points on the line to represent the same line (for example, in the previous example, Richard chose the point to write the equation of the line instead of point . He would have obtained a different equation if he had chosen point instead). It is true that the equation of a line is not unique , not only because we can choose different points on the line to construct the equation, we can also pick different vectors that are parallel to each other to represent the direction of the line.  When things are not unique, it is often helpful to verify that two different equations can represent the same line. Remember that we can determine a line by knowing a point on the line and a direction vector. Then two equations represent the same line if the direction vectors are parallel and they share a point in common.   Show that and define the same line, where    The line has the direction vector of and passes through the point .  The line has the direction vector of and passes through the point .  If they represent the same line, then and must be parallel, and there must be a point that lies on both lines.    Observe that , so the two direction vectors are parallel.  To show that the two lines share a point in common, we can check if point lies on line . Observe that This implies that lies on line .  Therefore, the two lines represent the same line in .    In , we learned that two lines are either parallel or they intersect at a single point, assuming the lines are not coincident. In , however, two lines can also be skew , meaning that they do not intersect and are not parallel (hence they are not coplanar).   Determine whether the lines and intersect, and if so, find the point of intersection.   Let's just assume that the two lines intersect. If two lines intersect, then they must intersect at a single point.  Now put on your algebra 2 hat and think about how to find the point of intersection of two lines in . (You would set the two equations equal to each other and solve for !)    The lines intersect if there exist parameter values and such that Equating corresponding components, we get This is a system of three equations with two unknowns. If you know linear algebra, feel free to solve it using matrices. Otherwise, we can solve it using basic algebra methods, like substitution or elimination.  Richard assumes no linear algebra knowledge here, so he will use substitution. Substituting from the second equation into the first equation we get Using in the second equation gives . Don't forget that there are. three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: We conclude that , is the solution to the system, hence the two lines intersect.   If you really like linear algebra and want to solve it using matrices...  There are multiple ways to solve the system of equations using linear algebra (like row reduce the augmented matrix, or use Cramer's rule, etc.). Richard will pick the method of row reducing the augmented matrix here (the cramer's rule or the inverse matrix method don't work here since there are more equations than the variables).  The agumented matrix of the system is Row reducing this matrix we get From here we can read off the solution , .   To find the point of intersection we substitute into the equation for (or into ) to obtain The point of intersection is the terminal point of this vector, that is, .     Determine whether the lines and are parallel, intersect, or are skew.   Observe that the direction vectors are and are not multiples of each other, so the lines are not parallel.  Then the two other possibilities are that the lines intersect or they are skew. We haven't discussed how to check if two lines are skew, but we can check if they intersect. So the question becomes: do the two lines intersect?    If the two lines intersect, then there exist parameter values and such that Equating corresponding components, we get Substituting from the second equation into the first equation we get Using in the first equation gives . Don't forget that there are three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: This is a contradiction, so the two lines do not intersect.   If you again want to solve it using matrices...  The augmented matrix of the system is Row reducing this matrix we get Observe that a pivot appears in the rightmost column, which implies that the system is inconsistent.   Since we have already established that the lines are not parallel, we conclude that the two lines are skew.  The sketch of the two lines is shown below. Observe that these two lines do not intersect and are not parallel. They are not coplanar.   Line (blue) and Line (red)          Assigned Problems for Section 12.2   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of the vector , where and    By the definition of the vector components we have      Let . Which of the following vectors is parallel to ? Which point in the same direction?                         A vector is parallel to if it is a scalar multiple of . It points in the same direction if the multiplying scalar is positive. Using these properties we obtain the following answers:    . The vectors are parallel and point in the same direction.     is not a scalar multiple of , hence these vectors are not parallel.     . The vectors are parallel but point in opposite directions.     is not a scalar multiple of . hence these vectors are not parallel.        Determine whether or not the two vectors and are parallel.   Since the first component of is twice the first component of , if the two vectors are to be parallel, the second component of must be twice the second component of . But it is not; it is times the second component of . Thus the two vectors are not parallel.     Sketch the following vectors, and find their components and lengths:                         By the definition of the standard basis vectors in and the definition of vector length, we obtain the following answers:           Sketch of             Sketch of             Sketch of             Sketch of          In the following exercises, describe the surface.     , with    The equation describes a sphere of radius centered at . The inequality restricts the surface to the upper hemisphere (the top half of the sphere).  The surface is shown in the figure below.   Upper semi-sphere with radius and centered at          , with    The equation describes a cylinder of radius centered on the -axis. The inequality restricts the cylinder to the finite portion between the planes and .  The surface is shown in the figure below.   Cylinder with between and           In the following exercises, give an equation for the indicated surface.    The sphere centered at passing through    The radius of the sphere is the distance between the center and the point on the surface : Thus, the equation of the sphere is      The cylinder passing through the origin with the vertical line through as its central axis.   The vertical line through corresponds to the axis , . Since the cylinder passes through the origin , the radius is the distance from the axis to the origin: Therefore, the equation of the cylinder is        In the following exercises, find a vector parametrization for the line with the given description.    Passes through , direction vector    A vector parametrization of the line is      Passes through , direction vector    Since , we obtain the following parametrization:       Show that and define the same line, where     Show that passes through and that the direction vectors for and are parallel.    We observe first that the direction vectors of and are multiples of each other: Therefore, and are parallel. To show they coincide, it suffices to prove that they share a point in common, so we verify that lies on by solving for : This equation is satisfied for , so and coincide.     Find two different vector parametrizations of the line through with direction vector .   Two different parametrizations are      Determine whether the lines and intersect, and if so, find the point of intersection.   The lines intersect if there exist parameter values and such that Equating corresponding components, we get Substituting from the first equation into the second equation we get We now check whether and satisfy the third equation: We conclude that , is the solution to the equation, hence the two lines intersect.  To find the point of intersection we substitute in the right-hand side of the equation to obtain The point of intersection is the terminal point of this vector, that is,      "
},
{
  "id": "sec122-3DSpaces-2-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     locate points in a three-dimensional Cartesian coordinate system and identify the octants.    calculate the distance between two points in using the distance formula.    identify and write equations for basic surfaces in , including planes, spheres, and cylinders.    perform vector operations (addition, scalar multiplication, and magnitude) in .    determine vector and parametric equations for lines in given a point and a direction, or two points.    analyze the relationship between two lines in space to determine if they are parallel, intersecting, or skew.    "
},
{
  "id": "sec122-3DSpaces-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "sec122-3DSpaces-5",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-5",
  "type": "Figure",
  "number": "12.2.1",
  "title": "",
  "body": "  Right-hand rule for labeling axes in  "
},
{
  "id": "sec122-3DSpaces-6",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "origin "
},
{
  "id": "sec122-3DSpaces-7",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-7",
  "type": "Figure",
  "number": "12.2.2",
  "title": "",
  "body": "  Plotting the following points in  "
},
{
  "id": "sec122-3DSpaces-9",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants first octant "
},
{
  "id": "sec122-3DSpaces-10",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distance "
},
{
  "id": "thm-DistancePoints-R3",
  "level": "2",
  "url": "sec122-3DSpaces.html#thm-DistancePoints-R3",
  "type": "Theorem",
  "number": "12.2.3",
  "title": "Distance Formula in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Distance Formula in   The distance between the points and is    "
},
{
  "id": "sec122-3DSpaces-12",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-12",
  "type": "Proof",
  "number": "12.2.1",
  "title": "A quick proof to show the distance formula in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " A quick proof to show the distance formula in  Let and be two points in . We first construct the point . Then, by applying the Pythagorean Theorem in the right triangle , we have     in   We can see that . To find the hypotenuse , we need to find first.  To find , we will need to construct another point .    in   We apply the Pythagorean Theorem again in the triangle to find :   Hence, we obtain Taking the square root of both sides gives the desired result.  "
},
{
  "id": "subsec-3Space-Surfaces-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-plane -plane -plane "
},
{
  "id": "subsec-3Space-Surfaces-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-4",
  "type": "Figure",
  "number": "12.2.6",
  "title": "",
  "body": "  -, -, and -planes in  "
},
{
  "id": "subsec-3Space-Surfaces-5",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "subsec-3Space-Surfaces-6",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-6",
  "type": "Example",
  "number": "12.2.7",
  "title": "",
  "body": " Describe the following surfaces in and sketch them:                    The equations describe planes in as follows:   The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .   The sketch of these planes is shown below.    Planes , , and in    "
},
{
  "id": "def-StandardEquation-Sphere",
  "level": "2",
  "url": "sec122-3DSpaces.html#def-StandardEquation-Sphere",
  "type": "Definition",
  "number": "12.2.9",
  "title": "Standard Equation of a Sphere in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Standard Equation of a Sphere in   An equation of the sphere in of radius centered at is    "
},
{
  "id": "subsec-3Space-Surfaces-11",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-11",
  "type": "Figure",
  "number": "12.2.10",
  "title": "",
  "body": "  Sphere of radius centered at in  "
},
{
  "id": "subsec-3Space-Surfaces-12",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-12",
  "type": "Note",
  "number": "12.2.11",
  "title": "Hey Richard, can we call this a ball instead of a sphere?",
  "body": " Hey Richard, can we call this a ball instead of a sphere?  The short answer is no... There is a big difference between a sphere and a ball in mathematics.  Observing the standard equation of a sphere, we can see that it only describes the surface of the sphere, not the interior.  Yet, a ball includes both the surface and the interior. An equation of a ball of radius centered at is given by the inequality   If you took MTH 252 (or 252Z) with Richard, you may remember he pointed out the difference between a circle and a disk when he taught the Disk Method. This is the same idea here.  "
},
{
  "id": "subsec-3Space-Surfaces-13",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-13",
  "type": "Example",
  "number": "12.2.12",
  "title": "",
  "body": " Give an equation of the sphere of radius centered at .   Using the standard equation of a sphere, we have which simplifies to    "
},
{
  "id": "subsec-3Space-Surfaces-15",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-15",
  "type": "Example",
  "number": "12.2.13",
  "title": "",
  "body": " Describe the surface with .   If we drop the constraints , then the equation describes a sphere of radius centered at the origin. But we don't get the whole sphere because of the constraints...  Then which part of the sphere do we get if we only allow ?    The equation describes a sphere of radius centered at the origin. However, since we have the constraints , we only get the portion of the sphere that is in the first octant. That is, the surface is one eighth of the sphere.  The surface is shown in the figure below.   Portion of the sphere in the first octant       "
},
{
  "id": "subsec-3Space-Surfaces-17",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-17",
  "type": "Figure",
  "number": "12.2.15",
  "title": "",
  "body": "  Right circular cylinder of radius whose central axis is the vertical line through  "
},
{
  "id": "def-StandardEquation-Cylinder",
  "level": "2",
  "url": "sec122-3DSpaces.html#def-StandardEquation-Cylinder",
  "type": "Definition",
  "number": "12.2.16",
  "title": "Standard Equation of a Cylinder in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Standard Equation of a Cylinder in   An equation of the right circular cylinder in of radius whose central axis is the vertical line through is    "
},
{
  "id": "subsec-3Space-Surfaces-19",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Surfaces-19",
  "type": "Example",
  "number": "12.2.17",
  "title": "",
  "body": " Describe the surface with .   If we drop the constraints , then the equation describes a cylinder of radius whose central axis is the vertical line through the origin. But we don't get the whole cylinder because of the constraints...  Then which part of the cylinder do we get if we only allow ?    The equation describes a cylinder of radius whose central axis is the vertical line through the origin. However, since we have the constraints , we only get the portion of the cylinder where and . That is, we get one fourth of the cylinder.  The surface is shown in the figure below.   Fourth-cylinder with       "
},
{
  "id": "subsec-3Space-Vectors-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-3",
  "type": "Example",
  "number": "12.2.19",
  "title": "",
  "body": " Find the components of the vector , where and . Then sketch the vector.   By the definition of the vector components we have   The sketch of the vector is shown below.   Vector in       "
},
{
  "id": "subsec-3Space-Vectors-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallel equivalent position vectors "
},
{
  "id": "subsec-3Space-Vectors-5",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-5",
  "type": "Example",
  "number": "12.2.21",
  "title": "",
  "body": " Determine whether or not the two vectors and are parallel.   Since the two vectors are parallel.  In addition, since the scalar here is negative, we know that the two vectors point in opposite directions.   "
},
{
  "id": "subsec-3Space-Vectors-6",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude direction "
},
{
  "id": "subsec-3Space-Vectors-7",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combinations "
},
{
  "id": "subsec-3Space-Vectors-8",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard basis vectors "
},
{
  "id": "subsec-3Space-Vectors-9",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-3Space-Vectors-9",
  "type": "Example",
  "number": "12.2.22",
  "title": "",
  "body": " Which vector has the smaller magnitude: or ?   We first find the components of each vector: and Then we compute their magnitudes: and Since , we conclude that has the smaller magnitude.   "
},
{
  "id": "subsec-ParametricLines-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-3",
  "type": "Figure",
  "number": "12.2.23",
  "title": "",
  "body": "  The curve is traced out by the tip of a moving position vector  "
},
{
  "id": "subsec-ParametricLines-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector-valued function "
},
{
  "id": "def-lines-3d",
  "level": "2",
  "url": "sec122-3DSpaces.html#def-lines-3d",
  "type": "Definition",
  "number": "12.2.24",
  "title": "Equation of a Line in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Equation of a Line in   The line through in the direction of is described by   Vector Parametrization:  where .   Parametric Equations:  The parameter takes on values .   "
},
{
  "id": "subsec-ParametricLines-10",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-10",
  "type": "Figure",
  "number": "12.2.25",
  "title": "",
  "body": "  The line in  "
},
{
  "id": "subsec-ParametricLines-12",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-12",
  "type": "Example",
  "number": "12.2.26",
  "title": "",
  "body": " Find an equation of the line that passes through the point in the direction of .   We are given . Therefore, an equation of the line is for . The corresponding parametric equations are for .   "
},
{
  "id": "subsec-ParametricLines-14",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-14",
  "type": "Example",
  "number": "12.2.27",
  "title": "",
  "body": " Find an equation of the line that passes through the points and .   To find an equation of a line, we need a point on the line and a direction vector. So there are really things we need to find out.  The easier part is to find a point on the line (we are given two points on the line!)  The slightly trickier part is to find a direction vector. Can we find a vector parallel to the line using the two points?    A directional vector is . Then we obtain We can use either point or as the point on the line. Using point , we have . Therefore, an equation of the line is for . The corresponding parametric equations are for .   "
},
{
  "id": "subsec-ParametricLines-17",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-17",
  "type": "Example",
  "number": "12.2.28",
  "title": "",
  "body": " Show that and define the same line, where    The line has the direction vector of and passes through the point .  The line has the direction vector of and passes through the point .  If they represent the same line, then and must be parallel, and there must be a point that lies on both lines.    Observe that , so the two direction vectors are parallel.  To show that the two lines share a point in common, we can check if point lies on line . Observe that This implies that lies on line .  Therefore, the two lines represent the same line in .   "
},
{
  "id": "subsec-ParametricLines-18",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skew "
},
{
  "id": "subsec-ParametricLines-19",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-19",
  "type": "Example",
  "number": "12.2.29",
  "title": "",
  "body": " Determine whether the lines and intersect, and if so, find the point of intersection.   Let's just assume that the two lines intersect. If two lines intersect, then they must intersect at a single point.  Now put on your algebra 2 hat and think about how to find the point of intersection of two lines in . (You would set the two equations equal to each other and solve for !)    The lines intersect if there exist parameter values and such that Equating corresponding components, we get This is a system of three equations with two unknowns. If you know linear algebra, feel free to solve it using matrices. Otherwise, we can solve it using basic algebra methods, like substitution or elimination.  Richard assumes no linear algebra knowledge here, so he will use substitution. Substituting from the second equation into the first equation we get Using in the second equation gives . Don't forget that there are. three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: We conclude that , is the solution to the system, hence the two lines intersect.   If you really like linear algebra and want to solve it using matrices...  There are multiple ways to solve the system of equations using linear algebra (like row reduce the augmented matrix, or use Cramer's rule, etc.). Richard will pick the method of row reducing the augmented matrix here (the cramer's rule or the inverse matrix method don't work here since there are more equations than the variables).  The agumented matrix of the system is Row reducing this matrix we get From here we can read off the solution , .   To find the point of intersection we substitute into the equation for (or into ) to obtain The point of intersection is the terminal point of this vector, that is, .   "
},
{
  "id": "subsec-ParametricLines-20",
  "level": "2",
  "url": "sec122-3DSpaces.html#subsec-ParametricLines-20",
  "type": "Example",
  "number": "12.2.31",
  "title": "",
  "body": " Determine whether the lines and are parallel, intersect, or are skew.   Observe that the direction vectors are and are not multiples of each other, so the lines are not parallel.  Then the two other possibilities are that the lines intersect or they are skew. We haven't discussed how to check if two lines are skew, but we can check if they intersect. So the question becomes: do the two lines intersect?    If the two lines intersect, then there exist parameter values and such that Equating corresponding components, we get Substituting from the second equation into the first equation we get Using in the first equation gives . Don't forget that there are three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: This is a contradiction, so the two lines do not intersect.   If you again want to solve it using matrices...  The augmented matrix of the system is Row reducing this matrix we get Observe that a pivot appears in the rightmost column, which implies that the system is inconsistent.   Since we have already established that the lines are not parallel, we conclude that the two lines are skew.  The sketch of the two lines is shown below. Observe that these two lines do not intersect and are not parallel. They are not coplanar.   Line (blue) and Line (red)       "
},
{
  "id": "ws-sec122-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-3",
  "type": "Worksheet Exercise",
  "number": "12.2.5",
  "title": "",
  "body": " Find the components of the vector , where and    By the definition of the vector components we have    "
},
{
  "id": "ws-sec122-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-4",
  "type": "Worksheet Exercise",
  "number": "12.2.13",
  "title": "",
  "body": " Let . Which of the following vectors is parallel to ? Which point in the same direction?                         A vector is parallel to if it is a scalar multiple of . It points in the same direction if the multiplying scalar is positive. Using these properties we obtain the following answers:    . The vectors are parallel and point in the same direction.     is not a scalar multiple of , hence these vectors are not parallel.     . The vectors are parallel but point in opposite directions.     is not a scalar multiple of . hence these vectors are not parallel.      "
},
{
  "id": "ws-sec122-5",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-5",
  "type": "Worksheet Exercise",
  "number": "12.2.25",
  "title": "",
  "body": " Determine whether or not the two vectors and are parallel.   Since the first component of is twice the first component of , if the two vectors are to be parallel, the second component of must be twice the second component of . But it is not; it is times the second component of . Thus the two vectors are not parallel.   "
},
{
  "id": "ws-sec122-6",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-6",
  "type": "Worksheet Exercise",
  "number": "12.2.32",
  "title": "",
  "body": " Sketch the following vectors, and find their components and lengths:                         By the definition of the standard basis vectors in and the definition of vector length, we obtain the following answers:           Sketch of             Sketch of             Sketch of             Sketch of       "
},
{
  "id": "ws-sec122-7-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-7-2",
  "type": "Worksheet Exercise",
  "number": "12.2.33",
  "title": "",
  "body": "  , with    The equation describes a sphere of radius centered at . The inequality restricts the surface to the upper hemisphere (the top half of the sphere).  The surface is shown in the figure below.   Upper semi-sphere with radius and centered at       "
},
{
  "id": "ws-sec122-7-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-7-3",
  "type": "Worksheet Exercise",
  "number": "12.2.35",
  "title": "",
  "body": "  , with    The equation describes a cylinder of radius centered on the -axis. The inequality restricts the cylinder to the finite portion between the planes and .  The surface is shown in the figure below.   Cylinder with between and       "
},
{
  "id": "ws-sec122-8-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-8-2",
  "type": "Worksheet Exercise",
  "number": "12.2.39",
  "title": "",
  "body": " The sphere centered at passing through    The radius of the sphere is the distance between the center and the point on the surface : Thus, the equation of the sphere is    "
},
{
  "id": "ws-sec122-8-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-8-3",
  "type": "Worksheet Exercise",
  "number": "12.2.41",
  "title": "",
  "body": " The cylinder passing through the origin with the vertical line through as its central axis.   The vertical line through corresponds to the axis , . Since the cylinder passes through the origin , the radius is the distance from the axis to the origin: Therefore, the equation of the cylinder is    "
},
{
  "id": "ws-sec122-9-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-9-2",
  "type": "Worksheet Exercise",
  "number": "12.2.43",
  "title": "",
  "body": " Passes through , direction vector    A vector parametrization of the line is    "
},
{
  "id": "ws-sec122-9-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-9-3",
  "type": "Worksheet Exercise",
  "number": "12.2.45",
  "title": "",
  "body": " Passes through , direction vector    Since , we obtain the following parametrization:    "
},
{
  "id": "ws-sec122-10",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-10",
  "type": "Worksheet Exercise",
  "number": "12.2.57",
  "title": "",
  "body": " Show that and define the same line, where     Show that passes through and that the direction vectors for and are parallel.    We observe first that the direction vectors of and are multiples of each other: Therefore, and are parallel. To show they coincide, it suffices to prove that they share a point in common, so we verify that lies on by solving for : This equation is satisfied for , so and coincide.   "
},
{
  "id": "ws-sec122-11",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-11",
  "type": "Worksheet Exercise",
  "number": "12.2.59",
  "title": "",
  "body": " Find two different vector parametrizations of the line through with direction vector .   Two different parametrizations are    "
},
{
  "id": "ws-sec122-12",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-12",
  "type": "Worksheet Exercise",
  "number": "12.2.63",
  "title": "",
  "body": " Determine whether the lines and intersect, and if so, find the point of intersection.   The lines intersect if there exist parameter values and such that Equating corresponding components, we get Substituting from the first equation into the second equation we get We now check whether and satisfy the third equation: We conclude that , is the solution to the equation, hence the two lines intersect.  To find the point of intersection we substitute in the right-hand side of the equation to obtain The point of intersection is the terminal point of this vector, that is,    "
},
{
  "id": "sec123-DotProduct",
  "level": "1",
  "url": "sec123-DotProduct.html",
  "type": "Section",
  "number": "12.3",
  "title": "Dot Product and the Angle Between Two Vectors",
  "body": " Dot Product and the Angle Between Two Vectors   So far, our operations on vectors (addition and scalar multiplication) have resulted in new vectors. But what if we want to multiply two vectors together? It turns out there isn't just one way to do this.  In this section, we introduce the dot product (also known as the scalar product). The dot product of two vectors will tell us how much is one vector pointing in the same direction as another.     After this section, students will be able to:     compute the dot product of two vectors in using the algebraic definition.    use the properties of the dot product to simplify vector expressions.    determine the angle between two vectors and classify the angle as acute, obtuse, or right.    calculate the orthogonal projection of one vector onto another.    decompose a vector into two components with respect to another vector, one parallel to the other vector and one perpendicular to it.      Dot Product  Without further ado, we define the dot product of two vectors as follows:   Dot Product   The dot product  of two vectors is the scalar defined by      You may heard of the dot product in linear algebra before...  You may hear of the term inner product if you took a linear algebra class before. The dot product is a specific example of an inner product defined on (called the standard inner product).  Let be two vectors defined as Then the standard inner product of and , denoted by , is defined as   This section is highly similar to what you may have learned about the inner product in linear algebra. In addition to the theoretical aspects, we will also focus on applications of the dot product in physics.   Observe that we can find the dot product of two vectors by multiplying their corresponding components and adding the results . This is true in (or in general) as well.   Compute the following dot products:                               Remember that the dot product of two vectors results in a scalar (a real number) and not another vector. The dot product has several useful properties that we summarize in the following theorem.   Properties of the Dot Product       , where is the zero vector.     Commutativity:       Pulling out scalars:       Distributive Law:       Relation with length:          Proof(ish) of the above theorem  The proofs of the properties are pretty straightforward using the definition of the dot product. Richard will prove some of them in and leave the rest as exercises for you to verify (especially if you are thinking about majoring in math). You may also want to see if you are convinced that Richard's proofs can be generalized to .     Let . Then     Let and . Then     The proof is left as an exercise for the reader.    The proof is left as an exercise for the reader.    Let . Then       Using these properties, we can prove some cool results! For example, do you know that the sum of the squares of the lengths of the four sides of a parallelogram is equal to the sum of the squares of the lengths of its two diagonals? This is also known as the parallelogram law .   Parallelogram Law         Prove the parallelogram law using the properties of the dot product. The diagram below shows a parallelogram formed by the vectors and .    Parallelogram formed by vectors and    The parallelogram has two diagonals with the lengths of and . Also, the sides have lengths of and , respectively.  We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!         Now that we know what the dot product is and some of its properties, we will next explore why we care about it.    Angle between Two Vectors  Given two vectors, they form an angle between them. But how do we know how big this angle is? The dot product can help us figure this out!  Let's say we have two vectors, and . We call the angle between them and we can construct the vector as shown below:    Vectors and with angle between them   This is essentially a triangle if we drop all the direction arrows. That is, this triangle has sides of lengths , , and .  A relation between the sides of the triangle and the angle is given by the Law of Cosines as follows: Using the relation with length property of the dot product and FOIL-ing, we obtain   We essentially found two ways to represent the quantity . Equating these two expressions together and canceling stuff, we obtain   Observe that we can now solve for the angle between the two vectors by isolating : That is, the dot product gives us a way to compute the angle between two vectors!   Dot Product and the Angle   Let be the angle between two non-zero vectors and . Then     Observe that the angle is being computed using the inverse cosine function. The range of the inverse cosine function is . That is, we consider the angle between two vectors to be the smaller angle formed between them.    By convention, the angle between two vectors is chosen so that .    Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is acute...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is approximately , which is indeed acute.     Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is obtuse...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed obtuse.     Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is a right angle...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed a right angle.    We can find a pattern from the above examples.   If the dot product is positive, then the angle between the vectors is acute.    If the dot product is negative, then the angle between the vectors is obtuse.    If the dot product is zero, then the angle between the vectors is a right angle.   This is true since we know that is positive for acute angles, negative for obtuse angles, and zero for right angles. In addition, when and when . Let's summarize this in a nice little diagram.    Relation between the dot product and the angle between two vectors   This diagram is really demonstrating the famous Cauchy-Schwarz Inequality , which states that the absolute value of the dot product of two vectors is always less than or equal to the product of their individual lengths . Symbolically, this is stated as Observe from the figure that , so , which equals to , cannot be greater than .   Prove the triangle inequality: For any vectors and ,    Of course you can draw a picture to see why this is true but this way isn't rigorous enough. True story, one of Richard's students tried to prove the inequality by drawing a loosey-goosey triangle and \"eyeballing\" the lengths of the sides of the triangle... Not rigorous at all...  Also, just because the inequality holds for one triangle doesn't mean it holds for all triangles!  We want to show that this inequality is true for ALL triangles without relying on the accuracy of a drawing. Relying on definitions, properties, theorems, and algebraic manipulations is a better way to go!  Richard will help you get started. We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!  Also, ... where does the inequality come from? Well the Cauchy Schwarz Inequality involves an inequality! Maybe we can use that somewhere...     The triangle inequality follows immediately by taking the square root of both sides.    Observe that the dot product is zero when two vectors are orthogonal (or perpendicular) to each other. This is how we define orthogonality in general.   Orthogonal Vectors   Two vectors and are orthogonal if and only if . We denote this by .    Based on this definition, we see that the zero vector is orthogonal to every vector since the dot product with the zero vector is always zero.   But Richard... Isn't \"orthogonal\" just another fancy way of saying perpendicular?  Yes and no... They are for sure describing the same idea but with some subtle differences.   Perpendicularity\/Perpendicular is a geometric term that describes two things (like lines, planes, etc.) intersect at a right angle (90°). This idea only makes sense in a geometric context where we can visualize angles.   Orthogonality\/Orthogonal is an algebraic term that describes two vectors whose dot product is zero. This idea makes sense in any dimension and doesn't rely on visualizing angles. For example, the zero vector is orthogonal to every vector but it doesn't make sense to say that the zero vector is perpendicular to every vector since the zero vector doesn't have a length (we don't say a point is perpendicular to a line).  Surprise surprise, there is another term that describes the same idea in math: normality\/normal . Normality is often used to describe things that are orthogonal\/perpendicular to a surface\/plane\/line. For example, a normal vector to a plane is a vector that is orthogonal to every vector lying in that plane.    Determine whether the following vectors are orthogonal and, if not, whether the angle between them is acute or obtuse.    and      and      and       We can determine whether the vectors are orthogonal by computing their dot products.   Observe that . Therefore, the vectors are orthogonal.    Observe that . Since the dot product is positive, the angle between the vectors is acute.    Observe that . Since the dot product is negative, the angle between the vectors is obtuse.       Remember our standard basis vectors in ? These vectors are . They are mutually orthogonal and have length . So we have Now we can compute the product using these basis vectors!   Compute the dot product    Remember that the dot product is distributive! That is, we can FOIL this expression out like we would with regular multiplication. Then we can use the properties of the dot product with the basis vectors to simplify!           Orthogonal Projection  Remember that the dot product should tell us something about how much one vector goes in the direction of another vector. You may get the idea that the sign of the dot product tells us whether the vectors point in similar directions (acute angle) or opposite directions (obtuse angle). But we can actually know more! The orthogonal projection of one vector onto another vector, which is obtained using the dot product, gives us a precise way to measure how much one vector goes in the direction of another vector.  Let's say we have two vectors and and we cast a shadow of on the light through . This shadow is called the orthogonal projection of onto and is denoted by .    The Projection of onto   But how do we find this projection vector? We can use the dot product to help us out!  Let's assume two vectors are pointing in the same(ish) direction, which means the angle between them is acute. The diagram is shown below and our goal is to find the length and the direction of the projection vector.    The Projection of onto with an acute angle between them   Let's tackle the length first. Using trigonometry (and yes there is a right triangle in there somewhere that allows us to use trig), we see that the length of the projection vector is   Next, we need to find the direction of the projection vector. Clearly, the projection vector points in the same direction as . Yet, we can't just simply multiply the length by . If we did that, the length of the projection vector would be off by a factor of . To fix this, we use the unit vector in the direction of , which is .  Therefore, the projection vector is This projection vector is also denoted by since we can think of it as the component of that is parallel to .   Projection of onto   Assume . The projection of onto is the vector This is sometimes denoted by . The scalar is called the scalar component of onto and is sometimes denoted by .     But Richard... What if the angle between the vectors is obtuse?  The previous result was derived assuming the angle between the vectors is acute. But what if the angle is obtuse, like in the diagram below? Does the formula for the projection vector still hold?    The Projection of onto with an obtuse angle between them   The answer is yes but the work is a bit different. Richard will encourage you to try proving the formula for the projection vector in this case as an exercise.   Richard's proof if you want to check your proof  The work is almost identical to the acute angle case with one bit of difference.  Let be an obtuse angle, which means . Using trigonometry, we can find the length of the projection vector as follows: While there is a negative sign in front of the length, this is a positive quantity since is negative for .  Next, we find the direction of the projection vector. Clearly, the projection vector points in the opposite direction as (look at the diagram!). Then the unit vector in the direction opposite to is .  Therefore, the projection vector is which is the same formula as before.    Observe that Richard didn't bother with the case when the angle between the vectors is a right angle. This is because the projection vector is simply the zero vector in this case since .   Find the projection of onto where and .   To help you visualize the projection, Richard coded up the following fancy diagram:   Projection of onto      The goal is to find the green projection vector in the diagram above.    The projection of onto is the following vector We compute the values in this expression: Hence,     Now that we know what the projection looks like, the next question to consider is: how different is the vector from its projection? A quick subtraction will give us the answer.    Vector (red), (blue), (green), and (orange)   Observe that this difference vector is orthogonal to . This is one way that we can decompose the vector into two components with respect to : one component that is parallel to (aka the projection vector) and another component that is orthogonal to . Remember we also denote the projection vector by (this is sometimes referred as the parallel component). Then we can denote the difference vector by (this is sometimes referred to as the normal component).  This gives us the following decomposition of with respect to :     Vector (red), (blue), (green), and (orange)   This is actually the Orthogonal Decomposition Theorem in linear algebra.   Find the decomposition for the vectors and .   To help you visualize the decomposition, Richard coded up the following fancy diagram:   Decomposition of with respect to      The goal is to find the two components and in the diagram above.    We first compute and to find the projection of onto : Hence, We now find the vector by computing the difference: Thus, we have     The ability to decompose vectors into orthogonal components is useful in many applications. For example, when an object rests on an inclined plane, the gravitational force acting on the object equals its weight, which is directly vertically downward. However, to analyze the motion of the object on the inclined plane, it is often helpful to decompose the gravitational force vector into two components: one parallel to the plane (which determines the tendency of the object to slide down the plane) and another perpendicular to the plane (which determines its tendency to \"stick\" to the plane).    Gravitational force decomposition on an inclined plane    A 10-lb block rests on a plane that is inclined at 30° below the horizontal. Find the components of the gravitational force parallel and normal perpendicular to the plane.   See below for the diagram of the situation:    Gravitational force Vector (red), Parallel Component (green), and Perpendicular Component (orange)   The goal here is to find the green and the orange vectors in the diagram above.    The gravitational force acting on the block equals the weight o the block. Using the coordinate system, the force acts in the negative -direction, so   The direction down the plane is given by the vector is   Hence, the component of the force parallel to the plane is   Next, the component of the force perpendicular to the plane is       Assigned Problems for Section 12.3   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Compute the dot product    We use properties of the dot product to obtain      Determine whether the two vectors and are orthogonal and, if not, whether the angle between them is acute or obtuse.   We compute the dot product of the two vectors: Since the dot product is negative, the angle between the vectors is obtuse.     Find the angle bewteen the vectors and .   We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,      Simplify the expression    By properties of the dot product we obtain      Use the properties of the dot product to evaluate the expression , assuming that , , and .   By properties of the dot product we obtain      Assume that , , and the angle between and is . Determine                       We use the relation between the dot product and the angle between two vectors to write     By the relation of the dot product with length and by properties of the dot product we have We now substitute from part a) and the given information, obtaining     We express the length in terms of a dot product and use properties of the dot product. This gives Substituting from part a) and the given values yields         Find the projection of along , where and .   The projection of along is the following vector: We compute the values in this expression: Hence,      Find the decomposition with respect to , where and .   We first compute and to find the projection of along : Hence, We now find the vector orthogonal to by computing the difference: Thus, we have      Find the angle between and in the following figure.    Unit cube in    The cosine of the angle between the vectors and is   We compute the vectors and and then calculate their dot product and lengths. We get Substituting these values into the formula for the cosine of the angle and solving for gives      Suppose a 45 km\/h wind is blowing out of the north toward a bridge oriented east of north. Express the corresponding wind vector as a sum of vectors, one parallel to the bridge and one perpendicular to it. Also, compute the magnitude of the perpendicular term to determine the speed of the part of the wind blowing directly at the bridge.   Richard drew a pretty diagram based on his interpretation of this problem (by saying drawing, what he really meant is coding using TikZ...). Your goal is to find the two components of the vector , one parallel to and one orthogonal to .    Wind vector decomposition     We set up a coordinate system where North is the direction of the positive -axis and East is the positive -axis. Since the wind is blowing out of the North, it heads South, so .    Wind vector decomposition   The bridge is oriented East of North. We can define a unit vector along the bridge direction using trigonometry: the -component is and the -component is .   We first find , the vector parallel to the bridge by computing the projection of along : Next, we find , the vector perpendicular to the bridge by computing the difference : Thus, the decomposition is   To find the speed of the wind blowing directly at the bridge, we compute the magnitude of the perpendicular component:      Calculate the force (in newtons) required to push a 40-kg wagon up a incline.      Gravity exerts a force of magnitude newtons where . The magnitude of the force required to push the wagon equals the component of the force along the ramp. Resolving into a sum , where is the force along the ramp and is the force orthogonal to the ramp, we need to find the magnitude of .     The angle between and the ramp is . Hence, Therefore the minimum force required to push the wagon is N.  Actually, this is the force required to keep the wagon from sliding down the hill; any slight amount greater than this force will serve to push it up the hill.     Prove that .   We expand the left-hand side using the property and the distributive property of the dot product.  First, we expand the term :   Next, we expand the term :   Finally, we subtract the second expression from the first:      "
},
{
  "id": "sec123-DotProduct-2-2",
  "level": "2",
  "url": "sec123-DotProduct.html#sec123-DotProduct-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec123-DotProduct-3",
  "level": "2",
  "url": "sec123-DotProduct.html#sec123-DotProduct-3",
  "type": "Objectives",
  "number": "12.3",
  "title": "",
  "body": "  After this section, students will be able to:     compute the dot product of two vectors in using the algebraic definition.    use the properties of the dot product to simplify vector expressions.    determine the angle between two vectors and classify the angle as acute, obtuse, or right.    calculate the orthogonal projection of one vector onto another.    decompose a vector into two components with respect to another vector, one parallel to the other vector and one perpendicular to it.    "
},
{
  "id": "def-DotProduct",
  "level": "2",
  "url": "sec123-DotProduct.html#def-DotProduct",
  "type": "Definition",
  "number": "12.3.1",
  "title": "Dot Product.",
  "body": " Dot Product   The dot product  of two vectors is the scalar defined by    "
},
{
  "id": "subsec-DotProduct-4",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-4",
  "type": "Note",
  "number": "12.3.2",
  "title": "You may heard of the dot product in linear algebra before....",
  "body": " You may heard of the dot product in linear algebra before...  You may hear of the term inner product if you took a linear algebra class before. The dot product is a specific example of an inner product defined on (called the standard inner product).  Let be two vectors defined as Then the standard inner product of and , denoted by , is defined as   This section is highly similar to what you may have learned about the inner product in linear algebra. In addition to the theoretical aspects, we will also focus on applications of the dot product in physics.  "
},
{
  "id": "subsec-DotProduct-6",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-6",
  "type": "Example",
  "number": "12.3.3",
  "title": "",
  "body": " Compute the following dot products:                              "
},
{
  "id": "thm-DotProductProperties",
  "level": "2",
  "url": "sec123-DotProduct.html#thm-DotProductProperties",
  "type": "Theorem",
  "number": "12.3.4",
  "title": "Properties of the Dot Product.",
  "body": " Properties of the Dot Product       , where is the zero vector.     Commutativity:       Pulling out scalars:       Distributive Law:       Relation with length:        "
},
{
  "id": "subsec-DotProduct-9",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-9",
  "type": "Proof",
  "number": "1",
  "title": "Proof(ish) of the above theorem.",
  "body": " Proof(ish) of the above theorem  The proofs of the properties are pretty straightforward using the definition of the dot product. Richard will prove some of them in and leave the rest as exercises for you to verify (especially if you are thinking about majoring in math). You may also want to see if you are convinced that Richard's proofs can be generalized to .     Let . Then     Let and . Then     The proof is left as an exercise for the reader.    The proof is left as an exercise for the reader.    Let . Then      "
},
{
  "id": "subsec-DotProduct-10",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram law "
},
{
  "id": "thm-ParallelogramLaw",
  "level": "2",
  "url": "sec123-DotProduct.html#thm-ParallelogramLaw",
  "type": "Theorem",
  "number": "12.3.5",
  "title": "Parallelogram Law.",
  "body": " Parallelogram Law       "
},
{
  "id": "subsec-DotProduct-12",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-12",
  "type": "Example",
  "number": "12.3.6",
  "title": "",
  "body": " Prove the parallelogram law using the properties of the dot product. The diagram below shows a parallelogram formed by the vectors and .    Parallelogram formed by vectors and    The parallelogram has two diagonals with the lengths of and . Also, the sides have lengths of and , respectively.  We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!        "
},
{
  "id": "subsec-DotProduct-Angles-4",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-4",
  "type": "Figure",
  "number": "12.3.8",
  "title": "",
  "body": "  Vectors and with angle between them  "
},
{
  "id": "thm-DotProductAngle",
  "level": "2",
  "url": "sec123-DotProduct.html#thm-DotProductAngle",
  "type": "Theorem",
  "number": "12.3.9",
  "title": "Dot Product and the Angle.",
  "body": " Dot Product and the Angle   Let be the angle between two non-zero vectors and . Then    "
},
{
  "id": "subsec-DotProduct-Angles-11",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-11",
  "type": "Figure",
  "number": "12.3.10",
  "title": "",
  "body": "  By convention, the angle between two vectors is chosen so that .  "
},
{
  "id": "subsec-DotProduct-Angles-12",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-12",
  "type": "Example",
  "number": "12.3.11",
  "title": "",
  "body": " Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is acute...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is approximately , which is indeed acute.   "
},
{
  "id": "subsec-DotProduct-Angles-13",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-13",
  "type": "Example",
  "number": "12.3.13",
  "title": "",
  "body": " Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is obtuse...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed obtuse.   "
},
{
  "id": "subsec-DotProduct-Angles-14",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-14",
  "type": "Example",
  "number": "12.3.15",
  "title": "",
  "body": " Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is a right angle...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed a right angle.   "
},
{
  "id": "subsec-DotProduct-Angles-16",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-16",
  "type": "Figure",
  "number": "12.3.17",
  "title": "",
  "body": "  Relation between the dot product and the angle between two vectors  "
},
{
  "id": "subsec-DotProduct-Angles-17",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy-Schwarz Inequality "
},
{
  "id": "subsec-DotProduct-Angles-18",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-18",
  "type": "Example",
  "number": "12.3.18",
  "title": "",
  "body": " Prove the triangle inequality: For any vectors and ,    Of course you can draw a picture to see why this is true but this way isn't rigorous enough. True story, one of Richard's students tried to prove the inequality by drawing a loosey-goosey triangle and \"eyeballing\" the lengths of the sides of the triangle... Not rigorous at all...  Also, just because the inequality holds for one triangle doesn't mean it holds for all triangles!  We want to show that this inequality is true for ALL triangles without relying on the accuracy of a drawing. Relying on definitions, properties, theorems, and algebraic manipulations is a better way to go!  Richard will help you get started. We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!  Also, ... where does the inequality come from? Well the Cauchy Schwarz Inequality involves an inequality! Maybe we can use that somewhere...     The triangle inequality follows immediately by taking the square root of both sides.   "
},
{
  "id": "subsec-DotProduct-Angles-19",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "def-OrthogonalVectors",
  "level": "2",
  "url": "sec123-DotProduct.html#def-OrthogonalVectors",
  "type": "Definition",
  "number": "12.3.19",
  "title": "Orthogonal Vectors.",
  "body": " Orthogonal Vectors   Two vectors and are orthogonal if and only if . We denote this by .   "
},
{
  "id": "subsec-DotProduct-Angles-22",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-22",
  "type": "Note",
  "number": "12.3.20",
  "title": "But Richard... Isn’t \"orthogonal\" just another fancy way of saying perpendicular?",
  "body": " But Richard... Isn't \"orthogonal\" just another fancy way of saying perpendicular?  Yes and no... They are for sure describing the same idea but with some subtle differences.   Perpendicularity\/Perpendicular is a geometric term that describes two things (like lines, planes, etc.) intersect at a right angle (90°). This idea only makes sense in a geometric context where we can visualize angles.   Orthogonality\/Orthogonal is an algebraic term that describes two vectors whose dot product is zero. This idea makes sense in any dimension and doesn't rely on visualizing angles. For example, the zero vector is orthogonal to every vector but it doesn't make sense to say that the zero vector is perpendicular to every vector since the zero vector doesn't have a length (we don't say a point is perpendicular to a line).  Surprise surprise, there is another term that describes the same idea in math: normality\/normal . Normality is often used to describe things that are orthogonal\/perpendicular to a surface\/plane\/line. For example, a normal vector to a plane is a vector that is orthogonal to every vector lying in that plane.  "
},
{
  "id": "subsec-DotProduct-Angles-23",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-23",
  "type": "Example",
  "number": "12.3.21",
  "title": "",
  "body": " Determine whether the following vectors are orthogonal and, if not, whether the angle between them is acute or obtuse.    and      and      and       We can determine whether the vectors are orthogonal by computing their dot products.   Observe that . Therefore, the vectors are orthogonal.    Observe that . Since the dot product is positive, the angle between the vectors is acute.    Observe that . Since the dot product is negative, the angle between the vectors is obtuse.      "
},
{
  "id": "subsec-DotProduct-Angles-25",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-DotProduct-Angles-25",
  "type": "Example",
  "number": "12.3.22",
  "title": "",
  "body": " Compute the dot product    Remember that the dot product is distributive! That is, we can FOIL this expression out like we would with regular multiplication. Then we can use the properties of the dot product with the basis vectors to simplify!        "
},
{
  "id": "subsec-OrthogonalProjection-3",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal projection "
},
{
  "id": "subsec-OrthogonalProjection-4",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-4",
  "type": "Figure",
  "number": "12.3.23",
  "title": "",
  "body": "  The Projection of onto  "
},
{
  "id": "subsec-OrthogonalProjection-7",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-7",
  "type": "Figure",
  "number": "12.3.24",
  "title": "",
  "body": "  The Projection of onto with an acute angle between them  "
},
{
  "id": "def-OrthogonalProjection",
  "level": "2",
  "url": "sec123-DotProduct.html#def-OrthogonalProjection",
  "type": "Definition",
  "number": "12.3.25",
  "title": "Projection of <span class=\"process-math\">\\(\\v{u}\\)<\/span> onto <span class=\"process-math\">\\(\\v{v}\\)<\/span>.",
  "body": " Projection of onto   Assume . The projection of onto is the vector This is sometimes denoted by . The scalar is called the scalar component of onto and is sometimes denoted by .   "
},
{
  "id": "subsec-OrthogonalProjection-12",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-12",
  "type": "Note",
  "number": "12.3.26",
  "title": "But Richard... What if the angle between the vectors is obtuse?",
  "body": " But Richard... What if the angle between the vectors is obtuse?  The previous result was derived assuming the angle between the vectors is acute. But what if the angle is obtuse, like in the diagram below? Does the formula for the projection vector still hold?    The Projection of onto with an obtuse angle between them   The answer is yes but the work is a bit different. Richard will encourage you to try proving the formula for the projection vector in this case as an exercise.   Richard's proof if you want to check your proof  The work is almost identical to the acute angle case with one bit of difference.  Let be an obtuse angle, which means . Using trigonometry, we can find the length of the projection vector as follows: While there is a negative sign in front of the length, this is a positive quantity since is negative for .  Next, we find the direction of the projection vector. Clearly, the projection vector points in the opposite direction as (look at the diagram!). Then the unit vector in the direction opposite to is .  Therefore, the projection vector is which is the same formula as before.   "
},
{
  "id": "subsec-OrthogonalProjection-14",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-14",
  "type": "Example",
  "number": "12.3.28",
  "title": "",
  "body": " Find the projection of onto where and .   To help you visualize the projection, Richard coded up the following fancy diagram:   Projection of onto      The goal is to find the green projection vector in the diagram above.    The projection of onto is the following vector We compute the values in this expression: Hence,    "
},
{
  "id": "subsec-OrthogonalProjection-16",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-16",
  "type": "Figure",
  "number": "12.3.30",
  "title": "",
  "body": "  Vector (red), (blue), (green), and (orange)  "
},
{
  "id": "subsec-OrthogonalProjection-19",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-19",
  "type": "Figure",
  "number": "12.3.31",
  "title": "",
  "body": "  Vector (red), (blue), (green), and (orange)  "
},
{
  "id": "subsec-OrthogonalProjection-20",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Orthogonal Decomposition Theorem "
},
{
  "id": "subsec-OrthogonalProjection-21",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-21",
  "type": "Example",
  "number": "12.3.32",
  "title": "",
  "body": " Find the decomposition for the vectors and .   To help you visualize the decomposition, Richard coded up the following fancy diagram:   Decomposition of with respect to      The goal is to find the two components and in the diagram above.    We first compute and to find the projection of onto : Hence, We now find the vector by computing the difference: Thus, we have    "
},
{
  "id": "subsec-OrthogonalProjection-23",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-23",
  "type": "Figure",
  "number": "12.3.34",
  "title": "",
  "body": "  Gravitational force decomposition on an inclined plane  "
},
{
  "id": "subsec-OrthogonalProjection-24",
  "level": "2",
  "url": "sec123-DotProduct.html#subsec-OrthogonalProjection-24",
  "type": "Example",
  "number": "12.3.35",
  "title": "",
  "body": " A 10-lb block rests on a plane that is inclined at 30° below the horizontal. Find the components of the gravitational force parallel and normal perpendicular to the plane.   See below for the diagram of the situation:    Gravitational force Vector (red), Parallel Component (green), and Perpendicular Component (orange)   The goal here is to find the green and the orange vectors in the diagram above.    The gravitational force acting on the block equals the weight o the block. Using the coordinate system, the force acts in the negative -direction, so   The direction down the plane is given by the vector is   Hence, the component of the force parallel to the plane is   Next, the component of the force perpendicular to the plane is    "
},
{
  "id": "ws-sec123-3",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-3",
  "type": "Worksheet Exercise",
  "number": "12.3.11",
  "title": "",
  "body": " Compute the dot product    We use properties of the dot product to obtain    "
},
{
  "id": "ws-sec123-4",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-4",
  "type": "Worksheet Exercise",
  "number": "12.3.13",
  "title": "",
  "body": " Determine whether the two vectors and are orthogonal and, if not, whether the angle between them is acute or obtuse.   We compute the dot product of the two vectors: Since the dot product is negative, the angle between the vectors is obtuse.   "
},
{
  "id": "ws-sec123-5",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-5",
  "type": "Worksheet Exercise",
  "number": "12.3.25",
  "title": "",
  "body": " Find the angle bewteen the vectors and .   We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,    "
},
{
  "id": "ws-sec123-6",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-6",
  "type": "Worksheet Exercise",
  "number": "12.3.37",
  "title": "",
  "body": " Simplify the expression    By properties of the dot product we obtain    "
},
{
  "id": "ws-sec123-7",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-7",
  "type": "Worksheet Exercise",
  "number": "12.3.43",
  "title": "",
  "body": " Use the properties of the dot product to evaluate the expression , assuming that , , and .   By properties of the dot product we obtain    "
},
{
  "id": "ws-sec123-8",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-8",
  "type": "Worksheet Exercise",
  "number": "12.3.48",
  "title": "",
  "body": " Assume that , , and the angle between and is . Determine                       We use the relation between the dot product and the angle between two vectors to write     By the relation of the dot product with length and by properties of the dot product we have We now substitute from part a) and the given information, obtaining     We express the length in terms of a dot product and use properties of the dot product. This gives Substituting from part a) and the given values yields       "
},
{
  "id": "ws-sec123-9",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-9",
  "type": "Worksheet Exercise",
  "number": "12.3.57",
  "title": "",
  "body": " Find the projection of along , where and .   The projection of along is the following vector: We compute the values in this expression: Hence,    "
},
{
  "id": "ws-sec123-10",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-10",
  "type": "Worksheet Exercise",
  "number": "12.3.69",
  "title": "",
  "body": " Find the decomposition with respect to , where and .   We first compute and to find the projection of along : Hence, We now find the vector orthogonal to by computing the difference: Thus, we have    "
},
{
  "id": "ws-sec123-11",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-11",
  "type": "Worksheet Exercise",
  "number": "12.3.75",
  "title": "",
  "body": " Find the angle between and in the following figure.    Unit cube in    The cosine of the angle between the vectors and is   We compute the vectors and and then calculate their dot product and lengths. We get Substituting these values into the formula for the cosine of the angle and solving for gives    "
},
{
  "id": "ws-sec123-12",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-12",
  "type": "Worksheet Exercise",
  "number": "12.3.85",
  "title": "",
  "body": " Suppose a 45 km\/h wind is blowing out of the north toward a bridge oriented east of north. Express the corresponding wind vector as a sum of vectors, one parallel to the bridge and one perpendicular to it. Also, compute the magnitude of the perpendicular term to determine the speed of the part of the wind blowing directly at the bridge.   Richard drew a pretty diagram based on his interpretation of this problem (by saying drawing, what he really meant is coding using TikZ...). Your goal is to find the two components of the vector , one parallel to and one orthogonal to .    Wind vector decomposition     We set up a coordinate system where North is the direction of the positive -axis and East is the positive -axis. Since the wind is blowing out of the North, it heads South, so .    Wind vector decomposition   The bridge is oriented East of North. We can define a unit vector along the bridge direction using trigonometry: the -component is and the -component is .   We first find , the vector parallel to the bridge by computing the projection of along : Next, we find , the vector perpendicular to the bridge by computing the difference : Thus, the decomposition is   To find the speed of the wind blowing directly at the bridge, we compute the magnitude of the perpendicular component:    "
},
{
  "id": "ws-sec123-13",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-13",
  "type": "Worksheet Exercise",
  "number": "12.3.87",
  "title": "",
  "body": " Calculate the force (in newtons) required to push a 40-kg wagon up a incline.      Gravity exerts a force of magnitude newtons where . The magnitude of the force required to push the wagon equals the component of the force along the ramp. Resolving into a sum , where is the force along the ramp and is the force orthogonal to the ramp, we need to find the magnitude of .     The angle between and the ramp is . Hence, Therefore the minimum force required to push the wagon is N.  Actually, this is the force required to keep the wagon from sliding down the hill; any slight amount greater than this force will serve to push it up the hill.   "
},
{
  "id": "ws-sec123-14",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-14",
  "type": "Worksheet Exercise",
  "number": "12.3.91",
  "title": "",
  "body": " Prove that .   We expand the left-hand side using the property and the distributive property of the dot product.  First, we expand the term :   Next, we expand the term :   Finally, we subtract the second expression from the first:    "
},
{
  "id": "sec124-CrossProduct",
  "level": "1",
  "url": "sec124-CrossProduct.html",
  "type": "Section",
  "number": "12.4",
  "title": "The Cross Product",
  "body": " The Cross Product   In the previous section, we learned about the Dot Product , a way to multiply two vectors to get a scalar (a single number). You might be wondering whether there is another way to multiply two vectors?  The answer is yes! We can multiply two vectors in a special way to get a third vector. This is called the Cross Product . However, unlike the dot product which works in any dimension, the cross product is special. It only works meaningfully in . This operation is incredibly useful for finding orthogonal directions, calculating areas, and understanding rotation in physics.    After this section, students will be able to:    compute the cross product of two vectors using determinants.  use standard basis properties to simplify cross product calculations.  calculate the area of a parallelogram and the volume of a parallelepiped.  apply the cross product to physics problems involving torque.     Let's dive right into the definition. The formula can look a bit intimidating at first, but we will use a tool called a determinant to help us remember it.   The Cross Product   Given two vectors and in , the cross product  is the vector defined by:     Wow this definition looks crazy! No one should memorize this long of a formula! If you know a bit linear algebra, the cross product can be computed using the determinant .  Given the two vectors and , we can construct a matrix as follows: where the , , and are the standard basis vectors in .  It turns out that the cross product is the determinant of this matrix. That is,   P.S.: Yes Richard did a cofactor expansion on the first row in his work above. Remember that this isn't really a linear algebra class so he will not go in depth on the cofactor expansion. If linear algebra isn't your thing and you don't want to memorize the formula (no one should), you can find the determine of a 3x3 matrix using the lattice method. Below is a quick video tutorial on how to do that:   Quick Tutorial on Computing the Determinant of a 3x3 Matrix     If you prefer to have a list of steps for the lattice method...  Richard understands that not everyone learn how to compute the determinant of a square matrix. And we are only working with the determinant of a 3x3 matrix here, so lattice method is a quick and easy way to compute it.   P.S.: The lattice method here will ONLY work to find the determinant of a 3x3 matrix! This is NOT generalizable to larger matrices!  Here are the steps to compute the determinant of a 3x3 matrix using the lattice method:   Write down the 3x3 matrix and then duplicate the first two columns to the right of the matrix.    Draw diagonals from the top left to bottom right and multiply the three numbers on each diagonal. Then add these products together.    Next, draw diagonals from the top right to bottom left and multiply the three numbers on each diagonal. Then add these products together.    Finally, subtract the sum from step 3 from the sum from step 2 to get the determinant.     Below is a more visual representation of the steps above:    Lattice Method to calculate the determinant of a 3x3 matrix   Then the determinant is calculated as   In practice with the cross product, the first row will be the standard basis vectors in , the second row will be the components of the first vector, and the third row will be the components of the second vector.    Compute for and .      Below is a quick sketch to visualize the two vectors and their cross product.   Visualizing for and        Now that we know how the cross product works, let's explore some of its important properties!   Properties of the Cross Product  Let's start off by observing the behavior of the cross product in the . The most obvious observation here is that is also a vector!  We can also see that is orthogonal to both and . It turns out that the cross product always produces a vector that is perpendicular to both input vectors, following the right-hand rule , which states that when the fingers of your right hand curl from to , your thumb points to the same side of the plane spanned by and as their cross product .    Right-Hand Rule for Cross Product   Other than these geometric properties, the cross product also has several algebraic properties that are useful in computations.   Basic Properties of the Cross Product       (Anticommutative Property)     (Cross Product with Itself is Zero)     if and only if either for some scalar or      (Scalar Multiplication)        (Distributive Property)       Some of the results can be justified directly from the right-hand rule and geometric intuition. For example, the anticommutative property makes sense because switching the order of the vectors reverses the direction of the resulting vector. As a mathematician, we should also verify these properties using the definition of the cross product (the one with the determinant).   Some Proofs of Cross Product Properties  Richard will prove some of these properties using the determinant definition of the cross product. Some will be left as exercises for the reader.   Let and . Then we obtain Thus, the cross product is anticommutative.    Let . Then we have     Left as an exercise to the reader.    Let and . Then for the first part of the equality, we obtain The proof that follows a similar calculation by placing the scalars in the second row of the determinant. Thus, .    Left as an exercise to the reader.      The most fun thing about the cross product is how it interacts with the standard basis vectors in . Recall the standard basis vectors are , , and . Because these are orthogonal unit vectors, following the right-hand rule, we have a cyclic pattern:       If you reverse the order, you get the negative (anticommutative):       The following circle summarizes these properties:    Circle for Computing the Cross Product of Standard Basis Vectors   If you don't mind some FOIL-ing and combining like terms, you can actually use this circle to compute the cross product instead of the determinant!   Calculate the cross product .        This is actually how the determinant formula is derived! If we write and and expand like a polynomial, we can use the rules above to simplify the terms.   If you want to see a bunch of letters here to derive the formula...  To be a due diligent mathematician, Richard will show you how to derive the determinant formula from the standard basis properties (and there are a lot of the typing here...).  Let and . Then we have      Geometry: Area of a Parallelogram  We know the direction of is orthogonal to the inputs (given by the Right Hand Rule). But what about its magnitude ?  It turns out that the magnitude of the cross product is very similar to the dot product, but with a small twist. Rather than using the cosine of the angle between the vectors, we use the sine of the angle.   Magnitude of the Cross Product    where is the angle between the vectors.    The proof of this theorem is at the end of the section in your textbook, so Richard will not repeat it here. It requires an identity that links the dot product and cross product together. Feel free to read through it later if you are interested!   And Richard will include the proof here for the completeness of his notes  The proof of the magnitude of the cross product really relies on a key identity called the Lagrange Identity in vector notation Let's prove this identity first.  We can prove this identity using the \"meet in the middle\" approach. That is, we want to manipulate both sides of the equation separately to arrive at the same expression.  Let and . Then we have Then we obtain On the other hand, we have Observe that the last steps in each expression are identical (you may want to do some reordering of terms to make it clear), so the Lagrange Identity holds.  Now that we know the Lagrange Identity holds, we can use it to prove the magnitude of the cross product theorem. We can start with the Lagrange Identity and substitute in the formula for the dot product in terms of the angle between the vectors. Taking the square root of both sides gives us the desired result.   Geometrically, this value represents the Area of the Parallelogram spanned by the two vectors (that is, the parallelogram formed by and where the two adjacent sides are and ). The following diagram illustrates this idea:    Area of the parallelogram spanned by vectors and .   Observe that the area of the parallelogram is the base times the height, where the base is and the height is (by basic trig). Hence, the area of this parallelogram is , which is exactly the magnitude of the cross product, !   Find the area of the parallelogram with vertices , , , and .   To help you visualize things, Richard coded the parallelogram below.   The parallelogram spanned by vectors and with axes.        We choose as our \"anchor\" point. The two vectors originating from to its neighbors and are:   (Note: We do not need to use vertex for the calculation, as , , and are sufficient to define the dimensions of the parallelogram.)  Now, we compute the cross product :   Finally, the area is the magnitude of this normal vector:     Observe that we really need three points to find the area of the parallelogram. Recall three points can also form a triangle, so we can also find the area of a triangle using the cross product. The area of a triangle is just half of the parallelogram formed by the same two vectors.   Find the area of the triangle with vertices , , and .   Richard coded the triangle and its vectors below to help you visualize the problem.   Visualization of the triangle vertices and vectors.      The area of a triangle is half the area of the parallelogram spanned by two vectors originating from the same vertex.    First, we find the vectors representing two sides of the triangle originating from :   Next, we calculate the cross product using the determinant:   Now, we find the magnitude of this normal vector:   Finally, the area of the triangle is half the magnitude of the cross product:     We can summarize this result in the following theorem:   Area of Parallelogram and Triangle   If is the parallelogram spanned by and , and is the triangle spanned by and , then and       Geometry: Volume of a Parallelepiped  If we add a third vector , we lift the 2D parallelogram into a 3D slanted box called a Parallelepiped .   A parallelepiped spanned by three vectors      We can actually find the volume of the parallelepiped using the cross product (and dot product) together! Generally speaking, the volume of a pallelepiped is the area of the base times the height.    Volume of a parallelepiped   Observe that the base is the parallelogram spanned by and , so its area is . Also, a little trigonometry can tell us that the height of the parallelepiped is , where is the angle between and . Hence, the volume of the parallelepiped is Observe that this is exactly the dot product of and ! Hence, the volume of the parallelepiped is the absolute value of the dot product of some cross product and a vector, to ensure the volume is always nonnegative. The dot product of a cross product and a vector is called the Vector Triple Product .   Volume of a Parallelepiped   Let be nonzero vectors in . Then the parallelepiped spanned by , , and has volume where is the vector triple product .    We can actually come up witl a cool formula to find the vector triple product using determinants! Let's say , , and . Then we have Hence, we can find the vector triple product, which will determine the volume of the parallelepiped, using a 3x3 determinant!  P.S.: the last step in the above derivation can be justified by the cofactor expansion along the first row of the 3x3 matrix. If this step doesn't seem convinving to you, feel free to actually find the determinant of the last two steps and verify they are the same!  Sometimes, rather than listing out all the components of the vectors, we can represent the 3x3 determinant using the vectors themselves like this:    Consider the parallelepiped determined by the vectors , , and originating from the point .     Find the area of the base parallelogram spanned by vectors and .    Find the volume of the parallelepiped.      As always, Richard coded a pretty diagram below to help you visualize what the parallelogram and the parallelepiped look like!   Visualization of the parallelepiped with base defined by and .           The area of the base is the magnitude of the cross product .   Now, we compute the magnitude:     The volume is the absolute value of the dot product of with the normal vector found in part (a).          Application: Torque  Cross products appear in a variety of applications in physics and engineering. The most common application is in calculating torque .  Suppose you want to loosen a bolt using a wrench. You will apply a force at a distance from the bolt, perpendicular to the bolt. The \"twiting power\" you apply to the bolt is called the torque , denoted .    Tightening a bolt using a wrench   The torque here is a vector, as this twisting force has both a magnitude and a direction. This torque vector is given by the cross product of the position vector and the force vector . The magnitude of the torque is given by where is the angle between and , and the direction of is given by the right-hand rule. The following diagram demonstrates the abstract notion of torque as a cross product without the wrench and the bolt.    Torque is the cross product of and    A force of is applied to a wrench attached to a bolt in a direction perpendicular to the bolt. The length of the wrench is and the force is applied at the end of the wrench at an agle of to the wrench. What is the torque applied to the bolt?      The magnitude of the torque can be calculated by We can also derive the unit by multiplying the units of and together. Hence, the unit of the torque is , and therefore, the torque applied to the bolt is approximately .  Also, the right-hand rule tells us that the direction of is orthogonal to and , parallel to the shaft of the bolt.      Assigned Problems for Section 12.4   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Calculate , where and .   We have      Calculate the cross product    Using the distributive law, we obtain      Calculate the cross product , assuming that    Using the properties of the cross product, we obtain      A force (in newtons) on an electron moving at velocity meters per second in a uniform magnetic field (in teslas) is given by , where coulombs is the charge on the electron. Assume an electron moves with velocity in the plane and is a uniform magnetic field pointing directly out of the page. Which of the two vectors, or , in the following figure represents the force on the electron? Remember that is negative.    The magnetic field vector points directly out of the page.    Since the magnetic field points directly out the page (toward us), the right-hand rule implies that the cross product is in the direction of .     Find the area of the parallelogram spanned by and in the following figure.      The area of the parallelogram equals the length of the cross product of the two vectors and . We calculate the cross product as follows: The length of this vector is Hence, the area of the parallelogram is approximately .     Sketch the triangle with vertices at the origin , , and , and compute its area using cross product.   The triangle is shown in the following figure.     The area of the triangle is half of the area of the parallelogram spanned by the vectors and . Thus, We compute the cross product: Substituting into the area formula, we obtain The area of the triangle is .     Check that the four points , , , and all lie in a plane. Then use vectors to find the area of the quadrilateral they define.   The points , , and determine a plane with normal vector . lies in that plane if is perpendicular to . To find , we compute Since the normal vector is also orthogonal to , so that the vector , and therefore the point , also lies in the plane. So all four points lie in a plane.  To find the area of the quadrilateral of which they are the vectices, divide the quadrilateral into the two triangles and . The area of each of these triangles is given by half the magnitude of the cross product of two of its sides. First, we must compute various vectors: To find the area of , we must compute ; to find the area of , we must compute . The area of the quadrilateral, , is given by      Prove the identity using the formula for the cross product.    We let , and . Computing the left-hand side gives   We now compute the right-hand-side of the equality:   The results are the same. Hence,      The torque about the origin due to a force acting on an object with position vector is the vector quantity . If several forces act at psitions , then the net torque (units: N - m or lb - ft ) is the sum Calculate the net torque about acting at the point on the mechanical arm in the following figure, assuming that a 25-newton force acts as indicated.      We denote by and the points shown in the figure and compute the position vector and the force vector .  Denoting by the angle between the arm and the -axis we have   The angle between the force vector and the -axis is , hence,   The torque about acting at the point is the cross product . We compute it using the cross products of the unit vectors and :   We now use the identity to obtain      "
},
{
  "id": "sec124-CrossProduct-2-2",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cross Product "
},
{
  "id": "sec124-CrossProduct-2-3",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:    compute the cross product of two vectors using determinants.  use standard basis properties to simplify cross product calculations.  calculate the area of a parallelogram and the volume of a parallelepiped.  apply the cross product to physics problems involving torque.   "
},
{
  "id": "def-CrossProduct",
  "level": "2",
  "url": "sec124-CrossProduct.html#def-CrossProduct",
  "type": "Definition",
  "number": "12.4.1",
  "title": "The Cross Product.",
  "body": " The Cross Product   Given two vectors and in , the cross product  is the vector defined by:    "
},
{
  "id": "sec124-CrossProduct-9",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-9",
  "type": "Figure",
  "number": "12.4.2",
  "title": "",
  "body": " Quick Tutorial on Computing the Determinant of a 3x3 Matrix   "
},
{
  "id": "sec124-CrossProduct-10",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-10",
  "type": "Note",
  "number": "12.4.3",
  "title": "If you prefer to have a list of steps for the lattice method....",
  "body": " If you prefer to have a list of steps for the lattice method...  Richard understands that not everyone learn how to compute the determinant of a square matrix. And we are only working with the determinant of a 3x3 matrix here, so lattice method is a quick and easy way to compute it.   P.S.: The lattice method here will ONLY work to find the determinant of a 3x3 matrix! This is NOT generalizable to larger matrices!  Here are the steps to compute the determinant of a 3x3 matrix using the lattice method:   Write down the 3x3 matrix and then duplicate the first two columns to the right of the matrix.    Draw diagonals from the top left to bottom right and multiply the three numbers on each diagonal. Then add these products together.    Next, draw diagonals from the top right to bottom left and multiply the three numbers on each diagonal. Then add these products together.    Finally, subtract the sum from step 3 from the sum from step 2 to get the determinant.     Below is a more visual representation of the steps above:    Lattice Method to calculate the determinant of a 3x3 matrix   Then the determinant is calculated as   In practice with the cross product, the first row will be the standard basis vectors in , the second row will be the components of the first vector, and the third row will be the components of the second vector.  "
},
{
  "id": "sec124-CrossProduct-11",
  "level": "2",
  "url": "sec124-CrossProduct.html#sec124-CrossProduct-11",
  "type": "Example",
  "number": "12.4.5",
  "title": "",
  "body": " Compute for and .      Below is a quick sketch to visualize the two vectors and their cross product.   Visualizing for and       "
},
{
  "id": "subsec-CrossPropertiesBasis-3",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "subsec-CrossPropertiesBasis-4",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-4",
  "type": "Figure",
  "number": "12.4.7",
  "title": "",
  "body": "  Right-Hand Rule for Cross Product  "
},
{
  "id": "thm-BasicPropertiesCrossProduct",
  "level": "2",
  "url": "sec124-CrossProduct.html#thm-BasicPropertiesCrossProduct",
  "type": "Theorem",
  "number": "12.4.8",
  "title": "Basic Properties of the Cross Product.",
  "body": " Basic Properties of the Cross Product       (Anticommutative Property)     (Cross Product with Itself is Zero)     if and only if either for some scalar or      (Scalar Multiplication)        (Distributive Property)      "
},
{
  "id": "subsec-CrossPropertiesBasis-8",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-8",
  "type": "Proof",
  "number": "1",
  "title": "Some Proofs of Cross Product Properties.",
  "body": " Some Proofs of Cross Product Properties  Richard will prove some of these properties using the determinant definition of the cross product. Some will be left as exercises for the reader.   Let and . Then we obtain Thus, the cross product is anticommutative.    Let . Then we have     Left as an exercise to the reader.    Let and . Then for the first part of the equality, we obtain The proof that follows a similar calculation by placing the scalars in the second row of the determinant. Thus, .    Left as an exercise to the reader.     "
},
{
  "id": "subsec-CrossPropertiesBasis-14",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-14",
  "type": "Figure",
  "number": "12.4.9",
  "title": "",
  "body": "  Circle for Computing the Cross Product of Standard Basis Vectors  "
},
{
  "id": "subsec-CrossPropertiesBasis-16",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-16",
  "type": "Example",
  "number": "12.4.10",
  "title": "",
  "body": " Calculate the cross product .       "
},
{
  "id": "subsec-CrossPropertiesBasis-18",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-CrossPropertiesBasis-18",
  "type": "Note",
  "number": "12.4.11",
  "title": "If you want to see a bunch of letters here to derive the formula....",
  "body": " If you want to see a bunch of letters here to derive the formula...  To be a due diligent mathematician, Richard will show you how to derive the determinant formula from the standard basis properties (and there are a lot of the typing here...).  Let and . Then we have   "
},
{
  "id": "thm-CrossMagnitude",
  "level": "2",
  "url": "sec124-CrossProduct.html#thm-CrossMagnitude",
  "type": "Theorem",
  "number": "12.4.12",
  "title": "Magnitude of the Cross Product.",
  "body": " Magnitude of the Cross Product    where is the angle between the vectors.   "
},
{
  "id": "subsec-AreaGeometry-6",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-AreaGeometry-6",
  "type": "Note",
  "number": "12.4.13",
  "title": "And Richard will include the proof here for the completeness of his notes.",
  "body": " And Richard will include the proof here for the completeness of his notes  The proof of the magnitude of the cross product really relies on a key identity called the Lagrange Identity in vector notation Let's prove this identity first.  We can prove this identity using the \"meet in the middle\" approach. That is, we want to manipulate both sides of the equation separately to arrive at the same expression.  Let and . Then we have Then we obtain On the other hand, we have Observe that the last steps in each expression are identical (you may want to do some reordering of terms to make it clear), so the Lagrange Identity holds.  Now that we know the Lagrange Identity holds, we can use it to prove the magnitude of the cross product theorem. We can start with the Lagrange Identity and substitute in the formula for the dot product in terms of the angle between the vectors. Taking the square root of both sides gives us the desired result.  "
},
{
  "id": "subsec-AreaGeometry-8",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-AreaGeometry-8",
  "type": "Figure",
  "number": "12.4.14",
  "title": "",
  "body": "  Area of the parallelogram spanned by vectors and .  "
},
{
  "id": "subsec-AreaGeometry-10",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-AreaGeometry-10",
  "type": "Example",
  "number": "12.4.15",
  "title": "",
  "body": " Find the area of the parallelogram with vertices , , , and .   To help you visualize things, Richard coded the parallelogram below.   The parallelogram spanned by vectors and with axes.        We choose as our \"anchor\" point. The two vectors originating from to its neighbors and are:   (Note: We do not need to use vertex for the calculation, as , , and are sufficient to define the dimensions of the parallelogram.)  Now, we compute the cross product :   Finally, the area is the magnitude of this normal vector:    "
},
{
  "id": "subsec-AreaGeometry-12",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-AreaGeometry-12",
  "type": "Example",
  "number": "12.4.17",
  "title": "",
  "body": " Find the area of the triangle with vertices , , and .   Richard coded the triangle and its vectors below to help you visualize the problem.   Visualization of the triangle vertices and vectors.      The area of a triangle is half the area of the parallelogram spanned by two vectors originating from the same vertex.    First, we find the vectors representing two sides of the triangle originating from :   Next, we calculate the cross product using the determinant:   Now, we find the magnitude of this normal vector:   Finally, the area of the triangle is half the magnitude of the cross product:    "
},
{
  "id": "thm-AreaParallelogramTriangle",
  "level": "2",
  "url": "sec124-CrossProduct.html#thm-AreaParallelogramTriangle",
  "type": "Theorem",
  "number": "12.4.19",
  "title": "Area of Parallelogram and Triangle.",
  "body": " Area of Parallelogram and Triangle   If is the parallelogram spanned by and , and is the triangle spanned by and , then and    "
},
{
  "id": "subsec-Volume-2",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parallelepiped "
},
{
  "id": "subsec-Volume-3",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-3",
  "type": "Figure",
  "number": "12.4.20",
  "title": "",
  "body": " A parallelepiped spanned by three vectors     "
},
{
  "id": "subsec-Volume-4",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "volume "
},
{
  "id": "subsec-Volume-5",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-5",
  "type": "Figure",
  "number": "12.4.21",
  "title": "",
  "body": "  Volume of a parallelepiped  "
},
{
  "id": "subsec-Volume-6",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector Triple Product "
},
{
  "id": "def-TripleProduct",
  "level": "2",
  "url": "sec124-CrossProduct.html#def-TripleProduct",
  "type": "Definition",
  "number": "12.4.22",
  "title": "Volume of a Parallelepiped.",
  "body": " Volume of a Parallelepiped   Let be nonzero vectors in . Then the parallelepiped spanned by , , and has volume where is the vector triple product .   "
},
{
  "id": "subsec-Volume-11",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-Volume-11",
  "type": "Example",
  "number": "12.4.23",
  "title": "",
  "body": " Consider the parallelepiped determined by the vectors , , and originating from the point .     Find the area of the base parallelogram spanned by vectors and .    Find the volume of the parallelepiped.      As always, Richard coded a pretty diagram below to help you visualize what the parallelogram and the parallelepiped look like!   Visualization of the parallelepiped with base defined by and .           The area of the base is the magnitude of the cross product .   Now, we compute the magnitude:     The volume is the absolute value of the dot product of with the normal vector found in part (a).       "
},
{
  "id": "subsec-ApplicationTorque-2",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-ApplicationTorque-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "subsec-ApplicationTorque-3",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-ApplicationTorque-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "subsec-ApplicationTorque-4",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-ApplicationTorque-4",
  "type": "Figure",
  "number": "12.4.25",
  "title": "",
  "body": "  Tightening a bolt using a wrench  "
},
{
  "id": "subsec-ApplicationTorque-6",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-ApplicationTorque-6",
  "type": "Figure",
  "number": "12.4.26",
  "title": "",
  "body": "  Torque is the cross product of and  "
},
{
  "id": "subsec-ApplicationTorque-7",
  "level": "2",
  "url": "sec124-CrossProduct.html#subsec-ApplicationTorque-7",
  "type": "Example",
  "number": "12.4.27",
  "title": "",
  "body": " A force of is applied to a wrench attached to a bolt in a direction perpendicular to the bolt. The length of the wrench is and the force is applied at the end of the wrench at an agle of to the wrench. What is the torque applied to the bolt?      The magnitude of the torque can be calculated by We can also derive the unit by multiplying the units of and together. Hence, the unit of the torque is , and therefore, the torque applied to the bolt is approximately .  Also, the right-hand rule tells us that the direction of is orthogonal to and , parallel to the shaft of the bolt.   "
},
{
  "id": "ws-sec124-3",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-3",
  "type": "Worksheet Exercise",
  "number": "12.4.11",
  "title": "",
  "body": " Calculate , where and .   We have    "
},
{
  "id": "ws-sec124-4",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-4",
  "type": "Worksheet Exercise",
  "number": "12.4.17",
  "title": "",
  "body": " Calculate the cross product    Using the distributive law, we obtain    "
},
{
  "id": "ws-sec124-5",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-5",
  "type": "Worksheet Exercise",
  "number": "12.4.21",
  "title": "",
  "body": " Calculate the cross product , assuming that    Using the properties of the cross product, we obtain    "
},
{
  "id": "ws-sec124-6",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-6",
  "type": "Worksheet Exercise",
  "number": "12.4.37",
  "title": "",
  "body": " A force (in newtons) on an electron moving at velocity meters per second in a uniform magnetic field (in teslas) is given by , where coulombs is the charge on the electron. Assume an electron moves with velocity in the plane and is a uniform magnetic field pointing directly out of the page. Which of the two vectors, or , in the following figure represents the force on the electron? Remember that is negative.    The magnetic field vector points directly out of the page.    Since the magnetic field points directly out the page (toward us), the right-hand rule implies that the cross product is in the direction of .   "
},
{
  "id": "ws-sec124-7",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-7",
  "type": "Worksheet Exercise",
  "number": "12.4.41",
  "title": "",
  "body": " Find the area of the parallelogram spanned by and in the following figure.      The area of the parallelogram equals the length of the cross product of the two vectors and . We calculate the cross product as follows: The length of this vector is Hence, the area of the parallelogram is approximately .   "
},
{
  "id": "ws-sec124-8",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-8",
  "type": "Worksheet Exercise",
  "number": "12.4.47",
  "title": "",
  "body": " Sketch the triangle with vertices at the origin , , and , and compute its area using cross product.   The triangle is shown in the following figure.     The area of the triangle is half of the area of the parallelogram spanned by the vectors and . Thus, We compute the cross product: Substituting into the area formula, we obtain The area of the triangle is .   "
},
{
  "id": "ws-sec124-9",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-9",
  "type": "Worksheet Exercise",
  "number": "12.4.51",
  "title": "",
  "body": " Check that the four points , , , and all lie in a plane. Then use vectors to find the area of the quadrilateral they define.   The points , , and determine a plane with normal vector . lies in that plane if is perpendicular to . To find , we compute Since the normal vector is also orthogonal to , so that the vector , and therefore the point , also lies in the plane. So all four points lie in a plane.  To find the area of the quadrilateral of which they are the vectices, divide the quadrilateral into the two triangles and . The area of each of these triangles is given by half the magnitude of the cross product of two of its sides. First, we must compute various vectors: To find the area of , we must compute ; to find the area of , we must compute . The area of the quadrilateral, , is given by    "
},
{
  "id": "ws-sec124-10",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-10",
  "type": "Worksheet Exercise",
  "number": "12.4.55",
  "title": "",
  "body": " Prove the identity using the formula for the cross product.    We let , and . Computing the left-hand side gives   We now compute the right-hand-side of the equality:   The results are the same. Hence,    "
},
{
  "id": "ws-sec124-11",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-11",
  "type": "Worksheet Exercise",
  "number": "12.4.67",
  "title": "",
  "body": " The torque about the origin due to a force acting on an object with position vector is the vector quantity . If several forces act at psitions , then the net torque (units: N - m or lb - ft ) is the sum Calculate the net torque about acting at the point on the mechanical arm in the following figure, assuming that a 25-newton force acts as indicated.      We denote by and the points shown in the figure and compute the position vector and the force vector .  Denoting by the angle between the arm and the -axis we have   The angle between the force vector and the -axis is , hence,   The torque about acting at the point is the cross product . We compute it using the cross products of the unit vectors and :   We now use the identity to obtain    "
},
{
  "id": "sec125-Planesin3D",
  "level": "1",
  "url": "sec125-Planesin3D.html",
  "type": "Section",
  "number": "12.5",
  "title": "Planes in 3-Spaces",
  "body": " Planes in 3-Spaces   In this section, we extend our knowledge of linear geometry from 2-dimensions to 3-dimensions. While lines were the fundamental linear object in the plane, in 3-space, the fundamental linear object is a surface: the plane. We will learn how to describe these flat surfaces using vectors and how to analyze their interactions with one another.    After this section, students will be able to:     Determine the equation of a plane given a point and a normal vector.    Identify the normal vector and intercepts from the scalar equation of a plane.    Find the intersection point of a line and a plane.    Sketch a plane using its traces.      Recall we briefly introduced planes in back in . In that section, we defined a plane by setting one of the coordinates to a constant value and obtain what we called the coordinate planes . But as you can imagine, these are just a small subset of all possible planes in .   How do we define an arbitrary plane in ?    Defining a Plane  When we defined a line, we used a point and a direction vector  . You might wondering whether we can do the same for a plane?  The short answer is no and we have a quick counterexample. The vector is parallel to the -plane and the -plane. And both the planes go through the point . So a point and a direction vector parallel to the plane cannot uniquely determine a plane.   Infinite planes through a fixed point and parallel to a fixed vector    So, to define a plane, we really need a point and a vector that is NOT parallel to the plane. For simplicity, we will choose a vector orthogonal to the plane. That is, this orthogonal vector is orthogonal to every vector that lies in the plane. Visually, this vector \"sticks out\" of the plane at a right angle.   A point lies on and    Summing up, to determine a plane in , we need a point and a normal vector , which is a vector orthogonal to the plane.   Equation of a Plane   Plane through with normal vector : where .     But Richard... Why is the equation appears this way?  This equation may seem a bit mysterious at first glance, but it actually follows directly from the definition of the dot product (and orthogonality).  Let's say we have a point . Furthermore, let be an arbitrary point on the plane. Then we can define a vector .  Also, we have a normal vector . This vector is orthogonal to ANY vector that lies in the plane, including . Two vectors are orthogonal if and only if their dot product is zero. Therefore, we obtain Hey! This is the scalar form of the equation of a plane!  You can simplify this equation further! That is, the scalar form can be simplied to Observe that the right-hand side is just a number, so let's call it for simplicity. Hence, we obtain where   What about the vector form? We can observe quickly that is just the dot product . Hence, we can rewrite the equation as Hey! The vector form!    Find an equation of the plane with normal vector passing through the point .   We are given and .  We can write an equation using the vector form:   Alternatively, we can write an equation using the scalar form:     Sometimes we are given the equation and we need to work backwards to find the geometric properties. Specifically, we may want to find a normal vector and a point on the plane.  Finding a point is a bit boring... We just need to find a point that satisfies the equation. The easiest way to do so is to set the two other variables to zero (or other numbers) and solve for the third.  What about finding a normal vector? If you stare at the equation long enough, you may notice that the coefficients of , , and correspond to the components of the normal vector. That is, the normal vector is simply .  Surprisingly, this pattern also works for lines in . An equation of the line in is . You for sure know that the slope of this line is . But what you may not know there is that the vector a normal vector to this line!   A line with normal vector     Consider the plane defined by . Identify the normal vector and find a point on the plane.   To find a normal vector, we read the coefficients directly. .  To find a point on the plane, we can set two of the variables to be constants and solve for the third. For example, we set and , and we can solve for . So, the point is on the plane.    Note that the equation of a plane in is a generalization of the equation of a line in . Back in , we can determine and equation of a line using two points . If we generalize this idea to , we can determine an equation of a plane using three points . It turns out that this plane is unique as long as the three points are not collinear (i.e., they do not all lie on the same line).   Find an equation of the plane passing through the three points , , and .   Recall that we need a point and a normal vector to determine an equation of a plane. Well we are given three points, so we can use one of them as our point.  What about a normal vector... Can we find a normal vector using the three points?  Yes we can! Recall we can find a normal vector orthogonal to two vectors using the cross product!    First, we can find two vectors lying on the plane. Since both and lie on the plane, their cross product will be orthogonal to the plane. This can be our normal vector!   Below is a visualization of what we just did. We plotted to create the plane (shown in blue). We constructed the vectors and (green) that lie on the plane. Finally, we crossed them to get the normal vector (red), which you can see stands orthogonal to the surface.   Visualizing the plane through P, Q, R      We can use any scalar multiple of this vector, so let's use for simplicity. Using point : This makes sense, as all three given points had a y-coordinate of 1!      Intersection of a Line and a Plane  We often want to know where a specific line punctures a plane. Unless the line is parallel to the plane (or lying inside it), they will intersect at exactly one point.  To find the intersection point of a line and a plane, we need to find the point that lies on both the line and the plane. But how do we solve THREE variables simulateneously?  A good news here is that the line in is defined parametrically using a single parameter ! Since the coordinate of the point needs to satisfy both the equation of the plane and the parametric equation of the line, we can use substitution to find the point of intersection.  That is, to find this point, we  write the parametric equations for , , and from the line.  plug these expressions into the equation of the plane.  solve for .  plug back into the line equation to get the point .     Find the point where the line intersects the plane .   First, let's break the line into its components: , , .  Now, plug these into the plane equation : Simplify the algebra: We aren't done yet! We need the point. Plug back into our line components: The intersection point is .  Here is a visual confirmation of our algebra. The yellow dot is exactly where the red line punctures the blue plane.   Visualizing the intersection point          Traces  Drawing planes in 3D on a 2D sheet of paper is tricky. A great tool to help us visualize the position of a plane is finding its traces .  A trace is a slice of a surface by a coordinate plane. We are working with planes now, so the trace here is the line of intersection between the plane and one of the coordinate planes ( -plane, -plane, or -plane).  -trace: Set . This shows where the plane cuts through the floor.  -trace: Set . This shows where the plane cuts through the side wall.  -trace: Set . This shows where the plane cuts through the back wall.  By finding the intercepts on the axes and connecting them, we can draw a triangle that represents a portion of the plane.   Sketch the plane by finding its traces.   Let's find the intercepts to help us draw the lines.   x-intercept: Set . . Point: .   y-intercept: Set . . Point: .   z-intercept: Set . . Point: .  Now, look at the diagram below. The red lines are the traces. The xy-trace connects the x and y intercepts. The yz-trace connects the y and z intercepts. The xz-trace connects the x and z intercepts. Connecting these three points forms a triangle in the first octant that helps us visualize the slant of the plane.   Traces of the plane          Parallel and Intersecting Planes  Two planes in can either be parallel or intersecting, providing they are not the same plane.  To determine whether two planes are parallel, we can compare their normal vectors. Recall two lines are parallel if their direction vectors are parallel (i.e., scalar multiples of each other). In the similar sense, two planes are parallel if their normal vectors are parallel (i.e., scalar multiples of each other).   Show that the two planes and are parallel.   The normal vector of the first plane is and the normal vector of the second plane is . Note that , so the normal vectors are parallel. Therefore, the two planes are parallel.  In the diagram below, you can see these \"floating\" surfaces. They have the same tilt, they are just shifted relative to each other.   Parallel Planes (Blue) and (Red)        What about the intersection of two planes? Imagine two non-parallel planes in is intersecting, then they will intersect along a line.   Find an equation of the line of intersection of the planes and .   To define the line of intersection, we need two things:  A direction vector for the line.  A point on the line.    Since the line lies on both planes, it must be perpendicular to both normal vectors. Does that ring a bell? (Think cross product!)   Intersection of (Blue) and (Red)         Step 1: Find the direction vector. The normal vectors are and . The direction of the intersection line, , is orthogonal to both normals: For simplicity, we can divide by -3 to get a parallel vector: .   Step 2: Find a point on the line. We need a point that satisfies both plane equations. We have 2 equations and 3 unknowns, so we can pick a value for one variable. Let's try (so we are really finding the intersection between this line and the -plane, and this point of intersection will be on this line for sure! ). The system becomes: From the second eq, . Substitute into the first: Then . So a point on the line is .   Step 3: Write the equation. The vector equation of the line is:       Assigned Problems for Section 12.5   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Write the equation of the plane with normal vector passing through the point in the scalar form .   The vector equation is To obtain the scalar form we compute the dot product on the left-hand side above. or in the other scalar form.      Find a vector normal to the plane .   Using the scalar form of the equation of the plane, , a vector normal to the plane is the coefficients vector      Find an equation of the plane passing through the three points , , and .   We use the vector form of the equation of the plane. To find the normal vector to the plane, , we first compute the vectors and that lie in the plane, and then find the cross product of these vectors. This gives  We now choose any one of the three points in the plane, say and compute . Putting it all together, the equation of the plane is      In each case, determine whether or not the lines have a single point of intersection. If they do, give an equation of a plane containing them.    and      and          We look for an intersection point by setting the components equal. Be careful to use different parameters for the two lines, say for and for . From the first equation, . However, from the third equation, . Since cannot be both 4 and 2, there is no solution. The lines do not intersect (and their direction vectors and are not parallel). Thus, they are skew lines and there is no single plane containing both.    Again, we set the components equal using parameters and . From the third equation, . Plugging into the first equation: . Now we check if these values satisfy the second equation (the y-coordinate): They match! The lines intersect at the point derived from :   Since the lines intersect, they define a plane. The normal vector is the cross product of the direction vectors and . We can simplify this normal vector by dividing by -4 to get . Using the intersection point , the equation of the plane is:         Draw the plane given by the equation .   To draw the plane, we find the intercepts where the plane crosses the coordinate axes.  x-intercept: Set . . Point .  y-intercept: Set . . Point .  z-intercept: Set . . Point .  The traces form a triangle connecting these three points.   Plane with traces         Find the intersection of the line and the plane .   The line has parametric equations To find a value of for which lies on the plane, we substitute the parametric equations in the equation of the plane and solve for . The point of intersection has coordinates That is, .     By definition, the angle between two planes is the angle between their normal vectors .    Angle between Two Planes   Compute the angle between the two planes and .   The planes and have the normal vectors of and respectively. The cosine of the angle between and is The solution for is rad or .     Find a plane that is perpendicular to the two planes and .   The vector forms of the equations of the planes are and , hence the vectors and are normal to the planes. We denote the equation of the planes which are perpendicular to the two planes by Then, the normal to the planes is orthogonal to the normals and of the given planes. Therefore, and which gives us We obtain the following equations. The first equation implies that . Substituting in the second equation we get , and hence . Substituting them back to the equation of the perpendicular planes, we get  is an arbitrary constant which we denote by . Therefore, the planes which are perpendicular to the given planes are      Let denote the line of intersection of the planes and . Find parametric equations for the line .   To find a point on , substitute an arbitrary value for (say, ) and then solve the resulting pair of equations for and .    A direction vector for is the cross product . We now need to find a point on . We choose substitute in the equations of the planes and solve the resulting equations for and . This gives The 1st equation implies that . Substituting in the 2nd equation and solving for gives  This also implies that .  We conclude that the point is on . We now use the vector parametrization of a line to obtain the following parametrization for : This yields the parametric equations      "
},
{
  "id": "sec125-Planesin3D-2-2",
  "level": "2",
  "url": "sec125-Planesin3D.html#sec125-Planesin3D-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     Determine the equation of a plane given a point and a normal vector.    Identify the normal vector and intercepts from the scalar equation of a plane.    Find the intersection point of a line and a plane.    Sketch a plane using its traces.    "
},
{
  "id": "sec125-Planesin3D-3",
  "level": "2",
  "url": "sec125-Planesin3D.html#sec125-Planesin3D-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "subsec-DefiningPlanes-4",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-4",
  "type": "Figure",
  "number": "12.5.1",
  "title": "",
  "body": " Infinite planes through a fixed point and parallel to a fixed vector   "
},
{
  "id": "subsec-DefiningPlanes-6",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-6",
  "type": "Figure",
  "number": "12.5.2",
  "title": "",
  "body": " A point lies on and   "
},
{
  "id": "def-Plane3D",
  "level": "2",
  "url": "sec125-Planesin3D.html#def-Plane3D",
  "type": "Definition",
  "number": "12.5.3",
  "title": "Equation of a Plane.",
  "body": " Equation of a Plane   Plane through with normal vector : where .   "
},
{
  "id": "subsec-DefiningPlanes-9",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-9",
  "type": "Note",
  "number": "12.5.4",
  "title": "But Richard... Why is the equation appears this way?",
  "body": " But Richard... Why is the equation appears this way?  This equation may seem a bit mysterious at first glance, but it actually follows directly from the definition of the dot product (and orthogonality).  Let's say we have a point . Furthermore, let be an arbitrary point on the plane. Then we can define a vector .  Also, we have a normal vector . This vector is orthogonal to ANY vector that lies in the plane, including . Two vectors are orthogonal if and only if their dot product is zero. Therefore, we obtain Hey! This is the scalar form of the equation of a plane!  You can simplify this equation further! That is, the scalar form can be simplied to Observe that the right-hand side is just a number, so let's call it for simplicity. Hence, we obtain where   What about the vector form? We can observe quickly that is just the dot product . Hence, we can rewrite the equation as Hey! The vector form!  "
},
{
  "id": "subsec-DefiningPlanes-10",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-10",
  "type": "Example",
  "number": "12.5.5",
  "title": "",
  "body": " Find an equation of the plane with normal vector passing through the point .   We are given and .  We can write an equation using the vector form:   Alternatively, we can write an equation using the scalar form:    "
},
{
  "id": "subsec-DefiningPlanes-15",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-15",
  "type": "Figure",
  "number": "12.5.6",
  "title": "",
  "body": " A line with normal vector   "
},
{
  "id": "subsec-DefiningPlanes-16",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-16",
  "type": "Example",
  "number": "12.5.7",
  "title": "",
  "body": " Consider the plane defined by . Identify the normal vector and find a point on the plane.   To find a normal vector, we read the coefficients directly. .  To find a point on the plane, we can set two of the variables to be constants and solve for the third. For example, we set and , and we can solve for . So, the point is on the plane.   "
},
{
  "id": "subsec-DefiningPlanes-18",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-DefiningPlanes-18",
  "type": "Example",
  "number": "12.5.8",
  "title": "",
  "body": " Find an equation of the plane passing through the three points , , and .   Recall that we need a point and a normal vector to determine an equation of a plane. Well we are given three points, so we can use one of them as our point.  What about a normal vector... Can we find a normal vector using the three points?  Yes we can! Recall we can find a normal vector orthogonal to two vectors using the cross product!    First, we can find two vectors lying on the plane. Since both and lie on the plane, their cross product will be orthogonal to the plane. This can be our normal vector!   Below is a visualization of what we just did. We plotted to create the plane (shown in blue). We constructed the vectors and (green) that lie on the plane. Finally, we crossed them to get the normal vector (red), which you can see stands orthogonal to the surface.   Visualizing the plane through P, Q, R      We can use any scalar multiple of this vector, so let's use for simplicity. Using point : This makes sense, as all three given points had a y-coordinate of 1!   "
},
{
  "id": "subsec-IntersectionLinePlane-6",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-IntersectionLinePlane-6",
  "type": "Example",
  "number": "12.5.10",
  "title": "",
  "body": " Find the point where the line intersects the plane .   First, let's break the line into its components: , , .  Now, plug these into the plane equation : Simplify the algebra: We aren't done yet! We need the point. Plug back into our line components: The intersection point is .  Here is a visual confirmation of our algebra. The yellow dot is exactly where the red line punctures the blue plane.   Visualizing the intersection point       "
},
{
  "id": "subsec-Traces-3",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-Traces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace "
},
{
  "id": "subsec-Traces-4",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-Traces-4",
  "type": "Example",
  "number": "12.5.12",
  "title": "",
  "body": " Sketch the plane by finding its traces.   Let's find the intercepts to help us draw the lines.   x-intercept: Set . . Point: .   y-intercept: Set . . Point: .   z-intercept: Set . . Point: .  Now, look at the diagram below. The red lines are the traces. The xy-trace connects the x and y intercepts. The yz-trace connects the y and z intercepts. The xz-trace connects the x and z intercepts. Connecting these three points forms a triangle in the first octant that helps us visualize the slant of the plane.   Traces of the plane       "
},
{
  "id": "subsec-ParallelIntersecting-4",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-ParallelIntersecting-4",
  "type": "Example",
  "number": "12.5.14",
  "title": "",
  "body": " Show that the two planes and are parallel.   The normal vector of the first plane is and the normal vector of the second plane is . Note that , so the normal vectors are parallel. Therefore, the two planes are parallel.  In the diagram below, you can see these \"floating\" surfaces. They have the same tilt, they are just shifted relative to each other.   Parallel Planes (Blue) and (Red)       "
},
{
  "id": "subsec-ParallelIntersecting-6",
  "level": "2",
  "url": "sec125-Planesin3D.html#subsec-ParallelIntersecting-6",
  "type": "Example",
  "number": "12.5.16",
  "title": "",
  "body": " Find an equation of the line of intersection of the planes and .   To define the line of intersection, we need two things:  A direction vector for the line.  A point on the line.    Since the line lies on both planes, it must be perpendicular to both normal vectors. Does that ring a bell? (Think cross product!)   Intersection of (Blue) and (Red)         Step 1: Find the direction vector. The normal vectors are and . The direction of the intersection line, , is orthogonal to both normals: For simplicity, we can divide by -3 to get a parallel vector: .   Step 2: Find a point on the line. We need a point that satisfies both plane equations. We have 2 equations and 3 unknowns, so we can pick a value for one variable. Let's try (so we are really finding the intersection between this line and the -plane, and this point of intersection will be on this line for sure! ). The system becomes: From the second eq, . Substitute into the first: Then . So a point on the line is .   Step 3: Write the equation. The vector equation of the line is:    "
},
{
  "id": "ws-sec125-3",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-3",
  "type": "Worksheet Exercise",
  "number": "12.5.3",
  "title": "",
  "body": " Write the equation of the plane with normal vector passing through the point in the scalar form .   The vector equation is To obtain the scalar form we compute the dot product on the left-hand side above. or in the other scalar form.    "
},
{
  "id": "ws-sec125-4",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-4",
  "type": "Worksheet Exercise",
  "number": "12.5.15",
  "title": "",
  "body": " Find a vector normal to the plane .   Using the scalar form of the equation of the plane, , a vector normal to the plane is the coefficients vector    "
},
{
  "id": "ws-sec125-5",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-5",
  "type": "Worksheet Exercise",
  "number": "12.5.23",
  "title": "",
  "body": " Find an equation of the plane passing through the three points , , and .   We use the vector form of the equation of the plane. To find the normal vector to the plane, , we first compute the vectors and that lie in the plane, and then find the cross product of these vectors. This gives  We now choose any one of the three points in the plane, say and compute . Putting it all together, the equation of the plane is    "
},
{
  "id": "ws-sec125-6",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-6",
  "type": "Worksheet Exercise",
  "number": "12.5.27",
  "title": "",
  "body": " In each case, determine whether or not the lines have a single point of intersection. If they do, give an equation of a plane containing them.    and      and          We look for an intersection point by setting the components equal. Be careful to use different parameters for the two lines, say for and for . From the first equation, . However, from the third equation, . Since cannot be both 4 and 2, there is no solution. The lines do not intersect (and their direction vectors and are not parallel). Thus, they are skew lines and there is no single plane containing both.    Again, we set the components equal using parameters and . From the third equation, . Plugging into the first equation: . Now we check if these values satisfy the second equation (the y-coordinate): They match! The lines intersect at the point derived from :   Since the lines intersect, they define a plane. The normal vector is the cross product of the direction vectors and . We can simplify this normal vector by dividing by -4 to get . Using the intersection point , the equation of the plane is:       "
},
{
  "id": "ws-sec125-7",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-7",
  "type": "Worksheet Exercise",
  "number": "12.5.33",
  "title": "",
  "body": " Draw the plane given by the equation .   To draw the plane, we find the intercepts where the plane crosses the coordinate axes.  x-intercept: Set . . Point .  y-intercept: Set . . Point .  z-intercept: Set . . Point .  The traces form a triangle connecting these three points.   Plane with traces       "
},
{
  "id": "ws-sec125-8",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-8",
  "type": "Worksheet Exercise",
  "number": "12.5.41",
  "title": "",
  "body": " Find the intersection of the line and the plane .   The line has parametric equations To find a value of for which lies on the plane, we substitute the parametric equations in the equation of the plane and solve for . The point of intersection has coordinates That is, .   "
},
{
  "id": "ws-sec125-9",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-9",
  "type": "Worksheet Exercise",
  "number": "12.5.59",
  "title": "",
  "body": " By definition, the angle between two planes is the angle between their normal vectors .    Angle between Two Planes   Compute the angle between the two planes and .   The planes and have the normal vectors of and respectively. The cosine of the angle between and is The solution for is rad or .   "
},
{
  "id": "ws-sec125-10",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-10",
  "type": "Worksheet Exercise",
  "number": "12.5.65",
  "title": "",
  "body": " Find a plane that is perpendicular to the two planes and .   The vector forms of the equations of the planes are and , hence the vectors and are normal to the planes. We denote the equation of the planes which are perpendicular to the two planes by Then, the normal to the planes is orthogonal to the normals and of the given planes. Therefore, and which gives us We obtain the following equations. The first equation implies that . Substituting in the second equation we get , and hence . Substituting them back to the equation of the perpendicular planes, we get  is an arbitrary constant which we denote by . Therefore, the planes which are perpendicular to the given planes are    "
},
{
  "id": "ws-sec125-11",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-11",
  "type": "Worksheet Exercise",
  "number": "12.5.67",
  "title": "",
  "body": " Let denote the line of intersection of the planes and . Find parametric equations for the line .   To find a point on , substitute an arbitrary value for (say, ) and then solve the resulting pair of equations for and .    A direction vector for is the cross product . We now need to find a point on . We choose substitute in the equations of the planes and solve the resulting equations for and . This gives The 1st equation implies that . Substituting in the 2nd equation and solving for gives  This also implies that .  We conclude that the point is on . We now use the vector parametrization of a line to obtain the following parametrization for : This yields the parametric equations    "
},
{
  "id": "sec126-QuadricSurfaces",
  "level": "1",
  "url": "sec126-QuadricSurfaces.html",
  "type": "Section",
  "number": "12.6",
  "title": "A Survey to Quadric Surfaces",
  "body": " A Survey to Quadric Surfaces   In the previous section, we focused primarily on planes in , which has the form . We will take a step further by exploring some curved surfaces in defined by second-degree polynomial equations.  In this section, we will introduce quadric surfaces , which are the three-dimensional analogs of conic sections studied in MTH 253 or MTH 253Z. This will give us a taste of the rich variety of surfaces and methods to analyze them in the second half of the class.    After this section, students will be able to:     recognize and classify the six standard types of quadric surfaces from their algebraic equations.    apply the method of traces to visualize, analyze, and sketch the quadric surface in .    identify and describe quadratic cylinders as surfaces that extend conic sections along a specific axis.    manipulate general second-degree equations algebraically to match standard forms for identification and graphing.       Quadric really just means \"second degree\". A quadric surface is a surface in that can be defined by a second-degree polynomial equation in three variables , typically denoted as , , and . That is, the equation contains all the possible combinations of these variables up to the second degree.  Hence, the general equation of a quadric surface is where are constants.  There are 17 different types of quadric surfaces based on the CRC Standard Mathematical Tables . In this section, we will focus on the most common types in .   Review: Conic Sections  You may recall from MTH 253 or MTH 253Z a concept called the conic sections . These are the curves obtained by intersecting a plane with a double-napped cone. Depending on the angle and position of the intersecting plane, different types of conic sections can be formed, as shown in the following diagram.    Types of conic sections where (a) are the standard conic sections and (b) are the degenerate conic sections   The standard conic sections include circles, ellipses, parabolas, and hyperbolas. The degenerate conic sections include a point, a line, or two intersecting lines.  But why splitting the conic sections into these categories? This really comes down to the equations that define them. Recall that the equation of a conic section is really the general equation of a second-degree polynomial in , typically denoted as and . where are constants. The standard conic sections means the equation remains to be second-degree, while the degenerate conic sections means the equation reduces to first-degree or even a constant.  You may notice the similarity between the general equations of conic sections and quadric surfaces. In fact, quadric surfaces can be thought of as the three-dimensional analogs of conic sections. We add an additional variable and consider second-degree polynomial equations in three variables instead of two.  Just like conic sections, quadric surfaces can also be classified into different types based on their equations and geometric properties. The goal of this section is to explore these different types of quadric surfaces, understand their equations, and visualize their shapes in .    Standard Quadric Surfaces  The first type of quadric surfaces we will explore is the ellipsoid . An ellipsoid has the general equation where are positive constants.   The ellipsoid with equation .      Observe that , , and control the lengths of the semi-axes along the , , and axes, respectively. When , the ellipsoid becomes a sphere with radius .  But how should we describe the ellipsoid in words? One way to do this is to use traces . Recall a trace is the curve obtained by intersecting a surface with a coordinate plane. Since a coordinate plane can be obtained by setting a variable to be a constant, the traces will be some curves in . So what the traces tell us is how the surface behaves when we \"slice\" it along the coordinate planes.  There are \"standard\" traces for quadric surfaces, which are obtained by setting one variable to be zero.   The -trace is obtained by setting . That is, we look at the curve obtained by intersecting the quadric surface with the -plane.    The -trace is obtained by setting . That is, we look at the curve obtained by intersecting the quadric surface with the -plane.    The -trace is obtained by setting . That is, we look at the curve obtained by intersecting the quadric surface with the -plane.      Describe the traces of the ellipsoid .   So what are the \"standard\" traces of the ellipsoid and how do we find them?  P.S.: Richard will use the \"standard\" traces here since they are the most easiest to work with (but not necessarily the most informative... but this is a good start! :D).    To find the traces, we will set one variable to zero at a time and analyze the resulting equations.    -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 3 along the -axis and semi-minor axis length 2 along the -axis.     -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 2 along the -axis.     -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 3 along the -axis.      The traces of the ellipsoid .      See that we can determine what the ellipsoid looks like when we know its traces!    We can imagine that the traces of the ellipsoid are all ellipses (or a point in the degenerate case) since slicing an ellipsoid with a plane will always yield an ellipse (or a point).  The second type of quadric surfaces here is the hyperboloid , and it comes in two different flavors.  The diagram below shows the first flavor of hyperboloid, which has the general equation where are positive constants. We call this a hyperboloid of one sheet .   The hyperboloid with equation .      Observe that and control the lengths of the semi-axes along the and axes, respectively (so they control the size of the \"waist\"). But what about ? is not shown directly on this hyperboloid...  One way to understand how affects the shape of the hyperboloid is to look at its traces. Just like before, we will look at the \"standard\" traces obtained by setting one variable to be zero and see how the value of affects them in the following example.   Describe the traces of the hyperboloid .  How does the value of (in this problem, the ), affect the shape of the hyperboloid?   To find the traces, we will set one variable to zero at a time and analyze the resulting equations.    -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 3 along the -axis.  So it makes sense for the values of and to control the size of the \"waist\" of the hyperboloid.     -trace : Setting , we get .  This is a hyperbola on the -plane centered at the origin that opens along the -axis. The vertices are located at , and the asymptotes are given by the lines .     -trace : Setting , we get .  This is a hyperbola on the -plane centered at the origin that opens along the -axis. The vertices are located at , and the asymptotes are given by the lines .     Observe that the value of (in this problem, the ) affects the steepness of the hyperbolas in the and traces. A larger value results in a steeper asymptotes in the traces, which means the hyperbolas are less \"wide\" compared to the waist; a smaller value results in less steep asymptotes, which means the hyperbolas are more \"wide\" compared to the waist.   The traces of the hyperboloid .        The second flavor of hyperboloid is shown in the diagram below, which has the general equation where are positive constants. We call this a hyperboloid of two sheets .   The hyperboloid with equation .      Observe that there is a gap between the two sheets of the hyperboloid. That is because the right-hand side of the equation is negative when . Yet the left side of the hyperboloid equation is always non-negative, so there are no points on the region when .  Just like before, we can analyze the traces of the hyperboloid of two sheets to understand the surface. Feel free to try this as an exercise! Just one small hint here: there is no -trace since setting results in no points on the surface. If we set for some , we will get an ellipse as the trace instead.  The figure below shows the (interesting) traces of the hyperboloid of two sheets.   The traces of the hyperboloid .      The third type of quadric surfaces is the elliptic cone . An elliptic cone has the general equation where are positive constants.   The elliptic cone      The elliptic cone can be thought of as the transition surface between the hyperboloid of one sheet and the hyperboloid of two sheets.   If we increase the constant term on the right side of the elliptic cone by adding a , the two(ish) sheets will move toward each other, creating a hyperboloid of one sheet.    If we decrease the constant term on the right side of the elliptic cone by subtracting a , the two(ish) sheets will move away from each other, creating a hyperboloid of two sheets.   When the constant term on the right side of the hyperboloid equations is zero, we get the elliptic cone. Positive constant on the right-hand side means two sheets merge into one, while negative constant means one sheet splits into two.  Of course, we can analyze the traces of the elliptic cone as well. Try this as an exercise! If you play your cards right, you will find that the -trace is a point at the origin, while the - and -traces are pairs of lines through the origin. They are the three degenerate conic sections... Boring... But when you move up (or down) from the vertex along the -axis, you will see that the traces are ellipses that grow larger as you move away from the vertex!  As always, Richard coded the diagram below to illustrate the traces of the elliptic cone.   The traces of the elliptic cone .      The next type of quadric surfaces is the paraboloids , which also comes in two different flavors.  An elliptic paraboloid has the general equation where are positive constants.   The elliptic paraboloid .      Similarly, the traces of the elliptic paraboloid can tell us a lot! Again, feel free to try this as an exercise. You will find that the -trace is a point at the origin, while the - and -traces are parabolas that open upward. Moving up along the -axis from the vertex, you will see that the traces are ellipses that grow larger as you move away from the vertex!  The figure below shows the traces of the elliptic paraboloid.   The traces of the elliptic paraboloid .      The second flavor is the hyperbolic paraboloid , which has the general equation where are positive constants.   The hyperbolic paraboloid .      The traces of the hyperbolic paraboloid are also very interesting! Try this as an exercise. You will find that the -trace is a point at the origin (aka the saddle point!), while the - and -traces are parabolas that open in opposite directions. Moving up along the -axis from the saddle point, you will see that the -traces are hyperbolas that open along the -axis, while moving down along the -axis, the -traces are hyperbolas that open along the -axis!  The figure below shows the traces of the hyperbolic paraboloid. Feel free to rotate around the diagram to get a better view of the traces!   The traces of the hyperbolic paraboloid .      Now let's take a pause and look back at what we have covered so far. We have learned six types of quadric surfaces. Make sure you know how to identify each type from its equation, and be able to analyze them using their traces (and sometimes the \"standard\" traces are not enough if we get the degenerate conic sections!).   State the type of quadric surface and describe the trace obtained by intersecting with the plane .   To determine the type of quadric surface, we match the equation to the standard forms we have learned. Yet, there is no fractions on the term and the term... What to do?  Recall that we can always manipulate the equation algebraically to get it into a more recognizable form. For example, we know that can be rewritten as if we want to get some fractions out of it.    We first rewrite the equation as which matches the standard form of a hyperboloid of two sheets.  To find the trace on the plane , we substitute into the equation. We obtain The trace is an ellipse on the plane .     Sketch the surface    There are two approaches to sketching a surface.  One is to rewrite the equation into a more recognizable form, then use the standard sketch as a starting point. But the downside is that we may not be able to match it to a standard form easily, especially when there are some slight alternations involved (then not only you will need to recognize the type of surface, but also the alternation).  The other approach is to analyze the traces of the surface, then sketch it based on the traces. This approach is more general and works for any surface, but it may take more time and effort.  Alternatively, you can just put the equation into a 3D graphing tool (like GeoGebra or WolframAlpha) and get an instant sketch. But remember that Richard will not accept any calculator-generated answers without any justification on the exams.    Approach 1: Recognizing the Standard Form  By doing some algebraic manipulation, we can rewrite the equation as The format matches the standard form of a hyperboloid of one sheet. Yet there is a slight alternation that and are swapped in their usual positions.  Hence, instead of having a standard hyperboloid of one sheet that opens along the -axis, this surface opens along the -axis.   The surface .        Approach 2: Analyzing the Traces  Let's analyze the \"standard\" traces first.    -trace: Setting gives . This is a hyperbola opening along the -axis, where the vertices are at and the asymptotes are .     -trace: Setting gives . This is an ellipse centered at the origin with -intercepts at and -intercepts at .     -trace: Setting gives . This is a hyperbola opening along the -axis, where the vertices are at and the asymptotes are .   Now we can sketch the traces and combine them to form the surface!   The surface with traces.        In practice, it is often insanely difficult to sketch a surface from scratch, especially on paper. Richard is happy if you can describe the surface well either by matching things to the standard forms and point out any features (and also any alternation if any) or by analyzing the traces. This is a math class, not an art class!    Quadratic Cylinders  We are still in the investigation of the standard quadric surfaces, but the following three types can be considered as special cases called quadratic cylinders . The term cylinder is used here in a more general sense, meaning that the surface extends infinitely in one direction (think about this as a vertical wall that goes up and down forever if the cylinder extends along the -axis). They are a bit less interesting in the sense that their non-degenerate traces are just conic section.  The first type of the quadratic cylinder is right circular cylinder that we have seen in earlier section. Its general equation is where is a positive constant representing the radius of the circular cross-sections. The only interesting traces of this surface are the traces , which are circles of radius .   The traces of the cylinder .      We can turn the circular cylinder into an elliptic cylinder by changing the cross-sectional shape from a circle to an ellipse. Its general equation is where and are positive constants representing the semi-major and semi-minor axes of the elliptical trace. The interesting traces are again the traces , which are ellipses with semi-major axis and semi-minor axis .   The traces of the elliptic cylinder .      The next type of quadratic cylinder is the hyperbolic cylinder , whose general equation is Again, the only interesting traces are the traces , which are hyperbolas opening along the -axis with vertices at and asymptotes .   The traces of the hyperbolic cylinder .      Last but not least, we have the parabolic cylinder , whose general equation is where is a nonzero constant that controls the \"width\" of the parabolic traces. The interesting traces are the traces , which are parabolas opening along the -axis with vertex at .   The traces of the parabolic cylinder .      Observe that all these quadratic cylinders can be obtained by extending a conic section (circle, ellipse, hyperbola, or parabola) along an axis perpendicular to the plane containing the conic section. That is, there is nothing interesting going on in the third dimension for these surfaces. Some people believe that the quadratic cylinders are essentially some degenerate cases of the quadric surfaces.   Your textbook include a summary page for this section (page 724). I recommend you organize your notes to include a similar summary page for your reference (with more details if you like). Again, Richard cares more about your understanding and the ability to analyze surfaces than sketching a perfect surface by hand!   Assigned Problems for Section 12.6   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.     In the following exercises, state whether the given equation defines an ellipsoid or hyperboloid, and if a hyperboloid, whether it is of one or two sheets.        We rewrite the equation as follows: This equation defines an ellipse.         We rewrite the equation as follows: This equation defines an ellipse.       In the following exercises, state whether the given equation defines an elliptic paraboloid, a hyperbolic paraboloid, or an elliptic cone.        This is the equation of an elliptic cone.         Rewriting the equation as We identify it as the equation of a hyperbolic paraboloid.       In the following exercises, state the type of the quadric surface and describe the trace obtained by intersecting with the given plane.     ,    The equation defines an ellipsoid. The -trace is obtained by substituting in the equation of the ellipsoid. This gives the equation which defines a circle in the -plane.      ,    The quadric surface is an ellipsoid, since its equation has the form for , , and . To find the trace obtained by intersecting the ellipsoid with the plane , we set in the equation of the ellipsoid. This gives To get the standard form we divide by to obtain We conclude that the trace is an ellipse on the -\\plane with the equation above.      Match each of the ellipsoids in the figure below with the correct equation.                         We rewrite the equation in the form The ellipsoid intersets the , , and axes at the points , , and , hence (B) is the corresponding figure.    We rewrite the equation in the form The , , and intercepts are , , and respectively, hence (A) is the correct figure.    We rewrite the equation in the form The , , and intercepts are , , and respectively, hence theh corresponding figure is (C) .        In the following exercises, sketch the given surface.        The equation defines a hyperboloid of one sheet. The trace on the plane is the circle The trace on the plane is the hyperbola and the trace on the plane is the hyperbola   We obtain the surface shown below.   The hyperboloid with equation .             The equation defines an elliptic cone. The trace on the plane is the ellipse The trace on the plane is the hyperbola and the trace on the plane is the hyperbola   The sketch of the surface is shown below.   The elliptic cone .             This is the equation of an elliptic paraboloid oriented along the -axis.  The graph of the surface is shown below.   The circular paraboloid .          Find the equation of the hyperboloid shown in the following figure.      The hyperboloid in the figure is of one sheet and the intersections with the planes are ellipses. Hence, the equation of the hyperboloid has the form Substituting , we get By the given information this ellipse has and intercepts at the points and , hence and .  Substituting in the equation of the hyperbolod, we get Substituting , we get By the given information the following must hold. which implies that Thus, , and by substituting back we obtain the following equation      "
},
{
  "id": "sec126-QuadricSurfaces-2-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#sec126-QuadricSurfaces-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadric surfaces "
},
{
  "id": "sec126-QuadricSurfaces-2-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#sec126-QuadricSurfaces-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     recognize and classify the six standard types of quadric surfaces from their algebraic equations.    apply the method of traces to visualize, analyze, and sketch the quadric surface in .    identify and describe quadratic cylinders as surfaces that extend conic sections along a specific axis.    manipulate general second-degree equations algebraically to match standard forms for identification and graphing.    "
},
{
  "id": "sec126-QuadricSurfaces-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#sec126-QuadricSurfaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quadric quadric surface "
},
{
  "id": "subsec-ConicSections-Review-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-ConicSections-Review-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conic sections "
},
{
  "id": "subsec-ConicSections-Review-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-ConicSections-Review-3",
  "type": "Figure",
  "number": "12.6.1",
  "title": "",
  "body": "  Types of conic sections where (a) are the standard conic sections and (b) are the degenerate conic sections  "
},
{
  "id": "subsec-StandardQuadricSurfaces-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ellipsoid "
},
{
  "id": "subsec-StandardQuadricSurfaces-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-3",
  "type": "Figure",
  "number": "12.6.2",
  "title": "",
  "body": " The ellipsoid with equation .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-5",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "traces "
},
{
  "id": "subsec-StandardQuadricSurfaces-7",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-7",
  "type": "Example",
  "number": "12.6.3",
  "title": "",
  "body": " Describe the traces of the ellipsoid .   So what are the \"standard\" traces of the ellipsoid and how do we find them?  P.S.: Richard will use the \"standard\" traces here since they are the most easiest to work with (but not necessarily the most informative... but this is a good start! :D).    To find the traces, we will set one variable to zero at a time and analyze the resulting equations.    -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 3 along the -axis and semi-minor axis length 2 along the -axis.     -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 2 along the -axis.     -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 3 along the -axis.      The traces of the ellipsoid .      See that we can determine what the ellipsoid looks like when we know its traces!   "
},
{
  "id": "subsec-StandardQuadricSurfaces-9",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperboloid "
},
{
  "id": "subsec-StandardQuadricSurfaces-10",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperboloid of one sheet "
},
{
  "id": "subsec-StandardQuadricSurfaces-11",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-11",
  "type": "Figure",
  "number": "12.6.5",
  "title": "",
  "body": " The hyperboloid with equation .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-14",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-14",
  "type": "Example",
  "number": "12.6.6",
  "title": "",
  "body": " Describe the traces of the hyperboloid .  How does the value of (in this problem, the ), affect the shape of the hyperboloid?   To find the traces, we will set one variable to zero at a time and analyze the resulting equations.    -trace : Setting , we get .  This is an ellipse on the -plane centered at the origin with semi-major axis length 5 along the -axis and semi-minor axis length 3 along the -axis.  So it makes sense for the values of and to control the size of the \"waist\" of the hyperboloid.     -trace : Setting , we get .  This is a hyperbola on the -plane centered at the origin that opens along the -axis. The vertices are located at , and the asymptotes are given by the lines .     -trace : Setting , we get .  This is a hyperbola on the -plane centered at the origin that opens along the -axis. The vertices are located at , and the asymptotes are given by the lines .     Observe that the value of (in this problem, the ) affects the steepness of the hyperbolas in the and traces. A larger value results in a steeper asymptotes in the traces, which means the hyperbolas are less \"wide\" compared to the waist; a smaller value results in less steep asymptotes, which means the hyperbolas are more \"wide\" compared to the waist.   The traces of the hyperboloid .       "
},
{
  "id": "subsec-StandardQuadricSurfaces-15",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperboloid of two sheets "
},
{
  "id": "subsec-StandardQuadricSurfaces-16",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-16",
  "type": "Figure",
  "number": "12.6.8",
  "title": "",
  "body": " The hyperboloid with equation .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-20",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-20",
  "type": "Figure",
  "number": "12.6.9",
  "title": "",
  "body": " The traces of the hyperboloid .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-21",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic cone "
},
{
  "id": "subsec-StandardQuadricSurfaces-22",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-22",
  "type": "Figure",
  "number": "12.6.10",
  "title": "",
  "body": " The elliptic cone     "
},
{
  "id": "subsec-StandardQuadricSurfaces-26",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-26",
  "type": "Figure",
  "number": "12.6.11",
  "title": "",
  "body": " The traces of the elliptic cone .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-27",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paraboloids "
},
{
  "id": "subsec-StandardQuadricSurfaces-28",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic paraboloid "
},
{
  "id": "subsec-StandardQuadricSurfaces-29",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-29",
  "type": "Figure",
  "number": "12.6.12",
  "title": "",
  "body": " The elliptic paraboloid .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-32",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-32",
  "type": "Figure",
  "number": "12.6.13",
  "title": "",
  "body": " The traces of the elliptic paraboloid .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-33",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic paraboloid "
},
{
  "id": "subsec-StandardQuadricSurfaces-34",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-34",
  "type": "Figure",
  "number": "12.6.14",
  "title": "",
  "body": " The hyperbolic paraboloid .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-37",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-37",
  "type": "Figure",
  "number": "12.6.15",
  "title": "",
  "body": " The traces of the hyperbolic paraboloid .     "
},
{
  "id": "subsec-StandardQuadricSurfaces-39",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-39",
  "type": "Example",
  "number": "12.6.16",
  "title": "",
  "body": " State the type of quadric surface and describe the trace obtained by intersecting with the plane .   To determine the type of quadric surface, we match the equation to the standard forms we have learned. Yet, there is no fractions on the term and the term... What to do?  Recall that we can always manipulate the equation algebraically to get it into a more recognizable form. For example, we know that can be rewritten as if we want to get some fractions out of it.    We first rewrite the equation as which matches the standard form of a hyperboloid of two sheets.  To find the trace on the plane , we substitute into the equation. We obtain The trace is an ellipse on the plane .   "
},
{
  "id": "subsec-StandardQuadricSurfaces-40",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-StandardQuadricSurfaces-40",
  "type": "Example",
  "number": "12.6.17",
  "title": "",
  "body": " Sketch the surface    There are two approaches to sketching a surface.  One is to rewrite the equation into a more recognizable form, then use the standard sketch as a starting point. But the downside is that we may not be able to match it to a standard form easily, especially when there are some slight alternations involved (then not only you will need to recognize the type of surface, but also the alternation).  The other approach is to analyze the traces of the surface, then sketch it based on the traces. This approach is more general and works for any surface, but it may take more time and effort.  Alternatively, you can just put the equation into a 3D graphing tool (like GeoGebra or WolframAlpha) and get an instant sketch. But remember that Richard will not accept any calculator-generated answers without any justification on the exams.    Approach 1: Recognizing the Standard Form  By doing some algebraic manipulation, we can rewrite the equation as The format matches the standard form of a hyperboloid of one sheet. Yet there is a slight alternation that and are swapped in their usual positions.  Hence, instead of having a standard hyperboloid of one sheet that opens along the -axis, this surface opens along the -axis.   The surface .        Approach 2: Analyzing the Traces  Let's analyze the \"standard\" traces first.    -trace: Setting gives . This is a hyperbola opening along the -axis, where the vertices are at and the asymptotes are .     -trace: Setting gives . This is an ellipse centered at the origin with -intercepts at and -intercepts at .     -trace: Setting gives . This is a hyperbola opening along the -axis, where the vertices are at and the asymptotes are .   Now we can sketch the traces and combine them to form the surface!   The surface with traces.       "
},
{
  "id": "subsec-QuadraticCylinders-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic cylinders "
},
{
  "id": "subsec-QuadraticCylinders-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right circular cylinder "
},
{
  "id": "fig-cylinder-interactive-layout",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#fig-cylinder-interactive-layout",
  "type": "Figure",
  "number": "12.6.20",
  "title": "",
  "body": " The traces of the cylinder .     "
},
{
  "id": "subsec-QuadraticCylinders-5",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic cylinder "
},
{
  "id": "subsec-QuadraticCylinders-6",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-6",
  "type": "Figure",
  "number": "12.6.21",
  "title": "",
  "body": " The traces of the elliptic cylinder .     "
},
{
  "id": "subsec-QuadraticCylinders-7",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cylinder "
},
{
  "id": "subsec-QuadraticCylinders-8",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-8",
  "type": "Figure",
  "number": "12.6.22",
  "title": "",
  "body": " The traces of the hyperbolic cylinder .     "
},
{
  "id": "subsec-QuadraticCylinders-9",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabolic cylinder "
},
{
  "id": "subsec-QuadraticCylinders-10",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#subsec-QuadraticCylinders-10",
  "type": "Figure",
  "number": "12.6.23",
  "title": "",
  "body": " The traces of the parabolic cylinder .     "
},
{
  "id": "ws-sec126-3-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-3-2",
  "type": "Worksheet Exercise",
  "number": "12.6.3",
  "title": "",
  "body": "     We rewrite the equation as follows: This equation defines an ellipse.   "
},
{
  "id": "ws-sec126-3-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-3-3",
  "type": "Worksheet Exercise",
  "number": "12.6.7",
  "title": "",
  "body": "     We rewrite the equation as follows: This equation defines an ellipse.   "
},
{
  "id": "ws-sec126-4-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-4-2",
  "type": "Worksheet Exercise",
  "number": "12.6.9",
  "title": "",
  "body": "     This is the equation of an elliptic cone.   "
},
{
  "id": "ws-sec126-4-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-4-3",
  "type": "Worksheet Exercise",
  "number": "12.6.13",
  "title": "",
  "body": "     Rewriting the equation as We identify it as the equation of a hyperbolic paraboloid.   "
},
{
  "id": "ws-sec126-5-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-5-2",
  "type": "Worksheet Exercise",
  "number": "12.6.17",
  "title": "",
  "body": "  ,    The equation defines an ellipsoid. The -trace is obtained by substituting in the equation of the ellipsoid. This gives the equation which defines a circle in the -plane.   "
},
{
  "id": "ws-sec126-5-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-5-3",
  "type": "Worksheet Exercise",
  "number": "12.6.19",
  "title": "",
  "body": "  ,    The quadric surface is an ellipsoid, since its equation has the form for , , and . To find the trace obtained by intersecting the ellipsoid with the plane , we set in the equation of the ellipsoid. This gives To get the standard form we divide by to obtain We conclude that the trace is an ellipse on the -\\plane with the equation above.   "
},
{
  "id": "ws-sec126-6",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-6",
  "type": "Worksheet Exercise",
  "number": "12.6.25",
  "title": "",
  "body": " Match each of the ellipsoids in the figure below with the correct equation.                         We rewrite the equation in the form The ellipsoid intersets the , , and axes at the points , , and , hence (B) is the corresponding figure.    We rewrite the equation in the form The , , and intercepts are , , and respectively, hence (A) is the correct figure.    We rewrite the equation in the form The , , and intercepts are , , and respectively, hence theh corresponding figure is (C) .     "
},
{
  "id": "ws-sec126-7-2",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-7-2",
  "type": "Worksheet Exercise",
  "number": "12.6.29",
  "title": "",
  "body": "     The equation defines a hyperboloid of one sheet. The trace on the plane is the circle The trace on the plane is the hyperbola and the trace on the plane is the hyperbola   We obtain the surface shown below.   The hyperboloid with equation .       "
},
{
  "id": "ws-sec126-7-3",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-7-3",
  "type": "Worksheet Exercise",
  "number": "12.6.33",
  "title": "",
  "body": "     The equation defines an elliptic cone. The trace on the plane is the ellipse The trace on the plane is the hyperbola and the trace on the plane is the hyperbola   The sketch of the surface is shown below.   The elliptic cone .       "
},
{
  "id": "ws-sec126-7-4",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-7-4",
  "type": "Worksheet Exercise",
  "number": "12.6.39",
  "title": "",
  "body": "     This is the equation of an elliptic paraboloid oriented along the -axis.  The graph of the surface is shown below.   The circular paraboloid .       "
},
{
  "id": "ws-sec126-8",
  "level": "2",
  "url": "sec126-QuadricSurfaces.html#ws-sec126-8",
  "type": "Worksheet Exercise",
  "number": "12.6.45",
  "title": "",
  "body": " Find the equation of the hyperboloid shown in the following figure.      The hyperboloid in the figure is of one sheet and the intersections with the planes are ellipses. Hence, the equation of the hyperboloid has the form Substituting , we get By the given information this ellipse has and intercepts at the points and , hence and .  Substituting in the equation of the hyperbolod, we get Substituting , we get By the given information the following must hold. which implies that Thus, , and by substituting back we obtain the following equation    "
},
{
  "id": "sec127-CylindricalSphericalCoordinates",
  "level": "1",
  "url": "sec127-CylindricalSphericalCoordinates.html",
  "type": "Section",
  "number": "12.7",
  "title": "Cylindrical and Spherical Coordinates",
  "body": " Cylindrical and Spherical Coordinates   We have been working almost exclusively with the rectangular coordinate system so far in . There are in fact other ways to describe points in , and sometimes these alternative coordinate systems can make our lives a lot easier!  In this section, we are going to expand our toolkit by introducing two new coordinate systems: cylindrical coordinates and spherical coordinates . These systems are designed specifically to make working with cylinders and spheres much more natural.    After this section, students will be able to:     locate points in using cylindrical and spherical coordinates and understand the geometric meaning of each component (like , , , and ).    convert coordinates and equations between rectangular, cylindrical, and spherical systems.    identify and sketch level surfaces to build intuition for how these coordinate systems grid up the space.    describe and sketch solid regions defined by inequalities in cylindrical and spherical coordinates.      Recall back in , we defined rectangular coordinates in using an ordered triple , where , , and measure the directed distances along the -, -, and -axes, respectively. This is a direct extension of the rectangular coordinate system in .  Back in MTH 253 or MTH 253Z, you may learn about another coordinate system in called polar coordinates . In polar coordinates, a point in the plane is represented by an ordered pair , where is the directed distance from the pole to the point, and is the angle formed by the positive -axis and the line segment connecting the pole to the point.  The polar coordinate system can also be extended to , and there are two common ways to do so. In this section, we will investigate both of these extensions, and they are the cylindrical coordinates and spherical coordinates .   Review: Polar Coordinates  In polar coordinates plane, there is a pole and a polar axis . To translate these terms to rectangular coordinates plane, the pole corresponds to the origin and the polar axis corresponds to the positive -axis.  To plot a point in polar coordinates, we start at the pole, rotate radians about the pole in the counterclockwise direction (if is positive) or clockwise direction (if is negative), and then move units along the ray formed by the rotation. If is positive, we move in the same direction as the ray; if is negative, we move in the opposite direction of the ray.  If you learn about polar coordinates from Richard (well none of you did), Richard likes to use the grid shown below to help students visualize polar coordinates plane.    Polar Coordinates Plane with Grid, where the concentric circles represent different values of , and the lines radiating from the pole represent different values of   Now that we have another coordinate system in , it is important to know how to convert between rectangular coordinates and polar coordinates. We can figure out the conversion formulas by constructing a right triangle with legs parallel to the - and -axes, and the hypotenuse connecting the origin to the point .    Right triangle to convert between polar and rectangular coordinates   The right triangle above gives us the following conversion formulas.   Conversion between Polar and Rectangular Coordinates   A point with polar coordinates has rectangular coordinates , where   A point with rectangular coordinates has polar coordinates , where     Just be careful that the radius can be negative here, and the angle may not be in the range of the inverse tangent function . Remember to adjust and accordingly!  We will not go in further detail about polar coordinates here since this is just a review. Feel free to refer back to your MTH 253 or MTH 253Z notes if you need a refresher on this topic. Here is the lecture notes when Richard taught polar coordinates in MTH 112Z before (just in case you want to know more about polar coordinates).    Cylindrical Coordinates  Cylindrical coordinates in is one way to extend polar coordinates in . Imagine we plot a point in polar coordinates plane, then we can create a circle using the radius . The value will determine where the point is located on the circle. There is no \"height\" of this point yet since we are still in .  Now we extend this idea to !  One way to do so is to assign a \"height\" value to the point. If we move the circle up or down along the -axis, we really create a cylinder to locate the point in .  That is, we can represent a point in using the ordered triple , where are the polar coordinates of the projection of the point onto the -plane, and is the directed distance from the -plane to the point. This ordered triple is called the cylindrical coordinates of the point.    Cylindrical coordinates where has the cylindrical coordinates   Similar to polar coordinates, it is important to know how to convert between rectangular coordinates and cylindrical coordinates. The conversion formulas on the -plane are the same as the polar coordinates formulas (since we literally construct the cylindrical coordinates using polar coordinates on the -plane), and we just add the coordinate as is.   Conversion between Cylindrical and Rectangular Coordinates   A point with cylindrical coordinates has rectangular coordinates , where   A point with rectangular coordinates has cylindrical coordinates , where      Convert the cylindrical coordinates to rectangular coordinates.   Conventionally, we use to denote cylindrical coordinates. That is, we read the cylindrical coordinates as Now we have everything we need to convert this point to rectangular coordinates!  As always, Richard included a visual below to help you better understand the geometry of cylindrical coordinates.         Using the conversion formulas, we obtain Therefore, the rectangular coordinates are .     Convert the rectangular coordinates to cylindrical coordinates.   We are given the rectangular coordinates Now we have everything we need to convert this point to cylindrical coordinates, which is conventionally denoted !  As always, Richard included a visual below to help you better understand the geometry of cylindrical coordinates. Our goal here is to find the values of , , and for the point .         Using the conversion formulas, we obtain Therefore, the cylindrical coordinates are .    Recall the way we build the cylindrical coordinates is to extend polar coordinates by introducing the \"height\" of the point along the -axis. The -plane on which we do all the fun polar coordinates stuff on is called the level surface    The level surface is a surface obtained by setting one of the coordinates to be constant. In rectangular coordinates, the level surfaces are the coordinate planes discussed in .  Yet, not all level surfaces are planes in cylindrical coordinates. Let's think it through together. If we set , where is a constant, then we are just looking at a horizontal plane intersecting the -axis at .  If we set , where is a constant, then we are looking at all the points that are units away from the -axis, regardless of the -coordinate. This creates a right circular cylinder of radius centered along the -axis.  If we set , where is a constant, then we are looking at all the points that form an angle of with the positive -axis when projected onto the -plane. Taking all possible z -values, this creates a half -plane originating from the -axis and making an angle of with the -plane.    Level Surfaces in Cylindrical Coordinates   But why do we care about level surfaces? One of the reasons is that level surfaces can help us visualize surfaces defined in cylindrical coordinates rather than imagining the whole 3-dimensional graph at once. The level surfaces can act as \"slices\" of the surface to help us understand the overall shape of the surface.   Sketch the set described in cylindrical coordinates.   Observe that the three coordinates are all bounded in some way. Instead of trying to imagine the whole 3-dimensional shape at once, we can analyze the level surfaces to help us sketch the shape step by step.  So what are the level surfaces here? Putting the level surfaces together (with the right bounds!), we can determine the shape!    Let's start by analyzing the level surfaces one by one! The level surface is a right circular cylinder of radius 1 centered along the -axis, and the level surface is another right circular cylinder of radius 3 centered along the -axis. The region between these two cylinders is a hollow cylindrical shell.  The level surface is the half -plane, and the level surface is the half -plane. The region between these two half-planes is a quarter of the hollow cylindrical shell we obtained above.  The level surface is the -plane, and the level surface is a horizontal plane intersecting the -axis at . The region between these two planes is a vertical slice of the quarter hollow cylindrical shell we obtained above.  Putting these three regions together, we obtain a quarter of a hollow cylindrical shell with inner radius 1, outer radius 3, and height 4, as shown in the diagram below.           Spherical Coordinates  Spherical coordinates in is another way to extend polar coordinates in . Instead of directly lifting the point in polar coordinates up or down to create a cylinder, we can create a sphere by rotating the radius up and down.    Spherical coordinates where has the spherical coordinates   As indicated in the diagram above, we can create a sphere by knowing the radius and two different types of angles:    is the directed distance from the origin to the point (aka the radius of the sphere). Since the radius of the sphere should be the same as the radius of the -trace, this value should match up with in polar\/cylindrical coordinates.     is the polar angle of projection onto the -plane, which is the same as the angle in polar\/cylindrical coordinates (the standard angle rotation from the positive -axis to the projection of the point onto the -plane).     is the angle of declination , which measures how much we rotate the radius down from the top of the sphere along the -axis (declines from the vertical).     Feel free to play with the applet below to get a better understanding of spherical coordinates and how the three coordinates work together to locate a point in !   Spherical Coordinates Applet. Open in GeoGebra     P.S.: you may want to open the applet in GeoGebra directly using the link above to get the full menu and controls. Richard is a bit sick of trying to figure out how to make the embedded applet work properly with scaling and full controls...  Now that we know how spherical coordinates work, it is important to know how to convert between rectangular coordinates and spherical coordinates. The only thing we can carry over from polar\/cylindrical coordinates is the angle . So we have the conversion formula We will next need to figure out how to relate and to , , and .   is easy to relate since it is just the radius of the sphere centered at the origin. Therefore, we have the conversion formula    is a bit tricky to relate. One of the reasons why we define as the angle of declination is that it allows us to construct a right triangle with legs parallel to the -plane and the -axis, and the hypotenuse being the radius (see the diagram below). Using this right triangle, we have the conversion formula     Conversion between rectangular and spherical coordinates.   The diagram above can also help us convert from spherical coordinates to rectangular coordinates. is the most straightforward to relate since it is just the vertical leg of the right triangle. Therefore, we have the conversion formula   To relate and to spherical coordinates, we can first find the radius of the -trace using the right triangle. This radius is just . Then we can use the polar coordinates conversion formulas to find and as follows:   Let's summarize it to a fancy theorem!   Conversion between Spherical and Rectangular Coordinates   A point with spherical coordinates has rectangular coordinates , where   A point with rectangular coordinates has spherical coordinates , where      Convert the spherical coordinates to rectangular coordinates.   Conventionally, we use to denote spherical coordinates. That is, we read the spherical coordinates as Now we have everything we need to convert this point to rectangular coordinates!  As always, Richard included a visual below to help you better understand the geometry of spherical coordinates.         Using the conversion formulas, we obtain Therefore, the rectangular coordinates are .     Convert the rectangular coordinates to spherical coordinates.   We are given the rectangular coordinates Now we have everything we need to convert this point to spherical coordinates, which is conventionally denoted !  As always, Richard included a visual below to help you better understand the geometry of spherical coordinates. Our goal here is to find the values of , , and for the point .         Using the conversion formulas, we obtain Therefore, the spherical coordinates are .    What about the level surfaces in spherical coordinates? Similar to cylindrical coordinates, we can fix one of the three spherical coordinates and let the other two vary to see what kind of surface is formed.   Fixing (a constant) gives us a sphere of radius centered at the origin.    Fixing (a constant) gives us a vertical half-plane that extends from the -axis at an angle of .    Fixing (a constant) gives us a cone with its vertex at the origin and its axis along the -axis. The angle between the axis and the surface of the cone is .       Level Surfaces in Spherical Coordinates   Similarly, level surfaces can help us visualize regions described in spherical coordinates.   Sketch the set described in spherical coordinates.   Observe that is a constant, so we are looking at the level surface of a sphere with radius 1.  Now consider the bounds on . By setting to be the two bounds should give us two level surfaces that restrict the region of the sphere we want to sketch.  This is more like a FYI. Observe that is not restricted at all, so this won't be a restriction on the region.    The two level surfaces for and are cones that intersect the sphere . The region described is the \"band\" on the sphere between these two cones. The sketch is shown below.         Now that we learned two new coordinate systems in , then the next natural question to ponder is how to convert coordinates between these two coordinates?   Well there is a straightforward way to do this by using rectangular coordinates as an intermediary! If you are not satisfied with this method and want to figure out the conversion formulas directly, feel free to give it a try as an exercise (and this is not difficult at all! You will just need to pick up a lot of the clues here and there!).  You may be wondering why bother extending the polar coordinates to spherical coordinates when we already have cylindrical coordinates (and the \"height\" of the point is a lot easier to deal with)? Well the most obvious answer is that we live on the planet of earth , which is (approximately) a sphere! We can locate things easier on earth using spherical coordinates.  The two types of angles, and , are the two measures we often use to locate points on the surface of earth.   A longitude is the angle measured East or West from the prime meridian (which runs through Greenwich, England). It ranges from (West) to (East).  If we align the prime meridian with the positive -axis, then the longitude corresponds to (just be mindful of the range and the direction of )    A latitude measures the angle North or South from the equator. It ranges from (South) to (North).  This is similar to , but with a slight modification (recalibration). Since measures the angle of declination from the North Pole, we can convert latitude to using the formula (so we basically recalibrate the value of to measure from the equator instead of the North Pole).       Longtitude and latitude provide spherical coordinates on the surface of the earth   We will look at more applications to the cylindrical and spherical coordinates in later chapters. The two new coordinates systems are very useful in integration and vector calculus!    Assigned Problems for Section 12.7   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Convert the cylindrical coordinates to rectangular coordinates.   We have , , and . Thus, Hence, the rectangular coordinates are .     Convert the rectangular coordinates to cylindrical coordinates.   We have , , and . Thus, Since the point is in the first quadrant, we know that . Therefore, The cooresponding cylindrical coordinates are      Describe the set in cylindrical coordinates.   The projection of the points in this set onto the -plane are points on the -axis, thus or . Therefore, In both cases, , thus the inequality becomes . In cylindrical coordinates, we obtain the following inequality Hence, the set in cylindrical coordinates is      Sketch the set described in cylindrical coordinates.   The region , is a hollow cylinder with inner radius 1, outer radius 3, and height 4. The sketch is shown below.          Find an equation of the form in cylindrical coordinates for the surface .   We rewrite the equation in the form Substituting and , we get      Convert the spherical coordinates to rectangular coordinates.   Since , , and , we get Hence, the rectangular coordinates are      Convert the rectangular coordinates to spherical coordinates.   We have , , and . Thus, The angular coordinate satisfies , since the point is in the first quadrant. Then we have The angle of declination satisfies Hence, the spherical coordinates are      Convert the cylindrical coordinates to spherical coordinates.   We are given that , , and . Using the conversion formulas, we have Hence, the spherical coordinates are      Convert the spherical coordinates to cylindrical coordinates.   We are given that , , and . To find , we use the formulas and to get and so   Clearly, , and as for , So, in cylindrical coordinates, our point is .     Describe the set in spherical coordinates.   We substitute and in the given inequality. This gives   The equality determines that or (and the origin). In both cases, . Hence, we get We obtain the following description      Sketch the set of points described in spherical coordinates.   This set is the part of the ball of radius which is below the first quadrant of the -plane, as shown in the following figure:          Find an equation of the form in spherical coordinates for the surface .   We substitute and to obtain Using the identify , we get We take the square root of both sides. Siince , we have . Hence,      An apple modeled by taking all the points in and on a sphere of radius inches is cored with a vertical cylinder of radius in. Use inequalities in cylindrical coordinates to describe the set of all points that remain in the apple once the core is removed.   The sphere together with its interior is, in rectangular coordinates, the set of points with . In cylindrical coordinates, this is the set of points with . So we can parametrize the sphere and its interior as   The vertical cylinder together with its interior is parametrized by . The cylinder intersects the sphere when , or . When , all points in the sphere lie inside the cylinder, so are gone when the cylinder is removed. So removing the cylinder from the sphere gives a set of points parametrized as      "
},
{
  "id": "sec127-CylindricalSphericalCoordinates-2-2",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#sec127-CylindricalSphericalCoordinates-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylindrical coordinates spherical coordinates "
},
{
  "id": "sec127-CylindricalSphericalCoordinates-2-3",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#sec127-CylindricalSphericalCoordinates-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     locate points in using cylindrical and spherical coordinates and understand the geometric meaning of each component (like , , , and ).    convert coordinates and equations between rectangular, cylindrical, and spherical systems.    identify and sketch level surfaces to build intuition for how these coordinate systems grid up the space.    describe and sketch solid regions defined by inequalities in cylindrical and spherical coordinates.    "
},
{
  "id": "sec127-CylindricalSphericalCoordinates-4",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#sec127-CylindricalSphericalCoordinates-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar coordinates "
},
{
  "id": "sec127-CylindricalSphericalCoordinates-5",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#sec127-CylindricalSphericalCoordinates-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylindrical coordinates spherical coordinates "
},
{
  "id": "subsec-PolarCoordinates-Review-2",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-PolarCoordinates-Review-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pole polar axis "
},
{
  "id": "subsec-PolarCoordinates-Review-5",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-PolarCoordinates-Review-5",
  "type": "Figure",
  "number": "12.7.1",
  "title": "",
  "body": "  Polar Coordinates Plane with Grid, where the concentric circles represent different values of , and the lines radiating from the pole represent different values of  "
},
{
  "id": "subsec-PolarCoordinates-Review-7",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-PolarCoordinates-Review-7",
  "type": "Figure",
  "number": "12.7.2",
  "title": "",
  "body": "  Right triangle to convert between polar and rectangular coordinates  "
},
{
  "id": "thm-Conversion-PolarRectangular",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#thm-Conversion-PolarRectangular",
  "type": "Theorem",
  "number": "12.7.3",
  "title": "Conversion between Polar and Rectangular Coordinates.",
  "body": " Conversion between Polar and Rectangular Coordinates   A point with polar coordinates has rectangular coordinates , where   A point with rectangular coordinates has polar coordinates , where    "
},
{
  "id": "subsec-CylindricalCoordinates-5",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylindrical coordinates "
},
{
  "id": "subsec-CylindricalCoordinates-6",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-6",
  "type": "Figure",
  "number": "12.7.4",
  "title": "",
  "body": "  Cylindrical coordinates where has the cylindrical coordinates  "
},
{
  "id": "thm-Conversion-CylindricalRectangular",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#thm-Conversion-CylindricalRectangular",
  "type": "Theorem",
  "number": "12.7.5",
  "title": "Conversion between Cylindrical and Rectangular Coordinates.",
  "body": " Conversion between Cylindrical and Rectangular Coordinates   A point with cylindrical coordinates has rectangular coordinates , where   A point with rectangular coordinates has cylindrical coordinates , where    "
},
{
  "id": "subsec-CylindricalCoordinates-9",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-9",
  "type": "Example",
  "number": "12.7.6",
  "title": "",
  "body": " Convert the cylindrical coordinates to rectangular coordinates.   Conventionally, we use to denote cylindrical coordinates. That is, we read the cylindrical coordinates as Now we have everything we need to convert this point to rectangular coordinates!  As always, Richard included a visual below to help you better understand the geometry of cylindrical coordinates.         Using the conversion formulas, we obtain Therefore, the rectangular coordinates are .   "
},
{
  "id": "subsec-CylindricalCoordinates-10",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-10",
  "type": "Example",
  "number": "12.7.8",
  "title": "",
  "body": " Convert the rectangular coordinates to cylindrical coordinates.   We are given the rectangular coordinates Now we have everything we need to convert this point to cylindrical coordinates, which is conventionally denoted !  As always, Richard included a visual below to help you better understand the geometry of cylindrical coordinates. Our goal here is to find the values of , , and for the point .         Using the conversion formulas, we obtain Therefore, the cylindrical coordinates are .   "
},
{
  "id": "subsec-CylindricalCoordinates-16",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-16",
  "type": "Figure",
  "number": "12.7.10",
  "title": "",
  "body": "  Level Surfaces in Cylindrical Coordinates  "
},
{
  "id": "subsec-CylindricalCoordinates-18",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-CylindricalCoordinates-18",
  "type": "Example",
  "number": "12.7.11",
  "title": "",
  "body": " Sketch the set described in cylindrical coordinates.   Observe that the three coordinates are all bounded in some way. Instead of trying to imagine the whole 3-dimensional shape at once, we can analyze the level surfaces to help us sketch the shape step by step.  So what are the level surfaces here? Putting the level surfaces together (with the right bounds!), we can determine the shape!    Let's start by analyzing the level surfaces one by one! The level surface is a right circular cylinder of radius 1 centered along the -axis, and the level surface is another right circular cylinder of radius 3 centered along the -axis. The region between these two cylinders is a hollow cylindrical shell.  The level surface is the half -plane, and the level surface is the half -plane. The region between these two half-planes is a quarter of the hollow cylindrical shell we obtained above.  The level surface is the -plane, and the level surface is a horizontal plane intersecting the -axis at . The region between these two planes is a vertical slice of the quarter hollow cylindrical shell we obtained above.  Putting these three regions together, we obtain a quarter of a hollow cylindrical shell with inner radius 1, outer radius 3, and height 4, as shown in the diagram below.        "
},
{
  "id": "subsec-SphericalCoordinates-3",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-3",
  "type": "Figure",
  "number": "12.7.13",
  "title": "",
  "body": "  Spherical coordinates where has the spherical coordinates  "
},
{
  "id": "subsec-SphericalCoordinates-4",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar angle of projection angle of declination "
},
{
  "id": "fig-geogebra-full-menu-scaled",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#fig-geogebra-full-menu-scaled",
  "type": "Figure",
  "number": "12.7.14",
  "title": "",
  "body": " Spherical Coordinates Applet. Open in GeoGebra    "
},
{
  "id": "subsec-SphericalCoordinates-11",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-11",
  "type": "Figure",
  "number": "12.7.15",
  "title": "",
  "body": "  Conversion between rectangular and spherical coordinates.  "
},
{
  "id": "thm-Conversion-SphericalRectangular",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#thm-Conversion-SphericalRectangular",
  "type": "Theorem",
  "number": "12.7.16",
  "title": "Conversion between Spherical and Rectangular Coordinates.",
  "body": " Conversion between Spherical and Rectangular Coordinates   A point with spherical coordinates has rectangular coordinates , where   A point with rectangular coordinates has spherical coordinates , where    "
},
{
  "id": "subsec-SphericalCoordinates-16",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-16",
  "type": "Example",
  "number": "12.7.17",
  "title": "",
  "body": " Convert the spherical coordinates to rectangular coordinates.   Conventionally, we use to denote spherical coordinates. That is, we read the spherical coordinates as Now we have everything we need to convert this point to rectangular coordinates!  As always, Richard included a visual below to help you better understand the geometry of spherical coordinates.         Using the conversion formulas, we obtain Therefore, the rectangular coordinates are .   "
},
{
  "id": "subsec-SphericalCoordinates-17",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-17",
  "type": "Example",
  "number": "12.7.19",
  "title": "",
  "body": " Convert the rectangular coordinates to spherical coordinates.   We are given the rectangular coordinates Now we have everything we need to convert this point to spherical coordinates, which is conventionally denoted !  As always, Richard included a visual below to help you better understand the geometry of spherical coordinates. Our goal here is to find the values of , , and for the point .         Using the conversion formulas, we obtain Therefore, the spherical coordinates are .   "
},
{
  "id": "subsec-SphericalCoordinates-19",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-19",
  "type": "Figure",
  "number": "12.7.21",
  "title": "",
  "body": "  Level Surfaces in Spherical Coordinates  "
},
{
  "id": "subsec-SphericalCoordinates-21",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-21",
  "type": "Example",
  "number": "12.7.22",
  "title": "",
  "body": " Sketch the set described in spherical coordinates.   Observe that is a constant, so we are looking at the level surface of a sphere with radius 1.  Now consider the bounds on . By setting to be the two bounds should give us two level surfaces that restrict the region of the sphere we want to sketch.  This is more like a FYI. Observe that is not restricted at all, so this won't be a restriction on the region.    The two level surfaces for and are cones that intersect the sphere . The region described is the \"band\" on the sphere between these two cones. The sketch is shown below.        "
},
{
  "id": "subsec-SphericalCoordinates-26",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#subsec-SphericalCoordinates-26",
  "type": "Figure",
  "number": "12.7.24",
  "title": "",
  "body": "  Longtitude and latitude provide spherical coordinates on the surface of the earth  "
},
{
  "id": "ws-sec127-3",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-3",
  "type": "Worksheet Exercise",
  "number": "12.7.3",
  "title": "",
  "body": " Convert the cylindrical coordinates to rectangular coordinates.   We have , , and . Thus, Hence, the rectangular coordinates are .   "
},
{
  "id": "ws-sec127-4",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-4",
  "type": "Worksheet Exercise",
  "number": "12.7.9",
  "title": "",
  "body": " Convert the rectangular coordinates to cylindrical coordinates.   We have , , and . Thus, Since the point is in the first quadrant, we know that . Therefore, The cooresponding cylindrical coordinates are    "
},
{
  "id": "ws-sec127-5",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-5",
  "type": "Worksheet Exercise",
  "number": "12.7.13",
  "title": "",
  "body": " Describe the set in cylindrical coordinates.   The projection of the points in this set onto the -plane are points on the -axis, thus or . Therefore, In both cases, , thus the inequality becomes . In cylindrical coordinates, we obtain the following inequality Hence, the set in cylindrical coordinates is    "
},
{
  "id": "ws-sec127-6",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-6",
  "type": "Worksheet Exercise",
  "number": "12.7.21",
  "title": "",
  "body": " Sketch the set described in cylindrical coordinates.   The region , is a hollow cylinder with inner radius 1, outer radius 3, and height 4. The sketch is shown below.        "
},
{
  "id": "ws-sec127-7",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-7",
  "type": "Worksheet Exercise",
  "number": "12.7.29",
  "title": "",
  "body": " Find an equation of the form in cylindrical coordinates for the surface .   We rewrite the equation in the form Substituting and , we get    "
},
{
  "id": "ws-sec127-8",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-8",
  "type": "Worksheet Exercise",
  "number": "12.7.37",
  "title": "",
  "body": " Convert the spherical coordinates to rectangular coordinates.   Since , , and , we get Hence, the rectangular coordinates are    "
},
{
  "id": "ws-sec127-9",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-9",
  "type": "Worksheet Exercise",
  "number": "12.7.43",
  "title": "",
  "body": " Convert the rectangular coordinates to spherical coordinates.   We have , , and . Thus, The angular coordinate satisfies , since the point is in the first quadrant. Then we have The angle of declination satisfies Hence, the spherical coordinates are    "
},
{
  "id": "ws-sec127-10",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-10",
  "type": "Worksheet Exercise",
  "number": "12.7.45",
  "title": "",
  "body": " Convert the cylindrical coordinates to spherical coordinates.   We are given that , , and . Using the conversion formulas, we have Hence, the spherical coordinates are    "
},
{
  "id": "ws-sec127-11",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-11",
  "type": "Worksheet Exercise",
  "number": "12.7.47",
  "title": "",
  "body": " Convert the spherical coordinates to cylindrical coordinates.   We are given that , , and . To find , we use the formulas and to get and so   Clearly, , and as for , So, in cylindrical coordinates, our point is .   "
},
{
  "id": "ws-sec127-12",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-12",
  "type": "Worksheet Exercise",
  "number": "12.7.53",
  "title": "",
  "body": " Describe the set in spherical coordinates.   We substitute and in the given inequality. This gives   The equality determines that or (and the origin). In both cases, . Hence, we get We obtain the following description    "
},
{
  "id": "ws-sec127-13",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-13",
  "type": "Worksheet Exercise",
  "number": "12.7.61",
  "title": "",
  "body": " Sketch the set of points described in spherical coordinates.   This set is the part of the ball of radius which is below the first quadrant of the -plane, as shown in the following figure:        "
},
{
  "id": "ws-sec127-14",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-14",
  "type": "Worksheet Exercise",
  "number": "12.7.71",
  "title": "",
  "body": " Find an equation of the form in spherical coordinates for the surface .   We substitute and to obtain Using the identify , we get We take the square root of both sides. Siince , we have . Hence,    "
},
{
  "id": "ws-sec127-15",
  "level": "2",
  "url": "sec127-CylindricalSphericalCoordinates.html#ws-sec127-15",
  "type": "Worksheet Exercise",
  "number": "12.7.81",
  "title": "",
  "body": " An apple modeled by taking all the points in and on a sphere of radius inches is cored with a vertical cylinder of radius in. Use inequalities in cylindrical coordinates to describe the set of all points that remain in the apple once the core is removed.   The sphere together with its interior is, in rectangular coordinates, the set of points with . In cylindrical coordinates, this is the set of points with . So we can parametrize the sphere and its interior as   The vertical cylinder together with its interior is parametrized by . The cylinder intersects the sphere when , or . When , all points in the sphere lie inside the cylinder, so are gone when the cylinder is removed. So removing the cylinder from the sphere gives a set of points parametrized as    "
},
{
  "id": "sec131-VectorFunctions",
  "level": "1",
  "url": "sec131-VectorFunctions.html",
  "type": "Section",
  "number": "13.1",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions   In single-variable calculus, we studied functions of the form , which result in graphs that are curves in the -plane. In linear algebra or the previous chapter, we studied vectors, which represent magnitude and direction but are static.  In this section, we combine these concepts to define vector-valued functions . By allowing the components of a vector to be functions of a parameter (often representing time), we can describe dynamic motion in space.    After this section, students will be able to:     determine the domain of a vector-valued function.    distinguish between the path and the curve of a vector-valued function.    analyze and identify space curves by examining their projections onto the coordinate planes.    construct parametrizations for curves in .      Imagine you are tracking the position of a particle moving in . At any time , the position of the particle can be represented by a vector , where and are functions that describe the particle's coordinates in the plane. As time progresses, the tip of the vector traces out a path in the plane, known as a Plane Curve .    Plane Curve in   Similarly, if the particle is moving in , at any time , the position of the particle can be represented by a vector , where , , and are functions that describe the particle's coordinates in . As time progresses, the tip of the vector traces out a path in space, known as a Space Curve .    Space Curve in   The function is called a Vector-Valued Function because it assigns a vector to each value of the parameter . In , a vector-valued function is typically expressed as where is called the parameter of the function, and , , and are the component or coordinate functions that determine the coordinates of the vector in space.  Note that the parameter often represents time, but it can represent other quantities as well.   Domain, Path, and Curve  Now that we have a function, we want to understand its domain. The domain of a vector-valued function is the set of all possible values of the parameter for which all the component functions are defined.   What is the domain of ?   The component functions are We can find their domains individually.  The domain of must be the set of all values for which all three component functions are defined. How can we find a set of values that works for all three component functions?    The domain of is because the cubic function is defined for all real numbers.  The domain of is because the natural logarithm function is only defined for positive arguments.  The domain of is because the square root function is only defined for non-negative numbers.  To find the domain of , we need to find the intersection of the domains of the three component functions to ensure that all components are defined. That is, the domain of is which simplifies to .  Hence, the domain of is .    There are two things we are discussing here: the path parametrized by and the curve  traced by the tip of the vector .   The path is the vector-valued function itself. It describes how the curve is traversed as the parameter varies. You can think of it as the specific trip you take along that road.    The curve  is the set of points in space. It is a static geometric object left behind by the path. You can think of it as the physical road on a map.     For example, let's say we have the vector-valued function where .  The path is the function itself, which describes how the curve is traced out as varies from to (see the figure below).    The Path of   The curve is the set of points in space traced out by the tip of the vector as varies from to (see the figure below).    The Curve traced by     Projections of Vector-Valued Functions  Next, let's discuss how to describe the curve traced by a vector-valued function. One way to do so is to eliminate one variable through projection onto a coordinate plane . Then we can easily describe the resulting curve in two dimensions.   The curve traced by for is called a helix . Describe the curve in terms of its projections onto the coordinate planes.   We can project the curve onto the standard -plane, -plane, and -plane by setting the appropriate coordinate to zero. Then we can observe the resulting curves in two dimensions.    By setting , we project the curve onto the -plane. The projection is given by . This implies that Squaring and adding these equations gives Hence, the projection onto the -plane is a circle of radius centered at the origin.  By setting , we project the curve onto the -plane. The projection is given by . This implies that We can simply express in terms of as . Hence, the projection onto the -plane is a cosine curve that oscillates between and as increases.  By setting , we project the curve onto the -plane. The projection is given by . This implies that We can simply express in terms of as . Hence, the projection onto the -plane is a negative sine curve that oscillates between and as increases.  The diagram below summarizes the projections of the helix onto the three coordinate planes.    Projections of a Helix onto the Coordinate Planes     Projections are useful not only for visualizing curves in , but also for analyzing the curves in . That is, by studying the projections onto the coordinate planes, we can obtain the vector-valued function of the curve in .   Match the vector-valued functions (a)-(f) with the space curves (I)-(VI) in the figure below.                                      To match the vector-valued functions with the space curves, we can analyze the projections of each curve onto the coordinate planes. By examining the behavior of the projections, we can identify which vector-valued function corresponds to each curve.    If you want to analyze the functions...  The correct matches are:     corresponds to graph II . Observe that . This indicates the curve lies on the cone . The spiral radius increases as the variable increases, which matches graph II.     corresponds to graph VI . Here, , so the curve lies on a cylinder. The -component peaks at and approaches as . Graph VI shows a spiral on a cylinder that rises to a peak and flattens out towards the bottom, matching this behavior.     corresponds to graph V . Notice that , meaning the curve lies on the parabolic cylinder . As moves away from zero, increases quadratically while approaches zero. This matches the parabolic track seen in graph V.     corresponds to graph I . The curve lies on the cylinder . Since all components are periodic, the curve is a closed loop. The -component oscillates between and with a frequency double that of the rotation in , creating the \"saddle\" shape seen in graph I.     corresponds to graph IV . This describes a helix on the cylinder . The -component grows exponentially, which means the vertical spacing (pitch) between the coils increases as the curve rises. This is clearly visible in graph IV.     corresponds to graph III . Observe that . The curve is confined to the plane . As increases, the point oscillates along a line segment in the -plane, creating the wave-like shape on a flat plane seen in graph III.      If you want to analyze the curves...  The correct matches are:     Graph I matches equation (d)  . This is the only closed loop among the graphs. Mathematically, this corresponds to the only function where all three components are periodic, meaning the curve eventually retraces its path.     Graph II matches equation (a)  . The graph shows a spiral expanding along the -axis, forming a cone. This matches equation (a) because the radius of the spiral in the -plane is , which equals the distance along the -axis ( ).     Graph III matches equation (f)  . The graph shows a wave confined to a flat vertical plane. This matches equation (f) because , meaning the curve lies entirely on the plane .     Graph IV matches equation (e)  . The graph is a helix where the vertical distance between coils increases (the pitch widens). This matches equation (e) because the -component grows exponentially ( ), causing the curve to rise faster and faster.     Graph V matches equation (c)  . The graph shows a parabolic shape where the -coordinate approaches zero as the curve rises. This matches equation (c) because (a parabola) and , which approaches 0 as .     Graph VI matches equation (b)  . The graph depicts a spiral that is confined near the plane, rising to a peak and falling back. This corresponds to the \"bell curve\" behavior of the -component , which is bounded between 0 and 1.        Parametrization of Vector-Valued Functions  Parametrization is the process of expressing a curve using a vector-valued function. That is, given a curve in space, we want to find a vector-valued function that traces out the curve as varies over some interval.  There are generally two main approaches to parametrizing a curve.    Method 1 : picking one of the variables as the parameter and expressing the other variables in terms of that parameter.     Method 2 : using known parametrizations of standard curves (e.g., circles)) and adjusting them to fit the given curve.      Find the parametrization of the curve obtained by the intersection of the surfaces and .   Using Method 1...  We can use as the parameter.  From the first surface, we have , so , where . From the second surface, we have .  That is, the curve of intersection can be expressed as where .   Note: the sign makes the -component not a function of . In practice, we would split the parametrization into two separate parts: one for and another for , each defined over the interval .    Using Method 2...  We can use the standard parametrization of a circle in the -plane, and then adjust it to fit the given constraint.  The standard parametrization of the circle is for .  Next, we can use the second surface equation to express in terms of . That is, .  Hence, the curve of intersection can be expressed as for .    Observe that there are infinitely many ways to parametrize a curve. One way to check your answer is to literally graph the curve and the parametrization to see if they match.  We can graph the curves using the GeoGebra 3D Graphing Calculator or other 3D graphing software. If you type \"Curve(cos(t),sin(t),2-sin(t),t,0,2 π)\" into GeoGebra, you will see that the curve of intersection is a slanted ellipse. If you type \"Curve(\\sqrt{1-t^2},t,2-t,t,-1,1)\" and \"Curve(-\\sqrt{1-t^2},t,2-t,t,-1,1)\", you will also get the same slanted ellipse.  To make it more convincing, you can graph the two surfaces and see if the intersection is the slanted ellipse.   While the ideas in this section doesn't seem too difficult, it does require some practice to get comfortable with them. For example, Richard knew how to parametrize things because he knows the standard parametrizations of circles and stuff. Practice will help you internalize these concepts!   Assigned Problems for Section 13.1   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    What is the domain of ?    Find a vector parametrization of the line through in the direction .    Determine whether the space curve given by intersects the -axis, and if it does, determine where.    Match the vector-valued functions (a)-(f) with the space curves (i)-(vi) in the figure below.                                       Match the space curves (A)-(C) in the figure below with their projections (i)-(iii) onto the -plane.        In the following exercises, the function traces a circle. Determine the radius, center, and plane containing the circle.               Let be the curve given by .   Show that lies on the cone .    Sketch the cone and make a rough sketch of on the cone.       Parametrize the part of the intersection of the surfaces where using as the parameter.    Use sine and cosine to parametrize the intersection of the cylinder and the plane . Then describe the projections of this curve onto the three coordinate planes.    Two paths and intersect if there is a point lying on both curves. We say that and collide if at some point .  Determine whether and collide or intersect, giving the coordinates of the corresponding points if they exist:      In the following exercises, find a parametrization of the curve.    The circle of radius with center in a plane parallel to the -plane.    The intersection of the plane with the sphere . `     "
},
{
  "id": "sec131-VectorFunctions-2-2",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector-valued functions "
},
{
  "id": "sec131-VectorFunctions-2-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     determine the domain of a vector-valued function.    distinguish between the path and the curve of a vector-valued function.    analyze and identify space curves by examining their projections onto the coordinate planes.    construct parametrizations for curves in .    "
},
{
  "id": "sec131-VectorFunctions-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Plane Curve "
},
{
  "id": "sec131-VectorFunctions-4",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-4",
  "type": "Figure",
  "number": "13.1.1",
  "title": "",
  "body": "  Plane Curve in  "
},
{
  "id": "sec131-VectorFunctions-5",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Space Curve "
},
{
  "id": "sec131-VectorFunctions-6",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-6",
  "type": "Figure",
  "number": "13.1.2",
  "title": "",
  "body": "  Space Curve in  "
},
{
  "id": "sec131-VectorFunctions-7",
  "level": "2",
  "url": "sec131-VectorFunctions.html#sec131-VectorFunctions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector-Valued Function parameter component coordinate functions "
},
{
  "id": "subsec-BasicVectorValuedFunctions-2",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-BasicVectorValuedFunctions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "subsec-BasicVectorValuedFunctions-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-BasicVectorValuedFunctions-3",
  "type": "Example",
  "number": "13.1.3",
  "title": "",
  "body": " What is the domain of ?   The component functions are We can find their domains individually.  The domain of must be the set of all values for which all three component functions are defined. How can we find a set of values that works for all three component functions?    The domain of is because the cubic function is defined for all real numbers.  The domain of is because the natural logarithm function is only defined for positive arguments.  The domain of is because the square root function is only defined for non-negative numbers.  To find the domain of , we need to find the intersection of the domains of the three component functions to ensure that all components are defined. That is, the domain of is which simplifies to .  Hence, the domain of is .   "
},
{
  "id": "subsec-BasicVectorValuedFunctions-4",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-BasicVectorValuedFunctions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path curve path curve "
},
{
  "id": "subsec-BasicVectorValuedFunctions-7",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-BasicVectorValuedFunctions-7",
  "type": "Figure",
  "number": "13.1.4",
  "title": "",
  "body": "  The Path of  "
},
{
  "id": "subsec-BasicVectorValuedFunctions-9",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-BasicVectorValuedFunctions-9",
  "type": "Figure",
  "number": "13.1.5",
  "title": "",
  "body": "  The Curve traced by  "
},
{
  "id": "subsec-Projection_VectorValuedFunctions-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-Projection_VectorValuedFunctions-3",
  "type": "Example",
  "number": "13.1.6",
  "title": "",
  "body": " The curve traced by for is called a helix . Describe the curve in terms of its projections onto the coordinate planes.   We can project the curve onto the standard -plane, -plane, and -plane by setting the appropriate coordinate to zero. Then we can observe the resulting curves in two dimensions.    By setting , we project the curve onto the -plane. The projection is given by . This implies that Squaring and adding these equations gives Hence, the projection onto the -plane is a circle of radius centered at the origin.  By setting , we project the curve onto the -plane. The projection is given by . This implies that We can simply express in terms of as . Hence, the projection onto the -plane is a cosine curve that oscillates between and as increases.  By setting , we project the curve onto the -plane. The projection is given by . This implies that We can simply express in terms of as . Hence, the projection onto the -plane is a negative sine curve that oscillates between and as increases.  The diagram below summarizes the projections of the helix onto the three coordinate planes.    Projections of a Helix onto the Coordinate Planes    "
},
{
  "id": "subsec-Projection_VectorValuedFunctions-5",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-Projection_VectorValuedFunctions-5",
  "type": "Example",
  "number": "13.1.8",
  "title": "",
  "body": " Match the vector-valued functions (a)-(f) with the space curves (I)-(VI) in the figure below.                                      To match the vector-valued functions with the space curves, we can analyze the projections of each curve onto the coordinate planes. By examining the behavior of the projections, we can identify which vector-valued function corresponds to each curve.    If you want to analyze the functions...  The correct matches are:     corresponds to graph II . Observe that . This indicates the curve lies on the cone . The spiral radius increases as the variable increases, which matches graph II.     corresponds to graph VI . Here, , so the curve lies on a cylinder. The -component peaks at and approaches as . Graph VI shows a spiral on a cylinder that rises to a peak and flattens out towards the bottom, matching this behavior.     corresponds to graph V . Notice that , meaning the curve lies on the parabolic cylinder . As moves away from zero, increases quadratically while approaches zero. This matches the parabolic track seen in graph V.     corresponds to graph I . The curve lies on the cylinder . Since all components are periodic, the curve is a closed loop. The -component oscillates between and with a frequency double that of the rotation in , creating the \"saddle\" shape seen in graph I.     corresponds to graph IV . This describes a helix on the cylinder . The -component grows exponentially, which means the vertical spacing (pitch) between the coils increases as the curve rises. This is clearly visible in graph IV.     corresponds to graph III . Observe that . The curve is confined to the plane . As increases, the point oscillates along a line segment in the -plane, creating the wave-like shape on a flat plane seen in graph III.      If you want to analyze the curves...  The correct matches are:     Graph I matches equation (d)  . This is the only closed loop among the graphs. Mathematically, this corresponds to the only function where all three components are periodic, meaning the curve eventually retraces its path.     Graph II matches equation (a)  . The graph shows a spiral expanding along the -axis, forming a cone. This matches equation (a) because the radius of the spiral in the -plane is , which equals the distance along the -axis ( ).     Graph III matches equation (f)  . The graph shows a wave confined to a flat vertical plane. This matches equation (f) because , meaning the curve lies entirely on the plane .     Graph IV matches equation (e)  . The graph is a helix where the vertical distance between coils increases (the pitch widens). This matches equation (e) because the -component grows exponentially ( ), causing the curve to rise faster and faster.     Graph V matches equation (c)  . The graph shows a parabolic shape where the -coordinate approaches zero as the curve rises. This matches equation (c) because (a parabola) and , which approaches 0 as .     Graph VI matches equation (b)  . The graph depicts a spiral that is confined near the plane, rising to a peak and falling back. This corresponds to the \"bell curve\" behavior of the -component , which is bounded between 0 and 1.     "
},
{
  "id": "subsec-Parametrization_VectorValuedFunctions-4",
  "level": "2",
  "url": "sec131-VectorFunctions.html#subsec-Parametrization_VectorValuedFunctions-4",
  "type": "Example",
  "number": "13.1.10",
  "title": "",
  "body": " Find the parametrization of the curve obtained by the intersection of the surfaces and .   Using Method 1...  We can use as the parameter.  From the first surface, we have , so , where . From the second surface, we have .  That is, the curve of intersection can be expressed as where .   Note: the sign makes the -component not a function of . In practice, we would split the parametrization into two separate parts: one for and another for , each defined over the interval .    Using Method 2...  We can use the standard parametrization of a circle in the -plane, and then adjust it to fit the given constraint.  The standard parametrization of the circle is for .  Next, we can use the second surface equation to express in terms of . That is, .  Hence, the curve of intersection can be expressed as for .   "
},
{
  "id": "ws-sec131-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-3",
  "type": "Worksheet Exercise",
  "number": "13.1.1",
  "title": "",
  "body": " What is the domain of ?  "
},
{
  "id": "ws-sec131-4",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-4",
  "type": "Worksheet Exercise",
  "number": "13.1.5",
  "title": "",
  "body": " Find a vector parametrization of the line through in the direction .  "
},
{
  "id": "ws-sec131-5",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-5",
  "type": "Worksheet Exercise",
  "number": "13.1.7",
  "title": "",
  "body": " Determine whether the space curve given by intersects the -axis, and if it does, determine where.  "
},
{
  "id": "ws-sec131-6",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-6",
  "type": "Worksheet Exercise",
  "number": "13.1.15",
  "title": "",
  "body": " Match the vector-valued functions (a)-(f) with the space curves (i)-(vi) in the figure below.                                     "
},
{
  "id": "ws-sec131-7",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-7",
  "type": "Worksheet Exercise",
  "number": "13.1.17",
  "title": "",
  "body": " Match the space curves (A)-(C) in the figure below with their projections (i)-(iii) onto the -plane.     "
},
{
  "id": "ws-sec131-8-2",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-8-2",
  "type": "Worksheet Exercise",
  "number": "13.1.19",
  "title": "",
  "body": "    "
},
{
  "id": "ws-sec131-8-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-8-3",
  "type": "Worksheet Exercise",
  "number": "13.1.21",
  "title": "",
  "body": "    "
},
{
  "id": "ws-sec131-9",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-9",
  "type": "Worksheet Exercise",
  "number": "13.1.25",
  "title": "",
  "body": " Let be the curve given by .   Show that lies on the cone .    Sketch the cone and make a rough sketch of on the cone.     "
},
{
  "id": "ws-sec131-10",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-10",
  "type": "Worksheet Exercise",
  "number": "13.1.29",
  "title": "",
  "body": " Parametrize the part of the intersection of the surfaces where using as the parameter.  "
},
{
  "id": "ws-sec131-11",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-11",
  "type": "Worksheet Exercise",
  "number": "13.1.33",
  "title": "",
  "body": " Use sine and cosine to parametrize the intersection of the cylinder and the plane . Then describe the projections of this curve onto the three coordinate planes.  "
},
{
  "id": "ws-sec131-12",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-12",
  "type": "Worksheet Exercise",
  "number": "13.1.37",
  "title": "",
  "body": " Two paths and intersect if there is a point lying on both curves. We say that and collide if at some point .  Determine whether and collide or intersect, giving the coordinates of the corresponding points if they exist:   "
},
{
  "id": "ws-sec131-13-2",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-13-2",
  "type": "Worksheet Exercise",
  "number": "13.1.43",
  "title": "",
  "body": " The circle of radius with center in a plane parallel to the -plane.  "
},
{
  "id": "ws-sec131-13-3",
  "level": "2",
  "url": "sec131-VectorFunctions.html#ws-sec131-13-3",
  "type": "Worksheet Exercise",
  "number": "13.1.45",
  "title": "",
  "body": " The intersection of the plane with the sphere . `  "
},
{
  "id": "sec132-CalcVectorFunctions",
  "level": "1",
  "url": "sec132-CalcVectorFunctions.html",
  "type": "Section",
  "number": "13.2",
  "title": "Calculus of Vector-Valued Functions",
  "body": " Calculus of Vector-Valued Functions   In the previous section, we established that a vector-valued function traces out a curve in space as the parameter varies. Now, we turn our attention to the calculus of these functions.  Just as we used limits, derivatives, and integrals in single-variable calculus to analyze the behavior of functions (such as their rate of change and accumulation), we will define these operations for vector-valued functions.    After this section, students will be able to:     evaluate limits of vector-valued functions.    compute the derivative and apply standard differentiation rules.    interpret the derivative geometrically as a tangent vector and construct the parametrization of the tangent line at a given point.    evaluate definite and indefinite integrals of vector-valued functions.      Long story short, all the fun calculus stuff you learned (and love) about functions of a single variable extends naturally to vector-valued functions. The only difference is that we have to do everything component-wise , since a vector-valued function is just a collection of component functions bundled together, and each component function is a single variable function.   Limit of a Vector-Valued Function  Recall back in MTH 251 (or MTH 251Z), we defined limit as the function value getting arbitrarily close to some point as the input approaches some value. In the case of vector-valued functions, the input is some parameter , and the output is a vector in space. That is, we say that a vector-valued function approaches a limit (a vector) as approaches if the distance between and approaches as approaches .   Limit of a Vector-Valued Function   A vector-valued function approaches the limit (a vector) as approaches if . In this case, we write       The vector-valued function approaches the vector as   It turns out that we can compute limits of vector-valued functions by examining the behavior of each component function individually. Observe that each component function is a single-variable function, so we can apply all the limit laws we learned in MTH 251 (or MTH 251Z) to each component function. That is, the limit of a vector-valued function can be computed componentwise .   Vector-Valued Limits Are Computed Componentwise   A vector-valued function approaches a limit as if and only if each component approaches a limit, and in this case,      Evaluate    Remember the limit can be computed componentwise. So what is the limit of each of the components as approaches ?  Also, back from Calculus I (or differential calculus), what is the very first step you should do when evaluating a limit?    We will evaluate the limit componentwise:         (using L'Hôpital's Rule)        Therefore,     If we can evaluate the limit, then we can find the limit of the difference quotient, which leads us to the derivative of a vector-valued function.    Derivative of a Vector-Valued Function  Recall from MTH 251 (or MTH 251Z) that the derivative of a single-variable function is defined as the limit of the difference quotient. We extend this definition to vector-valued functions in the same way. That is, given a vector-valued function , we define the difference quotient on as follows The derivative of is the limit of the difference quotient as .   Derivative of a Vector-Valued Function   The derivative of a vector-valued function is defined as the limit of the difference quotient In Leibniz notation, the derivative is written as .    We say that is differentiable at if the derivative exists.  Similar to limits, we can compute the derivative of a vector-valued function by examining the behavior of each component function individually. That is, if , then Let's make it into a cool theorem!   Vector-Valued Derivatives Are Computed Componentwise   A vector-valued function is differentiable if and only if each component is differentiable In this case,      Compute the derivative of    Remember the derivative can be computed componentwise. So what is the derivative of each of the components?  You probably want to dig out the formula sheet you made back in Calculus I (or differential calculus) to remind yourself of the derivative formulas if needed.    We will compute the derivative componentwise:                 Therefore,     We also learned many derivative rules back in MTH 251 (or MTH 251Z). They also extend naturally to vector-valued functions as well since vector operations are also defined componentwise.   Differentiation Rules for Vector-Valued Functions   Assume that and are differentiable. Then    Sum Rule:       Constant Multiple Rule: For any constant ,      Scalar Product Rule: For any differentiable scalar-valued function ,      Chain Rule: For any differentiable scalar-valued function ,        The only weird rule here is the Scalar Product Rule , since we are multiplying two different types of functions together. Richard included a brief proof below to convince you why this works.   Proof of the Scalar Product Rule  Let . Then Using the product rule from MTH 251 (or MTH 251Z) on each component, we have as desired.   You are more than welcome to prove the other rules on your own as an exercise! The proofs are very similar to the one above, in the sense that we will need to break everything down componentwise and then apply the corresponding single-variable calculus rule to each component.   Evaluate using the Chain Rule, where    Recall the chain rule formula says So we need to compute and first.    First, we compute . Next, we compute . Putting them together, by the Chain Rule, we have     But what about multiplying two vector-valued functions? We learned back in the previous chapter that we can multiply two vectors using the dot product or the cross product. It turns out that we have product rules for both of these operations as well.    Assume that and are differentiable. Then      Proof of the Product Rules  The proofs of both rules are very similar to the proof of the Scalar Product Rule. We break down the dot product and cross product componentwise, and then apply the corresponding single-variable calculus product rule to each component.  For the dot product, recall that So we can apply the product rule from MTH 251 (or MTH 251Z) to each of the three terms individually.  Let and . Then as desired.  For the cross product, recall that So we can apply the product rule from MTH 251 (or MTH 251Z) to each of the three components individually.  Let and . Then Using the product rule from MTH 251 (or MTH 251Z) on each component, we have     P.S.: Recall the cross product is NOT commutative, so be sure to keep the order of the vectors the same when applying the cross product rule!   Let Find and .   First, we compute the derivatives of and : Now, using the Dot Product Rule, we have Next, using the Cross Product Rule, we have     One of the reasons we learned about the derivative in the first place is to find the tangent line to a curve at a given point. We can do the same thing for vector-valued functions as well.    Derivative as a Tangent Vector  Recall back in MTH 251 (or MTH 251Z), we learned that the derivative of a single-variable function at a point gives us the slope of the tangent line to the curve at that point. But there is no slope in ... so what gives?  Back in , we learned that a line in can be represented using a point and a direction vector. It turns out that the derivative of a vector-valued function at a point gives us a direction vector for the tangent line to the curve at that point. That is, the derivative of the vector-valued function at a point gives us the direction of the tangent line to the curve at that point.   Tangent Vector and Tangent Line   The derivative of a vector-valued function at a point , denoted , is a tangent vector (if it exists and is nonzero). The tangent vector is a direction vector for the tangent line to the curve. The tangent line then is the line with vector parameterization      Find an equation of the tangent line to the curve defined by at the point .   Recall back in MTH 251 (or MTH 251Z) that to find the equation of the tangent line, we need a point on the line and the slope of the tangent line. Since we are in , we trade the slope for a direction vector instead.  So what is a point on the line and a direction vector for the tangent line at the given point?    First, we need to find the value of that corresponds to the given point . From the third component, we see that . Next, we compute the derivative of : Evaluating at , we have Therefore, a vector parameterization of the tangent line is       Vector-valued Integration  Last but not least, we turn our attention to integration of vector-valued functions. Recall back in MTH 252 (or MTH 252Z) that integration and differentiation are inverse operations (guaranteed by the Fundamental Theorem of Calculus). This implies that if things work out for differentiation, it will also work out for integration as well.  Since the derivative of a vector-valued function is computed componentwise, it follows that the integral of a vector-valued function is also computed componentwise.   Vector-Valued Integrals Are Computed Componentwise   Assume that is integrable on . Then the definite integral is computed componentwise:   The indefinite integral (or antiderivative) of is also computed componentwise: where , , and are antiderivatives of , , and , respectively, and is a constant vector.    The indefinite integral (antiderivative) is easier to understand first. We are looking for some antiderivative of each of the component functions, and then we just combine them back into a vector. But what about the definite integral?  Recall back in MTH 252 (or MTH 252Z) that the definite integral defines the signed area under the curve of the function. But this result doesn't make sense in this case... The definite integral of a vector-valued function is also a vector, but area should be a scalar... What???  It turns out that the definite integral gives us the net change in position as we move along the curve from to on each component of the vector. So interpreting the definite integral as the accumulation function is still valid here!   Evaluate the indefinite integral    Remember the integral can be computed componentwise. So what is the antiderivative of each of the components?  Also, don't forget the arbitrary constant at the end, either as a vector or componentwise.    We will compute the integral componentwise:                 Therefore, or equivalently, where is a constant vector.    But how do we evaluate definite integrals of vector-valued functions? The tool we had back in MTH 252 (or MTH 252Z) is the Fundamental Theorem of Calculus (FTC). It turns out that the FTC also holds for vector-valued functions as well!   Fundamental Theorem of Calculus for Vector-Valued Functions    Part I: If is continuous on and is an antiderivative of , then    Part II: Assume that is continuous on an open interval and let be in . Then      Evaluate the definite integral    Remember that the FTC also holds for vector-valued functions. So how does the process work again?    We will evaluate the integral componentwise using the FTC.                 Therefore,      To sum up, since the vector-valued functions are built from single-variable functions componentwise, most of the rules and properties we learned back in MTH 251 (or MTH 251Z) and MTH 252 (or MTH 252Z) extend naturally to vector-valued functions as well! But you have triple the work to do since you have to deal with three components instead of just one...   Assigned Problems for Section 13.2   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Evaluate the limit     Compute the derivative of .    Sketch the curve parametrized by together with its tangent vector at . Then do the same for     Determine the value of between and such that the tangent vector to the clycloid is parallel to .     In the following exercises, evaluate the derivative by using the appropriate Product Rule, where                Evaluate using the Chain Rule, where     Find a parametrization of the tangent line of at the point .    Evaluate the integral     Find both the general solution of the differential equation and the solution with the given initial condition.     "
},
{
  "id": "sec132-CalcVectorFunctions-2-3",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#sec132-CalcVectorFunctions-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     evaluate limits of vector-valued functions.    compute the derivative and apply standard differentiation rules.    interpret the derivative geometrically as a tangent vector and construct the parametrization of the tangent line at a given point.    evaluate definite and indefinite integrals of vector-valued functions.    "
},
{
  "id": "def-Limit_VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#def-Limit_VectorValuedFunctions",
  "type": "Definition",
  "number": "13.2.1",
  "title": "Limit of a Vector-Valued Function.",
  "body": " Limit of a Vector-Valued Function   A vector-valued function approaches the limit (a vector) as approaches if . In this case, we write    "
},
{
  "id": "subsec-Limit-VectorValuedFunctions-4",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Limit-VectorValuedFunctions-4",
  "type": "Figure",
  "number": "13.2.2",
  "title": "",
  "body": "  The vector-valued function approaches the vector as  "
},
{
  "id": "thm-Limit-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-Limit-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.3",
  "title": "Vector-Valued Limits Are Computed Componentwise.",
  "body": " Vector-Valued Limits Are Computed Componentwise   A vector-valued function approaches a limit as if and only if each component approaches a limit, and in this case,    "
},
{
  "id": "subsec-Limit-VectorValuedFunctions-7",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Limit-VectorValuedFunctions-7",
  "type": "Example",
  "number": "13.2.4",
  "title": "",
  "body": " Evaluate    Remember the limit can be computed componentwise. So what is the limit of each of the components as approaches ?  Also, back from Calculus I (or differential calculus), what is the very first step you should do when evaluating a limit?    We will evaluate the limit componentwise:         (using L'Hôpital's Rule)        Therefore,    "
},
{
  "id": "def-Derivative-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#def-Derivative-VectorValuedFunctions",
  "type": "Definition",
  "number": "13.2.5",
  "title": "Derivative of a Vector-Valued Function.",
  "body": " Derivative of a Vector-Valued Function   The derivative of a vector-valued function is defined as the limit of the difference quotient In Leibniz notation, the derivative is written as .   "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-4",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable "
},
{
  "id": "thm-Derivative-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-Derivative-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.6",
  "title": "Vector-Valued Derivatives Are Computed Componentwise.",
  "body": " Vector-Valued Derivatives Are Computed Componentwise   A vector-valued function is differentiable if and only if each component is differentiable In this case,    "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-7",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-7",
  "type": "Example",
  "number": "13.2.7",
  "title": "",
  "body": " Compute the derivative of    Remember the derivative can be computed componentwise. So what is the derivative of each of the components?  You probably want to dig out the formula sheet you made back in Calculus I (or differential calculus) to remind yourself of the derivative formulas if needed.    We will compute the derivative componentwise:                 Therefore,    "
},
{
  "id": "thm-DerivativeRules-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-DerivativeRules-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.8",
  "title": "Differentiation Rules for Vector-Valued Functions.",
  "body": " Differentiation Rules for Vector-Valued Functions   Assume that and are differentiable. Then    Sum Rule:       Constant Multiple Rule: For any constant ,      Scalar Product Rule: For any differentiable scalar-valued function ,      Chain Rule: For any differentiable scalar-valued function ,       "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-10",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scalar Product Rule "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-11",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-11",
  "type": "Note",
  "number": "13.2.9",
  "title": "Proof of the Scalar Product Rule.",
  "body": " Proof of the Scalar Product Rule  Let . Then Using the product rule from MTH 251 (or MTH 251Z) on each component, we have as desired.  "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-13",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-13",
  "type": "Example",
  "number": "13.2.10",
  "title": "",
  "body": " Evaluate using the Chain Rule, where    Recall the chain rule formula says So we need to compute and first.    First, we compute . Next, we compute . Putting them together, by the Chain Rule, we have    "
},
{
  "id": "thm-ProductRule-Dot-Cross-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-ProductRule-Dot-Cross-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.11",
  "title": "",
  "body": "  Assume that and are differentiable. Then    "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-16",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-16",
  "type": "Note",
  "number": "13.2.12",
  "title": "Proof of the Product Rules.",
  "body": " Proof of the Product Rules  The proofs of both rules are very similar to the proof of the Scalar Product Rule. We break down the dot product and cross product componentwise, and then apply the corresponding single-variable calculus product rule to each component.  For the dot product, recall that So we can apply the product rule from MTH 251 (or MTH 251Z) to each of the three terms individually.  Let and . Then as desired.  For the cross product, recall that So we can apply the product rule from MTH 251 (or MTH 251Z) to each of the three components individually.  Let and . Then Using the product rule from MTH 251 (or MTH 251Z) on each component, we have   "
},
{
  "id": "subsec-Derivative-VectorValuedFunctions-18",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Derivative-VectorValuedFunctions-18",
  "type": "Example",
  "number": "13.2.13",
  "title": "",
  "body": " Let Find and .   First, we compute the derivatives of and : Now, using the Dot Product Rule, we have Next, using the Cross Product Rule, we have    "
},
{
  "id": "def-TangentVector-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#def-TangentVector-VectorValuedFunctions",
  "type": "Definition",
  "number": "13.2.14",
  "title": "Tangent Vector and Tangent Line.",
  "body": " Tangent Vector and Tangent Line   The derivative of a vector-valued function at a point , denoted , is a tangent vector (if it exists and is nonzero). The tangent vector is a direction vector for the tangent line to the curve. The tangent line then is the line with vector parameterization    "
},
{
  "id": "subsec-TangentVector-VectorValuedFunctions-5",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-TangentVector-VectorValuedFunctions-5",
  "type": "Example",
  "number": "13.2.15",
  "title": "",
  "body": " Find an equation of the tangent line to the curve defined by at the point .   Recall back in MTH 251 (or MTH 251Z) that to find the equation of the tangent line, we need a point on the line and the slope of the tangent line. Since we are in , we trade the slope for a direction vector instead.  So what is a point on the line and a direction vector for the tangent line at the given point?    First, we need to find the value of that corresponds to the given point . From the third component, we see that . Next, we compute the derivative of : Evaluating at , we have Therefore, a vector parameterization of the tangent line is    "
},
{
  "id": "thm-Integral-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-Integral-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.16",
  "title": "Vector-Valued Integrals Are Computed Componentwise.",
  "body": " Vector-Valued Integrals Are Computed Componentwise   Assume that is integrable on . Then the definite integral is computed componentwise:   The indefinite integral (or antiderivative) of is also computed componentwise: where , , and are antiderivatives of , , and , respectively, and is a constant vector.   "
},
{
  "id": "subsec-Integration-VectorValuedFunctions-8",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Integration-VectorValuedFunctions-8",
  "type": "Example",
  "number": "13.2.17",
  "title": "",
  "body": " Evaluate the indefinite integral    Remember the integral can be computed componentwise. So what is the antiderivative of each of the components?  Also, don't forget the arbitrary constant at the end, either as a vector or componentwise.    We will compute the integral componentwise:                 Therefore, or equivalently, where is a constant vector.   "
},
{
  "id": "thm-FTC-VectorValuedFunctions",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#thm-FTC-VectorValuedFunctions",
  "type": "Theorem",
  "number": "13.2.18",
  "title": "Fundamental Theorem of Calculus for Vector-Valued Functions.",
  "body": " Fundamental Theorem of Calculus for Vector-Valued Functions    Part I: If is continuous on and is an antiderivative of , then    Part II: Assume that is continuous on an open interval and let be in . Then    "
},
{
  "id": "subsec-Integration-VectorValuedFunctions-11",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#subsec-Integration-VectorValuedFunctions-11",
  "type": "Example",
  "number": "13.2.19",
  "title": "",
  "body": " Evaluate the definite integral    Remember that the FTC also holds for vector-valued functions. So how does the process work again?    We will evaluate the integral componentwise using the FTC.                 Therefore,    "
},
{
  "id": "ws-sec132-3",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-3",
  "type": "Worksheet Exercise",
  "number": "13.2.3",
  "title": "",
  "body": " Evaluate the limit   "
},
{
  "id": "ws-sec132-4",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-4",
  "type": "Worksheet Exercise",
  "number": "13.2.9",
  "title": "",
  "body": " Compute the derivative of .  "
},
{
  "id": "ws-sec132-5",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-5",
  "type": "Worksheet Exercise",
  "number": "13.2.15",
  "title": "",
  "body": " Sketch the curve parametrized by together with its tangent vector at . Then do the same for   "
},
{
  "id": "ws-sec132-6",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-6",
  "type": "Worksheet Exercise",
  "number": "13.2.17",
  "title": "",
  "body": " Determine the value of between and such that the tangent vector to the clycloid is parallel to .  "
},
{
  "id": "ws-sec132-7-2",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-7-2",
  "type": "Worksheet Exercise",
  "number": "13.2.19",
  "title": "",
  "body": "    "
},
{
  "id": "ws-sec132-7-3",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-7-3",
  "type": "Worksheet Exercise",
  "number": "13.2.21",
  "title": "",
  "body": "    "
},
{
  "id": "ws-sec132-8",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-8",
  "type": "Worksheet Exercise",
  "number": "13.2.27",
  "title": "",
  "body": " Evaluate using the Chain Rule, where   "
},
{
  "id": "ws-sec132-9",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-9",
  "type": "Worksheet Exercise",
  "number": "13.2.33",
  "title": "",
  "body": " Find a parametrization of the tangent line of at the point .  "
},
{
  "id": "ws-sec132-10",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-10",
  "type": "Worksheet Exercise",
  "number": "13.2.45",
  "title": "",
  "body": " Evaluate the integral   "
},
{
  "id": "ws-sec132-11",
  "level": "2",
  "url": "sec132-CalcVectorFunctions.html#ws-sec132-11",
  "type": "Worksheet Exercise",
  "number": "13.2.55",
  "title": "",
  "body": " Find both the general solution of the differential equation and the solution with the given initial condition.   "
},
{
  "id": "sec133-ArcLength",
  "level": "1",
  "url": "sec133-ArcLength.html",
  "type": "Section",
  "number": "13.3",
  "title": "Arc Length and Speed",
  "body": " Arc Length and Speed   In this section, we will derive the formula for arc length of a curve in parametrized by a vector-valued function. We will also use this formula to define the speed of a particle moving along a curve. Finally, we will explore the concept of arc length parametrization and how to construct one for a given vector-valued function.    After this section, students will be able to:     generalize the arc length formula from to using vector-valued functions.    calculate the arc length of a given curves.    calculate the speed of a particle moving along a curve defined by a vector-valued function.    identify and construct an arc length parametrization for a given vector-valued function.       Arc Length  Recall you learned about the arc length formula back in MTH 252Z (or MTH 252) for a curve in with explicit form . To jog your memory, the arc length of a curve over the interval is given by the formula   You may also learn about the arc length formula back in MTH 253Z (or MTH 253) for a curve in in parametric equations . To refresh your memory, the arc length of a curve traversed by the parametrized equations is given by the formula   If you remember how the above arc length formulas were derived, then we can use the same trick to derive the arc length formula for a curve in parametrized by .  The underlying idea here is to approximate the length of the curve by breaking it into small line segments , finding the lengths of those line segments, and then adding them up. This is sometimes referred to as the polygonal approximation of the curve.    Polygonal Approximation to the arc for .   Obviously, the smaller each line segments used for the approximation, the better the approximation becomes. Theoretically speaking, if we let the number of line segments approach infinity (and the max length of each line segment approaches 0), then the approximation becomes exact.  Say we want to find the length of the curve traced by over the interval . Then we can start by figuring out the length of one of those line segments using the distance formula in . Since we are letting the number of line segments approach infinity, we can take the limit as to turn the average rate of change of each component into the instantaneous rate of change. Thus, the length of that line segment becomes   Now that we have the length of one line segment, we can add up the lengths of all the line segments to approximate the length of the curve. Remember that integration is just a limit of Riemann sums, meaning we are adding infinitely many infinitesimally small pieces together. Thus, the arc length of the curve is given by the integral Let's make it into a cool theorem!   Arc Length   Let directly traverse for . Assume that exists and is continuous. Then the arc length of the curve is equal to      Find the length of the curve traced by over .   We know that This implies that     We can make a cool observation here that the integrand is essentially the magnitude of the derivative of the vector-valued function . Back in MTH 251Z (or MTH 251), we learned that the derivative of the position function is the velocity function, and the magnitude of the velocity function is the speed function. So we can derive a formula to find the speed!    Speed  The speed of a particle moving along a curve parametrized by at time is defined as the rate of change of distance traveled with respect to time. We actually know the distance traveled along a curve from the arc length formula we just derived! We can define the arc length function to capture the distance traveled along the curve from some starting point to any point . Observe that the arc length function returns the distance traveled, which is a scalar quantity. Therefore, the speed is simply the derivative of the arc length function with respect to time. Well this formula makes sense! The speed is just the magnitude of the velocity vector, which can be obtained by differentiating the position function !   Find the speed of a particle moving along the curve parametrized by at time .   The velocity vector is The speed is the magnitude of the velocity vector. That is,       Arc Length Parametrization  Recall that we saw multiple parametrizations of the same curve in (we even graphed some of them in class using GeoGebra to make sure they traced the same curve!). While these different parametrizations traced the same curve, they may do so at different rates .  For example, consider the following two curves Observe that they both trace the same circle within their respective domains. However, they do so at different speeds .  For the path , the particle completes one full revolution around the circle as goes from to , as indicated by the figure below. We can find the average speed as unit.   The Path for .    For the path , the particle completes one full revolution around the circle as goes from to , as indicated by the figure below. We can find the average rate of change as units. Observe that this is twice the speed of .   The Path for . .    This demonstrates that different parametrizations of the same curve can trace the curve at different speeds. One can easily see that the second parametrization traces the curve twice as fast as the first one because That is, is a composite function that uses as the outer function and as the inner function. The outside function controls the shape of the curve, while the inside function controls the rate at which the curve is traced.  Now that we have a way to control the rate at which a curve is traced, we can use this to create a parametrization that traces a curve at a desired rate. The nicest rate to trace a curve is at a constant speed of unit per unit time. A parametrization of this type is called an arc length parametrization . Symbolically speaking, if is an arc length parametrization of a curve, then   There are three important properties of an arc length parametrization:   The parameter directly measures the distance along the curve from some starting point (hence the name \"arc length\" parametrization).    Every velocity vector is a unit vector (since its magnitude is 1).       The distance traveled along the curve from to is simply . Symbolically speaking, we have      Since arc length parametrizations have such nice properties, it is often useful to create an arc length parametrization of a given curve. The general process to create an arc length parametrization is as follows:   Compute the arc length function for the given parametrization .    Find the inverse function of the arc length function.    Substitute into the original parametrization to get This new parametrization is an arc length parametrization.      But Richard... Why does this process work?  Great question! The key idea here is that the arc length function measures the distance traveled along the curve from to any point . Therefore, if we can invert this function to get , then we can express the original parameter in terms of the distance traveled . By substituting this back into the original parametrization, we are effectively reparametrizing the curve in terms of the distance traveled, which ensures that the new parametrization traces the curve at a constant speed of unit per unit time.  To justify this more rigorously, we can use the Chain Rule to differentiate with respect to . Well the first piece is just .  We can also figure out the second piece. By the fundamental theorem of calculus, we know that This implies that Putting them together, we have (This is just the unit vector in the direction of , called the unit tangent vector . We will discuss it more in the next section!)  We found the derivative of the arc length parametrization! To justify that it is indeed an arc length parametrization, we need to check that its speed is . We can compute the speed as follows: Thus, we have verified that is indeed an arc length parametrization!    Find an arc length parametrization of the helix with parametrization with the parameter measuring from .   Remember the goal here is to find an inside function that we can plug into the original parametrization to get an arc length parametrization. There are three main steps to this process!    The initial point corresponds to .   Step 1. Find the arc length function . We then compute the arc length function.    Step 2. Solve for .    Step 3. Substitute into the original parametrization to get the arc length parametrization.    P.S.: One can verify quickly that the curve traced by is indeed the same helix as and that the speed of is .    In practice, finding an arc length parametrization can be tricky because it involves finding the inverse of the arc length function, which may not always be possible to express in a simple closed form. This is just something to keep in mind when working with arc length parametrizations!   Find an arc length parametrization of the cycloid with parametrization    Remember the goal here is to find an inside function that we can plug into the original parametrization to get an arc length parametrization. There are three main steps to this process!  Be careful with all the trigonometric manipulations when simplifying stuff!     Step 1. Find the arc length function . We then compute the arc length function.    Step 2. We solve for . That is, .   Step 3. Substitute into the original parametrization to get the arc length parametrization.  First, note that Hence, we have       Assigned Problems for Section 13.3   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Compute the length of the curve traced by over .    The curve shown in the figure is parametrized by for . Approximate its length.   The curve traced by for .      Compute the arc length function , where for the value     Find the speed of at .    Let .   Evaluate the arc length integral .    Find the inverse of .    Verify that is an arc length parametrization.       Find a path that traces the circle in the plane with radius and center with constant speed .    Find an arc length parametrization of the curve parametrized by with the parameter measuring from .    Find an arc length parametrization of the curve parametrized by .    "
},
{
  "id": "sec133-ArcLength-2-2",
  "level": "2",
  "url": "sec133-ArcLength.html#sec133-ArcLength-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     generalize the arc length formula from to using vector-valued functions.    calculate the arc length of a given curves.    calculate the speed of a particle moving along a curve defined by a vector-valued function.    identify and construct an arc length parametrization for a given vector-valued function.    "
},
{
  "id": "subsec-ArcLength-6",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLength-6",
  "type": "Figure",
  "number": "13.3.1",
  "title": "",
  "body": "  Polygonal Approximation to the arc for .  "
},
{
  "id": "thm-ArcLengthFormula",
  "level": "2",
  "url": "sec133-ArcLength.html#thm-ArcLengthFormula",
  "type": "Theorem",
  "number": "13.3.2",
  "title": "Arc Length.",
  "body": " Arc Length   Let directly traverse for . Assume that exists and is continuous. Then the arc length of the curve is equal to    "
},
{
  "id": "subsec-ArcLength-11",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLength-11",
  "type": "Example",
  "number": "13.3.3",
  "title": "",
  "body": " Find the length of the curve traced by over .   We know that This implies that    "
},
{
  "id": "subsec-Speed-3",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-Speed-3",
  "type": "Example",
  "number": "13.3.4",
  "title": "",
  "body": " Find the speed of a particle moving along the curve parametrized by at time .   The velocity vector is The speed is the magnitude of the velocity vector. That is,    "
},
{
  "id": "subsec-ArcLengthParametrization-5",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-5",
  "type": "Figure",
  "number": "13.3.5",
  "title": "",
  "body": " The Path for .   "
},
{
  "id": "subsec-ArcLengthParametrization-7",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-7",
  "type": "Figure",
  "number": "13.3.6",
  "title": "",
  "body": " The Path for . .   "
},
{
  "id": "subsec-ArcLengthParametrization-9",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arc length parametrization "
},
{
  "id": "subsec-ArcLengthParametrization-10-1-2-2",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-10-1-2-2",
  "type": "Figure",
  "number": "13.3.7",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-ArcLengthParametrization-12",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-12",
  "type": "Note",
  "number": "13.3.8",
  "title": "But Richard... Why does this process work?",
  "body": " But Richard... Why does this process work?  Great question! The key idea here is that the arc length function measures the distance traveled along the curve from to any point . Therefore, if we can invert this function to get , then we can express the original parameter in terms of the distance traveled . By substituting this back into the original parametrization, we are effectively reparametrizing the curve in terms of the distance traveled, which ensures that the new parametrization traces the curve at a constant speed of unit per unit time.  To justify this more rigorously, we can use the Chain Rule to differentiate with respect to . Well the first piece is just .  We can also figure out the second piece. By the fundamental theorem of calculus, we know that This implies that Putting them together, we have (This is just the unit vector in the direction of , called the unit tangent vector . We will discuss it more in the next section!)  We found the derivative of the arc length parametrization! To justify that it is indeed an arc length parametrization, we need to check that its speed is . We can compute the speed as follows: Thus, we have verified that is indeed an arc length parametrization!  "
},
{
  "id": "subsec-ArcLengthParametrization-13",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-13",
  "type": "Example",
  "number": "13.3.9",
  "title": "",
  "body": " Find an arc length parametrization of the helix with parametrization with the parameter measuring from .   Remember the goal here is to find an inside function that we can plug into the original parametrization to get an arc length parametrization. There are three main steps to this process!    The initial point corresponds to .   Step 1. Find the arc length function . We then compute the arc length function.    Step 2. Solve for .    Step 3. Substitute into the original parametrization to get the arc length parametrization.    P.S.: One can verify quickly that the curve traced by is indeed the same helix as and that the speed of is .   "
},
{
  "id": "subsec-ArcLengthParametrization-15",
  "level": "2",
  "url": "sec133-ArcLength.html#subsec-ArcLengthParametrization-15",
  "type": "Example",
  "number": "13.3.10",
  "title": "",
  "body": " Find an arc length parametrization of the cycloid with parametrization    Remember the goal here is to find an inside function that we can plug into the original parametrization to get an arc length parametrization. There are three main steps to this process!  Be careful with all the trigonometric manipulations when simplifying stuff!     Step 1. Find the arc length function . We then compute the arc length function.    Step 2. We solve for . That is, .   Step 3. Substitute into the original parametrization to get the arc length parametrization.  First, note that Hence, we have    "
},
{
  "id": "ws-sec133-3",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-3",
  "type": "Worksheet Exercise",
  "number": "13.3.5",
  "title": "",
  "body": " Compute the length of the curve traced by over .  "
},
{
  "id": "ws-sec133-4",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-4",
  "type": "Worksheet Exercise",
  "number": "13.3.9",
  "title": "",
  "body": " The curve shown in the figure is parametrized by for . Approximate its length.   The curve traced by for .    "
},
{
  "id": "ws-sec133-5",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-5",
  "type": "Worksheet Exercise",
  "number": "13.3.11",
  "title": "",
  "body": " Compute the arc length function , where for the value   "
},
{
  "id": "ws-sec133-6",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-6",
  "type": "Worksheet Exercise",
  "number": "13.3.15",
  "title": "",
  "body": " Find the speed of at .  "
},
{
  "id": "ws-sec133-7",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-7",
  "type": "Worksheet Exercise",
  "number": "13.3.27",
  "title": "",
  "body": " Let .   Evaluate the arc length integral .    Find the inverse of .    Verify that is an arc length parametrization.     "
},
{
  "id": "ws-sec133-8",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-8",
  "type": "Worksheet Exercise",
  "number": "13.3.31",
  "title": "",
  "body": " Find a path that traces the circle in the plane with radius and center with constant speed .  "
},
{
  "id": "ws-sec133-9",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-9",
  "type": "Worksheet Exercise",
  "number": "13.3.33",
  "title": "",
  "body": " Find an arc length parametrization of the curve parametrized by with the parameter measuring from .  "
},
{
  "id": "ws-sec133-10",
  "level": "2",
  "url": "sec133-ArcLength.html#ws-sec133-10",
  "type": "Worksheet Exercise",
  "number": "13.3.35",
  "title": "",
  "body": " Find an arc length parametrization of the curve parametrized by .  "
},
{
  "id": "sec134-Curvature",
  "level": "1",
  "url": "sec134-Curvature.html",
  "type": "Section",
  "number": "13.4",
  "title": "Curvature",
  "body": " Curvature   In this section, we introduce the concept of curvature . Intuitively, curvature measures how sharply a curve bends at a given point.    After this section, students will be able to:     define curvature geometrically as the rate of change of the unit tangent vector with respect to arc length.    compute the curvature of space curves, plane curves, and graphs of functions using various derivative formulas.    calculate the Normal vector ( ) and the Binormal vector ( ).    construct the Frenet (TNB) frame of reference at a specific point on a curve.    determine the radius, center, and equation of the osculating circle for a given curve.      Long story short, curvature measures how \"curvy\" a curve is at a given point (aka how much a curve bends). With this idea, we can quickly determine that a line has zero curvature everywhere.  There are several formulas for curvature, each useful in different contexts.   Mathematical Definition of Curvature  Let's think about how to define curvature mathematically. Intuitively, curvature measures how quickly the direction of the tangent vector changes as we move along the curve. The faster the tangent vector changes direction, the higher the curvature.    Curvature is large where the unit tangent vector changes direction quickly.   Well there comes two problems to address here: (1) why using the unit tangent vector, but not just some tangent vector, and (2) how do we measure \"how quickly\" the unit tangent vector changes direction?  The first question is easier to answer. If we used a non-unit tangent vector, then the magnitude of the tangent vector would affect our measurement of curvature. Since we only care about the direction of the tangent vector when measuring curvature, we use the unit tangent vector. The unit tangent vector , denoted , is defined as This formula is just the normalized version of the tangent vector .  Now the second question is a bit more subtle. By saying \"how quickly\" the unit tangent vector changes direction, this suggests we should look at the derivative of the unit tangent vector with respect the arc length , . Hence, the derivative we want is .     However, this derivative isn't very perfect to measure curvature yet. Recall that the derivative is a vector, but we just want a scalar value to represent curvature. The easiest fix is just to take the magnitude of this vector and call it our curvature!   Curvature   Let be an arc length parametrization and the unit tangent vector. The curvature of the underlying curve at is the quantity (denoted by a lowercase Greek letter \"kappa\")     To sum up, curvature is the magnitude of the rate of change of the unit tangent vector with respect to distance traveled along the curve.   But Richard... Why using an arc length parametrization?  The short answer is because it makes the definition of curvature cleaner.  What makes an arc length parametrization special is that every velocity vector has the length of . So we don't have to worry about the speed of the parametrization affecting our measurement of curvature.    Compute the curvature of a circle of radius .   Feel free to assume that the circle is centered at the origin to make the parametrization easier, since the location of the circle should not affect its curvature.  Then a paramatrization of the circle is     To find the curvature using the formula, we first need to find an arc length parametrization of the circle.  The arc length function is given by This implies that Therefore, the arc length parametrization is   Next, we find the unit tangent vector: Then the derivative of the unit tangent vector with respect to is   Hence, the curvature is       Alternative Formulas for Curvature  In practice, it isn't always easy to find an arc length parametrization of a curve (look at the last example in !). So computing the curvature using the definition directly can be difficult. Fortunately, there are alternative formulas for curvature that work for any parametrization of a curve.  An alternative formula for curvature can be derived by dropping the requirement that the parametrization be an arc length parametrization. Without the arc length parametrization, then we need to relate the derivative with respect to to the derivative with respect to the parameter since is now a function of instead of .  Let's start by assuming we have a general parametrization . Then the arc length can be defined as a function of using the arc length function. That is, Let's call the speed of the parametrization. Then by the chain rule, we have Therefore, the curvature can be computed as That is, if we know the unit tangent vector and the speed , then we can compute the curvature using this formula.  Yet is usually not very easy to find. Remember that , so the derivative of is a nightmare to find. Also, involves a square root and a bunch of squares, which makes the derivative even worse... Rather than using this formula directly (you can try of course!), we can derive the following formula using this formula.   Formula for Curvature   If is a regular parametrization, then the curvature of the underlying curve at is      Proof of this formula  Recall that the velocity vector can be written as , where is the speed and is the unit tangent vector. To use the cross product formula, we first need the acceleration vector . Differentiating using the product rule, we obtain   Now, we compute the cross product of velocity and acceleration. Since the cross product of any vector with itself is zero ( ), the first term vanishes. Then we have   Next, we take the magnitude of both sides. Richard claims that and are always orthogonal (trust him for now. He will prove it later), the magnitude of their cross product is simply the product of their magnitudes.   We showed the formula , which implies . Substituting this into our magnitude equation: Solving for and substituting yields the final result:    This formula is often convenient to use since it only involves the first and second derivatives of the parametrization . We don't have to compute any nasty derivatives of unit tangent vectors nor the arc length parametrization.   Prove that the curvature of a line is zero.   A line can be parametrized as . We now have a parametrization of a line to work with!    Taking the derivative of , we get .  Taking the derivative again, we get .  Therefore, the curvature is as expected.     Calculate the curvature function of the curve .   More of a visualization...  Richard graphed the curve out for you. Your goal is to find the curvature function to determine how \"curvy\" the curve is at each point.   The Sketch of the Helix      First, we compute the first derivative: Then we compute the second derivative:   Next, we compute the cross product:   Then we compute the magnitude of the vectors:   Hence, the curvature function is     Remember back in , Richard mentioned that the cross product only makes sense in . That is, we can't directly use this formula for curves in . There is a workaround though. Using this workaround, we can derive a formula for curvature of plane curves as well.   Curvature of a Plane Curve   Assume is a regular parametrization of a plane curve, which means for all in the domain. At the point , the curvature is given by      Proof of this formula  To derive this formula, we can treat the plane curve as a space curve that lies in the -plane. We define the position vector with a zero -component:   First, we compute the first and second derivatives of the position vector:   Next, we compute the cross product :   Now we find the magnitude of this cross product:   We also need the magnitude of the velocity vector raised to the third power:   Finally, we substitute these results into the general curvature formula     Compute the curvature of the curve parametrized by at the point where .   More of a visualization...  Richard graphed the curve out for you. Your goal is to find the curvature to determine how \"curvy\" the curve is at this point.   the curve parametrized by at the point where .      First, we identify the components of the position vector :   Next, we compute the first and second derivatives of these components:   We evaluate these derivatives at :   Now we apply the curvature formula for a plane curve:     There is one more formula for curvature of plane curves that is often easier to use when the curve is given in the form .   Curvature of the Graph of    The curvature at the point on the graph of is equal to      Proof of this formula  We can parametrize the graph of the function by treating as the parameter . Let and . The position vector is:   First, we compute the derivatives with respect to :   Next, we substitute these into the plane curve curvature formula :   Since , we can replace with to obtain the final formula in terms of :     Compute the curvature for the cubic function at the following -values: and .   We use the curvature formula for a graph :   First, compute the derivatives:   Now, we evaluate the curvature at each specified point.   1. At :  (Since and , this is a sharp local maximum.)   2. At :  (The second derivative is zero, indicating an inflection point . The curve is momentarily straight here.)   3. At :  (Since and , this is a sharp local minimum. Notice the symmetry in curvature with .)   4. At :  (At this point, the curve is increasing very rapidly, stretching out so that it appears nearly straight, resulting in very low curvature.)    There are multiple ways to compute the curvature depending on how the curve is given. Make sure you have all the formulas handy and know when to use each one!    The Normal Vector  It turns out that and are orthogonal. We can use this fact to define another important vector called the normal vector .   If you are super interested about why the orthogonality...  Recall that is the unit tangent vector, which means its length is always equal to 1:   We can rewrite the magnitude squared as the dot product of the vector with itself:   Now, we differentiate both sides of this equation with respect to . We must use the Product Rule for dot products on the left side:   Dividing by 2, we find that: Since their dot product is zero, the vectors and are orthogonal.    Normal Vector   The unit vector in the direction of , assuming it is nonzero, is called the normal vector , denoted by . Symbolically speaking,     If you trace back to one of the alternative formulas for curvature, one of the equations we had was which implies that . By a quick substitution, we obtain the following formula This formula shows another way to find the derivative of the unit tangent vector , which will help us find the normal vector more easily.   Find the normal vector to the curve parametrized by at the point where .   To find , we must first find the unit tangent vector by normalizing the velocity vector.   Step 1: Compute We use the Product Rule for the and components: So,    Step 2: Compute the speed  Taking the square root:    Step 3: Find Notice that the term cancels out, simplifying our work for the next derivative!    Step 4: Compute     Step 5: Compute     Step 6: Find and evaluate at The normal vector is defined as . Now, evaluate at :       The Frenet Frame  At a point on a curve, we can find the vectors and . They are orthogonal unit vectors that lie in the plane of the curve at that point. In , we can find a third unit vector that is orthogonal to both and , called the binormal vector  , using the cross product. Based on what we know about the cross product, is also a unit vector orthogonal to both and . Also, the three vectors follow the right-hand rule.  The set if these three mutually orthogonal unit vectors is called the Frenet frame (or TNB frame) of the curve at the point . The Frenet frame gives us a natural coordinate system to describe motion along a curve without relying on the standard , , and axes.    The Frenet frame at a point on a curve.    Let . Find , , and at the point corresponding to .   We begin by computing the derivative of the position vector, . To find the unit tangent vector, we need the magnitude of this derivative. Notice that the expression under the square root simplifies into a perfect square:   This allows us to write a general formula for the unit tangent vector by dividing the velocity vector by its speed: Evaluating this at , we find our first vector:   To find the normal vector , we differentiate . Using the Quotient and Chain Rules on each component gives: Now we evaluate these derivatives at : So, . To get , we normalize this vector. The magnitude is . Dividing by (or multiplying by 3) yields:   Finally, we find the binormal vector by computing the cross product :       The Osculating Circle  The last question in this section for us to investigate is: how to interpret the curvature value? For example, if a curve has curvature at some point, what does that mean?  Geometrically speaking, the curvature at a point on a curve measures how closely the curve resembles a circle at that point. This \"best-fit\" circle is called the osculating circle at that point (\"osculating\", from the Latin osculari , means \"kissing\", so the osculating circle is the circle that \"kisses\" the curve at that point).    The osculating circle at a point on a curve.   Recall that the curvature of a circle of radius is . Therefore, the radius of the osculating circle at a point on a curve is given by This means that a curve with large curvature at a point has a small osculating circle (the curve is bending sharply), while a curve with small curvature at a point has a large osculating circle (the curve is bending gently).  We can also find the center of the osculating circle by a simple vector addition shown in the following diagram.    The center of the osculating circle at lies a distance from in the normal direction.   Hence, the center of the osculating circle at the point is given by where is the normal vector at that point.   Find an equation of the osculating circle to the curve at the point where .   First, we find the derivatives of the position vector at :    Step 1: Find the radius of curvature We compute the curvature using the 2D formula: The radius is the reciprocal of the curvature:    Step 2: Find the normal vector To use the definition , we first need the general formula for . Now we define : Next, we differentiate to find . Evaluating at : Finally, we normalize this vector. Since is just a scalar, the direction is clearly .    Step 3: Find the center We use the vector addition formula: The center is .   Step 4: Determine the equation of the osculating circle Using the center and radius (so ):       Assigned Problems for Section 13.4   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Calculate and for , and evaluate .    Calculate the curvature function of using .    Evaluate the curvature of the curve at the point where using .    Find the curvature of the plane curve at the point where .    Show that the curvature function of the parametrization of the ellipse is     Compute the curvature of at the point where using .    Find the normal vector to .    Find the normal vectors to at and .    Find , , and for the curve at the point .   After finding , plug in the specific value for before computing and .     Find for the curve at the point where using the formula where .    Let .   Find the general formulas for and as functions of .    Find the general formula for as a function of .    What can you conclude about the osculating planes of the curve based on your answer to (b)?       Find an equation of the osculating circle to the curve at the point where or indicate that none exists.    "
},
{
  "id": "sec134-Curvature-2-1",
  "level": "2",
  "url": "sec134-Curvature.html#sec134-Curvature-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvature "
},
{
  "id": "sec134-Curvature-2-2",
  "level": "2",
  "url": "sec134-Curvature.html#sec134-Curvature-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     define curvature geometrically as the rate of change of the unit tangent vector with respect to arc length.    compute the curvature of space curves, plane curves, and graphs of functions using various derivative formulas.    calculate the Normal vector ( ) and the Binormal vector ( ).    construct the Frenet (TNB) frame of reference at a specific point on a curve.    determine the radius, center, and equation of the osculating circle for a given curve.    "
},
{
  "id": "subsec-Curvature-Definition-3",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-Definition-3",
  "type": "Figure",
  "number": "13.4.1",
  "title": "",
  "body": "  Curvature is large where the unit tangent vector changes direction quickly.  "
},
{
  "id": "subsec-Curvature-Definition-7",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-Definition-7",
  "type": "Figure",
  "number": "13.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "def-Curvature",
  "level": "2",
  "url": "sec134-Curvature.html#def-Curvature",
  "type": "Definition",
  "number": "13.4.3",
  "title": "Curvature.",
  "body": " Curvature   Let be an arc length parametrization and the unit tangent vector. The curvature of the underlying curve at is the quantity (denoted by a lowercase Greek letter \"kappa\")    "
},
{
  "id": "subsec-Curvature-Definition-11",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-Definition-11",
  "type": "Note",
  "number": "13.4.4",
  "title": "But Richard... Why using an arc length parametrization?",
  "body": " But Richard... Why using an arc length parametrization?  The short answer is because it makes the definition of curvature cleaner.  What makes an arc length parametrization special is that every velocity vector has the length of . So we don't have to worry about the speed of the parametrization affecting our measurement of curvature.  "
},
{
  "id": "subsec-Curvature-Definition-12",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-Definition-12",
  "type": "Example",
  "number": "13.4.5",
  "title": "",
  "body": " Compute the curvature of a circle of radius .   Feel free to assume that the circle is centered at the origin to make the parametrization easier, since the location of the circle should not affect its curvature.  Then a paramatrization of the circle is     To find the curvature using the formula, we first need to find an arc length parametrization of the circle.  The arc length function is given by This implies that Therefore, the arc length parametrization is   Next, we find the unit tangent vector: Then the derivative of the unit tangent vector with respect to is   Hence, the curvature is    "
},
{
  "id": "thm-CrossProductFormula-Curvature",
  "level": "2",
  "url": "sec134-Curvature.html#thm-CrossProductFormula-Curvature",
  "type": "Theorem",
  "number": "13.4.6",
  "title": "Formula for Curvature.",
  "body": " Formula for Curvature   If is a regular parametrization, then the curvature of the underlying curve at is    "
},
{
  "id": "subsec-Curvature-AlternativeFormula-7",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-7",
  "type": "Proof",
  "number": "1",
  "title": "Proof of this formula.",
  "body": " Proof of this formula  Recall that the velocity vector can be written as , where is the speed and is the unit tangent vector. To use the cross product formula, we first need the acceleration vector . Differentiating using the product rule, we obtain   Now, we compute the cross product of velocity and acceleration. Since the cross product of any vector with itself is zero ( ), the first term vanishes. Then we have   Next, we take the magnitude of both sides. Richard claims that and are always orthogonal (trust him for now. He will prove it later), the magnitude of their cross product is simply the product of their magnitudes.   We showed the formula , which implies . Substituting this into our magnitude equation: Solving for and substituting yields the final result:   "
},
{
  "id": "subsec-Curvature-AlternativeFormula-9",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-9",
  "type": "Example",
  "number": "13.4.7",
  "title": "",
  "body": " Prove that the curvature of a line is zero.   A line can be parametrized as . We now have a parametrization of a line to work with!    Taking the derivative of , we get .  Taking the derivative again, we get .  Therefore, the curvature is as expected.   "
},
{
  "id": "subsec-Curvature-AlternativeFormula-10",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-10",
  "type": "Example",
  "number": "13.4.8",
  "title": "",
  "body": " Calculate the curvature function of the curve .   More of a visualization...  Richard graphed the curve out for you. Your goal is to find the curvature function to determine how \"curvy\" the curve is at each point.   The Sketch of the Helix      First, we compute the first derivative: Then we compute the second derivative:   Next, we compute the cross product:   Then we compute the magnitude of the vectors:   Hence, the curvature function is    "
},
{
  "id": "thm-Curvature-PlaneCurve",
  "level": "2",
  "url": "sec134-Curvature.html#thm-Curvature-PlaneCurve",
  "type": "Theorem",
  "number": "13.4.10",
  "title": "Curvature of a Plane Curve.",
  "body": " Curvature of a Plane Curve   Assume is a regular parametrization of a plane curve, which means for all in the domain. At the point , the curvature is given by    "
},
{
  "id": "subsec-Curvature-AlternativeFormula-13",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-13",
  "type": "Proof",
  "number": "2",
  "title": "Proof of this formula.",
  "body": " Proof of this formula  To derive this formula, we can treat the plane curve as a space curve that lies in the -plane. We define the position vector with a zero -component:   First, we compute the first and second derivatives of the position vector:   Next, we compute the cross product :   Now we find the magnitude of this cross product:   We also need the magnitude of the velocity vector raised to the third power:   Finally, we substitute these results into the general curvature formula   "
},
{
  "id": "subsec-Curvature-AlternativeFormula-14",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-14",
  "type": "Example",
  "number": "13.4.11",
  "title": "",
  "body": " Compute the curvature of the curve parametrized by at the point where .   More of a visualization...  Richard graphed the curve out for you. Your goal is to find the curvature to determine how \"curvy\" the curve is at this point.   the curve parametrized by at the point where .      First, we identify the components of the position vector :   Next, we compute the first and second derivatives of these components:   We evaluate these derivatives at :   Now we apply the curvature formula for a plane curve:    "
},
{
  "id": "thm-Curvature-Graph",
  "level": "2",
  "url": "sec134-Curvature.html#thm-Curvature-Graph",
  "type": "Theorem",
  "number": "13.4.13",
  "title": "Curvature of the Graph of <span class=\"process-math\">\\(f\\)<\/span>.",
  "body": " Curvature of the Graph of    The curvature at the point on the graph of is equal to    "
},
{
  "id": "subsec-Curvature-AlternativeFormula-17",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-17",
  "type": "Proof",
  "number": "3",
  "title": "Proof of this formula.",
  "body": " Proof of this formula  We can parametrize the graph of the function by treating as the parameter . Let and . The position vector is:   First, we compute the derivatives with respect to :   Next, we substitute these into the plane curve curvature formula :   Since , we can replace with to obtain the final formula in terms of :   "
},
{
  "id": "subsec-Curvature-AlternativeFormula-18",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-Curvature-AlternativeFormula-18",
  "type": "Example",
  "number": "13.4.14",
  "title": "",
  "body": " Compute the curvature for the cubic function at the following -values: and .   We use the curvature formula for a graph :   First, compute the derivatives:   Now, we evaluate the curvature at each specified point.   1. At :  (Since and , this is a sharp local maximum.)   2. At :  (The second derivative is zero, indicating an inflection point . The curve is momentarily straight here.)   3. At :  (Since and , this is a sharp local minimum. Notice the symmetry in curvature with .)   4. At :  (At this point, the curve is increasing very rapidly, stretching out so that it appears nearly straight, resulting in very low curvature.)   "
},
{
  "id": "subsec-NormalVector-3",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-NormalVector-3",
  "type": "Note",
  "number": "13.4.15",
  "title": "If you are super interested about why the orthogonality....",
  "body": " If you are super interested about why the orthogonality...  Recall that is the unit tangent vector, which means its length is always equal to 1:   We can rewrite the magnitude squared as the dot product of the vector with itself:   Now, we differentiate both sides of this equation with respect to . We must use the Product Rule for dot products on the left side:   Dividing by 2, we find that: Since their dot product is zero, the vectors and are orthogonal.  "
},
{
  "id": "def-NormalVector",
  "level": "2",
  "url": "sec134-Curvature.html#def-NormalVector",
  "type": "Definition",
  "number": "13.4.16",
  "title": "Normal Vector.",
  "body": " Normal Vector   The unit vector in the direction of , assuming it is nonzero, is called the normal vector , denoted by . Symbolically speaking,    "
},
{
  "id": "subsec-NormalVector-6",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-NormalVector-6",
  "type": "Example",
  "number": "13.4.17",
  "title": "",
  "body": " Find the normal vector to the curve parametrized by at the point where .   To find , we must first find the unit tangent vector by normalizing the velocity vector.   Step 1: Compute We use the Product Rule for the and components: So,    Step 2: Compute the speed  Taking the square root:    Step 3: Find Notice that the term cancels out, simplifying our work for the next derivative!    Step 4: Compute     Step 5: Compute     Step 6: Find and evaluate at The normal vector is defined as . Now, evaluate at :    "
},
{
  "id": "subsec-FrenetFrame-2",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-FrenetFrame-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binormal vector "
},
{
  "id": "subsec-FrenetFrame-3",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-FrenetFrame-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Frenet frame "
},
{
  "id": "subsec-FrenetFrame-4",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-FrenetFrame-4",
  "type": "Figure",
  "number": "13.4.18",
  "title": "",
  "body": "  The Frenet frame at a point on a curve.  "
},
{
  "id": "subsec-FrenetFrame-5",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-FrenetFrame-5",
  "type": "Example",
  "number": "13.4.19",
  "title": "",
  "body": " Let . Find , , and at the point corresponding to .   We begin by computing the derivative of the position vector, . To find the unit tangent vector, we need the magnitude of this derivative. Notice that the expression under the square root simplifies into a perfect square:   This allows us to write a general formula for the unit tangent vector by dividing the velocity vector by its speed: Evaluating this at , we find our first vector:   To find the normal vector , we differentiate . Using the Quotient and Chain Rules on each component gives: Now we evaluate these derivatives at : So, . To get , we normalize this vector. The magnitude is . Dividing by (or multiplying by 3) yields:   Finally, we find the binormal vector by computing the cross product :    "
},
{
  "id": "subsec-OsculatingCircle-3",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-OsculatingCircle-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "osculating circle "
},
{
  "id": "subsec-OsculatingCircle-4",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-OsculatingCircle-4",
  "type": "Figure",
  "number": "13.4.20",
  "title": "",
  "body": "  The osculating circle at a point on a curve.  "
},
{
  "id": "subsec-OsculatingCircle-7",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-OsculatingCircle-7",
  "type": "Figure",
  "number": "13.4.21",
  "title": "",
  "body": "  The center of the osculating circle at lies a distance from in the normal direction.  "
},
{
  "id": "subsec-OsculatingCircle-9",
  "level": "2",
  "url": "sec134-Curvature.html#subsec-OsculatingCircle-9",
  "type": "Example",
  "number": "13.4.22",
  "title": "",
  "body": " Find an equation of the osculating circle to the curve at the point where .   First, we find the derivatives of the position vector at :    Step 1: Find the radius of curvature We compute the curvature using the 2D formula: The radius is the reciprocal of the curvature:    Step 2: Find the normal vector To use the definition , we first need the general formula for . Now we define : Next, we differentiate to find . Evaluating at : Finally, we normalize this vector. Since is just a scalar, the direction is clearly .    Step 3: Find the center We use the vector addition formula: The center is .   Step 4: Determine the equation of the osculating circle Using the center and radius (so ):    "
},
{
  "id": "ws-sec134-3",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-3",
  "type": "Worksheet Exercise",
  "number": "13.4.3",
  "title": "",
  "body": " Calculate and for , and evaluate .  "
},
{
  "id": "ws-sec134-4",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-4",
  "type": "Worksheet Exercise",
  "number": "13.4.9",
  "title": "",
  "body": " Calculate the curvature function of using .  "
},
{
  "id": "ws-sec134-5",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-5",
  "type": "Worksheet Exercise",
  "number": "13.4.13",
  "title": "",
  "body": " Evaluate the curvature of the curve at the point where using .  "
},
{
  "id": "ws-sec134-6",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-6",
  "type": "Worksheet Exercise",
  "number": "13.4.17",
  "title": "",
  "body": " Find the curvature of the plane curve at the point where .  "
},
{
  "id": "ws-sec134-7",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-7",
  "type": "Worksheet Exercise",
  "number": "13.4.25",
  "title": "",
  "body": " Show that the curvature function of the parametrization of the ellipse is   "
},
{
  "id": "ws-sec134-8",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-8",
  "type": "Worksheet Exercise",
  "number": "13.4.31",
  "title": "",
  "body": " Compute the curvature of at the point where using .  "
},
{
  "id": "ws-sec134-9",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-9",
  "type": "Worksheet Exercise",
  "number": "13.4.37",
  "title": "",
  "body": " Find the normal vector to .  "
},
{
  "id": "ws-sec134-10",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-10",
  "type": "Worksheet Exercise",
  "number": "13.4.39",
  "title": "",
  "body": " Find the normal vectors to at and .  "
},
{
  "id": "ws-sec134-11",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-11",
  "type": "Worksheet Exercise",
  "number": "13.4.43",
  "title": "",
  "body": " Find , , and for the curve at the point .   After finding , plug in the specific value for before computing and .   "
},
{
  "id": "ws-sec134-12",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-12",
  "type": "Worksheet Exercise",
  "number": "13.4.49",
  "title": "",
  "body": " Find for the curve at the point where using the formula where .  "
},
{
  "id": "ws-sec134-13",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-13",
  "type": "Worksheet Exercise",
  "number": "13.4.55",
  "title": "",
  "body": " Let .   Find the general formulas for and as functions of .    Find the general formula for as a function of .    What can you conclude about the osculating planes of the curve based on your answer to (b)?     "
},
{
  "id": "ws-sec134-14",
  "level": "2",
  "url": "sec134-Curvature.html#ws-sec134-14",
  "type": "Worksheet Exercise",
  "number": "13.4.67",
  "title": "",
  "body": " Find an equation of the osculating circle to the curve at the point where or indicate that none exists.  "
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
