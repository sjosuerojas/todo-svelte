<div class="search-form">
  <div class="search-form-div">
    <label for="search-box" class="search-form-tag">Search</label>
    <input
      id="search-box"
      type="text"
      class="search-form-input"
      name="search"
      placeholder="Start typing..."
      on:input
    />
  </div>
</div>

<style>
  .search-form-div {
    position: relative;
    margin-bottom: 2rem;
    height: 4rem;
  }

  .search-form-tag {
    position: absolute;
    top: -0.75rem;
    left: 1.25rem;
    font-size: 0.813rem;
    padding: 0.25rem;
    background-color: white;
    z-index: 10;
  }

  .search-form-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #888b91;
    background: none;
    color: #babec4;
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    z-index: 1;
  }

  @media screen and (min-width: 576px) {
    .search-form {
      width: 360px;
      margin: 0 auto;
    }
  }
</style>
