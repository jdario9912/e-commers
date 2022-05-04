class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
            <footer class="footer">
                <div class="footer__nosotros">
                    <div class="logo" data-logo-footer>
                        <div class="logo-imagen"></div>
                        <h1 class="logo-titulo">
                            <em class="logo-alura">alura </em>geek
                        </h1>
                    </div>
                    <nav class="footer__nav">
                        <ul class="footer__lista">
                            <li class="footer__item"><a href="#" class="footer__link">Quienes somos</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Política de privacidad</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Programa de fidelidad</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Nuestras tiendas</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Quiero una franquicia</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Anúncia aquí</a></li>
                        </ul>
                    </nav>
                </div>
                <form action="" class="footer__formulario">
                        <p class="footer__parrafo">Hable con nosotros</p>
                        <label 
                            class="footer__label-nombre" 
                            for="nombre" 
                            id="nombre"
                            >
                            Nombre:
                            <input 
                                type="text" 
                                class="footer__input-nombre" 
                                id="nombre" name="nombre" 
                                required 
                                pattern="[A-Z][a-z]+(\s?[A-Z][a-z])?"
                                data-contacto-nombre
                            >
                            
                            <span 
                                class="footer__alert" 
                                data-alert-nombre
                            ></span>
                        </label>

                        <label 
                            class="footer__label-mensaje" 
                            for="mensaje" 
                            id="mensaje"
                            >
                            Mensaje:
                            <textarea 
                                name="mensaje" 
                                class="footer__mensaje"
                                id="mensaje" 
                                cols="30" 
                                rows="10" 
                                data-contacto-mensaje
                            ></textarea>
                                
                            <span 
                                class="footer__alert" 
                                hidden
                                data-alert-mensaje
                            ></span>
                        </label>
                        
                        <button 
                            class="footer__btn"
                            data-contacto-btn
                        >Enviar mensaje</button>
                    </form>
            </footer>
            <section class="rodapie">
                <p class="rodapie__parrafo">&#169 Copyrigth <time>2022</time> | Creado por <em class="rodapie__nombre">Joel</em></p>
            </section>
        `;
    }
}

customElements.define('footer-component', Footer);