class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
            <header class="header">
                <div class="logo header-logo">
                    <div class="logo-imagen"></div>
                    <h1 class="logo-titulo">
                        <em class="logo-alura">alura </em>geek
                    </h1>
                </div>
                <a class="header__login" href="" target="_blank">Login</a>
                <form class="header__formulario" action="">
                    <input class="header__input" type="text" name="buscar" id="buscar" hidden>
                    <button class="header__btn" hidden></button>
                </form>
                <div class="header__lupa"></div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);