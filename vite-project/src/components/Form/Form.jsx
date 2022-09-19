import { useState } from "react";
import { api } from "../../utils/api/api";
import "./Form.css"

export function Form() {
  const [newLink, setNewLink] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    setNewLink({ ...newLink });
    var qtdForm = 0;
    var key
    for (key in newLink) {
      if (newLink.hasOwnProperty(key)) {
        qtdForm++;
      }
    }

    if (newLink.title == "" || newLink.url == "" || qtdForm < 2) {
      alert("Preencha todos os campos")
    } else {
      await api.createLink(newLink);
      location.reload();
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Título: </span>
          <input className='form-title'
            type="text"
            name="title"
            onChange={(event) => {
              setNewLink({ ...newLink, title: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Url: </span>
          <input className='form-url'
            type="text"
            name="url"
            onChange={(event) => {
              setNewLink({ ...newLink, url: event.target.value });
            }}
          ></input>

        </section><br />
        <button type="submit" className="btn-submit">
          ADICIONAR
        </button>
      </form>
    </div>
  );
}