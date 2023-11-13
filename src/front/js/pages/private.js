import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const access_token = localStorage.getItem("access_token");

        if (!access_token) {
            navigate("/login");
        }
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-4">Menú Privado</h1>
                            <p className="card-text">Bienvenido a tu área privada.</p>
                            <ul className="list-group">
                                <li className="list-group-item">Opción 1</li>
                                <li className="list-group-item">Opción 2</li>
                                <li className="list-group-item">Opción 3</li>
                            </ul>
                            <button onClick={handleLogout} className="btn btn-danger mt-3">
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
