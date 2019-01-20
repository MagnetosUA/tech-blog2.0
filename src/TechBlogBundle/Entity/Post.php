<?php

namespace TechBlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class Post
 * @package TechBlogBundle\Entity
 *
 * @ORM\Table(name="post")
 * @ORM\Entity(repositoryClass="TechBlogBundle\Repository\PostRepository")
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
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="2", max="100")
     *
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $article;

    /**
     * @ORM\Column(type="datetime")
     *
     * @Assert\DateTime()
     *
     */
    private $datePublication;

    /**
     * @ORM\ManyToOne(targetEntity="TechBlogBundle\Entity\Autor", inversedBy="posts")
     * @Assert\Valid()
     */
    private $autor;

    /**
     * @ORM\Column(type="string")
     */
    private $category;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     *
     * @Assert\Range(
     *     min=1,
     *     max=100,
     *     minMessage="Це не може бути менше 1",
     *     maxMessage="Дуже багато! Вкажіть менше !"
     * )
     */
    private $rating;


    /**
     * @ORM\Column(type="string")
     */
    private $language;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getArticle()
    {
        return $this->article;
    }

    /**
     * @param string $article
     */
    public function setArticle($article)
    {
        $this->article = $article;
    }

    /**
     * @return mixed
     */
    public function getDatePublication()
    {
        return $this->datePublication;
    }

    /**
     * @param mixed $datePublication
     */
    public function setDatePublication($datePublication)
    {
        $this->datePublication = $datePublication;
    }

    /**
     * @return mixed
     */
    public function getAutor()
    {
        return $this->autor;
    }

    /**
     * @param mixed $autor
     */
    public function setAutor($autor)
    {
        $this->autor = $autor;
    }

    /**
     * @return mixed
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param mixed $category
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }

    /**
     * @return mixed
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * @param mixed $rating
     */
    public function setRating($rating)
    {
        $this->rating = $rating;
    }

    /**
     * @return mixed
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     * @param mixed $language
     */
    public function setLanguage($language)
    {
        $this->language = $language;
    }

}
