const host = 'http://127.0.0.1:5500/';

function getUrlActual(){
    return window.location;
}

const irAlIndex = () => {
    const urlActual = getUrlActual();
    const urlIndex = /\/index.html/.test(urlActual);

    if(!urlIndex){
        window.location.href = '../index.html';
    }
};

export const propiedades = {
    host,
    irAlIndex,
}