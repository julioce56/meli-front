export interface IRepository<T> {
    getAllItems(query: string): Promise<T>;
    getItemDetail(id: string): Promise<T>;
}