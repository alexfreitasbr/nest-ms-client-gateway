import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { OrdersStatus, OrderStatusList } from './order.interface';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsInt()
  @IsNumber()
  @IsPositive()
  items: number;

  @IsIn(OrderStatusList)
  @IsOptional()
  status?: OrdersStatus;
}
