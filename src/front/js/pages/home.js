import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const handlePrivateMenu = () => {
        const access_token = localStorage.getItem("access_token");
        access_token ? navigate("/private") : navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-4">Bienvenido a mi Página</h1>
                            <p className="card-text">Selecciona una opción:</p>
                            <div className="d-grid gap-2">
                                <Link to="/login" className="btn btn-primary">
                                    Iniciar Sesión
                                </Link>
                                <Link to="/signup" className="btn btn-success mt-2">
                                    Registrarse
                                </Link>
                                <button onClick={handlePrivateMenu} className="btn btn-info mt-2">
                                    Menú Privado
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
