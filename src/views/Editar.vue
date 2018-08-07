<template>
    <v-container>
        <v-form lazy-validation>
            <v-card>
            <v-card-title>
                <h1 class="title"> {{$route.params.id >= 0 ? "Editar tarefa" : "Adicionar tarefa"}}</h1>
            </v-card-title>
                <v-card-text>    
                    <v-text-field v-model="form.title" label="Tarefa a ser feita"/>
                    <v-checkbox v-model="form.completo" label="Completo"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="salvar" color="primary"> Salvar </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
        form : {
            title : "",
            completo : false,
            }
        }
    },
    mounted(){
        if(this.$route.params.id){
            const items = JSON.parse(localStorage.getItem("tarefas") || "[]")
            this.form = items[this.$route.params.id]
        }
    },
    methods : {
        salvar(){
            if(this.$route.params.id){
                return this.editar()
            }
            const items = JSON.parse(localStorage.getItem("tarefas") || "[]")
            items.push(this.form)
            localStorage.setItem("tarefas", JSON.stringify(items))
            this.form.title = ""
            this.form.completo = false
            this.$router.push("/")            
        },
        editar(){
            const items = JSON.parse(localStorage.getItem("tarefas") || "[]")
            const item = items[this.$route.params.id]
            if(item){
                item.title = this.form.title
                item.completo = this.form.completo
                localStorage.setItem("tarefas", JSON.stringify(items))
            }
            this.form.title = ""
            this.form.completo = false
            this.$router.push("/")       
        }
    }
}
</script>