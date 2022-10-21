//import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Nota extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo:string

  @column()
  public corpo:string
}
