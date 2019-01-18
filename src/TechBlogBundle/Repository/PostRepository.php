<?php

namespace TechBlogBundle\Repository;

class PostRepository extends \Doctrine\ORM\EntityRepository
{
    public function findByExpression($n)
    {
        $qb = $this->createQueryBuilder('p');

        $query = $qb
            ->select('p')
            ->where(
                $qb->expr()->andX(
                    $qb->expr()->lt(
                        $qb->expr()->sum(526, $n), '?7'),
                    $qb->expr()->lt(24, 23)
                )
            )
            ->setParameter(7, 1007)
            ->getQuery();

        return $query->getResult();
    }
}