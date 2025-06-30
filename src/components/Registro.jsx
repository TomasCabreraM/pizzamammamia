export const Registro = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crear Cuenta</h2>
            <form id="FormularioRegistro">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@correo.com" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Crea una contraseña" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Repite tu contraseña" required />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};
