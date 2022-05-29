let CreateDivFunc = (type, className = undefined, id = undefined) => {
  const div = document.createElement(type);
  if (className) {
    className.split(",").forEach((cName) => {
      div.classList.add(cName);
    });
  }
  if (id) div.id = id;
  return div;

};

export default CreateDivFunc;
