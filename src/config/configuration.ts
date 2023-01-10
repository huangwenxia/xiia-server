export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        dialect: "mysql",
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER, //'root',
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        autoLoadModels: true,
        synchronize: true,
        dialectOptions: {
            dateStrings: true,
            typeCast(field, next) {
                // for reading from database
                if (field.type === "DATETIME") {
                    return field.string()
                }
                return next()
            }
        },
        define: {
            timestamps: true, // 是否自动创建时间字段， 默认会自动创建createdAt、updatedAt
            paranoid: false, // 是否自动创建deletedAt字段
            underscored: true, // 开启下划线命名方式，默认是驼峰命名
            freezeTableName: true, // 禁止修改表名
            charset: "utf8mb4"
        }
    },
    font_address: process.env.FRONT_ADDRESS
})
