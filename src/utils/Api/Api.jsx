const linksHelper = {
  linkEndPoint: () => `${defaultUrl}`,
  linkGetAll: () => `${linksHelper.linkEndPoint()}/`,
  linkCreate: () => `${linksHelper.linkEndPoint()}/create`,
  linkUpdate: (id) => `${linksHelper.linkEndPoint()}/update/${id}`,
  linkDelete: (id) => `${linksHelper.linkEndPoint()}/delete/${id}`,
}

const defaultUrl = "https://api-links-tech.herokuapp.com/links";

export const api = {

  createLink: async (link) => {
    const response = await fetch(linksHelper.linkCreate(), {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(link),
    });
    const newLink = await response.json();
    return newLink;
  },

  getAllLinks: async () => {
    const response = await fetch(linksHelper.linkGetAll());
    const allLinks = await response.json();
    return allLinks;
  },

  updateLink: async (linkUpdate, id) => {
    const response = await fetch(linksHelper.linkUpdate(id), {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(linkUpdate),
    });
    const linkUpdated = await response.json();
    return linkUpdated
  },

  deleteLink: async (linkId) => {
    const response = await fetch(linksHelper.linkDelete(linkId), {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const linkDeleted = await response.json();
    return linkDeleted;
  },
};

