import * as z from 'zod';
import './chunks/_astro_actions_Ct23AFVF.mjs';
import { g as getCollection } from './chunks/_astro_content_crH65Uy_.mjs';
import { d as defineAction } from './chunks/server_QTKy4bZZ.mjs';

const categories = {
  getCategories: defineAction({
    input: z.null(),
    handler: async () => {
      const allArticles = await getCollection("articles");
      const categories2 = [
        ...new Set(allArticles.map((article) => article.data.category))
      ];
      return { success: true, categories: categories2 };
    }
  }),
  filterByCategory: defineAction({
    input: z.object({
      category: z.string()
    }),
    handler: async ({ category }) => {
      const articles = [];
      const allArticles = await getCollection("articles");
      if (category === "all") {
        articles.push(...allArticles);
        return { success: true, articles };
      }
      const filteredArticles = allArticles.filter((article) => article.data.category.toLowerCase() === category.toLowerCase());
      articles.push(...filteredArticles);
      return { success: true, articles };
    }
  })
};

const server = { categories };

export { server };
