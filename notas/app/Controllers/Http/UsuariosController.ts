import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
  public async index({}: HttpContextContract) {
    return Usuario.all()
  }

  public async store({ request }: HttpContextContract) {
    let body = request.body()
    let user = await Usuario.create(body)
    return `Usuario Criado: ${user.name}`
  }

  public async show({ params }: HttpContextContract) {
    let id = params.id
    let user = await Usuario.findByOrFail('id', id)
    return `Usuario Encontrado: ${user.name}`
  }

  public async update({ params, request }: HttpContextContract) {
    let id = params.id
    let body = request.body()
    let user = await Usuario.findByOrFail('id', id)
    if (body.name) {
      user.name = body.name
    }
    if (body.cpf) {
      user.cpf = body.cpf
    }
    if (body.passwd) {
      user.passwd = body.passwd
    }
    if (body.passwdconfirm) {
      user.passwdconfirm = body.passwdconfirm
    }
    user.save()
    return `Usuario atualizado!`
  }

  public async destroy({ params }: HttpContextContract) {
    let id = params.id
    let user = await Usuario.findByOrFail('id', id)
    user.delete()
    return 'Usuario removido'
  }
}
