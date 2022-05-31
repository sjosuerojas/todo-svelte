<script>
  import { darkMode } from '../store/store';

  const handleDarkMode = () => darkMode.update(darkMode => !darkMode);
</script>

<div class="settings">
  <div class="{$darkMode ? 'settings-container on' : 'settings-container'}">
    <button class="circle" on:click="{handleDarkMode}"></button>
  </div>
</div>

<style>
  .settings-container {
    background-color: #ccc;
    width: 50px;
    height: 25px;
    border-radius: 30px;
    margin: 0 10px;
  }

  .settings-container .circle {
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .on .circle {
    margin-left: 25px;
  }

  .on {
    background-color: rgba(9, 21, 129, 0.918);
  }
</style>
