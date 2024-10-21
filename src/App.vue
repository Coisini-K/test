<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import { HOME_PATH, ABOUT_PATH } from "@/constants/routes";

const homePath = computed(() => HOME_PATH);
const aboutPath = computed(() => ABOUT_PATH);
</script>

<template>
  <header>
    <nav>
      <RouterLink v-once :to="homePath" class="nav-link">Home</RouterLink>
      <RouterLink v-once :to="aboutPath" class="nav-link">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 100px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.nav-link {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav-link:first-of-type {
  border: 0;
}

.nav-link.router-link-exact-active {
  color: var(--color-text);
}

.nav-link.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
