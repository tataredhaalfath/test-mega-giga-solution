const { MasterBarang } = require("../models");

module.exports = {
  index: async (req, res) => {
    const dataBarang = await MasterBarang.findAll();
    return res.render("pages/barang", {
      layout: "layouts/main-layouts",
      msg: req.flash("msg"),
      warning: req.flash("warning"),
      dataBarang,
    });
  },

  create: async (req, res) => {
    try {
      const data = {
        nama_barang: req.body.nama_barang,
        harga_jual: req.body.harga_jual,
        harga_beli: req.body.harga_beli,
        satuan: req.body.satuan,
        kategory: req.body.kategory,
      };

      await MasterBarang.create(data);

      req.flash("msg", "Data barang berhasil ditambahkan");
      return res.redirect("/barang");
    } catch (error) {
      req.flash("warning", "Masukan data dengan sesuai");
      return res.redirect("/barang");
    }
  },

  update: async (req, res) => {
    try {
      const kodeBarang = req.body.kode_barang;

      const dataBarang = await MasterBarang.findByPk(kodeBarang);

      if (!dataBarang) {
        res.flash("warning", "Data barang tidak ditemukan");
        return res.redirect("/barang");
      }

      const data = {
        nama_barang: req.body.nama_barang,
        harga_jual: req.body.harga_jual,
        harga_beli: req.body.harga_beli,
        satuan: req.body.satuan,
        kategory: req.body.kategory,
      };

      await dataBarang.update(data);
      req.flash("msg", "Data barang berhasil di update");
      return res.redirect("/barang");
    } catch (error) {
      console.log(error.message);
      req.flash("warning", `Data barang tidak valid. ${error.message},`);
      return res.redirect("/barang");
    }
  },

  delete: async (req, res) => {
    try {
      const kodeBarang = req.body.kode_barang;
      const dataBarang = await MasterBarang.findByPk(kodeBarang);

      if (!dataBarang) {
        res.flash("warning", "Data barang tidak ditemukan");
        return res.redirect("/barang");
      }
      await dataBarang.destroy();
      req.flash("msg", "Data barang berhasil di dihapus");
      return res.redirect("/barang");
    } catch (error) {
      req.flash("warning", `Data barang tidak valid.`);
      return res.redirect("/barang");
    }
  },
};
