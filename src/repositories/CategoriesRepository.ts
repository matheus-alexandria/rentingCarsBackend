import ICreateCategoryDTO from '../DTOs/ICreateCategoryDTO';
import Category from '../model/Category';
import ICategoryRepository from './ICategoriesRepository';

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const newCategory: Category = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  all(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => {
      return category.name === name;
    });

    return category;
  }
}

export default CategoriesRepository;
