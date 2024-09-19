$(document).ready(function() {
    $('#button-add-tarefa').click(function() {
        let tarefaTexto = $('#input-nova-tarefa').val().trim();

        if (tarefaTexto) {
            let novaTarefa = `
                <li>
                    <span class="texto-tarefa">${tarefaTexto}</span>
                    <div>
                        <button class="button-acao editar-tarefa">
                            <i class="fa fa-pencil"></i>
                        </button>
                        <button class="button-acao remover-tarefa">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            `;
            $('#lista-de-tarefas').append(novaTarefa);
            $('#input-nova-tarefa').val('');
        }
    });

    $(document).on('click', '.texto-tarefa', function() {
        $(this).toggleClass('tarefa-concluida');
    });

    $(document).on('click', '.remover-tarefa', function() {
        $(this).closest('li').remove();
    });

    $(document).on('click', '.editar-tarefa', function() {
        let tarefaItem = $(this).closest('li');
        let tarefaTexto = tarefaItem.find('.texto-tarefa').text();
        let novoTexto = prompt("Edite a tarefa:", tarefaTexto);

        if (novoTexto && novoTexto.trim()) {
            tarefaItem.find('.texto-tarefa').text(novoTexto.trim());
        }
    });

    $('#input-nova-tarefa').keypress(function(event) {
        if (event.which == 13) {
            $('#button-add-tarefa').click();
        }
    });
});