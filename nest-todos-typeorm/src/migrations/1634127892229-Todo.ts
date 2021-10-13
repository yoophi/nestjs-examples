import { MigrationInterface, QueryRunner } from 'typeorm';

export class Todo1634127892229 implements MigrationInterface {
  name = 'Todo1634127892229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" character varying NOT NULL, "title" character varying NOT NULL, "completed" boolean NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}
