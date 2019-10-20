import Component from 'vue-class-component'

// Registra los hooks del router con su nombre
Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])
