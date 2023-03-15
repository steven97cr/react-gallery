import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {

    const location = useLocation();

    return (
        <>
            {location.pathname !== '/login' && <Navbar/>}
            {props.children}
        </>
    )
}

export default Layout;