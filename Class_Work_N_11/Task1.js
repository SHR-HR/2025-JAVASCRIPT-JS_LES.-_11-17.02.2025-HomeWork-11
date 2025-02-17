console.log("=== Работа в классе №11: Массивы ===");

// ====================
// 1. Работа в классе.
// ====================

// Задача

// Создайте на странице несколько заметок (id, text author, date) через класс.
// Положите всё в массив. Выведете результат. Также, например у одной заметки
// добавьте новый ключ, а других удалите. При показывании напишете проверку
// через тернарный оператор (есть ли значения).



// === Класс для заметки ===
class Note {
    constructor(id, text, author, date) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.date = date;
    }
}




// === Массив заметок ===
let notes = [
    new Note(1, "Купить молоко", "Александра", "2025-02-17"),
    new Note(2, "Сделать дз по JS", "Мария", "2025-02-18"),
    new Note(3, "Записаться к стоматологу", "Роман", "2025-02-19"),
];




// === Добавляем новый ключ в одну заметку ===
notes[0].category = "Покупки";  // Добавляем новое поле в первую заметку



// === Удаляем ключи из других заметок ===
delete notes[1].author;  // Удаляем автора из второй заметки
delete notes[2].date;    // Удаляем дату из третьей заметки



// === Функция для вывода заметок на страницу ===
function displayNotes() {
    let notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = ""; // Очищаем контейнер

    notes.forEach(note => {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");

        noteElement.innerHTML = `
            <p><strong>ID:</strong> ${note.id}</p>
            <p><strong>Текст:</strong> ${note.text}</p>
            <p><strong>Автор:</strong> ${note.author ? note.author : "❌ Нет данных"}</p>
            <p><strong>Дата:</strong> ${note.date ? note.date : "❌ Нет даты"}</p>
            <p><strong>Категория:</strong> ${note.category ? note.category : "❌ Нет категории"}</p>
        `;

        notesContainer.appendChild(noteElement);
    });
}



// === Запускаем отображение ===
displayNotes();
