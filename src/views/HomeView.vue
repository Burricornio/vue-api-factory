<template>
  <div class="home">
    <ListadoSeries v-bind="listadoProps" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ListadoSeries from '@/components/ListadoSeries.vue'
import { to, from, next } from '../models/RouterHelpers'
import { ListadoService } from '../services/ListadoService'
// TODO: Spinner Decoradores
// import { Spinner } from '../decorators/Spinner';

@Component({
  components: {
    ListadoSeries
  }
})
export default class HomeView extends Vue {
  get listadoProps() {
    return {
      titulo: this.titulo,
      listado: this.listado
    }
  }

  public titulo = 'Listado de series'
  public listado = []
  public async beforeRouteEnter(_to: to, _from: from, next: next<HomeView>) {
    const data = await new ListadoService().obtenerListado('superman')

    next(vm => {
      vm.listado = data
    })
  }
}
</script>
