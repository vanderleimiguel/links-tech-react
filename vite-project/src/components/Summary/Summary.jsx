import './Summary.css'

export function Summary() {
  return (
    <div className='summary'>
      <p>
        <strong>Novo Artigo: </strong>Clique no botão Adicionar no canto superior direito, irá abrir uma janela para preencher os campos campos título e url, e clique no botão verde "ADICIONAR"
      </p>
      <p>
        <strong>Editar Artigo: </strong>Clique no artigo que deseja editar, irá abrir uma nova janela, clique no botão editar artigo, edite o campo que deseja e clique no botão azul "EDITAR ARTIGO"
      </p>

      <p>
        <strong>Deletar Artigo: </strong>Clique no artigo que deseja deletar, irá abrir uma nova janela, clique no botão vermelho "DELETAR ARTIGO"
      </p>
      <p>
        <strong>Visitar Artigo: </strong>Clique no artigo que deseja visitar, irá abrir uma nova janela, clique no botão cinza "VISITAR ARTIGO"
      </p>
    </div>
  )

}