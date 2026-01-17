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
  "body": " Dot Product and the Angle Between Two Vectors   So far, our operations on vectors (addition and scalar multiplication) have resulted in new vectors. But what if we want to multiply two vectors together? It turns out there isn't just one way to do this.  In this section, we introduce the dot product (also known as the scalar product). The dot product of two vectors will tell us how much is one vector pointing in the same direction as another.     After this section, students will be able to:     compute the dot product of two vectors in using the algebraic definition.    use the properties of the dot product to simplify vector expressions.    determine the angle between two vectors and classify the angle as acute, obtuse, or right.    calculate the orthogonal projection of one vector onto another.    decompose a vector into two components with respect to another vector, one parallel to the other vector and one perpendicular to it.      Dot Product  Without further ado, we define the dot product of two vectors as follows:   Dot Product   The dot product  of two vectors is the scalar defined by      You may heard of the dot product in linear algebra before...  You may hear of the term inner product if you took a linear algebra class before. The dot product is a specific example of an inner product defined on (called the standard inner product).  Let be two vectors defined as Then the standard inner product of and , denoted by , is defined as   This section is highly similar to what you may have learned about the inner product in linear algebra. In addition to the theoretical aspects, we will also focus on applications of the dot product in physics.   Observe that we can find the dot product of two vectors by multiplying their corresponding components and adding the results . This is true in (or in general) as well.   Compute the following dot products:                               Remember that the dot product of two vectors results in a scalar (a real number) and not another vector. The dot product has several useful properties that we summarize in the following theorem.   Properties of the Dot Product       , where is the zero vector.     Commutativity:       Pulling out scalars:       Distributive Law:       Relation with length:          Proof(ish) of the above theorem  The proofs of the properties are pretty straightforward using the definition of the dot product. Richard will prove some of them in and leave the rest as exercises for you to verify (especially if you are thinking about majoring in math). You may also want to see if you are convinced that Richard's proofs can be generalized to .     Let . Then     Let and . Then     The proof is left as an exercise for the reader.    The proof is left as an exercise for the reader.    Let . Then       Using these properties, we can prove some cool results! For example, do you know that the sum of the squares of the lengths of the four sides of a parallelogram is equal to the sum of the squares of the lengths of its two diagonals? This is also known as the parallelogram law .   Parallelogram Law         Prove the parallelogram law using the properties of the dot product. The diagram below shows a parallelogram formed by the vectors and .    Parallelogram formed by vectors and    The parallelogram has two diagonals with the lengths of and . Also, the sides have lengths of and , respectively.  We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!         Now that we know what the dot product is and some of its properties, we will next explore why we care about it.    Angle between Two Vectors  Given two vectors, they form an angle between them. But how do we know how big this angle is? The dot product can help us figure this out!  Let's say we have two vectors, and . We call the angle between them and we can construct the vector as shown below:    Vectors and with angle between them   This is essentially a triangle if we drop all the direction arrows. That is, this triangle has sides of lengths , , and .  A relation between the sides of the triangle and the angle is given by the Law of Cosines as follows: Using the relation with length property of the dot product and FOIL-ing, we obtain   We essentially found two ways to represent the quantity . Equating these two expressions together and canceling stuff, we obtain   Observe that we can now solve for the angle between the two vectors by isolating : That is, the dot product gives us a way to compute the angle between two vectors!   Dot Product and the Angle   Let be the angle between two non-zero vectors and . Then     Observe that the angle is being computed using the inverse cosine function. The range of the inverse cosine function is . That is, we consider the angle between two vectors to be the smaller angle formed between them.    By convention, the angle between two vectors is chosen so that .    Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is acute...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is approximately , which is indeed acute.     Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is obtuse...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed obtuse.     Find the angle between the vectors and    Richard coded a fancy diagram below to help you visualize how big the angle is. The goal here is to figure out the size of    Vectors and with angle      It looks like the angle between the vectors is a right angle...    We denote and . To use the formula for the cosine of the angle between two vectors we need to compute the following values: Hence, and so,   The angle is , which is indeed a right angle.    We can find a pattern from the above examples.   If the dot product is positive, then the angle between the vectors is acute.    If the dot product is negative, then the angle between the vectors is obtuse.    If the dot product is zero, then the angle between the vectors is a right angle.   This is true since we know that is positive for acute angles, negative for obtuse angles, and zero for right angles. In addition, when and when . Let's summarize this in a nice little diagram.    Relation between the dot product and the angle between two vectors   This diagram is really demonstrating the famous Cauchy-Schwarz Inequality , which states that the absolute value of the dot product of two vectors is always less than or equal to the product of their individual lengths . Symbolically, this is stated as Observe from the figure that , so , which equals to , cannot be greater than .   Prove the triangle inequality: For any vectors and ,    Of course you can draw a picture to see why this is true but this way isn't rigorous enough. True story, one of Richard's students tried to prove the inequality by drawing a loosey-goosey triangle and \"eyeballing\" the lengths of the sides of the triangle... Not rigorous at all...  Also, just because the inequality holds for one triangle doesn't mean it holds for all triangles!  We want to show that this inequality is true for ALL triangles without relying on the accuracy of a drawing. Relying on definitions, properties, theorems, and algebraic manipulations is a better way to go!  Richard will help you get started. We are learning about the dot product so let's get some dot products involved! One of the dot product properties states that so converting all the lengths into dot products is a good start!  Also, ... where does the inequality come from? Well the Cauchy Schwarz Inequality involves an inequality! Maybe we can use that somewhere...     The triangle inequality follows immediately by taking the square root of both sides.    Observe that the dot product is zero when two vectors are orthogonal (or perpendicular) to each other. This is how we define orthogonality in general.   Orthogonal Vectors   Two vectors and are orthogonal if and only if . We denote this by .    Based on this definition, we see that the zero vector is orthogonal to every vector since the dot product with the zero vector is always zero.   But Richard... Isn't \"orthogonal\" just another fancy way of saying perpendicular?  Yes and no... They are for sure describing the same idea but with some subtle differences.   Perpendicularity\/Perpendicular is a geometric term that describes two things (like lines, planes, etc.) intersect at a right angle (90°). This idea only makes sense in a geometric context where we can visualize angles.   Orthogonality\/Orthogonal is an algebraic term that describes two vectors whose dot product is zero. This idea makes sense in any dimension and doesn't rely on visualizing angles. For example, the zero vector is orthogonal to every vector but it doesn't make sense to say that the zero vector is perpendicular to every vector since the zero vector doesn't have a length (we don't say a point is perpendicular to a line).  Surprise surprise, there is another term that describes the same idea in math: normality\/normal . Normality is often used to describe things that are orthogonal\/perpendicular to a surface\/plane\/line. For example, a normal vector to a plane is a vector that is orthogonal to every vector lying in that plane.    Determine whether the following vectors are orthogonal and, if not, whether the angle between them is acute or obtuse.    and      and      and       We can determine whether the vectors are orthogonal by computing their dot products.   Observe that . Therefore, the vectors are orthogonal.    Observe that . Since the dot product is positive, the angle between the vectors is acute.    Observe that . Since the dot product is negative, the angle between the vectors is obtuse.       Remember our standard basis vectors in ? These vectors are . They are mutually orthogonal and have length . So we have Now we can compute the product using these basis vectors!   Compute the dot product    Remember that the dot product is distributive! That is, we can FOIL this expression out like we would with regular multiplication. Then we can use the properties of the dot product with the basis vectors to simplify!           Orthogonal Projection  Remember that the dot product should tell us something about how much one vector goes in the direction of another vector. You may get the idea that the sign of the dot product tells us whether the vectors point in similar directions (acute angle) or opposite directions (obtuse angle). But we can actually know more! The orthogonal projection of one vector onto another vector, which is obtained using the dot product, gives us a precise way to measure how much one vector goes in the direction of another vector.  Let's say we have two vectors and and we cast a shadow of on the light through . This shadow is called the orthogonal projection of onto and is denoted by .    The Projection of onto   But how do we find this projection vector? We can use the dot product to help us out!  Let's assume two vectors are pointing in the same(ish) direction, which means the angle between them is acute. The diagram is shown below and our goal is to find the length and the direction of the projection vector.    The Projection of onto with an acute angle between them   Let's tackle the length first. Using trigonometry (and yes there is a right triangle in there somewhere that allows us to use trig), we see that the length of the projection vector is   Next, we need to find the direction of the projection vector. Clearly, the projection vector points in the same direction as . Yet, we can't just simply multiply the length by . If we did that, the length of the projection vector would be off by a factor of . To fix this, we use the unit vector in the direction of , which is .  Therefore, the projection vector is This projection vector is also denoted by since we can think of it as the component of that is parallel to .   Projection of onto   Assume . The projection of onto is the vector This is sometimes denoted by . The scalar is called the scalar component of onto and is sometimes denoted by .     But Richard... What if the angle between the vectors is obtuse?  The previous result was derived assuming the angle between the vectors is acute. But what if the angle is obtuse, like in the diagram below? Does the formula for the projection vector still hold?    The Projection of onto with an obtuse angle between them   The answer is yes but the work is a bit different. Richard will encourage you to try proving the formula for the projection vector in this case as an exercise.   Richard's proof if you want to check your proof  The work is almost identical to the acute angle case with one bit of difference.  Let be an obtuse angle, which means . Using trigonometry, we can find the length of the projection vector as follows: While there is a negative sign in front of the length, this is a positive quantity since is negative for .  Next, we find the direction of the projection vector. Clearly, the projection vector points in the opposite direction as (look at the diagram!). Then the unit vector in the direction opposite to is .  Therefore, the projection vector is which is the same formula as before.    Observe that Richard didn't bother with the case when the angle between the vectors is a right angle. This is because the projection vector is simply the zero vector in this case since .   Find the projection of onto where and .   To help you visualize the projection, Richard coded up the following fancy diagram:   Projection of onto      The goal is to find the green projection vector in the diagram above.    The projection of onto is the following vector We compute the values in this expression: Hence,     Now that we know what the projection looks like, the next question to consider is: how different is the vector from its projection? A quick subtraction will give us the answer.    Vector (red), (blue), (green), and (orange)   Observe that this difference vector is orthogonal to . This is one way that we can decompose the vector into two components with respect to : one component that is parallel to (aka the projection vector) and another component that is orthogonal to . Remember we also denote the projection vector by (this is sometimes referred as the parallel component). Then we can denote the difference vector by (this is sometimes referred to as the normal component).  This gives us the following decomposition of with respect to :     Vector (red), (blue), (green), and (orange)   This is actually the Orthogonal Decomposition Theorem in linear algebra.   Find the decomposition for the vectors and .   To help you visualize the decomposition, Richard coded up the following fancy diagram:   Decomposition of with respect to      The goal is to find the two components and in the diagram above.    We first compute and to find the projection of onto : Hence, We now find the vector by computing the difference: Thus, we have     The ability to decompose vectors into orthogonal components is useful in many applications. For example, when an object rests on an inclined plane, the gravitational force acting on the object equals its weight, which is directly vertically downward. However, to analyze the motion of the object on the inclined plane, it is often helpful to decompose the gravitational force vector into two components: one parallel to the plane (which determines the tendency of the object to slide down the plane) and another perpendicular to the plane (which determines its tendency to \"stick\" to the plane).    Gravitational force decomposition on an inclined plane    A 10-lb block rests on a plane that is inclined at 30° below the horizontal. Find the components of the gravitational force parallel and normal perpendicular to the plane.   See below for the diagram of the situation:    Gravitational force Vector (red), Parallel Component (green), and Perpendicular Component (orange)   The goal here is to find the green and the orange vectors in the diagram above.    The gravitational force acting on the block equals the weight o the block. Using the coordinate system, the force acts in the negative -direction, so   The direction down the plane is given by the vector is   Hence, the component of the force parallel to the plane is   Next, the component of the force perpendicular to the plane is       Assigned Problems for Section 12.3   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Compute the dot product     Determine whether the two vectors and are orthogonal and, if not, whether the angle between them is acute or obtuse.    Find the angle bewteen the vectors and .    Simplify the expression     Use the properties of the dot product to evaluate the expression , assuming that , , and .    Assume that , , and the angle between and is . Determine                     Find the projection of along , where and .    Find the decomposition with respect to , where and .    Find the angle between and in the following figure.    Unit cube in     Suppose a 45 km\/h wind is blowing out of the north toward a bridge oriented east of north. Express the corresponding wind vector as a sum of vectors, one parallel to the bridge and one perpendicular to it. Also, compute the magnitude of the perpendicular term to determine the speed of the part of the wind blowing directly at the bridge.   Richard drew a pretty diagram based on his interpretation of this problem (by saying drawing, what he really meant is coding using TikZ...). Your goal is to find the two components of the vector , one parallel to and one orthogonal to .    Wind vector decomposition      Calculate the force (in newtons) required to push a 40-kg wagon up a incline.       Prove that .    "
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
  "body": " Compute the dot product   "
},
{
  "id": "ws-sec123-4",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-4",
  "type": "Worksheet Exercise",
  "number": "12.3.13",
  "title": "",
  "body": " Determine whether the two vectors and are orthogonal and, if not, whether the angle between them is acute or obtuse.  "
},
{
  "id": "ws-sec123-5",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-5",
  "type": "Worksheet Exercise",
  "number": "12.3.25",
  "title": "",
  "body": " Find the angle bewteen the vectors and .  "
},
{
  "id": "ws-sec123-6",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-6",
  "type": "Worksheet Exercise",
  "number": "12.3.37",
  "title": "",
  "body": " Simplify the expression   "
},
{
  "id": "ws-sec123-7",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-7",
  "type": "Worksheet Exercise",
  "number": "12.3.43",
  "title": "",
  "body": " Use the properties of the dot product to evaluate the expression , assuming that , , and .  "
},
{
  "id": "ws-sec123-8",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-8",
  "type": "Worksheet Exercise",
  "number": "12.3.48",
  "title": "",
  "body": " Assume that , , and the angle between and is . Determine                   "
},
{
  "id": "ws-sec123-9",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-9",
  "type": "Worksheet Exercise",
  "number": "12.3.57",
  "title": "",
  "body": " Find the projection of along , where and .  "
},
{
  "id": "ws-sec123-10",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-10",
  "type": "Worksheet Exercise",
  "number": "12.3.69",
  "title": "",
  "body": " Find the decomposition with respect to , where and .  "
},
{
  "id": "ws-sec123-11",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-11",
  "type": "Worksheet Exercise",
  "number": "12.3.75",
  "title": "",
  "body": " Find the angle between and in the following figure.    Unit cube in   "
},
{
  "id": "ws-sec123-12",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-12",
  "type": "Worksheet Exercise",
  "number": "12.3.85",
  "title": "",
  "body": " Suppose a 45 km\/h wind is blowing out of the north toward a bridge oriented east of north. Express the corresponding wind vector as a sum of vectors, one parallel to the bridge and one perpendicular to it. Also, compute the magnitude of the perpendicular term to determine the speed of the part of the wind blowing directly at the bridge.   Richard drew a pretty diagram based on his interpretation of this problem (by saying drawing, what he really meant is coding using TikZ...). Your goal is to find the two components of the vector , one parallel to and one orthogonal to .    Wind vector decomposition    "
},
{
  "id": "ws-sec123-13",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-13",
  "type": "Worksheet Exercise",
  "number": "12.3.87",
  "title": "",
  "body": " Calculate the force (in newtons) required to push a 40-kg wagon up a incline.     "
},
{
  "id": "ws-sec123-14",
  "level": "2",
  "url": "sec123-DotProduct.html#ws-sec123-14",
  "type": "Worksheet Exercise",
  "number": "12.3.91",
  "title": "",
  "body": " Prove that .  "
},
{
  "id": "sec124-CrossProduct",
  "level": "1",
  "url": "sec124-CrossProduct.html",
  "type": "Section",
  "number": "12.4",
  "title": "The Cross Product",
  "body": " The Cross Product   In the previous section, we learned about the Dot Product , a way to multiply two vectors to get a scalar (a single number). You might be wondering whether there is another way to multiply two vectors?  The answer is yes! We can multiply two vectors in a special way to get a third vector. This is called the Cross Product . However, unlike the dot product which works in any dimension, the cross product is special. It only works meaningfully in . This operation is incredibly useful for finding orthogonal directions, calculating areas, and understanding rotation in physics.    After this section, students will be able to:    compute the cross product of two vectors using determinants.  use standard basis properties to simplify cross product calculations.  calculate the area of a parallelogram and the volume of a parallelepiped.  apply the cross product to physics problems involving torque.     Let's dive right into the definition. The formula can look a bit intimidating at first, but we will use a tool called a determinant to help us remember it.   The Cross Product   Given two vectors and in , the cross product  is the vector defined by:     Wow this definition looks crazy! No one should memorize this long of a formula! If you know a bit linear algebra, the cross product can be computed using the determinant .  Given the two vectors and , we can construct a matrix as follows: where the , , and are the standard basis vectors in .  It turns out that the cross product is the determinant of this matrix. That is,   P.S.: Yes Richard did a cofactor expansion on the first row in his work above. Remember that this isn't really a linear algebra class so he will not go in depth on the cofactor expansion. If linear algebra isn't your thing and you don't want to memorize the formula (no one should), you can find the determine of a 3x3 matrix using the lattice method. Below is a quick video tutorial on how to do that:   Quick Tutorial on Computing the Determinant of a 3x3 Matrix     If you prefer to have a list of steps for the lattice method...  Richard understands that not everyone learn how to compute the determinant of a square matrix. And we are only working with the determinant of a 3x3 matrix here, so lattice method is a quick and easy way to compute it.   P.S.: The lattice method here will ONLY work to find the determinant of a 3x3 matrix! This is NOT generalizable to larger matrices!  Here are the steps to compute the determinant of a 3x3 matrix using the lattice method:   Write down the 3x3 matrix and then duplicate the first two columns to the right of the matrix.    Draw diagonals from the top left to bottom right and multiply the three numbers on each diagonal. Then add these products together.    Next, draw diagonals from the top right to bottom left and multiply the three numbers on each diagonal. Then add these products together.    Finally, subtract the sum from step 3 from the sum from step 2 to get the determinant.     Below is a more visual representation of the steps above:    Lattice Method to calculate the determinant of a 3x3 matrix   Then the determinant is calculated as   In practice with the cross product, the first row will be the standard basis vectors in , the second row will be the components of the first vector, and the third row will be the components of the second vector.    Compute for and .      Below is a quick sketch to visualize the two vectors and their cross product.   Visualizing for and        Now that we know how the cross product works, let's explore some of its important properties!   Properties of the Cross Product  Let's start off by observing the behavior of the cross product in the . The most obvious observation here is that is also a vector!  We can also see that is orthogonal to both and . It turns out that the cross product always produces a vector that is perpendicular to both input vectors, following the right-hand rule , which states that when the fingers of your right hand curl from to , your thumb points to the same side of the plane spanned by and as their cross product .    Right-Hand Rule for Cross Product   Other than these geometric properties, the cross product also has several algebraic properties that are useful in computations.   Basic Properties of the Cross Product       (Anticommutative Property)     (Cross Product with Itself is Zero)     if and only if either for some scalar or      (Scalar Multiplication)        (Distributive Property)       Some of the results can be justified directly from the right-hand rule and geometric intuition. For example, the anticommutative property makes sense because switching the order of the vectors reverses the direction of the resulting vector. As a mathematician, we should also verify these properties using the definition of the cross product (the one with the determinant).   Some Proofs of Cross Product Properties  Richard will prove some of these properties using the determinant definition of the cross product. Some will be left as exercises for the reader.   Let and . Then we obtain Thus, the cross product is anticommutative.    Let . Then we have     Left as an exercise to the reader.    Let and . Then for the first part of the equality, we obtain The proof that follows a similar calculation by placing the scalars in the second row of the determinant. Thus, .    Left as an exercise to the reader.      The most fun thing about the cross product is how it interacts with the standard basis vectors in . Recall the standard basis vectors are , , and . Because these are orthogonal unit vectors, following the right-hand rule, we have a cyclic pattern:       If you reverse the order, you get the negative (anticommutative):       The following circle summarizes these properties:    Circle for Computing the Cross Product of Standard Basis Vectors   If you don't mind some FOIL-ing and combining like terms, you can actually use this circle to compute the cross product instead of the determinant!   Calculate the cross product .        This is actually how the determinant formula is derived! If we write and and expand like a polynomial, we can use the rules above to simplify the terms.   If you want to see a bunch of letters here to derive the formula...  To be a due diligent mathematician, Richard will show you how to derive the determinant formula from the standard basis properties (and there are a lot of the typing here...).  Let and . Then we have      Geometry: Area of a Parallelogram  We know the direction of is orthogonal to the inputs (given by the Right Hand Rule). But what about its magnitude ?  It turns out that the magnitude of the cross product is very similar to the dot product, but with a small twist. Rather than using the cosine of the angle between the vectors, we use the sine of the angle.   Magnitude of the Cross Product    where is the angle between the vectors.    The proof of this theorem is at the end of the section in your textbook, so Richard will not repeat it here. It requires an identity that links the dot product and cross product together. Feel free to read through it later if you are interested!   And Richard will include the proof here for the completeness of his notes  The proof of the magnitude of the cross product really relies on a key identity called the Lagrange Identity in vector notation Let's prove this identity first.  We can prove this identity using the \"meet in the middle\" approach. That is, we want to manipulate both sides of the equation separately to arrive at the same expression.  Let and . Then we have Then we obtain On the other hand, we have Observe that the last steps in each expression are identical (you may want to do some reordering of terms to make it clear), so the Lagrange Identity holds.  Now that we know the Lagrange Identity holds, we can use it to prove the magnitude of the cross product theorem. We can start with the Lagrange Identity and substitute in the formula for the dot product in terms of the angle between the vectors. Taking the square root of both sides gives us the desired result.   Geometrically, this value represents the Area of the Parallelogram spanned by the two vectors (that is, the parallelogram formed by and where the two adjacent sides are and ). The following diagram illustrates this idea:    Area of the parallelogram spanned by vectors and .   Observe that the area of the parallelogram is the base times the height, where the base is and the height is (by basic trig). Hence, the area of this parallelogram is , which is exactly the magnitude of the cross product, !   Find the area of the parallelogram with vertices , , , and .   To help you visualize things, Richard coded the parallelogram below.   The parallelogram spanned by vectors and with axes.        We choose as our \"anchor\" point. The two vectors originating from to its neighbors and are:   (Note: We do not need to use vertex for the calculation, as , , and are sufficient to define the dimensions of the parallelogram.)  Now, we compute the cross product :   Finally, the area is the magnitude of this normal vector:     Observe that we really need three points to find the area of the parallelogram. Recall three points can also form a triangle, so we can also find the area of a triangle using the cross product. The area of a triangle is just half of the parallelogram formed by the same two vectors.   Find the area of the triangle with vertices , , and .   Richard coded the triangle and its vectors below to help you visualize the problem.   Visualization of the triangle vertices and vectors.      The area of a triangle is half the area of the parallelogram spanned by two vectors originating from the same vertex.    First, we find the vectors representing two sides of the triangle originating from :   Next, we calculate the cross product using the determinant:   Now, we find the magnitude of this normal vector:   Finally, the area of the triangle is half the magnitude of the cross product:     We can summarize this result in the following theorem:   Area of Parallelogram and Triangle   If is the parallelogram spanned by and , and is the triangle spanned by and , then and       Geometry: Volume of a Parallelepiped  If we add a third vector , we lift the 2D parallelogram into a 3D slanted box called a Parallelepiped .   A parallelepiped spanned by three vectors      We can actually find the volume of the parallelepiped using the cross product (and dot product) together! Generally speaking, the volume of a pallelepiped is the area of the base times the height.    Volume of a parallelepiped   Observe that the base is the parallelogram spanned by and , so its area is . Also, a little trigonometry can tell us that the height of the parallelepiped is , where is the angle between and . Hence, the volume of the parallelepiped is Observe that this is exactly the dot product of and ! Hence, the volume of the parallelepiped is the absolute value of the dot product of some cross product and a vector, to ensure the volume is always nonnegative. The dot product of a cross product and a vector is called the Vector Triple Product .   Volume of a Parallelepiped   Let be nonzero vectors in . Then the parallelepiped spanned by , , and has volume where is the vector triple product .    We can actually come up witl a cool formula to find the vector triple product using determinants! Let's say , , and . Then we have Hence, we can find the vector triple product, which will determine the volume of the parallelepiped, using a 3x3 determinant!  P.S.: the last step in the above derivation can be justified by the cofactor expansion along the first row of the 3x3 matrix. If this step doesn't seem convinving to you, feel free to actually find the determinant of the last two steps and verify they are the same!  Sometimes, rather than listing out all the components of the vectors, we can represent the 3x3 determinant using the vectors themselves like this:    Consider the parallelepiped determined by the vectors , , and originating from the point .     Find the area of the base parallelogram spanned by vectors and .    Find the volume of the parallelepiped.      As always, Richard coded a pretty diagram below to help you visualize what the parallelogram and the parallelepiped look like!   Visualization of the parallelepiped with base defined by and .           The area of the base is the magnitude of the cross product .   Now, we compute the magnitude:     The volume is the absolute value of the dot product of with the normal vector found in part (a).          Application: Torque  Cross products appear in a variety of applications in physics and engineering. The most common application is in calculating torque .  Suppose you want to loosen a bolt using a wrench. You will apply a force at a distance from the bolt, perpendicular to the bolt. The \"twiting power\" you apply to the bolt is called the torque , denoted .    Tightening a bolt using a wrench   The torque here is a vector, as this twisting force has both a magnitude and a direction. This torque vector is given by the cross product of the position vector and the force vector . The magnitude of the torque is given by where is the angle between and , and the direction of is given by the right-hand rule. The following diagram demonstrates the abstract notion of torque as a cross product without the wrench and the bolt.    Torque is the cross product of and    A force of is applied to a wrench attached to a bolt in a direction perpendicular to the bolt. The length of the wrench is and the force is applied at the end of the wrench at an agle of to the wrench. What is the torque applied to the bolt?      The magnitude of the torque can be calculated by We can also derive the unit by multiplying the units of and together. Hence, the unit of the torque is , and therefore, the torque applied to the bolt is approximately .  Also, the right-hand rule tells us that the direction of is orthogonal to and , parallel to the shaft of the bolt.      Assigned Problems for Section 12.4   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Calculate , where and .    Calculate the cross product     Calculate the cross product , assuming that     A force (in newtons) on an electron moving at velocity meters per second in a uniform magnetic field (in teslas) is given by , where coulombs is the charge on the electron. Assume an electron moves with velocity in the plane and is a uniform magnetic field pointing directly out of the page. Which of the two vectors, or , in the following figure represents the force on the electron? Remember that is negative.    The magnetic field vector points directly out of the page.     Find the area of the parallelogram spanned by and in the following figure.       Sketch the triangle with vertices at the origin , , and , and compute its area using cross product.    Check that the four points , , , and all lie in a plane. Then use vectors to find the area of the quadrilateral they define.    Prove the identity using the formula for the cross product.     The torque about the origin due to a force acting on an object with position vector is the vector quantity . If several forces act at psitions , then the net torque (units: N - m or lb - ft ) is the sum Calculate the net torque about acting at the point on the mechanical arm in the following figure, assuming that a 25-newton force acts as indicated.       "
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
  "body": " Calculate , where and .  "
},
{
  "id": "ws-sec124-4",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-4",
  "type": "Worksheet Exercise",
  "number": "12.4.17",
  "title": "",
  "body": " Calculate the cross product   "
},
{
  "id": "ws-sec124-5",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-5",
  "type": "Worksheet Exercise",
  "number": "12.4.21",
  "title": "",
  "body": " Calculate the cross product , assuming that   "
},
{
  "id": "ws-sec124-6",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-6",
  "type": "Worksheet Exercise",
  "number": "12.4.37",
  "title": "",
  "body": " A force (in newtons) on an electron moving at velocity meters per second in a uniform magnetic field (in teslas) is given by , where coulombs is the charge on the electron. Assume an electron moves with velocity in the plane and is a uniform magnetic field pointing directly out of the page. Which of the two vectors, or , in the following figure represents the force on the electron? Remember that is negative.    The magnetic field vector points directly out of the page.   "
},
{
  "id": "ws-sec124-7",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-7",
  "type": "Worksheet Exercise",
  "number": "12.4.41",
  "title": "",
  "body": " Find the area of the parallelogram spanned by and in the following figure.     "
},
{
  "id": "ws-sec124-8",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-8",
  "type": "Worksheet Exercise",
  "number": "12.4.47",
  "title": "",
  "body": " Sketch the triangle with vertices at the origin , , and , and compute its area using cross product.  "
},
{
  "id": "ws-sec124-9",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-9",
  "type": "Worksheet Exercise",
  "number": "12.4.51",
  "title": "",
  "body": " Check that the four points , , , and all lie in a plane. Then use vectors to find the area of the quadrilateral they define.  "
},
{
  "id": "ws-sec124-10",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-10",
  "type": "Worksheet Exercise",
  "number": "12.4.55",
  "title": "",
  "body": " Prove the identity using the formula for the cross product.   "
},
{
  "id": "ws-sec124-11",
  "level": "2",
  "url": "sec124-CrossProduct.html#ws-sec124-11",
  "type": "Worksheet Exercise",
  "number": "12.4.67",
  "title": "",
  "body": " The torque about the origin due to a force acting on an object with position vector is the vector quantity . If several forces act at psitions , then the net torque (units: N - m or lb - ft ) is the sum Calculate the net torque about acting at the point on the mechanical arm in the following figure, assuming that a 25-newton force acts as indicated.     "
},
{
  "id": "sec125-Planesin3D",
  "level": "1",
  "url": "sec125-Planesin3D.html",
  "type": "Section",
  "number": "12.5",
  "title": "Planes in 3-Spaces",
  "body": " Planes in 3-Spaces   In this section, we will continue our investigation of planes in . We will learn how to describe any planes in using vectors and how to analyze their interactions with one another.    After this section, students will be able to:     Determine the equation of a plane given a point and a normal vector.    Identify the normal vector and intercepts from the scalar equation of a plane.    Find the intersection point of a line and a plane.    Sketch a plane using its traces.      Recall we briefly introduced planes in back in . In that section, we defined a plane by setting one of the coordinates to a constant value and obtain what we called the coordinate planes . But as you can imagine, these are just a small subset of all possible planes in .   How do we define an arbitrary plane in ?    Defining a Plane  When we defined a line, we used a point and a direction vector  . You might wondering whether we can do the same for a plane?  The short answer is no and we have a quick counterexample. The vector is parallel to the -plane and the -plane. And both the planes go through the point . So a point and a direction vector parallel to the plane cannot uniquely determine a plane.   Infinite planes through a fixed point and parallel to a fixed vector    So, to define a plane, we really need a point and a vector that is NOT parallel to the plane. For simplicity, we will choose a vector orthogonal to the plane. That is, this orthogonal vector is orthogonal to every vector that lies in the plane. Visually, this vector \"sticks out\" of the plane at a right angle.   A point lies on and    Summing up, to determine a plane in , we need a point and a normal vector , which is a vector orthogonal to the plane.   Equation of a Plane   Plane through with normal vector : where .     But Richard... Why is the equation appears this way?  This equation may seem a bit mysterious at first glance, but it actually follows directly from the definition of the dot product (and orthogonality).  Let's say we have a point . Furthermore, let be an arbitrary point on the plane. Then we can define a vector .  Also, we have a normal vector . This vector is orthogonal to ANY vector that lies in the plane, including . Two vectors are orthogonal if and only if their dot product is zero. Therefore, we obtain Hey! This is the scalar form of the equation of a plane!  You can simplify this equation further! That is, the scalar form can be simplied to Observe that the right-hand side is just a number, so let's call it for simplicity. Hence, we obtain where   What about the vector form? We can observe quickly that is just the dot product . Hence, we can rewrite the equation as Hey! The vector form!    Find an equation of the plane with normal vector passing through the point .   We are given and .  We can write an equation using the vector form:   Alternatively, we can write an equation using the scalar form:     Sometimes we are given the equation and we need to work backwards to find the geometric properties. Specifically, we may want to find a normal vector and a point on the plane.  Finding a point is a bit boring... We just need to find a point that satisfies the equation. The easiest way to do so is to set the two other variables to zero (or other numbers) and solve for the third.  What about finding a normal vector? If you stare at the equation long enough, you may notice that the coefficients of , , and correspond to the components of the normal vector. That is, the normal vector is simply .  Surprisingly, this pattern also works for lines in . An equation of the line in is . You for sure know that the slope of this line is . But what you may not know there is that the vector a normal vector to this line!   A line with normal vector     Consider the plane defined by . Identify the normal vector and find a point on the plane.   To find a normal vector, we read the coefficients directly. .  To find a point on the plane, we can set two of the variables to be constants and solve for the third. For example, we set and , and we can solve for . So, the point is on the plane.    Note that the equation of a plane in is a generalization of the equation of a line in . Back in , we can determine and equation of a line using two points . If we generalize this idea to , we can determine an equation of a plane using three points . It turns out that this plane is unique as long as the three points are not collinear (i.e., they do not all lie on the same line).   Find an equation of the plane passing through the three points , , and .   Recall that we need a point and a normal vector to determine an equation of a plane. Well we are given three points, so we can use one of them as our point.  What about a normal vector... Can we find a normal vector using the three points?  Yes we can! Recall we can find a normal vector orthogonal to two vectors using the cross product!    First, we can find two vectors lying on the plane. Since both and lie on the plane, their cross product will be orthogonal to the plane. This can be our normal vector!   Below is a visualization of what we just did. We plotted to create the plane (shown in blue). We constructed the vectors and (green) that lie on the plane. Finally, we crossed them to get the normal vector (red), which you can see stands orthogonal to the surface.   Visualizing the plane through P, Q, R      We can use any scalar multiple of this vector, so let's use for simplicity. Using point : This makes sense, as all three given points had a y-coordinate of 1!      Intersection of a Line and a Plane  We often want to know where a specific line punctures a plane. Unless the line is parallel to the plane (or lying inside it), they will intersect at exactly one point.  To find the intersection point of a line and a plane, we need to find the point that lies on both the line and the plane. But how do we solve THREE variables simulateneously?  A good news here is that the line in is defined parametrically using a single parameter ! Since the coordinate of the point needs to satisfy both the equation of the plane and the parametric equation of the line, we can use substitution to find the point of intersection.  That is, to find this point, we  write the parametric equations for , , and from the line.  plug these expressions into the equation of the plane.  solve for .  plug back into the line equation to get the point .     Find the point where the line intersects the plane .   First, let's break the line into its components: , , .  Now, plug these into the plane equation : Simplify the algebra: We aren't done yet! We need the point. Plug back into our line components: The intersection point is .  Here is a visual confirmation of our algebra. The yellow dot is exactly where the red line punctures the blue plane.   Visualizing the intersection point          Traces  Drawing planes in 3D on a 2D sheet of paper is tricky. A great tool to help us visualize the position of a plane is finding its traces .  A trace is a slice of a surface by a coordinate plane. We are working with planes now, so the trace here is the line of intersection between the plane and one of the coordinate planes ( -plane, -plane, or -plane).  -trace: Set . This shows where the plane cuts through the floor.  -trace: Set . This shows where the plane cuts through the side wall.  -trace: Set . This shows where the plane cuts through the back wall.  By finding the intercepts on the axes and connecting them, we can draw a triangle that represents a portion of the plane.   Sketch the plane by finding its traces.   Let's find the intercepts to help us draw the lines.   x-intercept: Set . . Point: .   y-intercept: Set . . Point: .   z-intercept: Set . . Point: .  Now, look at the diagram below. The red lines are the traces. The xy-trace connects the x and y intercepts. The yz-trace connects the y and z intercepts. The xz-trace connects the x and z intercepts. Connecting these three points forms a triangle in the first octant that helps us visualize the slant of the plane.   Traces of the plane          Parallel and Intersecting Planes  Two planes in can either be parallel or intersecting, providing they are not the same plane.  To determine whether two planes are parallel, we can compare their normal vectors. Recall two lines are parallel if their direction vectors are parallel (i.e., scalar multiples of each other). In the similar sense, two planes are parallel if their normal vectors are parallel (i.e., scalar multiples of each other).   Show that the two planes and are parallel.   The normal vector of the first plane is and the normal vector of the second plane is . Note that , so the normal vectors are parallel. Therefore, the two planes are parallel.  In the diagram below, you can see these \"floating\" surfaces. They have the same tilt, they are just shifted relative to each other.   Parallel Planes (Blue) and (Red)        What about the intersection of two planes? Imagine two non-parallel planes in is intersecting, then they will intersect along a line.   Find an equation of the line of intersection of the planes and .   To define the line of intersection, we need two things:  A direction vector for the line.  A point on the line.    Since the line lies on both planes, it must be perpendicular to both normal vectors. Does that ring a bell? (Think cross product!)   Intersection of (Blue) and (Red)         Step 1: Find the direction vector. The normal vectors are and . The direction of the intersection line, , is orthogonal to both normals: For simplicity, we can divide by -3 to get a parallel vector: .   Step 2: Find a point on the line. We need a point that satisfies both plane equations. We have 2 equations and 3 unknowns, so we can pick a value for one variable. Let's try (so we are really finding the intersection between this line and the -plane, and this point of intersection will be on this line for sure! ). The system becomes: From the second eq, . Substitute into the first: Then . So a point on the line is .   Step 3: Write the equation. The vector equation of the line is:       Assigned Problems for Section 12.5   The problems listed below are assigned to be included in your problem set portfolio. Note that a specific selection of these problems will also form the written homework assignments. I recommend working through all of them to ensure a solid grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solutions will be posted after the written homework due dates. If you have any questions about your work, talk to Richard and he is happy to discuss the process with you.    Write the equation of the plane with normal vector passing through the point in the scalar form .    Find a vector normal to the plane .    Find an equation of the plane passing through the three points , , and .    In each case, determine whether or not the lines have a single point of intersection. If they do, give an equation of a plane containing them.    and      and        Draw the plane given by the equation .    Find the intersection of the line and the plane .    By definition, the angle between two planes is the angle between their normal vectors .    Angle between Two Planes   Compute the angle between the two planes and .    Find a plane that is perpendicular to the two planes and .    Let denote the line of intersection of the planes and . Find parametric equations for the line .   To find a point on , substitute an arbitrary value for (say, ) and then solve the resulting pair of equations for and .     "
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
  "body": " Write the equation of the plane with normal vector passing through the point in the scalar form .  "
},
{
  "id": "ws-sec125-4",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-4",
  "type": "Worksheet Exercise",
  "number": "12.5.15",
  "title": "",
  "body": " Find a vector normal to the plane .  "
},
{
  "id": "ws-sec125-5",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-5",
  "type": "Worksheet Exercise",
  "number": "12.5.23",
  "title": "",
  "body": " Find an equation of the plane passing through the three points , , and .  "
},
{
  "id": "ws-sec125-6",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-6",
  "type": "Worksheet Exercise",
  "number": "12.5.27",
  "title": "",
  "body": " In each case, determine whether or not the lines have a single point of intersection. If they do, give an equation of a plane containing them.    and      and      "
},
{
  "id": "ws-sec125-7",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-7",
  "type": "Worksheet Exercise",
  "number": "12.5.33",
  "title": "",
  "body": " Draw the plane given by the equation .  "
},
{
  "id": "ws-sec125-8",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-8",
  "type": "Worksheet Exercise",
  "number": "12.5.41",
  "title": "",
  "body": " Find the intersection of the line and the plane .  "
},
{
  "id": "ws-sec125-9",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-9",
  "type": "Worksheet Exercise",
  "number": "12.5.59",
  "title": "",
  "body": " By definition, the angle between two planes is the angle between their normal vectors .    Angle between Two Planes   Compute the angle between the two planes and .  "
},
{
  "id": "ws-sec125-10",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-10",
  "type": "Worksheet Exercise",
  "number": "12.5.65",
  "title": "",
  "body": " Find a plane that is perpendicular to the two planes and .  "
},
{
  "id": "ws-sec125-11",
  "level": "2",
  "url": "sec125-Planesin3D.html#ws-sec125-11",
  "type": "Worksheet Exercise",
  "number": "12.5.67",
  "title": "",
  "body": " Let denote the line of intersection of the planes and . Find parametric equations for the line .   To find a point on , substitute an arbitrary value for (say, ) and then solve the resulting pair of equations for and .   "
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
