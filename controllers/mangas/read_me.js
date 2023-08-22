import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let query = {};
    req.author && (query.author_id = req.author._id);
    req.company && (query.company_id = req.company._id);
    let mangas = await Manga.find(query, "title cover_photo")
      .populate("category_id", "name color hover -_id")
      .sort({ title: 1 });
    let mangas_by_categories = {};
    for (let each of mangas) {
      if (mangas_by_categories[each.category_id.name]) {
        mangas_by_categories[each.category_id.name].push(each);
      } else {
        mangas_by_categories[each.category_id.name] = [each];
      }
    }
    return res.status(200).json({
      success: true,
      response: mangas_by_categories,
    });
  } catch (error) {
    next(error);
  }
};
