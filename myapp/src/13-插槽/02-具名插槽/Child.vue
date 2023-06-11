<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header {
  height: 100px;
}
footer {
  height: 100px;
}
main {
  flex: 1;
}
</style>
