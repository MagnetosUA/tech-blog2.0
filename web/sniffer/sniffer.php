<?php

// Examples of query building

$this->_em->createQuery('SELECT a FROM TechBlogBundle\Entity\Author a WHERE a.id > 11');
$this->_em->createQuery('SELECT a.name, p.title FROM TechBlogBundle\Entity\Author a, TechBlogBundle\Entity\Post p');
$this->_em->createQuery("SELECT p.title, a.name AS HIDDEN score FROM TechBlogBundle\Entity\Post p JOIN p.author a ORDER BY score");
$this->_em->createQuery("SELECT p.title, a.id AS HIDDEN author_id FROM TechBlogBundle\Entity\Post p JOIN p.author a ORDER BY author_id DESC");
$this->_em->createQuery("SELECT DISTINCT p.id  FROM TechBlogBundle\Entity\Tag t JOIN t.posts p ");
$this->_em->createQuery("SELECT p.id  FROM TechBlogBundle\Entity\Post p WHERE p.id < 1009");
$this->_em->createQuery("SELECT a  FROM TechBlogBundle\Entity\Author a INDEX BY a.nickname");