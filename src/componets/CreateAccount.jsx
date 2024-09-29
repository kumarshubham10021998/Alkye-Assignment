import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/NewAccount.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const CreateAccount = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate account creation logic
        setTimeout(() => {
            alert('Account created successfully with password: ' + password);

            // Redirect to the home page after account creation
            navigate('/home');  // Redirect to home page
        }, 1000);  // Simulate network delay
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="login-box row shadow-lg p-5 rounded bg-white">
                {/* Left section with icon and text */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                    <div className="logo mb-4 d-flex align-items-center">
                        <i className="fas fa-layer-group fa-2x me-3"></i>
                        <h5 className="m-0">TEST</h5>
                    </div>
                    <h4 className="step-text">STEP 2</h4>
                    <h2 className="main-heading">Create an account to continue</h2>
                    <p className="text-muted sub-heading">
                        You’ll be able to log in to Dingoo with this email address and password.
                    </p>
                </div>

                {/* Right section with password input and button */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                    <form className="w-100" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control email-input"
                                placeholder="Choose a password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <span className="input-group-text">
                                <i className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                        <div className="text-end d-flex flex-column flex-md-row align-items-start justify-content-between">
                            <p className="text-muted small-text">
                                Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                            </p>
                            <button type="submit" className="btn btn-dark continue-btn">
                                Agree & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
