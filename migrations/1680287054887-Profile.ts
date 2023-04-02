import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
    TableColumn,
    TableForeignKey,
    DataSource
} from "typeorm"

export class Profile1680287054887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "name", type: "varchar", isNullable: true},
                    {name: "email", type: "varchar", isNullable: true},
                    {name: "password", type: "varchar", isNullable: true},
                    {name: "phone", type: "varchar", isNullable: true},
                    {name: "photo", type: "varchar", isNullable: true},
                    {name: "status", type: "int", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "profiles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "address", type: "varchar", isNullable: true},
                    {name: "city", type: "varchar", isNullable: true},
                    {name: "country", type: "varchar", isNullable: true},
                    {name: "postal_code", type: "int", isNullable: true},
                    {name: "lat", type: "varchar", isNullable: true},
                    {name: "lon", type: "varchar", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "dogs",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "photo_1", type: "varchar", isNullable: true},
                    {name: "photo_2", type: "varchar", isNullable: true},
                    {name: "photo_3", type: "varchar", isNullable: true},
                    {name: "name", type: "varchar", isNullable: true},
                    {name: "race_id", type: "int", isNullable: true},
                    {name: "comments", type: "text", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "walks",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "address", type: "varchar", isNullable: true},
                    {name: "lat", type: "varchar", isNullable: true},
                    {name: "lon", type: "varchar", isNullable: true},
                    {name: "hour_from", type: "varchar", isNullable: true},
                    {name: "hour_to", type: "varchar", isNullable: true},
                    {name: "days", type: "varchar", isNullable: true},
                    {name: "date", type: "timestamp", isNullable: true},
                    {name: "repeat", type: "int", isNullable: true},
                    {name: "repeat_to", type: "int", isNullable: true},
                    {name: "status", type: "int", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "histories",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "walk_id", type: "int", isNullable: true},
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "walker_id", type: "int", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "punctuations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "type", type: "int", isNullable: true}, // 1 es paseador 2 es perro
                    {name: "punctuation", type: "int", isNullable: true},
                    {name: "comment", type: "text", isNullable: true},
                    {name: "dog_id", type: "int", isNullable: true},
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "walker_id", type: "int", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "rooms",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "history_id", type: "int", isNullable: true},
                    {name: "status", type: "int", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "room_to", type: "int", isNullable: true},
                    {name: "user_from", type: "int", isNullable: true},
                    {name: "user_to", type: "int", isNullable: true},
                    {name: "messages", type: "text", isNullable: true}
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "notifications",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "title", type: "varchar", isNullable: true},
                    {name: "message", type: "varchar", isNullable: true},
                    {name: "type", type: "varchar", isNullable: true},
                    {name: "info", type: "text", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "walk_id", type: "int", isNullable: true},
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "amount", type: "int", isNullable: true},
                    {name: "date", type: "timestamp", isNullable: true},
                    {name: "status", type: "int", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "cards",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "alias", type: "varchar", isNullable: true},
                    {name: "token", type: "varchar", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "races",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "name", type: "varchar", isNullable: true},
                    {name: "status", type: "int", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "bank_datas",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "name", type: "varchar", isNullable: true},
                    {name: "lastname", type: "varchar", isNullable: true},
                    {name: "iban", type: "varchar", isNullable: true},
                    {name: "address", type: "varchar", isNullable: true},
                    {name: "address_2", type: "varchar", isNullable: true},
                    {name: "postal_code", type: "varchar", isNullable: true},
                    {name: "city", type: "varchar", isNullable: true},
                ],
            }),
            true,
        )
        await queryRunner.createTable(
            new Table({
                name: "disponibilities",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {name: "user_id", type: "int", isNullable: true},
                    {name: "address", type: "varchar", isNullable: true},
                    {name: "lat", type: "varchar", isNullable: true},
                    {name: "lon", type: "varchar", isNullable: true},
                    {name: "hour_from", type: "varchar", isNullable: true},
                    {name: "hour_to", type: "varchar", isNullable: true},
                    {name: "days", type: "varchar", isNullable: true},
                    {name: "date", type: "timestamp", isNullable: true},
                    {name: "repeat", type: "int", isNullable: true},
                    {name: "repeat_to", type: "int", isNullable: true},
                    {name: "radius", type: "int", isNullable: true},
                    {name: "status", type: "int", isNullable: true}
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
