import Codex from './codex.js';

const Error404 = {
  callback: async () => {
    return
  },
  render: async () => {
    const markup = /*html*/`
      <h1> 404 Error !</h1>
    `;
    Codex([markup], document.querySelector('main'));
  }
}

export default Error404;
