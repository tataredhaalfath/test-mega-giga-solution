const { Penjualan,MasterBarang } = require("../models");

module.exports = {
  index: async (req, res) => {
    const dataBarang = await MasterBarang.findAll()
    const dataPenjualan = await Penjualan.findAll();
    return res.render("pages/penjualan", {
      layout: "layouts/main-layouts",
      msg: req.flash("msg"),
      warning: req.flash("warning"),
      dataPenjualan,
      dataBarang
    });
  },

  create: async (req, res) => {
    try {
      const barang = await MasterBarang.findByPk(req.body.kode_barang);
      if(!barang){
        req.flash("warning", "Data barang tidak ditemukan");
        return res.redirect("/penjualan");
      }
      await Penjualan.create(req.body);

      req.flash("msg", "Data penjualan berhasil ditambahkan");
      return res.redirect("/penjualan");
    } catch (error) {
      req.flash("warning", `Masukan data dengan sesuai ${error.message}`);
      return res.redirect("/penjualan");
    }
  },

  update: async (req, res) => {
    try {
      const id = req.body.id;

      const dataPenjualan = await Penjualan.findByPk(id);

      if (!dataPenjualan) {
        res.flash("warning", "Data barang tidak ditemukan");
        return res.redirect("/barang");
      }

      const barang = await MasterBarang.findByPk(req.body.kode_barang);
      if(!barang){
        req.flash("warning", "Data barang tidak ditemukan");
        return res.redirect("/penjualan");
      }
      
      await dataPenjualan.update(req.body);
      console.log(req.body)
      req.flash("msg", "Data penjualan berhasil di update");
      return res.redirect("/penjualan");
    } catch (error) {
      console.log(error.message);
      req.flash("warning", `Data penjualan tidak valid. ${error.message},`);
      return res.redirect("/penjualan");
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.body.id;
      const dataPenjualan = await Penjualan.findByPk(id);

      if (!dataPenjualan) {
        res.flash("warning", "Data penjualan tidak ditemukan");
        return res.redirect("/penjualan");
      }
      await dataPenjualan.destroy();
      req.flash("msg", "Data penjualan berhasil di dihapus");
      return res.redirect("/penjualan");
    } catch (error) {
      req.flash("warning", `Data penjualan tidak valid.`);
      return res.redirect("/penjualan");
    }
  },
};
