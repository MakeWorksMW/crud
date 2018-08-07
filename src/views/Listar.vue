<template>
    <v-container>
        <v-list>
          <v-list-tile v-for="(item, i) in itens" :key="item.title">
          <v-list-tile-action>
              <v-checkbox @change="salvaredicao(i, item)" v-model="item.completo" ></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.completo?"Completo":"Não completo"}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon :to="'/editar/' + i"><v-icon>edit</v-icon></v-btn>
            </v-list-tile-action><v-list-tile-action>
              <v-btn icon @click='remover(i)'><v-icon color="red">delete</v-icon></v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
    </v-container>
</template>
<script>
    export default {
        data(){
            return {
                itens : JSON.parse(localStorage.getItem("tarefas") || "[]")
            }
        },
        methods : {
            remover(index){
                this.itens.splice(index, 1)
                localStorage.setItem("tarefas", JSON.stringify(this.itens))
            },
            salvaredicao(index, item){
                this.itens.splice(index, 1, item)
                localStorage.setItem("tarefas", JSON.stringify(this.itens))
            }
        }
    }
</script>