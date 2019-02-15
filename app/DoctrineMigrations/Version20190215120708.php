<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20190215120708 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE `like` (post_id INT NOT NULL, author_id INT NOT NULL, INDEX IDX_AC6340B34B89032C (post_id), INDEX IDX_AC6340B3F675F31B (author_id), PRIMARY KEY(post_id, author_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B34B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B3F675F31B FOREIGN KEY (author_id) REFERENCES author (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE post_author');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE post_author (post_id INT NOT NULL, author_id INT NOT NULL, INDEX IDX_8D8D3CAD4B89032C (post_id), INDEX IDX_8D8D3CADF675F31B (author_id), PRIMARY KEY(post_id, author_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE post_author ADD CONSTRAINT FK_8D8D3CAD4B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE post_author ADD CONSTRAINT FK_8D8D3CADF675F31B FOREIGN KEY (author_id) REFERENCES author (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE `like`');
    }
}
