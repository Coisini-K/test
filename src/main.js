//src/main.js
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

/* import specific icons */
// import { all } from '@awesome.me/kit-KIT_CODE/icons'
// import { findIconDefinition } from '@fortawesome/fontawesome - svg - core'
// const glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* add icons to the library */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faUserSecret);
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
app.component('font-awesome-icon', FontAwesomeIcon);

/* use icons
<font-awesome-icon :icon="['fas', 'house']" />
*/

app.use(createPinia());
app.use(router);

app.mount('#app');
