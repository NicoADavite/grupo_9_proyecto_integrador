module.exports = (sequelize, DataTypes) => {

    let alias = 'UserCategories';

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };

    let config = {
        tableName: 'products_categories',        
        timestamps: false
    };

    const UserCategory = sequelize.define(alias, cols, config)

    //Movie.associate = (models) => {
//
    //    Movie.belongsTo(models.Genres, {
    //        as: "genre",
    //        foreignKey: "genre_id"
    //    });
//
    //    Movie.belongsToMany(models.Actors, {
    //        as:"actors",
    //        through: "actor_movie",
    //        foreignKey: "movie_id",
    //        otherKey: "actor_id",
    //        timestamps: false
    //    })
//
    //}

    return UserCategory
}