<script>
  import NoteItem from './NoteItem.svelte';
  import NoteDraft from './NoteDraft.svelte';

  export let notes;
</script>

<div class="dashboard">
  <div class="note-status">
    {notes.length} notes
  </div>
  <div class="dash-container">
    <NoteDraft on:click />
    {#each notes as { id, title, text, color }}
      <NoteItem
        id="{id}"
        color="{color}"
        bind:title
        bind:text
        on:update
        on:color
        on:remove
      />
    {/each}
  </div>
</div>

<style>
  .dashboard {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .dashboard .dash-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 10px;
  }

  .dashboard .note-status {
    padding: 20px 20px 0 20px;
    text-align: right;
  }
</style>
