import { MdAttachMoney } from 'react-icons/md'
import { GoBook } from 'react-icons/go'
const Card = ({ card , handleCourseName }) => {
    const { img, course_name, details, credit, price } = card;
    return (
        <div className=' flex pt-5 bg-white flex-col  space-y-3 p-5 rounded-xl shadow-sm transition ease-in-out delay-0 hover:translate-y-1  hover:scale-110 duration-300 hover:shadow-2xl'>
            <div className='flex flex-col space-y-3'>
                <img src={img} alt={course_name} />
                <h1 className='text-lg  font-medium'>{course_name}</h1>
                <p className='text-sm text-gray-500 '>{details}</p>
            </div>
            <div className="flex items-center justify-between md:text-base text-xs">
                <MdAttachMoney className='md:text-xl text-sm'></MdAttachMoney>
                <p className='text-gray-500 font-medium'>Price : {price}</p>
                <GoBook className='md:text-xl text-sm'></GoBook>
                <p className='text-gray-500 font-medium'>Credit : {credit}hr</p>
            </div>
            <div className=' flex flex-col text-center bg-blue-500 p-2 rounded-md font-semibold text-white'>
                <button onClick={() =>handleCourseName(course_name)}>Select</button>
            </div>
        </div>
    );
};

export default Card;