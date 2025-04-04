import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Yeh line add karni hai!

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();  // ✅ useNavigate use ho raha hai

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            setError("All fields are required!");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        alert("Signup successful! Now login.");
        navigate("/login");
    };

    return (
        <div className="p-10 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <input 
                type="text" 
                placeholder="Email" 
                className="w-full p-2 mb-2 border" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 mb-2 border" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full p-2 mb-2 border" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="w-full bg-green-600 text-white p-2" onClick={handleSignup}>Signup</button>
        </div>
    );
}

export default Signup;
