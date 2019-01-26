<?php

namespace TechBlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Autor
 *
 * @ORM\Table(name="autor")
 * @ORM\Entity(repositoryClass="TechBlogBundle\Repository\AutorRepository")
 */
class Autor
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, unique=true)
     * @Assert\Length(min="3", max="100")
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=255)
     * @Assert\Type("string")
     */
    private $city;

    /**
     * @ORM\OneToMany(targetEntity="TechBlogBundle\Entity\Post", mappedBy="autor", orphanRemoval=true)
     * @ORM\OrderBy({"createdAt" = "DESC"})
     */
    private $posts;

    /**
     * @var
     * @ORM\Column(type="string")
     */
    private $language;

    /**
     * @ORM\ManyToOne(targetEntity="TechBlogBundle\Entity\Autor")
     */
    private $referers;

    /**
     * Autor constructor.
     */
    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->referers = new ArrayCollection();

//        $this->id = Autor::new();
    }


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Autor
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set city
     *
     * @param string $city
     *
     * @return Autor
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @return ArrayCollection|Post
     */
    public function getPosts()
    {
        return $this->posts->toArray();
    }

    /**
     * @param Post $post
     */
    public function setPosts(?Post $post)
    {
        $this->posts[] = $post;
    }

    public function removePost($post)
    {
        $this->posts->remove($post);
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

    /**
     * @return ArrayCollection
     */
    public function getReferers(): ArrayCollection
    {
        return $this->referers;
    }

    /**
     * @param Autor $autor
     */
    public function addReferer(Autor $autor): void
    {
        $this->referers[] = $autor;
    }

    /**
     * @param Autor $referer
     * @return $this
     */
    public function removeReferer(Autor $referer)
    {
        $this->referers->remove($referer);
        /*I don't know if that is  need*/
        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }
}

