export default function UserProfile({getUser}){
    const user = getUser()
    return(
        <div className="container mt-4">
            <h1>Profil</h1>
            <p>Név: {user.name}</p>
            <p>Felhasználói azonosító: {user.id}</p>
            <p>Jogosultság: {user.role === 1 ? "Admin" : "Felhasználó"}</p>
        </div>
    )
}