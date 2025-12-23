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
  "body": " Three-Dimensional Spaces: Surfaces, Vectors, and Curves   Just the introduction texts...    After this section, students will be able to:     blahblahblah       Practice problems for this section   Below are the suggested problems for this section. Some of the problems will become part of your homework assignments. I suggest you work out all the problems to get a good grasp of the material. Reach out to Richard for help if you get stuck or have any questions.  The solution will be posted after the homework due dates. If you have any question about your work, talk to Richard and he is happy to discuss the process with you.    Find the components of the vector , where and     Let . Which of the following vectors is parallel to ? Which point in the same direction?                          Determine whether or not the two vectors and are parallel.    Sketch the following vectors, and find their components and lengths:                           In the following exercises, describe the surface.     , with      , with       In the following exercises, give an equation for the indicated surface.    he sphere centered at passing through     The cylinder passing through the origin with the vertical line through as its central axis.      In the following exercises, find a vector parametrization for the line with the given description.    Passes through , direction vector     Passes through , direction vector      Show that and define the same line, where      Find two different vector parametrizations of the line through with direction vector .    Determine whether the lines and intersect, and if so, find the point of intersection.    "
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
  "body": " he sphere centered at passing through   "
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
  "body": " Show that and define the same line, where    "
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
