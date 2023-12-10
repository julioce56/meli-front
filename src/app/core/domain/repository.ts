export interface IRepository<T, Y> {
  getAllItems(query: string): Promise<T>;
  getItemDetail(id: string): Promise<T | Y>;
}
