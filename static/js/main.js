window.onload = () => {
  document.getElementById('main-nav').addEventListener('click', function() {
    document.getElementById('main-menu-box').checked = false;
  });

  const createMenu = () => {
    const elms = document.querySelectorAll('main > section');
    elms.forEach(el => {
      // console.log(el.getAttribute('name'));
      const newListItem = document.createElement('li');

      const link = document.createElement('a');
      link.appendChild(document.createTextNode(el.getAttribute('name')));
      link.href = '#'+el.getAttribute('id')
      newListItem.appendChild(link);
      document.querySelector('#main-nav').appendChild(newListItem);
    });
  }
  createMenu();

  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
};
