<template>
  <section>
    <h1>{{ titulo }}</h1>
    <div v-for="(serie, index) in listado" :key="index" class="serie" @click="verSerie(serie.show.id)">
      <h3>{{ serie.show.name }}</h3>
      <img :src="serie.show.image.medium" />
      <div v-html="serie.show.summary"></div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ListadoSeries extends Vue {
  @Prop() titulo!: string
  @Prop() listado!: string[]

  public verSerie(id) {
    this.$router.push({ name: 'serie', params: { id: id} })
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.serie {
  border: 2px solid black;
  margin: 30px 2px;
  padding: 5px 20px;
}
</style>
