// aqui importa o componente

import ExampleComponent from "./components/ExampleComponent";
import VueRouter from "vue-router";
import Example2 from "./components/Example2";



//aqui fica as rotas do vue

const routes = [
    {
        path: "/",
        // component é um objeto q pode ser renderizado pelo vue
        component: ExampleComponent,
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