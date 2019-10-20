import { http } from '@/http'

export class ListadoService {
  constructor() {}

  public async obtenerListado(personaje: string) {
    const { data } = await http.get(`http://api.tvmaze.com/search/shows?q=${personaje}`)
    return data
  }
}
