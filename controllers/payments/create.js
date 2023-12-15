import mercadopago from "mercadopago";

export default async (req, res) => {
  mercadopago.configure({ access_token: process.env.MP_ACCESS_TOKEN });
  let preference = {
    items: [
      {
        title: "prod1",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 5,
      },
      {
        title: "prod1",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 10,
      },
    ],
    //items: req.body.products //array de productos que se deben pagar
  };
  const response = await mercadopago.preferences.create(preference);
  return res.status(201).redirect(response.body.init_point);
};
