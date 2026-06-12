import type { OrderBy, OrderDirection } from 'src/orders/dto/order.interface';

import {
  OrderByList,
  OrdersStatus,
  OrderStatusList,
  OrderDirectionList,
} from 'src/orders/dto/order.interface';
import { PaginationDto } from './pagination.dto';
import { IsIn, IsOptional } from 'class-validator';

export class PaginationOrderDto extends PaginationDto {
  @IsIn(OrderStatusList)
  @IsOptional()
  status?: OrdersStatus;

  @IsIn(OrderByList)
  @IsOptional()
  orderby?: OrderBy;

  @IsIn(OrderDirectionList)
  @IsOptional()
  orderDirection?: OrderDirection;
}
