$(document).ready(function() {
    // --- Lógica da Lista de Tarefas Interativa ---
    function addTask() {
        const taskText = $('#newTask').val().trim();
        if (taskText !== "") {
            const newTaskItem = $('<li>').text(taskText);
            const deleteSpan = $('<span class="delete-task">X</span>');
            newTaskItem.append(deleteSpan);
            $('#taskList').append(newTaskItem);
            $('#newTask').val('');
        } else {
            alert("Por favor, digite uma tarefa!");
        }
    }

    // Adicionar tarefa com botão
    $('#addTaskBtn').on('click', addTask);

    // Adicionar tarefa com Enter
    $('#newTask').on('keypress', function(e) {
        if (e.which === 13) { // 13 é o código da tecla Enter
            addTask();
        }
    });

    // Marcar/Desmarcar tarefa (delegação de evento)
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Excluir tarefa (delegação de evento)
    $('#taskList').on('click', '.delete-task', function(event) {
        event.stopPropagation(); // Impede que o clique no 'X' dispare o clique no 'li'
        $(this).parent('li').fadeOut(300, function() {
            $(this).remove();
        });
    });
});