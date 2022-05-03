const host = 'http://127.0.0.1:5500/';

const irAlIndex = () => {
    const urlActual = window.location;
    const urlIndex = /\/index.html/.test(urlActual);

    if(!urlIndex){
        window.location.href = '../index.html';
    }
};

export const propiedades = {
    host,
    irAlIndex,
}