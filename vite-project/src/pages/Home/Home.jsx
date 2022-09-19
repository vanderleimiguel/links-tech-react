import { Card } from '../../components/Card/Card'
import { api } from '../../utils/Api/Api'
import { useState, useEffect } from 'react'
import Modal from "react-modal"
import { CgClose } from "react-icons/cg";
import './Home.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "30rem",
    height: "30rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
    color: "white",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

export function Home() {
  const [linkList, setLinkList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueLink, setUniqueLink] = useState({});
  const [editLink, setEditLink] = useState(false);


  async function getLink() {
    const links = await api.getAllLinks();
    setLinkList(links);
  }

  async function deleteLink(linkId) {
    await api.deleteLink(linkId);
    getLink()
    handleModal();
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
    setEditCavaleiro(!true)
  }

  async function updateOneLink(event) {
    event.preventDefault();

    const link = {
      _id: event.target._id.value,
      title: event.target.title.value,
      url: event.target.url.value,
    }

    if (link.title == "" || link.url == "") {
      alert("Preencha todos os campos")
    } else {
      await api.updateLink(link, link._id);
      getLink()
      handleModal();
    }
  }

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div className="Home">
      <div className="card-list">
        {cavaleiroList.map((item, index) => {
          return (
            <button
              className="button-card"
              onClick={() => {
                setUniqueCavaleiro(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                key={index}
                nome={item.nome}
                constelacao={item.constelacao}
                categoria={item.categoria}
                tecnica={item.tecnica}
                idade={item.idade}
              />
            </button>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card details"
      >
        {editCavaleiro ? (
          <>
            (<div className="form-update">
              <form onSubmit={updateOneCavaleiro} className="form-inputs-update">
                <section>
                  <span>Id: </span>
                  <input className="form-id-update"
                    disabled
                    type="text"
                    name="_id"
                    defaultValue={uniqueCavaleiro._id}
                  ></input>
                </section>
                <section>
                  <span>Nome: </span>
                  <input className="form-nome-update"
                    type="text"
                    name="nome"
                    defaultValue={uniqueCavaleiro.nome}
                  ></input>
                </section>
                <section>
                  <span>Constelação: </span>
                  <input className="form-constelacao-update"
                    type="text"
                    name="constelacao"
                    defaultValue={uniqueCavaleiro.constelacao}
                  ></input>
                </section>
                <section>
                  <span>Categoria: </span>
                  <input className="form-categoria-update"
                    type="text"
                    name="categoria"
                    defaultValue={uniqueCavaleiro.categoria}
                  ></input>
                </section>
                <section>
                  <span>Tecnica: </span>
                  <input className="form-tecnica-update"
                    type="text"
                    name="tecnica"
                    defaultValue={uniqueCavaleiro.tecnica}
                  ></input>
                </section>
                <section>
                  <span>Idade: </span>
                  <input className="form-idade-update"
                    type="number"
                    name="idade"
                    defaultValue={uniqueCavaleiro.idade}
                  ></input>
                </section><br />
                <button type="submit-update" className="btn-submit-update">
                  Editar
                </button>
              </form>
            </div>
            )
          </>
        ) : (
          <>
            <section>
              <section
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onClick={handleModal}
                >
                  <CgClose size={28} color="red" />
                </button>
              </section>
              <section className='modal-personagem'>
                <h2>Nome: {uniqueCavaleiro.nome}</h2>
                <h3>Constelação: {uniqueCavaleiro.constelacao}</h3>
                <h3>Categoria: {uniqueCavaleiro.categoria}</h3>
                <h3>Tecnica: {uniqueCavaleiro.tecnica}</h3>
                <h3>Idade: {uniqueCavaleiro.idade}</h3>
              </section>
            </section><br />
            <button className="btn-update"
              onClick={() => {
                setEditCavaleiro(true);

              }}
            >
              Editar
            </button><br />
            <button className='btn-delete'
              onClick={() => {
                deleteCavaleiro(uniqueCavaleiro._id, uniqueCavaleiro.nome);
              }}
            >
              Delete Cavaleiro
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}