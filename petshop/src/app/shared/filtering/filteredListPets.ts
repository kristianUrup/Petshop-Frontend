import {Pet} from "../models/pet";

export interface FilteredListPets {
  list: Pet[];
  count: number;
}
