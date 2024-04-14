const noteForm = document.getElementById('noteForm');
const noteList = document.getElementById('noteList');

// Function menambah catatan
function createNote() {
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;

  if (title && content) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <button class="delete-btn">Delete</button>
    `;

    noteList.appendChild(note);

    // Reset form fields setelah meambahkan note
    noteForm.reset();
  }
}

// Function menghapus note
function deleteNote(event) {
  if (event.target.classList.contains('delete-btn')) {
    const note = event.target.parentElement;
    note.remove();
  }
}

// Event listener untuk pengiriman form
noteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  createNote();
});

// Event listener untuk tombol hapus
noteList.addEventListener('click', deleteNote);
