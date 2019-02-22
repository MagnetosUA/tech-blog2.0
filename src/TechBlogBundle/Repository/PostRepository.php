<?php

namespace TechBlogBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\Expr;

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

    public function findAllQueryByCategory($category)
    {
        return $this->createQueryBuilder('p')
            ->where('p.category = :category')
            ->orderBy('p.createdAt', 'DESC')
            ->setParameter('category', $category)
            ->getQuery();
    }

    public function findAllQueryByTag($tag)
    {
        return $this->createQueryBuilder('p')
            ->select('p')
            ->leftJoin('p.tags', 't', Expr\Join::WITH)
            ->where('t = :tag')
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

    public function findFirstAndLastDatePublication()
    {
        $query = $this->_em->createQuery(
            'SELECT MIN(p.createdAt) AS first, MAX(p.createdAt) AS last FROM TechBlogBundle\Entity\Post p'
        );
        return $query->getSingleResult();
    }

    /**
     * @return array
     */
    public function getAllDataSet()
    {
        $query = $this->_em->createQuery(
            'SELECT t, p FROM TechBlogBundle\Entity\Tag t, TechBlogBundle\Entity\Post p WHERE p.id > 1017 ORDER BY t.id DESC'
        );
        return $query->getResult();
    }
}


