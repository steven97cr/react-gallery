import ProtectedRoute from '../features/auth/ProtectedRoute'

const MyProfile = ()=>{
    return(
        <ProtectedRoute>
            <h1>My Profile</h1>
        </ProtectedRoute>
    )
}

export default MyProfile;