const buttonAdd = document.getElementById("add-button");

buttonAdd.addEventListener("click", () => {
    const nameProduct = document.getElementById("itemInput");
    const inputValue = nameProduct.value.trim();

    if (inputValue === "") {
        return alert("Favor incluir um nome válido para o item");
    }

    // Criando uma div para adicionar os novos itens
    const itensAdd = document.createElement("div");
    itensAdd.classList.add("newItens");

    // Criar a "div checkbox" no lugar do <input>
    const checkbox = document.createElement("div");
    checkbox.classList.add("check");

    // Adicionar evento de clique para alternar a seleção
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("selected");
    });

    // Criar o input para adicionar o nome do produto
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = inputValue;
    textInput.readOnly = true;
    textInput.classList.add("textInput");

    // Criar o ícone para excluir o produto
    const trashIcon = document.createElement("img");
    trashIcon.src = "assets/icons/trash.svg";
    trashIcon.classList.add("remove-item");

    trashIcon.addEventListener("click", () => {
        itensAdd.remove();

        const alertRemove = document.createElement("div");
        alertRemove.classList.add("alertRemoveItens");

        const iconAlert = document.createElement("img");
        iconAlert.src = "assets/icons/alert.svg";
        iconAlert.classList.add("icon-remove");

        const textAlert = document.createElement("span");
        textAlert.textContent = "O item foi removido da lista";
        textAlert.classList.add("text-alert");

        const iconClose = document.createElement("img");
        iconClose.src = "assets/icons/close.svg";
        iconClose.classList.add("icon-close");

        iconClose.addEventListener("click", () => {
            alertRemove.remove();
        });

        alertRemove.appendChild(iconAlert);
        alertRemove.appendChild(textAlert);
        alertRemove.appendChild(iconClose);

        document.getElementById("alertRemoveItem").appendChild(alertRemove);
    });

    // Adicionar os elementos na div "itensAdd"
    itensAdd.appendChild(checkbox);
    itensAdd.appendChild(textInput);
    itensAdd.appendChild(trashIcon);

    document.getElementById("product-add").appendChild(itensAdd);

    // Limpar input após adicionar item
    nameProduct.value = "";
});
