(function () {
  const nodesToObserve = document.querySelectorAll(".live-code");

  nodesToObserve.forEach((node, index) => {
    const title = document.createElement("p");
    title.innerText = node.dataset.name ?? "Code " + (index + 1);
    document.body.appendChild(title);

    const codeContainer = document.createElement("div");
    codeContainer.style.border = "1px solid black";
    document.body.appendChild(codeContainer);

    new MutationObserver(() => {
      codeContainer.innerText = node.innerHTML;
    }).observe(node, { subtree: true, childList: true });
  });
})();

//ajouter live-code a table signature classe
