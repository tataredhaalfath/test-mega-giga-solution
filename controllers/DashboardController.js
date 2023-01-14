const { MasterBarang, Penjualan } = require("../models");

module.exports = {
  index: async (req, res) => {
    const dataBarang = await MasterBarang.count();
    const dataPenjualan = await Penjualan.count();

    return res.render("pages/dashboard", {
      layout: "layouts/main-layouts",
      dataBarang,
      dataPenjualan,
    });

  },
};
