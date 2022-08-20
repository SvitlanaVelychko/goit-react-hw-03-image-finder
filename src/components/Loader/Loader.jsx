import { ThreeDots } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <ThreeDots
                height="80"
                width="80"
                color="blue"
                ariaLabel = 'three-dots-loading'
            />
        </Box>
    );
};

export default Loader;