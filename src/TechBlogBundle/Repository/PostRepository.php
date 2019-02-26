<?php

namespace TechBlogBundle\Repository;

use Doctrine\ORM\EntityRepository;

class PostRepository extends EntityRepository
{
    /**
     * Return Query for Paginator
     *
     * @return \Doctrine\ORM\Query
     */
    public function findAllQuery()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.createdAt', 'DESC')
            ->getQuery();
    }

    /**
     * For Archive
     *
     * @param \DateTime $date
     * @return \Doctrine\ORM\Query
     */
    public function findAllByDateQuery(\DateTime $date)
    {
        $qb = $this->createQueryBuilder('p');
        $qb
            ->where($qb->expr()->like('p.createdAt', $qb->expr()->literal($date->format("Y-m")."%")))
            ->orderBy('p.createdAt', 'DESC');
        return $qb->getQuery();
    }

    /**
     * @param $category
     * @return \Doctrine\ORM\Query
     */
    public function findAllQueryByCategory($category)
    {
        return $this->createQueryBuilder('p')
            ->where('p.category = :category')
            ->orderBy('p.createdAt', 'DESC')
            ->setParameter('category', $category)
            ->getQuery();
    }

    /**
     * @param $tag
     * @return \Doctrine\ORM\Query
     */
    public function findAllQueryByTag($tag)
    {
        return $this->createQueryBuilder('p')
            ->where(':tag MEMBER OF p.tags')
            ->orderBy('p.createdAt', 'DESC')
            ->setParameter('tag', $tag)
            ->getQuery();
    }

    /**
     * Return three last created articles
     *
     * @return array
     */
    public function findThreeLastArticles()
    {
        $query = $this->createQueryBuilder('p')
            ->orderBy('p.createdAt', 'DESC')
            ->setMaxResults(3)
            ->getQuery();
        return $query->getResult();
    }

    /**
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findFirstAndLastDatePublication()
    {
        $qb = $this->createQueryBuilder('p');
        $query = $qb
            ->select($qb->expr()->min('p.createdAt').'AS first')
            ->addSelect($qb->expr()->max('p.createdAt').'AS last')
            ->getQuery();
        return $query->getSingleResult();
    }

    /**
     * Get data by raw SQL
     *
     * @return array|mixed
     * @throws \Doctrine\DBAL\DBALException
     */
    public function findFirstAndLastDatePublicationByRawSql()
    {
        $conn = $this->_em->getConnection();
        $sql = "SELECT MIN(created_at) AS first , MAX(created_at) AS last FROM post ";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $data = $stmt->fetchAll();
        $data = array_shift($data);
        return $data;
    }

}

