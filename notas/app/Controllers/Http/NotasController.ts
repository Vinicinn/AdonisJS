import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from 'App/Models/Nota'

export default class NotasController {
  public async index({}: HttpContextContract) {
    return Nota.all()
  }

  public async store({ request }: HttpContextContract) {
    let nota = request.body()
    await Nota.create(nota)
    return `Nota criada com sucesso!\n${JSON.stringify(nota)}`
  }

  public async show({ params }: HttpContextContract) {
    let id = params.id
    let row = await Nota.findBy("id",id)
    let titulo = row?.$getAttribute("titulo")
    let corpo = row?.$getAttribute("corpo")
    return `Mostando nota ${id}:\nTitulo: ${titulo}\nCorpo: ${corpo}`
  }

  public async update({ params }: HttpContextContract) {
    let id = params.id
    return `Nota ${id} atualizada`
  }

  public async destroy({  }: HttpContextContract) {
    Nota.truncate()
    return `Tabela removida`
  }
}
