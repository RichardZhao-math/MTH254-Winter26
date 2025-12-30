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
  "body": " Vectors in the Plane   In this section, we transition from single-variable calculus to the geometry of the plane by introducing vectors . We will learn how to describe quantities that have both magnitude and direction, perform algebraic operations on them, and use them to model physical forces.    After this section, students will be able to:     distinguish between points, scalars, and vectors using correct notation    calculate the components, magnitude, and direction of a vector in     perform vector addition and scalar multiplication geometrically and component-wise    express vectors as linear combinations of standard basis vectors    solve static equilibrium problems using vector forces       Vectors in  In case you are not familiar with the notation , it simply means the set of all ordered pairs of real numbers. Symbolically speaking, That is, we will work with vectors in two dimensions in this section.  Let's first define what a vector is in . A vector in is an object determined by two points in the plane: an initial point (the tail) and a terminal point (the tip). We write and we draw as an arrow pointing from to .   The vector in      Why is bolded but not or ?  This is a notation convention. There is a difference between a vector and a point (or scalar). To specify the difference, we usually bold the vector notation.  For example, if you see something like , then this indicates that is a vector. As a comparison, if you see something like , then this indicates that is a scalar (a number).  But why don't we bold the vector as , but instead put an arrow on top of it?  That is because the arrow notation specifies the tail and the tip of the vector! There is a difference between and ! They have the opposite tail and tip, so they point in opposite directions!  Another reason why sometimes we use the arrow notation is because it is super difficult to write in bold font! This is why Richard often writes on the board to indicate the vector , since he can't write in bold font easily...   In , each point is represented by an ordered pair of real numbers. Then we can define the components of a vector using the ordered pairs of the two points as follows.   Components of a Vector   The components of , where and , are the quantities The pair of components is denoted .     P.S.: If you are a linear algebra-ist and want to use the notation of the column vectors instead, be my guest! Just remember that Richard prefers the column vector notation over the sharp-y angle bracket notation (but he is teaching calculus, not linear algebra, so he will have to live with it).   Find the components of the following vectors with tail and tip . Then sketch the vectors.     and      and      and      and      We can find the components of each vector using the definition:                         The sketches of the vectors are shown below:       Observe that and are parallel . Moreover, is a translation of (i.e., we can obtain by sliding to the left and down). We call these two vectors equivalent vectors if one is a translation of the other.  In fact, two vectors are equivalent if and only if they have the same components. So instead of studying millions of the same vectors in different locations, we can just study one representative vector for each group of equivalent vectors.  But which location should we choose for the representative vector? To keep things easier, we usually choose the representative vector whose tail is at the origin . Then the tip of the vector is at the coordinate point , where are the components of the vector. This is called the position vector .   Sketch the position vectors of the vectors in the previous example.   The vectors in the previous example are The position vectors are sketched below.         The Attributes of Vectors  When defining a vector, it is important to note its magnitude and the direction .  The magnitude of a vector is the distance from the tail to the tip (aka the length of the vector). This is denoted as .  Given a vector , we can determine its magnitude using the Pythagorean Theorem, as demonstrated in the figure below.   The Magnitude of the vectors and     By the Pythagorean Theorem, we have   The magnitude of a vector is really called the norm or the Euclidean norm of a vector in more advanced math courses. In general, norms must satisfy the following three properties:    , with if and only if .     for all scalars .     for any two vectors and , with equallity only if , , or if where . (This is the famous triangle inequality ).   This isn't a linear algebra or functional analysis class, so we won't go deeper into norms here. If you are interested, feel free to do more digging on your own (or ask Richard!).   Find the magnitude of the vectors in the previous examples.   The vectors in the previous examples are Then     Now let's discuss the direction of a vector. The direction of a vector tells us where the vector is pointing. We can indicate the direction of a vector by using the vector itself. As you imagine, the magnitude of a vector has nothing to do with its direction, so we sometimes use a unit vector , which is a vector of length , to indicate the direction, when it is not necessary to specify length.  If we have a unit vector whose tail is at the origin, then its tip lies on the unit circle. We usually denote a unit vector by , defined as where is the angle between and the positive -axis, indicated in the figure below.   The unit vector on the unit circle     But what if we are given an arbitrary non-zero vector and we want to find a unit vector in the same direction? One way to do so is to divide the vector by its magnitude (multiplying a positive scalar doesn't change the direction of a vector). That is, given , the unit vector in the direction of is    A quick proof to show that is a unit vector  Let be a non-zero vector. Then . This implies that Hence, is a unit vector.   When we are given the magnitude of a vector and its direction as the angle , we can find the components of the vector as follows:    Find the vector with magnitude and make an angle of with the positive -axis.   If you want to see what the vector looks like...  The goal of the question is to find the length of the red vector in the figure below.       We can first find the unit vector in the direction of the vector: Then the vector with magnitude in the same direction is     Observe that we essentially multiplied the unit vector (a vector) by the magnitude (a scalar) to obtain the desired vector. This is one of the two operations in vector algebra, which we will discuss in the next section.    Vector Algebra  Vectors live in a place called the vector space . Usually, two operations are defined in a vector space, and they are vector addition and scalar multiplication . We will discuss these two operations in this section.   Vector addition tells us how to add two vectors together. Geometrically speaking, we can imagine a vector as the movement from the tail to the tip. Then adding two vectors means performing the movements one after another. That is, we will need to find the equivalent vector of the second vector whose tail is at the tip of the first vector , and the resulting vector is the vector from the tail of the first vector to the tip of the second vector. This is sometimes referred to as the Triangle Law .    Vector Addition using the Triangle Law   But sometimes we are given the position vectors and their tails are both at the origin (or at the same point). Alternatively, rather than finding the equivalent vector of the second vector, we can construct a parallelogram using the two vectors as adjacent sides, and the resulting vector is the diagonal of the parallelogram starting from the common tail of the two vectors. This is called the Parallelogram Law .    Vector Addition using the Parallelogram Law    But Richard... Aren't these two laws essentially the same thing? Why splitting hairs and call them two things?  While these two laws are essentially the same, they represent two different actions in context.   The triangle law represents sequentially performing two movements one after another.    The parallelogram law represents combining two movements happening at the same time .      Now let's look at scalar multiplication . The term scalar refers to a real number. That is, scalar multiplication tells us how to multiply a vector by a real number. The scalar will \"scale\" or \"resize\" the vector.  When the scalar is positive, the resulting vector points in the same direction, and the size of the vector is scaled by the scalar.    Vector Addition using the Parallelogram Law   When the scalar is negative, the resulting vector points in the opposite direction, and the size of the vector is scaled by the absolute value of the scalar.    Vector Multiplication by a Negative Scalar   But what if the scalar is zero? We can quickly see that the magnitude of the resulting vector is zero, so the resulting vector is the zero vector , denoted by . We can imagine the zero vector has the tail and tip at the same point, which means it doesn't have a specific direction. Alternatively, we can say that the zero vector points in all directions.  Once we have vector addition and scalar multiplication defined, we can subtract two vectors. Recall subtraction is really the same thing as adding the opposite. That is, Graphically, we can find as follows:    Vector Subtraction   But we work with components of vectors as well... How do we perform these operations using components? It turns out that vector addition and scalar multiplication can be performed component-wise .   Vector Operations using Components   If and , then:                           Calculate .   The vector sum is     Observe that vector operations are (kind of) similar to operations with numbers component-wise. Then some properties of number operations also hold for vector operations.   Basic Properties of Vector Algebra   For all vectors , , , and for all scalars ,      Linear Combinations of Vectors  Given two vectors and , we define a linear combination of them as a vector of the form where and are scalars. Linear combinations are the fundamental mechanism for \"building\" new vectors from existing ones.   Express as a linear combination , where Then sketch , , , and the parallelogram formed by and .   Consider the vectors and are the two building blocks that we can use to construct the vector . The moves we can do are the scalar multiplications (to resize the building blocks) and the vector addition (to combine the building blocks).  So, the question here is: how should we resize the building blocks and such that when we combine them together, we get the desired vector ?    Using the definition of linear combinations, there are two scalars and such that This implies that Solving this system of equations, we obtain and . Hence, the linear combination is The sketches of the vectors and the parallelogram are shown below.       One of the reasons why linear combinations are important is that we can decompose vectors into linear combinations of other vectors. Usually, we want to decompose vectors into linear combinations of the simplest vectors possible. In , the simplest vectors are the standard basis vectors , defined as Any vector in can be expressed as a linear combination of these two vectors. Or using fancy linear algebra terminology, the set  spans the vector space .    Linear Combination using the standard basis vectors in    Calculate the linear combination    The building blocks here are the standard basis vectors and . So we will need to perform scalar multiplications and vector additions to obtain the resulting vector.            Applications of Vectors  Vectors are widely used in various fields, including physics, engineering, computer science, and more. They are particularly useful in representing quantities that have both magnitude and direction, such as velocity, force, and acceleration. In this section, we will explore a basic application of vectors: force vectors.   Force Vectors  A 400-lb engine is suspended from two chains that form 60° angles with a horizontal ceiling. How much weight does each chain support?      Let and denote the forces exerted by the chains on the engine and let be the downward force due to the weight of the engine. Then we can place the origin at the point where the engine is located and construct a Cartesian coordinate plane.  Then we can draw the vectors , , and . Can we find the components of these vectors?  Since the engine is stationary, the forces must be balanced. That is, adding these three vectors together must give us the zero vector.    Following the setup in the hint, we can construct a Cartesian coordinate plane with the origin at the engine. Then the vectors are        Since the engine is stationary, we have This implies that Equating the components, we obtain the system of equations: Solving this system, we find that lbs.  Hence, each chain must be able to support a weight of approximately 230.94 lbs.      Homework problems for this section   Below are the homework problems for this section. You will work out each problem on a separate sheet of paper and submit your solutions by the due dates indicated on the course schedule. Reach out to Richard for help if you get stuck or have any questions.  The solution will be posted after the due dates. If you have any question about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of the unit vector  in the figure below.       Find the components of , where and .    Calculate .    Sketch , , , and in the following figure.       Sketch , , , and .    Are and parallel if , , , and ? And if so, do they point in the same direction?     In the following exercises, find the given vector.    Unit vector , where .    Vector of length in the direction of .    Unit vector making an angle of with the -axis.     Calculate the linear combination     Express as a linear combination , where Then sketch , and the parallelogram formed by and .    Calculate the magnitude of the force on cables 1 and 2 shown in the figure below.       "
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
  "body": " The vector in    "
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
  "type": "Note",
  "number": "12.1.15",
  "title": "But Richard... Aren’t these two laws essentially the same thing? Why splitting hairs and call them two things?",
  "body": " But Richard... Aren't these two laws essentially the same thing? Why splitting hairs and call them two things?  While these two laws are essentially the same, they represent two different actions in context.   The triangle law represents sequentially performing two movements one after another.    The parallelogram law represents combining two movements happening at the same time .     "
},
{
  "id": "subsec-VectorAlgebra-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar multiplication "
},
{
  "id": "subsec-VectorAlgebra-10",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-10",
  "type": "Figure",
  "number": "12.1.16",
  "title": "",
  "body": "  Vector Addition using the Parallelogram Law  "
},
{
  "id": "subsec-VectorAlgebra-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-12",
  "type": "Figure",
  "number": "12.1.17",
  "title": "",
  "body": "  Vector Multiplication by a Negative Scalar  "
},
{
  "id": "subsec-VectorAlgebra-13",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "subsec-VectorAlgebra-15",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-15",
  "type": "Figure",
  "number": "12.1.18",
  "title": "",
  "body": "  Vector Subtraction  "
},
{
  "id": "thm-thm-VectorOperationsComponents",
  "level": "2",
  "url": "sec121-VectorsPlane.html#thm-thm-VectorOperationsComponents",
  "type": "Theorem",
  "number": "12.1.19",
  "title": "Vector Operations using Components.",
  "body": " Vector Operations using Components   If and , then:                         "
},
{
  "id": "subsec-VectorAlgebra-18",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorAlgebra-18",
  "type": "Example",
  "number": "12.1.20",
  "title": "",
  "body": " Calculate .   The vector sum is    "
},
{
  "id": "thm-PropertiesVectorAlgebra",
  "level": "2",
  "url": "sec121-VectorsPlane.html#thm-PropertiesVectorAlgebra",
  "type": "Theorem",
  "number": "12.1.21",
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
  "number": "12.1.22",
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
  "number": "12.1.24",
  "title": "",
  "body": "  Linear Combination using the standard basis vectors in  "
},
{
  "id": "subsubsec-LinearCombinations-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsubsec-LinearCombinations-6",
  "type": "Example",
  "number": "12.1.25",
  "title": "",
  "body": " Calculate the linear combination    The building blocks here are the standard basis vectors and . So we will need to perform scalar multiplications and vector additions to obtain the resulting vector.        "
},
{
  "id": "subsec-VectorApplication-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#subsec-VectorApplication-3",
  "type": "Example",
  "number": "12.1.26",
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
  "body": " Find the components of the unit vector  in the figure below.     "
},
{
  "id": "ws-sec121-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-4",
  "type": "Worksheet Exercise",
  "number": "12.1.11",
  "title": "",
  "body": " Find the components of , where and .  "
},
{
  "id": "ws-sec121-5",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-5",
  "type": "Worksheet Exercise",
  "number": "12.1.19",
  "title": "",
  "body": " Calculate .  "
},
{
  "id": "ws-sec121-6",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-6",
  "type": "Worksheet Exercise",
  "number": "12.1.23",
  "title": "",
  "body": " Sketch , , , and in the following figure.     "
},
{
  "id": "ws-sec121-7",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-7",
  "type": "Worksheet Exercise",
  "number": "12.1.25",
  "title": "",
  "body": " Sketch , , , and .  "
},
{
  "id": "ws-sec121-8",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-8",
  "type": "Worksheet Exercise",
  "number": "12.1.35",
  "title": "",
  "body": " Are and parallel if , , , and ? And if so, do they point in the same direction?  "
},
{
  "id": "ws-sec121-9-2",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-2",
  "type": "Worksheet Exercise",
  "number": "12.1.43",
  "title": "",
  "body": " Unit vector , where .  "
},
{
  "id": "ws-sec121-9-3",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-3",
  "type": "Worksheet Exercise",
  "number": "12.1.45",
  "title": "",
  "body": " Vector of length in the direction of .  "
},
{
  "id": "ws-sec121-9-4",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-9-4",
  "type": "Worksheet Exercise",
  "number": "12.1.49",
  "title": "",
  "body": " Unit vector making an angle of with the -axis.  "
},
{
  "id": "ws-sec121-10",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-10",
  "type": "Worksheet Exercise",
  "number": "12.1.61",
  "title": "",
  "body": " Calculate the linear combination   "
},
{
  "id": "ws-sec121-11",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-11",
  "type": "Worksheet Exercise",
  "number": "12.1.65",
  "title": "",
  "body": " Express as a linear combination , where Then sketch , and the parallelogram formed by and .  "
},
{
  "id": "ws-sec121-12",
  "level": "2",
  "url": "sec121-VectorsPlane.html#ws-sec121-12",
  "type": "Worksheet Exercise",
  "number": "12.1.67",
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
  "body": " Three-Dimensional Spaces: Surfaces, Vectors, and Curves   We live in a three-dimensional world, yet our study of calculus has so far been largely restricted to the flat, two-dimensional plane. In this section, we will upgrade our coordinate system from to . We will see that many familiar concepts, such as the distance formula, vectors, and lines, extend naturally into this new dimension.    After this section, students will be able to:     Locate points in a three-dimensional Cartesian coordinate system and identify the octants.    Calculate the distance between two points in using the distance formula.    Identify and write equations for basic surfaces in , including planes, spheres, and cylinders.    Perform vector operations (addition, scalar multiplication, and magnitude) in .    Determine vector and parametric equations for lines in given a point and a direction, or two points.    Analyze the relationship between two lines in space to determine if they are parallel, intersecting, or skew.      To discuss stuff in three-dimensional space, we need to first determine how to represent points in . Just like points in , we can use an ordered triple of real numbers to represent a point in .  You may guess that we can graph stuff in using three orthogonal axes, one for each coordinate. This is indeed the case, and the three axes are usually labeled , , and , following the right-hand rule : if the curled fingers of the right hand are rotated from the positive -axis to the positive -axis, the thumb points in the direction of the positive -axis.    Right-hand rule for labeling axes in   The point where the three axes intersect is called the origin and is denoted by . An ordered triple represents the point that is units along the -axis, units along the -axis, and units along the -axis.    Plotting the following points in   To visualize this point, it is helpful to construct a rectangular box with one vertex at the origin and the opposite vertex at the point .  Recall that the two axes in divide the plane into four quadrants. Similarly, the three axes in divide the space into eight regions called octants . We call the region where , , and the first octant . Unlike how quadrants are usually numbered in , there is no consistent way to number the octants in .  Next, we can talk about the distance between two points in . The distance formula in is an extension of the distance formula in using the Pythagorean Theorem twice.   Distance Formula in   The distance between the points and is      A quick proof to show the distance formula in  Let and be two points in . We first construct the point . Then, by applying the Pythagorean Theorem in the right triangle , we have     in   We can see that . To find the hypotenuse , we need to find first.  To find , we will need to construct another point .    in   We apply the Pythagorean Theorem again in the triangle to find :   Hence, we obtain Taking the square root of both sides gives the desired result.   Now that we know how works, let's move on to discussing some other important objects in , including surfaces, vectors, and lines.   Surfaces  It is difficult to put a precise mathematical definition of what a surface is. One way to think about it is that a surface is a generalization of a plane in the sense that surfaces can be curved (this is similar to how curves are generalizations of lines).  The most easiest planes in are the -plane, -plane, and -plane.   Setting defines the -plane .    Setting defines the -plane .    Setting defines the -plane .       -, -, and -planes in   Similarly, we can get a plane by setting one of the coordinates to be a constant. These types of planes are called the coordinate planes .   The equation defines a plane parallel to the -plane that intersects the -axis at .    The equation defines a plane parallel to the -plane that intersects the -axis at .    The equation defines a plane parallel to the -plane that intersects the -axis at .      Describe the following surfaces in and sketch them:                    The equations describe planes in as follows:   The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .    The equation describes a plane parallel to the -plane that intersects the -axis at .   The sketch of these planes is shown below.    Planes , , and in     There are other types of planes in as well. In general, a plane in can be determined by a point on the plane and a normal vector to the plane. We will discuss planes in 3D more in detail in Section 12.5.  Let's shift our focus to other types of surfaces in . To describe surfaces in , we need some equations to put some constraints on the coordinate(s).  For example, we can describe the surface of a sphere by thinking about the constraint of the points on it. Imagine there is a sphere in centered at the point with radius . Then any point on the sphere must be exactly units away from the center . Using our distance formula in , we have We can \"simplify\" this equation by squaring both sides to get rid of the square root. This gives us the standard equation of a sphere in    Standard Equation of a Sphere in   An equation of the sphere in of radius centered at is       Sphere of radius centered at in    Hey Richard, can we call this a ball instead of a sphere?  The short answer is no... There is a big difference between a sphere and a ball in mathematics.  Observing the standard equation of a sphere, we can see that it only describes the surface of the sphere, not the interior.  Yet, a ball includes both the surface and the interior. An equation of a ball of radius centered at is given by the inequality   If you took MTH 252 (or 252Z) with Richard, you may remember he pointed out the difference between a circle and a disk when he taught the Disk Method. This is the same idea here.    Give an equation of the sphere of radius centered at .   Using the standard equation of a sphere, we have which simplifies to     We can put more constraints on the equation of a sphere to get other surfaces. One thing to do so is to restrict the domain of the coordinate(s).   Describe the surface with .   If we drop the constraints , then the equation describes a sphere of radius centered at the origin. But we don't get the whole sphere because of the constraints...  Then which part of the sphere do we get if we only allow ?    The equation describes a sphere of radius centered at the origin. However, since we have the constraints , we only get the portion of the sphere that is in the first octant. That is, the surface is one eighth of the sphere.  The surface is shown in the figure below.   Portion of the sphere in the first octant        Another way to get a different surface is to relax the constraints on the coordinate(s). For example, consider the equation We know that this is an equation of a circle in (or more specifically, in the -plane) with radius centered at . If we consider this equation in , then there is no constraint on the -coordinate. That is, can take any real value. When we allow to vary freely, the circle will \"extend\" infinitely in both positive and negative -directions, forming a surface called a right circular cylinder , a cylinder whose cross-sections are circles and whose axis is perpendicular to the base.    Right circular cylinder of radius whose central axis is the vertical line through    Standard Equation of a Cylinder in   An equation of the right circular cylinder in of radius whose central axis is the vertical line through is      Describe the surface with .   If we drop the constraints , then the equation describes a cylinder of radius whose central axis is the vertical line through the origin. But we don't get the whole cylinder because of the constraints...  Then which part of the cylinder do we get if we only allow ?    The equation describes a cylinder of radius whose central axis is the vertical line through the origin. However, since we have the constraints , we only get the portion of the cylinder where and . That is, we get one fourth of the cylinder.  The surface is shown in the figure below.   Fourth-cylinder with        We can create many other surfaces in by putting different types of constraints on the coordinates. We will explore more surfaces in section 12.6 and even more in chapter 14. Spheres and cylinders are the two most basic surfaces in with a lot more applications (for example, we can construct coordinate systems based on them) so make sure you understand them well!    Vectors in 3-Space  Vectors in are super similar to vectors in we discussed in . Two points in can determine a vector. Let and be two points in . Then we can define a vector as follows where the -component is , the -component is , and the -component is .   Find the components of the vector , where and . Then sketch the vector.   By the definition of the vector components we have   The sketch of the vector is shown below.   Vector in        The vector terminologies remain the same as in :   Two non-zero vectors are parallel if one is a scalar multiple of the other.    Two vectors are equivalent if they have the same components.    The position vectors are the ones whose tails are at the origin .      Determine whether or not the two vectors and are parallel.   Since the two vectors are parallel.  In addition, since the scalar here is negative, we know that the two vectors point in opposite directions.    Just like how we can find the magnitude and the direction of a vector in , we can do the same(ish) thing in . Given a vector , its magnitude is Also, the vector itself can tell us about its direction . If you really want to work with a unit vector in the same direction as , you can find it by dividing the vector by its magnitude:   In addition, vector algebra works similarly in as it does in . Vector addition and scalar multiplication are defined component-wise . That is, if and , then and for a scalar , Then we can construct new vectors through linear combinations .  The standard basis vectors in are and every vector in can be expressed as a linear combination of these basis vectors. Using fancy linear algebra terminology, the set spans .   Which vector has the smaller magnitude: or ?   We first find the components of each vector: and Then we compute their magnitudes: and Since , we conclude that has the smaller magnitude.      Curves and Lines  Most curves in can be represented using parametrically than using a single equation. That is, we use three functions to represent the -, -, and -coordinates of the points on the curve with a parameter . This can be visualized as representing the coordinates of a particle moving through space as a function of time , and the curve is the path traced out by the particle.   Full Interface GeoGebra    Alternatively, we can construct a function of the position vectors with tips on the curve Essentially, the tips of this \"vector function\" trace out the curve as varies. This is called the vector-valued function . You will learn all the fun stuff about vector-valued functions in Chapter 13. In this section, we will focus on the simplest type of curves in , lines.  Remember back when you first learned about lines in , you probably remember that we need both the slope and a point on the line to define a line.   The slope tells us the direction of the line. Yet knowing just the slope doesn't tell us a unique line... There can be thousands of parallel lines with the same slope!    A point on the line can pin down the location of the line. Yet knowing just a point on the line doesn't tell us the direction of the line... We can draw infinitely many lines through a single point!   This is also the case in ! In order to determine a line in , we need to know both the direction of the line and a point on the line.  Unlike stuff in , there is no \"slope\" in to represent the direction of a line, since \"slope\" is a concept that only works in two dimensions. Instead, we use a vector to represent the direction of the line.  We can find a point in just fine, since points in are represented by ordered triples.  Hence, a line in is determined by a point on the line and a direction vector .   Equation of a Line in   The line through in the direction of is described by   Vector Parametrization:  where .   Parametric Equations:  The parameter takes on values .      The line in   Observe that the parametric equations specify the -, -, and -coordinates of the points on the line as functions of the parameter . These three parametric equations is itself a linear function in the parameter . What we did here is essentially to extend this idea in the notion of vector parametrization.   Find an equation of the line that passes through the point in the direction of .   We are given . Therefore, an equation of the line is for . The corresponding parametric equations are for .    Back in algebra 2, you may also have learned that two points can also determine a line in . This is also true in . The trick here is to determine the direction vector using the two points.   Find an equation of the line that passes through the points and .   To find an equation of a line, we need a point on the line and a direction vector. So there are really things we need to find out.  The easier part is to find a point on the line (we are given two points on the line!)  The slightly trickier part is to find a direction vector. Can we find a vector parallel to the line using the two points?    A directional vector is . Then we obtain We can use either point or as the point on the line. Using point , we have . Therefore, an equation of the line is for . The corresponding parametric equations are for .    You may feel like the equation of a line is not unique since we can choose different points on the line to represent the same line (for example, in the previous example, Richard chose the point to write the equation of the line instead of point . He would have obtained a different equation if he had chosen point instead). It is true that the equation of a line is not unique , not only because we can choose different points on the line to construct the equation, we can also pick different vectors that are parallel to each other to represent the direction of the line.  When things are not unique, it is often helpful to verify that two different equations can represent the same line. Remember that we can determine a line by knowing a point on the line and a direction vector. Then two equations represent the same line if the direction vectors are parallel and they share a point in common.   Show that and define the same line, where    The line has the direction vector of and passes through the point .  The line has the direction vector of and passes through the point .  If they represent the same line, then and must be parallel, and there must be a point that lies on both lines.    Observe that , so the two direction vectors are parallel.  To show that the two lines share a point in common, we can check if point lies on line . Observe that This implies that lies on line .  Therefore, the two lines represent the same line in .    In , we learned that two lines are either parallel or they intersect at a single point, assuming the lines are not coincident. In , however, two lines can also be skew , meaning that they do not intersect and are not parallel (hence they are not coplanar).   Determine whether the lines and intersect, and if so, find the point of intersection.   Let's just assume that the two lines intersect. If two lines intersect, then they must intersect at a single point.  Now put on your algebra 2 hat and think about how to find the point of intersection of two lines in . (You would set the two equations equal to each other and solve for !)    The lines intersect if there exist parameter values and such that Equating corresponding components, we get This is a system of three equations with two unknowns. If you know linear algebra, feel free to solve it using matrices. Otherwise, we can solve it using basic algebra methods, like substitution or elimination.  Richard assumes no linear algebra knowledge here, so he will use substitution. Substituting from the second equation into the first equation we get Using in the second equation gives . Don't forget that there are. three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: We conclude that , is the solution to the system, hence the two lines intersect.   If you really like linear algebra and want to solve it using matrices...  There are multiple ways to solve the system of equations using linear algebra (like row reduce the augmented matrix, or use Cramer's rule, etc.). Richard will pick the method of row reducing the augmented matrix here (the cramer's rule or the inverse matrix method don't work here since there are more equations than the variables).  The agumented matrix of the system is Row reducing this matrix we get From here we can read off the solution , .   To find the point of intersection we substitute into the equation for (or into ) to obtain The point of intersection is the terminal point of this vector, that is, .     Determine whether the lines and are parallel, intersect, or are skew.   Observe that the direction vectors are and are not multiples of each other, so the lines are not parallel.  Then the two other possibilities are that the lines intersect or they are skew. We haven't discussed how to check if two lines are skew, but we can check if they intersect. So the question becomes: do the two lines intersect?    If the two lines intersect, then there exist parameter values and such that Equating corresponding components, we get Substituting from the second equation into the first equation we get Using in the first equation gives . Don't forget that there are three equations in the system but we only used two of them so far! We need to check whether and satisfy the third equation: This is a contradiction, so the two lines do not intersect.   If you again want to solve it using matrices...  The augmented matrix of the system is Row reducing this matrix we get Observe that a pivot appears in the rightmost column, which implies that the system is inconsistent.   Since we have already established that the lines are not parallel, we conclude that the two lines are skew.  The sketch of the two lines is shown below. Observe that these two lines do not intersect and are not parallel. They are not coplanar.   Line (blue) and Line (red)          Practice problems for this section   Below are the suggested problems for this section. Some of the problems will become part of your homework assignments. I suggest you work out all the problems to get a good grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solution will be posted after the homework due dates. If you have any question about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of the vector , where and     Let . Which of the following vectors is parallel to ? Which point in the same direction?                          Determine whether or not the two vectors and are parallel.    Sketch the following vectors, and find their components and lengths:                           In the following exercises, describe the surface.     , with      , with       In the following exercises, give an equation for the indicated surface.    The sphere centered at passing through     The cylinder passing through the origin with the vertical line through as its central axis.      In the following exercises, find a vector parametrization for the line with the given description.    Passes through , direction vector     Passes through , direction vector      Show that and define the same line, where     Show that passes through and that the direction vectors for and are parallel.     Find two different vector parametrizations of the line through with direction vector .    Determine whether the lines and intersect, and if so, find the point of intersection.    "
},
{
  "id": "sec122-3DSpaces-2-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#sec122-3DSpaces-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     Locate points in a three-dimensional Cartesian coordinate system and identify the octants.    Calculate the distance between two points in using the distance formula.    Identify and write equations for basic surfaces in , including planes, spheres, and cylinders.    Perform vector operations (addition, scalar multiplication, and magnitude) in .    Determine vector and parametric equations for lines in given a point and a direction, or two points.    Analyze the relationship between two lines in space to determine if they are parallel, intersecting, or skew.    "
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
  "id": "figure-geogebra-full",
  "level": "2",
  "url": "sec122-3DSpaces.html#figure-geogebra-full",
  "type": "Figure",
  "number": "12.2.23",
  "title": "",
  "body": " Full Interface GeoGebra   "
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
  "body": " Find the components of the vector , where and   "
},
{
  "id": "ws-sec122-4",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-4",
  "type": "Worksheet Exercise",
  "number": "12.2.13",
  "title": "",
  "body": " Let . Which of the following vectors is parallel to ? Which point in the same direction?                        "
},
{
  "id": "ws-sec122-5",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-5",
  "type": "Worksheet Exercise",
  "number": "12.2.25",
  "title": "",
  "body": " Determine whether or not the two vectors and are parallel.  "
},
{
  "id": "ws-sec122-6",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-6",
  "type": "Worksheet Exercise",
  "number": "12.2.32",
  "title": "",
  "body": " Sketch the following vectors, and find their components and lengths:                        "
},
{
  "id": "ws-sec122-7-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-7-2",
  "type": "Worksheet Exercise",
  "number": "12.2.33",
  "title": "",
  "body": "  , with   "
},
{
  "id": "ws-sec122-7-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-7-3",
  "type": "Worksheet Exercise",
  "number": "12.2.35",
  "title": "",
  "body": "  , with   "
},
{
  "id": "ws-sec122-8-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-8-2",
  "type": "Worksheet Exercise",
  "number": "12.2.39",
  "title": "",
  "body": " The sphere centered at passing through   "
},
{
  "id": "ws-sec122-8-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-8-3",
  "type": "Worksheet Exercise",
  "number": "12.2.41",
  "title": "",
  "body": " The cylinder passing through the origin with the vertical line through as its central axis.  "
},
{
  "id": "ws-sec122-9-2",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-9-2",
  "type": "Worksheet Exercise",
  "number": "12.2.43",
  "title": "",
  "body": " Passes through , direction vector   "
},
{
  "id": "ws-sec122-9-3",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-9-3",
  "type": "Worksheet Exercise",
  "number": "12.2.45",
  "title": "",
  "body": " Passes through , direction vector   "
},
{
  "id": "ws-sec122-10",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-10",
  "type": "Worksheet Exercise",
  "number": "12.2.57",
  "title": "",
  "body": " Show that and define the same line, where     Show that passes through and that the direction vectors for and are parallel.   "
},
{
  "id": "ws-sec122-11",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-11",
  "type": "Worksheet Exercise",
  "number": "12.2.59",
  "title": "",
  "body": " Find two different vector parametrizations of the line through with direction vector .  "
},
{
  "id": "ws-sec122-12",
  "level": "2",
  "url": "sec122-3DSpaces.html#ws-sec122-12",
  "type": "Worksheet Exercise",
  "number": "12.2.63",
  "title": "",
  "body": " Determine whether the lines and intersect, and if so, find the point of intersection.  "
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
