<script>
  import Logo from './Logo.svelte';
  import Search from './Search.svelte';
  import Settings from './Settings.svelte';
</script>

<div class="header-notes">
  <Logo />
  <Search on:input />
  <Settings />
</div>

<style>
  .header-notes {
    border-bottom: solid 1px #ccc;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 10px;
  }
</style>
