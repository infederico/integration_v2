const validation = (userData) => {
    let errors = {};

    //reges para formato mail texto@texto.co
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
        errors.username = 'El email es inválido';
    }
    if (!userData.username) {
        errors.username = 'Este campo es obligatorio';
    }
    if (userData.username.length > 35) {
        errors.username = 'El email no puede superar los 35 caracteres'
    }
    //reges para contiene al menos un numero
    if (!userData.password.match(/\d/)){
        errors.password = 'La contraseña debe contener al menos un núnero';
    }
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres';
    }
    return errors;
};

export default validation;