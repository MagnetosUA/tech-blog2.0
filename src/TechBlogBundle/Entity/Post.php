<?php

namespace TechBlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Post
 * @package TechBlogBundle\Entity
 *
 * @ORM\Table(name="post")
 * @ORM\Entity()
 */
class Post
{
    /**
     * @var int
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $article;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datePublication;

    /**
     * @ORM\Column(type="string")
     */
    private $autor;

    /**
     * @ORM\Column(type="string")
     */
    private $category;

    /**
     * @ORM\Column(type="integer")
     */
    private $rating;


}