<script>
  import { createEventDispatcher } from 'svelte';

  export let id;
  export let text;
  export let title;
  export let color;

  const dispatch = createEventDispatcher();

  function handleDispatchColor() {
    dispatch('color', { id });
  }

  function hanldeDispatchDelete() {
    dispatch('remove', { id });
  }
</script>

<div class="note-item">
  <div class="note-container" style="background-color: {color}">
    <div class="note-header">
      <div class="header-options">
        <button on:click="{handleDispatchColor}">
          <span class="material-symbols-outlined"> palette </span>
        </button>
        <button on:click="{hanldeDispatchDelete}">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </div>
    </div>

    <div class="note-content">
      <div class="content-title">
        <input type="text" name="title-input" placeholder="Draft" bind:value="{title}" />
      </div>
      <div class="content-text">
        <textarea
          name="text-input"
          placeholder="Here start a new story..."
          bind:value="{text}"></textarea>
      </div>
    </div>
  </div>
</div>

<style>
  .note-item {
    background-color: white;
    border-radius: 3px;
    border: solid 2px transparent;
    overflow: 400px;
  }

  .note-item:focus-within {
    border: solid 2px #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .note-item .note-container {
    height: 100%;
  }

  .note-item .note-container .note-header {
    padding: 5px;
  }

  .note-header .header-options {
    display: flex;
    justify-content: space-between;
  }

  .header-options button {
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .note-item .note-container .note-content {
    padding: 0 20px;
  }

  .note-content .content-title input {
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0;
    outline: none;
    border: none;
    width: 100%;
  }

  .note-content .content-text textarea {
    width: 100%;
    border: 0;
    outline: none;
    resize: none;
    height: 250px;
  }

  input,
  textarea {
    background: transparent;
  }
</style>
