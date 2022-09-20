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
    width: "45rem",
    height: "25rem",
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
    setEditLink(!true)
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
        {linkList.map((item, index) => {
          return (
            <button
              className="button-card"
              onClick={() => {
                setUniqueLink(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                key={index}
                title={item.title}
                url={item.url}
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
        {editLink ? (
          <>
            <div className="form-update">
              <form onSubmit={updateOneLink} className="form-inputs-update">
                <section>
                  <span>Id: </span>
                  <input className="form-id-update"
                    disabled
                    type="text"
                    name="_id"
                    defaultValue={uniqueLink._id}
                  ></input>
                </section>
                <section>
                  <span>Título: </span>
                  <input className="form-title-update"
                    type="text"
                    name="title"
                    defaultValue={uniqueLink.title}
                  ></input>
                </section>
                <section>
                  <span>Url: </span>
                  <input className="form-url-update"
                    type="text"
                    name="url"
                    defaultValue={uniqueLink.url}
                  ></input>

                </section><br />
                <button type="submit-update" className="btn-submit-update">
                  EDITAR ARTIGO
                </button>
              </form>
            </div>

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
              <section className='modal-link'>
                <h2>Título: {uniqueLink.title}</h2>
                <h3>Url: {uniqueLink.url}</h3><br />
                <button className='btn-visit'>
                  <a target="_blank" href={uniqueLink.url}>VISITAR ARTIGO</a>
                </button>
              </section>
            </section><br />
            <button className="btn-update"
              onClick={() => {
                setEditLink(true);

              }}
            >
              EDITAR ARTIGO
            </button><br />
            <button className='btn-delete'
              onClick={() => {
                deleteLink(uniqueLink._id);
              }}
            >
              DELETAR ARTIGO
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}