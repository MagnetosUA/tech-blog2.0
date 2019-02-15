<?php

namespace TechBlogBundle\Repository;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping;

class PostRepository extends \Doctrine\ORM\EntityRepository
{
    /**
     * @var EntityManager
     */
    private $em;

    /**
     * PostRepository constructor.
     * @param EntityManager $em
     * @param Mapping\ClassMetadata $class
     */
    public function __construct(EntityManager $em, Mapping\ClassMetadata $class)
    {
        parent::__construct($em, $class);
        $this->em = $em;
    }

    public function findAllQuery()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.createdAt', 'DESC')
            ->getQuery();
    }
    /**
     * @param $n
     * @return array
     */
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

    /**
     * @param $postId
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getPostJoinWithAutor($postId)
    {
        $query = $this->em->createQuery(
            'SELECT p, a FROM TechBlogBundle:Post p
                 JOIN p.autor a
                 WHERE p.id = :id'
        )
        ->setParameter('id', $postId);

        return $query->getOneOrNullResult();
    }
}

