const page = document.body.dataset.page || "";

const headerHTML = `
      <div class="top-bar">
        <div class="container top-bar__inner">
          <span>Seja bem-vindo(A) <i>WELCOME</i></span>
        </div>
      </div>
      <header>
        <div class="container header__inner">
          <a class="logo" href="/" title="Ir para home">
            <img src="/images/logo.svg?v=2" alt="JSL — Entender para atender" width="108" height="44" />
          </a>
          <nav class="nav" id="menu" aria-label="Menu principal">
            <div class="nav__sheet">
              <ul>
                <li><a ${page === "home" ? 'class="is-active"' : ""} href="/">Início</a></li>
                <li><a ${page === "agregados" ? 'class="is-active"' : ""} href="/agregados.html">Seja um Agregado</a></li>
                <li><a href="/agregados.html#beneficios">Benefícios</a></li>
                <li><a href="/agregados.html#requisitos">Requisitos</a></li>
                <li><a href="/agregados.html#duvidas">Dúvidas</a></li>
                <li><a href="/agregados.html#contato">Contato</a></li>
                <li class="visible-desktop">
                  <a class="btn-orcamento" href="https://wa.me/5511954021951?text=Ol%C3%A1%2C%20quero%20me%20cadastrar%20como%20agregado%20JSL." target="_blank" rel="noopener noreferrer">Cadastre-se</a>
                </li>
                <li class="visible-mobile">
                  <a href="https://wa.me/5511954021951" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </li>
              </ul>
              <div class="siga visible-mobile">
                <span>Siga-nos</span>
                <div class="social">
                  <a href="https://www.facebook.com/OficialJSL/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#fff" d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/jsl-s.a./" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#fff" d="M6.5 9H3.5v12h3V9zM5 3.5A1.8 1.8 0 1 0 5 7a1.8 1.8 0 0 0 0-3.5zM21 14.3c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.8 1-3.3 1.7V9.1H10.6c0 .9 0 12 0 12h3v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.7V21H21v-6.7z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/oficialjsl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.2c-2.4 0-2.7 0-3.7.1-2.4.1-3.6 1.3-3.8 3.7-.1 1-.1 1.3-.1 3.7s0 2.7.1 3.7c.1 2.4 1.3 3.6 3.7 3.8 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c2.4-.1 3.6-1.3 3.8-3.7.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-2.4-1.3-3.6-3.7-3.8-1-.1-1.3-.1-3.8-.1zm0 1.6c2.4 0 2.6 0 3.6.1 1.8.1 2.6.9 2.7 2.7.1.9.1 1.2.1 3.5s0 2.6-.1 3.5c-.1 1.8-.9 2.6-2.7 2.7-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1c-1.8-.1-2.6-.9-2.7-2.7-.1-.9-.1-1.2-.1-3.5s0-2.6.1-3.5c.1-1.8.9-2.6 2.7-2.7.9-.1 1.2-.1 3.5-.1z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCavrb1pSnS302WgL5ssKRUw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#fff" d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>
                  </a>
                </div>

              </div>
            </div>
          </nav>
          <div class="area-mobile">
            <a class="btn-orcamento" href="https://wa.me/5511954021951?text=Ol%C3%A1%2C%20quero%20me%20cadastrar%20como%20agregado%20JSL." target="_blank" rel="noopener noreferrer">Cadastre-se</a>
            <button class="toggle-menu" type="button" aria-label="Abrir menu" aria-controls="menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
`;

const footerHTML = `
      <footer>
        <div class="container footer-grid">
          <div class="footer-col footer-col--matriz">
            <h3>Matriz</h3>
            <p>
              Rua Doutor Renato Paes de Barros, 1017<br />
              13º andar - Itaim Bibi – São Paulo/SP - CEP: 04530-001<br />
              Telefone:<br />
              <a href="tel:1131544000">+55 (11) 3154-4000</a><br />
              <a href="tel:1123777000">+55 (11) 2377-7000</a>
            </p>
            <div class="sac">
              <span>Fale com o nosso sac</span>
              <a href="tel:08000195755"><strong>0800 01 95 755</strong></a>
            </div>
          </div>

          <div class="footer-col">
            <h3>Início</h3>
            <ul class="footer-list">
              <li><a href="/agregados.html">Seja um Agregado</a></li>
              <li><a href="/agregados.html#beneficios">Benefícios</a></li>
              <li><a href="/agregados.html#requisitos">Requisitos</a></li>
              <li><a href="/agregados.html#duvidas">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Cadastro de Agregados</h3>
            <ul class="footer-list footer-list--bullets">
              <li><a href="https://wa.me/5511954021951?text=Ol%C3%A1%2C%20quero%20me%20cadastrar%20como%20agregado%20JSL." target="_blank" rel="noopener noreferrer">Quero me cadastrar</a></li>
              <li><a href="https://wa.me/5511954021951" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a></li>
              <li><a href="/fale-conosco.html">Fale Conosco</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Institucional</h3>
            <ul class="footer-list footer-list--bullets">
              <li><a href="/institucional.html">Conheça a JSL</a></li>
              <li><a href="/aviso-privacidade.html">Aviso de Privacidade</a></li>
              <li><a href="/conformidade.html">Conformidade e LGPD</a></li>
              <li><a href="/canal-de-denuncia.html">Canal de Denúncia</a></li>
            </ul>
          </div>

          <div class="footer-aside">
            <div class="social social--on-dark">
              <a href="https://www.facebook.com/OficialJSL/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/jsl-s.a./" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 9H3.5v12h3V9zM5 3.5A1.8 1.8 0 1 0 5 7a1.8 1.8 0 0 0 0-3.5zM21 14.3c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.8 1-3.3 1.7V9.1H10.6c0 .9 0 12 0 12h3v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.7V21H21v-6.7z"/></svg>
              </a>
              <a href="https://www.instagram.com/oficialjsl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.2c-2.4 0-2.7 0-3.7.1-2.4.1-3.6 1.3-3.8 3.7-.1 1-.1 1.3-.1 3.7s0 2.7.1 3.7c.1 2.4 1.3 3.6 3.7 3.8 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c2.4-.1 3.6-1.3 3.8-3.7.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-2.4-1.3-3.6-3.7-3.8-1-.1-1.3-.1-3.8-.1zm0 1.6c2.4 0 2.6 0 3.6.1 1.8.1 2.6.9 2.7 2.7.1.9.1 1.2.1 3.5s0 2.6-.1 3.5c-.1 1.8-.9 2.6-2.7 2.7-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1c-1.8-.1-2.6-.9-2.7-2.7-.1-.9-.1-1.2-.1-3.5s0-2.6.1-3.5c.1-1.8.9-2.6 2.7-2.7.9-.1 1.2-.1 3.5-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCavrb1pSnS302WgL5ssKRUw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>
              </a>
            </div>
            <div class="footer-badges">
              <a class="footer-badge" href="/canal-de-denuncia.html">
                <img src="/images/rodape/Logo-canal-de-denuncia_rodape.png" alt="Canal de denúncia" width="120" height="120" />
              </a>
              <a class="footer-badge footer-badge--julio" href="http://www.institutojuliosimoes.org.br/" target="_blank" rel="noopener noreferrer">
                <img src="/images/rodape/julio.png" alt="Instituto Julio Simões" width="140" height="48" />
              </a>
            </div>
          </div>
        </div>

        <div class="barra">
          <div class="container barra-logos">
            <img src="/images/rodape/Fadel.png" alt="Fadel" height="28" />
            <img src="/images/rodape/Transmoreno2-1.png" alt="Trans Moreno" height="28" />
            <img src="/images/rodape/TPC.png" alt="TPC" height="28" />
            <img src="/images/rodape/0823_JSL-Regua-Adquiridas-130x45px-04-Rodomeu.png" alt="Rodomeu" height="28" />
            <img src="/images/rodape/Marvel-1.png" alt="Marvel" height="28" />
            <img src="/images/rodape/Truckpad-2.png" alt="TruckPad" height="28" />
            <img src="/images/rodape/ic-transportes.png" alt="IC Transportes" height="28" />
            <img src="/images/rodape/FSJ.png" alt="FSJ" height="32" />
            <img class="barra-logos__jsl" src="/images/logo.svg?v=2" alt="JSL — Entender para atender" height="40" />
          </div>
        </div>
      </footer>
      <div class="barra-fim">
        <div class="container barra-fim__inner">
          <p><span class="barra-fim__brand">JSL S.A.</span> © 2026 · Todos os direitos reservados</p>
          <a class="barra-fim__link" href="https://www.jsl.com.br/wp-content/uploads/2023/12/POL0089-POLITICA-DE-PRIVACIDADE-SIMPAR-1-2.pdf" target="_blank" rel="noopener noreferrer">Termos e Condições</a>
        </div>
      </div>
`;

const headerMount = document.querySelector("[data-site-header]");
const footerMount = document.querySelector("[data-site-footer]");
if (headerMount) headerMount.outerHTML = headerHTML;
if (footerMount) footerMount.outerHTML = footerHTML;
