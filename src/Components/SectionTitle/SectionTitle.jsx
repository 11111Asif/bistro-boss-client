
import PropTypes from 'prop-types';
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto my-8 md:w-4/12 '>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes ={
    heading: PropTypes.object,
    subHeading: PropTypes.object
}
export default SectionTitle;