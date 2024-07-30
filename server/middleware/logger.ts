export default defineEventHandler((event) => {
    // Extends or modify the event
    event.context.user = { token: 'Bearer batabtatabtatbatbatbatbtbabtabtba' }
    console.log('hello from middleware', event.headers)
  })