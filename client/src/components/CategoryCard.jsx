import { useNavigate } from 'react-router-dom';
import { categoryBg } from '../assets';

const CategoryCard = () => {
    const navigate = useNavigate();

    return (
        
        <div
            onClick={() => {
                navigate(`/services/${listingId}`);
            }}
            className='flex flex-col max-w-sm bg-white rounded-lg items-start p-0.5 border-gray-200 shadow text-gray-700 cursor-pointer hover:shadow-inner shadow-black'
        >
            <img
                src={categoryBg}
                className='rounded-t-lg object-cover w-40 lg:w-64 h-auto'
                alt='Coach Service'
            />

            <div className='p-5'>
                <p className='text-black text-lg lg:text-2xl'>Title</p>
                <p>Category</p>
                <p>City, State</p>
                <p>$200 per session</p>
            </div>
        </div>
    );
};

export default CategoryCard;
