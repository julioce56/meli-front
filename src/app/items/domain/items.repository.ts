import { IRepository } from "@/app/core/domain/repository";
import { ResItem, ResItems } from "./items";

export interface ItemsRepository extends IRepository<ResItems | ResItem> {}
