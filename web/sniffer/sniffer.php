<?php

// Examples of query building

$this->_em->createQuery('SELECT a FROM TechBlogBundle\Entity\Author a WHERE a.id > 11');
$this->_em->createQuery('SELECT a.name, p.title FROM TechBlogBundle\Entity\Author a, TechBlogBundle\Entity\Post p');
$this->_em->createQuery("SELECT p.title, a.name AS HIDDEN score FROM TechBlogBundle\Entity\Post p JOIN p.author a ORDER BY score");
$this->_em->createQuery("SELECT p.title, a.id AS HIDDEN author_id FROM TechBlogBundle\Entity\Post p JOIN p.author a ORDER BY author_id DESC");
$this->_em->createQuery("SELECT DISTINCT p.id  FROM TechBlogBundle\Entity\Tag t JOIN t.posts p ");
$this->_em->createQuery("SELECT p.id  FROM TechBlogBundle\Entity\Post p WHERE p.id < 1009");
$this->_em->createQuery("SELECT a  FROM TechBlogBundle\Entity\Author a INDEX BY a.nickname");


/* The key in result array in value in INDEX BY e.g. p.createdAt*/

$query = $this->_em->createQuery(
    'SELECT p.createdAt FROM TechBlogBundle\Entity\Post p INDEX BY p.createdAt'
);


/*  Fetch Min and Max createdAt from Post table */

$query = $this->_em->createQuery(
    'SELECT MIN(p.createdAt) AS first, MAX(p.createdAt) AS last FROM TechBlogBundle\Entity\Post p'
);

/* Fetch Min and Max createdAt from Post table by Query Builder */

$qb = $this->createQueryBuilder('p');
$query = $qb
    ->select($qb->expr()->min('p.createdAt'))
    ->addSelect($qb->expr()->max('p.createdAt'))
    ->getQuery();
return $query->getSingleResult();