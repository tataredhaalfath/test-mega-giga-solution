module.exports = (sequelize, DataTypes) => {
  const MasterBarang = sequelize.define(
    "MasterBarang",
    {
      kode_barang: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga_jual: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      harga_beli: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      satuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kategory: {
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
      tableName: "master_barang",
      timestamp: true,
    }
  );
  return MasterBarang
};
