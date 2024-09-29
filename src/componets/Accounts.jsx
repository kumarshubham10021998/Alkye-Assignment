import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/NewAccount.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom'; // for navigation

const Accounts = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email, // Assuming username is the email entered
                    password: 'testadmin', // Placeholder, adjust as needed
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Navigate to the CreateAccount page on successful login
                navigate('/create-account');
            } else {
                setError(data?.message || 'Failed to login.');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="login-box row shadow-lg p-5 rounded">
                {/* Left section with icon and text */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <div className="logo mb-4 d-flex align-items-center">
                        <i className="fas fa-layer-group fa-2x me-3"></i>
                        <h5 className="m-0">TEST</h5>
                    </div>
                    <h4 className="step-text">STEP 1</h4>
                    <h2 className="main-heading">Enter your User Name address to continue</h2>
                    <p className="text-muted sub-heading">
                        Log in to your account. If you don’t have one, you will be prompted to create one.
                    </p>
                </div>

                {/* Right section with email input and button */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                    <form className="w-100" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control email-input"
                                placeholder="User Name"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="text-end">
                            <button type="submit" className="btn btn-dark continue-btn" disabled={loading}>
                                {loading ? 'Loading...' : 'Continue'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
