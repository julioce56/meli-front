import { ItemNotFound, ResItem, ResItems } from "../domain/items";
import { ItemsRepository } from "../domain/items.repository";

export class ItemsManagement {
  constructor(private readonly itemsRepository: ItemsRepository) {
    this.itemsRepository = itemsRepository;
  }

  async getAllItems(query: string): Promise<ResItems> {
    return (await this.itemsRepository.getAllItems(query)) as ResItems;
  }

  async getItemDetail(id: string): Promise<ResItem | ItemNotFound> {
    const resp = await this.itemsRepository.getItemDetail(id);
    if ((resp as ItemNotFound).message) {
      return resp as ItemNotFound;
    } else {
      return resp as ResItem;
    }
  }
}
