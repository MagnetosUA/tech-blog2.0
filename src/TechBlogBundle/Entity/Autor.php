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
     * @ORM\Column(name="name", type="string", length=255)
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
     * @ORM\OneToMany(targetEntity="TechBlogBundle\Entity\Post", mappedBy="autor", orphanRemoval=true, fetch="EXTRA_LAZY")
     * @ORM\OrderBy({"createdAt" = "DESC"})
     */
    private $posts;

    /**
     * @var
     * @ORM\Column(type="string")
     */
    private $language;

    /**
     * @ORM\ManyToMany(targetEntity="TechBlogBundle\Entity\Autor")
     * @ORM\JoinTable(name="referers",
     *     joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="referer_id", referencedColumnName="id", unique=true)}
     *     )
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
     * @return ArrayCollection|Post[]
     */
    public function getPosts()
    {
        return $this->posts;
    }

    /**
     * @param Post $post
     */
    public function addPost(?Post $post)
    {
        $this->posts[] = $post;
        $post->setAutor($this);
    }

    /**
     * @param Post $post
     */
    public function removePost(Post $post)
    {
        $this->posts->removeElement($post);

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
     * @return ArrayCollection|Autor[]
     */
    public function getReferers()
    {
        return $this->referers;
    }

    /**
     * @param Autor $referer
     */
    public function addReferer(Autor $referer)
    {
        $this->referers->add($referer);
    }

    public function __toString()
    {
        return $this->name;
    }
}

