import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    let queries = {}
    req.query.manga_id && (queries.manga_id=req.query.manga_id)
    req.query.order && (queries.order=req.query.order)
    let one = await Chapter.findOneAndUpdate(queries, req.body, {
      new: true,
    }).select("-createdAt -updatedAt -__v");
    if (one) {
      return res.status(200).json({
        success: true,
        response: one,
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
