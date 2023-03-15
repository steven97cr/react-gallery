import ProtectedRoute from "../features/auth/ProtectedRoute";

const Home = () => {
    return (
        <ProtectedRoute><h1>Home</h1></ProtectedRoute>
    )
}

export default Home;