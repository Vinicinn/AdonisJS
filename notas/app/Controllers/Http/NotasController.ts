import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from 'App/Models/Nota'

export default class NotasController {
  
  public async index({}: HttpContextContract) {
    return Nota.all()
  }
  
  public async store({ request }: HttpContextContract) {
    let body = request.body()
    let nota = await Nota.create(body)
    return `Nota ${nota.titulo} criada com sucesso!`
  }
  
  public async show({ params }: HttpContextContract) {
    let id = params.id
    let nota = await Nota.findByOrFail('id',id)
    return nota
  }

  public async update({ params, request }: HttpContextContract) {
    let id = params.id
    let body = request.body()
    let nota = await Nota.findByOrFail('id',id)
    if (body.corpo != null) {
      nota.corpo = body.corpo
    }
    if (body.titulo != null) {
      nota.titulo = body.titulo
    }
    nota.save()
    return nota
  }

  public async destroy({ params }: HttpContextContract) {
    let id = params.id
    let nota = await Nota.findByOrFail('id',id)
    nota.delete()
    return `nota ${nota} removida`
  }
}
