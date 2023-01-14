module.exports = (sequelize, DataTypes) => {
  const Penjualan = sequelize.define(
    "Penjualan",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tgl_faktur: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      no_faktur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama_konsumen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kode_barang: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      harga_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "penjualan",
      timestamp: true,
    }
  );
  return Penjualan;
};
