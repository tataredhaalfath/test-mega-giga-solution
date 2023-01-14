"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("penjualan", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tgl_faktur: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      no_faktur:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      nama_konsumen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kode_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("penjualan",{
      type:"foreign key",
      name:"PENJUALAN_BARANG",
      fields:["kode_barang"],
      references:{
        table:"master_barang",
        field:"kode_barang"
      }
    })
  },

  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("penjualan");
  },
};
