export class ResponseEntity<T> {
  success = true;
  code = 200;
  data = null;
  pagination?: PaginationInterface;
  message: string = null;

  constructor(data?: T, message?: string, pagination?: PaginationInterface) {
    this.data = data;
    this.message = message;
    this.pagination = pagination;
  }
  ok(data: T, message?: string, pagination?: PaginationInterface) {
    this.data = data;
    this.pagination = pagination;
    this.message = message;

    return this;
  }
}

export interface PaginationInterface {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  size: number;
}
