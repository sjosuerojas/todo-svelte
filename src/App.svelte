<script>
  import Header from './shared/Header.svelte';
  import Dashboard from './components/Dashboard.svelte';
  import { darkMode } from './store/store';
  import { v4 } from 'uuid';

  let notes = [];
  let cloneNotes = [];

  function generateColor() {
    const pastelColours = [
      '#DDFFC2',
      '#FFC2C2',
      '#FFEAC2',
      '#C2FFD3',
      '#C2FFEC',
      '#C2FAFF',
      '#C2E2FF',
      '#CBC2FF',
      '#EBC2FF',
      '#FFC2F7',
      '#FFC2D8',
    ];
    const getRandomIndex = Math.floor(Math.random() * pastelColours.length);

    return pastelColours[getRandomIndex];
  }

  function handleNewNote() {
    const color = generateColor();
    const id = v4();

    const note = {
      id,
      color,
      title: '',
      text: '',
    };

    notes = [note, ...notes];
    cloneNotes = [...notes];
  }

  function handleUpdateProps(e) {
    const note = e.detail;
    const inputIndex = notes.findIndex(n => n.id === note.id);

    notes[inputIndex] = note;
  }

  function handleChangeColor(e) {
    const note = e.detail;
    const noteIndex = notes.findIndex(n => n.id === note.id);
    notes[noteIndex].color = generateColor();
    cloneNotes[noteIndex].color = generateColor();
  }

  function handleDelete(e) {
    const note = e.detail;
    const filteredNotes = notes.filter(n => n.id !== note.id);
    notes = [...filteredNotes];
    cloneNotes = [...notes];
  }

  function handleSearch(e) {
    const queryTerm = e.target.value.toLowerCase();

    if (queryTerm !== '') {
      const results = notes.filter(note => {
        const title = note.title.toLowerCase();
        const text = note.text.toLowerCase();

        return title.indexOf(queryTerm) > -1 || text.indexOf(queryTerm) > -1;
      });

      cloneNotes = [...results];
    } else {
      cloneNotes = [...notes];
    }
  }
</script>

<main class="{$darkMode ? 'darkmode' : ''}">
  <Header on:input="{handleSearch}" />
  <Dashboard
    bind:notes="{cloneNotes}"
    on:click="{handleNewNote}"
    on:update="{handleUpdateProps}"
    on:color="{handleChangeColor}"
    on:remove="{handleDelete}"
  />
</main>

<style>
  :global(main.darkmode, main.darkmonde textarea, main.darkmonde input, main.darkmonde
      .search-form
      label) {
    background-color: #0d0d0d;
    color: #babec4;
    height: 100%;
    transition: 0.4s;
  }
</style>
