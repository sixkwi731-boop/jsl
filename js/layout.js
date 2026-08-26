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
                    <svg width="12" height="18" viewBox="0 0 10 18" fill="currentColor" aria-hidden="true"><path d="M2.68 17.9V9.89H.5V7h2.18V4.54c0-1.94 1.29-3.71 4.25-3.71 1.2 0 2.09.11 2.09.11l-.07 2.69s-.9-.01-1.89-.01c-1.07 0-1.24.48-1.24 1.27V7h3.22L8.9 9.89H5.81V17.9H2.68Z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/jsl-s.a./" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="currentColor" aria-hidden="true"><path d="M4.11 18.9H.4V6.93h3.71V18.9ZM2.25 5.3A2.18 2.18 0 1 1 2.25.97a2.18 2.18 0 0 1 0 4.33Zm15.77 13.6h-3.71v-5.82c0-1.39-.03-3.17-1.93-3.17-1.93 0-2.23 1.51-2.23 3.07v5.92H6.44V6.93h3.56v1.63h.05c.5-.94 1.71-1.93 3.52-1.93 3.76 0 4.45 2.48 4.45 5.69v6.57Z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/oficialjsl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="currentColor" aria-hidden="true"><path d="M9.05 1.97c2.43 0 2.74.01 3.69.05.96.04 1.61.2 2.18.42a4.4 4.4 0 0 1 1.59 1.03c.45.45.8.99 1.02 1.59.22.57.37 1.22.42 2.17.04.96.05 1.26.05 3.7s-.01 2.74-.05 3.69c-.04.95-.2 1.6-.42 2.17a4.4 4.4 0 0 1-1.03 1.59 4.4 4.4 0 0 1-1.58 1.03c-.57.22-1.22.37-2.18.42-.95.04-1.26.05-3.69.05s-2.74-.01-3.69-.05c-.96-.04-1.61-.2-2.18-.42a4.4 4.4 0 0 1-1.58-1.03 4.4 4.4 0 0 1-1.04-1.59c-.22-.57-.37-1.22-.41-2.17-.05-.95-.06-1.26-.06-3.7s.01-2.74.05-3.69c.04-.95.2-1.6.42-2.17A4.4 4.4 0 0 1 3.18 2.44c.45-.46.99-.8 1.59-1.03.57-.22 1.22-.37 2.17-.41.96-.05 1.27-.05 3.7-.05Zm0 1.61c-2.39 0-2.68.01-3.62.05-.87.04-1.35.19-1.66.31-.42.16-.72.36-1.03.67-.3.29-.53.64-.67 1.03-.12.32-.27.79-.31 1.66-.04.95-.05 1.23-.05 3.62s.01 2.68.05 3.62c.04.87.19 1.35.31 1.66.14.39.37.74.67 1.03.29.3.64.53 1.03.67.32.12.79.27 1.66.31.94.04 1.23.05 3.62.05s2.68-.01 3.62-.05c.87-.04 1.35-.19 1.66-.31.39-.14.74-.37 1.03-.67.3-.29.53-.64.67-1.03.12-.32.27-.79.31-1.66.04-.94.05-1.23.05-3.62s-.01-2.68-.05-3.62c-.04-.87-.19-1.35-.31-1.66a2.78 2.78 0 0 0-.67-1.03 2.78 2.78 0 0 0-1.03-.67c-.32-.12-.79-.27-1.66-.31-.94-.04-1.23-.05-3.62-.05Zm0 2.74a4.61 4.61 0 1 1 0 9.21 4.61 4.61 0 0 1 0-9.21Zm0 1.61a2.99 2.99 0 1 0 0 5.99 2.99 2.99 0 0 0 0-5.99Zm5.63-2.92a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCavrb1pSnS302WgL5ssKRUw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="16" height="12" viewBox="0 0 18 13" fill="currentColor" aria-hidden="true"><path d="M17.62 2.84a2.3 2.3 0 0 0-1.57-1.5C14.65.96 9.03.96 9.03.96A52.7 52.7 0 0 0 2.02 1.32a2.3 2.3 0 0 0-1.58 1.52A23.7 23.7 0 0 0 .08 6.94a23.8 23.8 0 0 0 .36 4.1 2.24 2.24 0 0 0 1.58 1.5c1.42.37 7.01.37 7.01.37a52.8 52.8 0 0 0 7.02-.35 2.24 2.24 0 0 0 1.57-1.5 23.8 23.8 0 0 0 .36-4.1 23.7 23.7 0 0 0-.36-4.12ZM7.25 9.49V4.38l4.67 2.56-4.67 2.55Z"/></svg>
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
