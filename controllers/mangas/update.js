import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let { id } = req.params;
    let one = await Manga.findByIdAndUpdate(id, req.body, { new: true })
      .select("title cover_photo")
      .populate("category_id", "name color hover -_id");
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
