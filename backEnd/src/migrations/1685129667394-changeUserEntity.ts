import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserEntity1685129667394 implements MigrationInterface {
    name = 'ChangeUserEntity1685129667394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(45) NOT NULL`);
    }

}
