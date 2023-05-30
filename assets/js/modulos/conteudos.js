import { isEmpty } from './utilitarios.js';

const periodo = (index) => {
isEmpty(index) ? index = 0 : '';
return  `              
<div class="row mb-3" data-element="periodo">
  <div class="col input-group">
    <label class="input-group-text" for="inicio-periodo-${index}">Início</label>
    <input type="date" class="form-control" id="inicio-periodo-${index}" oninput="escutaEventoInput(this)">
  </div>
  <div class="col input-group">
    <label class="input-group-text" for="fim-periodo-${index}">Fim</label>
    <input type="date" class="form-control" id="fim-periodo-${index}" oninput="escutaEventoInput(this)">
  </div>
</div>`
};

const critica = (elemento) => {
  html = {
    podeUsarFGTS: `<li class="mt-2"><i class="bi bi-calendar2-check"></i><span>Pode usar saldo de contas FGTS em financiamentos habitacionais</span></li>`,
    podeAmortizarComFGTS: `<li class="mt-2"><i class="bi bi-receipt"></i><span>Pode amortizar financiamentos habitacionais com o FGTS&nbsp;<sup><a href="" class="link-visivel" rel="noreferrer noopener">1</a></sup></span></li>`,
    podeTerDescontoMCMV: `<li class="mt-2"><i class="bi bi-percent"></i><span>Pode ter desconto de 0.5% ao ano no juros para Minha Casa Minha Vida</span></li>`,
    naoPodeUsarFGTS: `<li class="mt-2"><i class="bi bi-x-square"></i><span>Não pode usar saldo de contas FGTS em financiamentos habitacionais</span></li>`,
    naoPodeAmortizarComFGTS: `<li class="mt-2"><i class="bi bi-x-square"></i><span>Não pode amortizar financiamentos habitacionais com o FGTS&nbsp;<sup><a href="" class="link-visivel" rel="noreferrer noopener">1</a></sup></span></li>`,
    naoPodeTerDescontoMCMV: `<li class="mt-2"><i class="bi bi-x-square"></i><span>Não pode ter desconto no juros para o Minha Casa Minha Vida</span></li>`
  },
  texto = {

  }
}

export const conteudos = {
  periodo
}