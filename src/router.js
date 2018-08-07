import Router from 'vue-router'
import Vue from 'vue'
import Listar from './views/Listar.vue'
import Editar from './views/Editar.vue'

Vue.use(Router)
export default new Router({
    routes : [
        {
            path : '/', 
            component : Listar,
            meta : {title : 'Listar'}
        },
        {
            path : '/editar/:id', 
            component : Editar,
            meta : {title : 'Editar'}
        },
        {
            path : '/adicionar', 
            component : Editar,
            meta : {title : 'Adicionar'}
        }

    ]
})