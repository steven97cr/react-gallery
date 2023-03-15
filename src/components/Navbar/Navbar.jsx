import classes from './Navbar.module.css';
import profileImg from '../../assets/frog-profile-picture.png';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../features/auth/authSlice';

const Navbar = ()=>{

    const dispatch = useDispatch();
    //const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if(!user){
    //         navigate('/login')
    //     }
    // })

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout({
            
        }))
    }

    return(
        <nav className={classes.navbarWrapper}>
            <div className={classes.navbarContainer}>
                <div className={classes.navbarCompLogoWrapper}>
                    <h2>RandomLogo</h2>
                </div>
                <ul className={classes.navbarMenuWrapper}>
                    
                </ul>
                <div className={classes.navbarProfPhotoWapper}>
                    <a onClick={logoutHandler} href="/"><img className={classes.navbarProfPhoto} src={profileImg} alt="" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;