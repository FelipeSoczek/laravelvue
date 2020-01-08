// aqui importa o componente

import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import Example2 from "./components/Example2";



//aqui fica as rotas do vue

const routes = [
    {
        path: "/",
        // component é um objeto q pode ser renderizado pelo vue
        component: Bookables,
        name: "home",
    },
    {
        path: "/second",
        // component é um objeto q pode ser renderizado pelo vue
        component: Example2,
        name: "second",
    },
];

const router = new VueRouter({
    routes, //short for `route: routes`
    mode: "history",
});

export default router;