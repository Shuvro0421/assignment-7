import CourseName from "../CourseName/CourseName";

const Cart = ({ courseNames , credit , remainingCredit }) => {
    return (
        <div className="shadow-lg rounded-lg bg-white lg:w-96 flex flex-col p-4 md:mx-0 mx-3">
            <h1 className="text-xl font-semibold text-blue-500 border-b-2 py-2 text-center">Credit Hour Remaining {remainingCredit} hr</h1>
            <h1 className="text-xl  font-semibold py-2">Course Name</h1>
            <div className="space-y-1 my-3 text-gray-500 text-sm text">

                {
                    courseNames.map((courseName, idx) => <CourseName key={idx} courseName={courseName}></CourseName>)
                }
            </div>
            <h1 className="mt-2 border-t-2 border-gray-300  py-2 text-base font-medium text-gray-500">Total Credit Hour : {credit} </h1>

        </div>
    );
};

export default Cart;