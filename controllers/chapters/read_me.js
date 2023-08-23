import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    req.query.manga_id && (queries.manga_id = req.query.manga_id);
    let all = await Chapter.find(queries, "-createdAt -updatedAt -__v").sort({
      order: 1,
    });
    if (all.length > 0) {
      return res.status(200).json({
        success: true,
        response: all,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
