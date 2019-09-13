const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createAt: { // Tabela a ser preenchida automaticamente
    type: Date,
    default: Date.now,
  }
})

ProductSchema.plugin(mongoosePaginate) // paginação com mongoose

mongoose.model('Product', ProductSchema)// registrar o model na aplicação