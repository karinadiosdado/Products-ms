import { Controller, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common/dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

<<<<<<< HEAD
  /* @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  } */
  //!!Microservicios
=======
>>>>>>> maestra/validateProducts
  @MessagePattern({ cmd: 'createProduct' })
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
<<<<<<< HEAD

  /* @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    //return paginationDto;
    return this.productsService.findAll(paginationDto);
  } */

=======
>>>>>>> maestra/validateProducts
  @MessagePattern({ cmd: 'findAllProducts' })
  findAll(@Payload() paginationDto: PaginationDto) {
    //return paginationDto;
    return this.productsService.findAll(paginationDto);
  }
<<<<<<< HEAD

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
    } */
=======
>>>>>>> maestra/validateProducts
  @MessagePattern({ cmd: 'findOneProduct' })
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }
<<<<<<< HEAD

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
    } */
  @MessagePattern({ cmd: 'updateProduct' })
  update(
    //@Param('id') id: string, @Body() updateProductDto: UpdateProductDto
    @Payload() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

  /* @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  } */
=======
  @MessagePattern({ cmd: 'updateProduct' })
  update(@Payload() updateProductDto: UpdateProductDto) {
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

>>>>>>> maestra/validateProducts
  @MessagePattern({ cmd: 'deleteProduct' })
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
<<<<<<< HEAD
=======
  @MessagePattern({ cmd: 'validateProducts' })
  validateProduct(@Payload() ids: number[]) {
    return this.productsService.validateProducts(ids);
  }
>>>>>>> maestra/validateProducts
}
