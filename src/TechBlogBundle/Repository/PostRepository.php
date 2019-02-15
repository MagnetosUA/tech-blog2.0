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

    public function findAllDatePublication()
    {
        $query = $this->createQueryBuilder('p')
            ->select('p.createdAt')
            ->orderBy('p.createdAt','ASC')
            ->setMaxResults(1)
            ->getQuery();
        return $query->getResult();
    }
}


