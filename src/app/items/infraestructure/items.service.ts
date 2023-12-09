import { ResItem, ResItems } from "../domain/items";
import { ItemsRepository } from "../domain/items.repository";

export class ItemsService implements ItemsRepository {

    private apiBasePath = process.env.API_BASE_PATH;

    async getAllItems(query: string): Promise<ResItems> {
        const response = await fetch(`${this.apiBasePath}/items?q=${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return Promise.resolve(await response.json());
    }

    async getItemDetail(id: string): Promise<ResItem> {
        const response = await fetch(`${this.apiBasePath}/items/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return Promise.resolve(await response.json());
    }
}