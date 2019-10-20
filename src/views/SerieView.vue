<template>
  <div class="about">
    <h1>Serieeeeeeeee</h1>
    {{ listado }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { to, from, next } from '../models/RouterHelpers'
import { ListadoService } from '../services/ListadoService';

@Component
export default class SerieView extends Vue {

  listado = []

  public async beforeRouteEnter(_to: to, _from: from, next: next<SerieView>) {
    const data = await new ListadoService().obtenerListado('batman')

    next(vm => {
      vm.listado = this.listado
    })
  }
}
</script>

