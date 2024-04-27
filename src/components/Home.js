import { useAuth } from "../context/AuthContext"
export default function Home() {
    const { user } = useAuth() 
    return (
        <div>
            <h2>Home Component</h2>
            { !user.isLoggedIn? <p>user not logged in </p> : <p> Welecome { user.account.username }</p>}
        </div>
    )
}