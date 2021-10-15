import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
const products: Product[] = [];

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    const newProduct = new Product(createProductDto.name);
    products.push(newProduct); 
    return newProduct;
  }

  findAll() {
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
