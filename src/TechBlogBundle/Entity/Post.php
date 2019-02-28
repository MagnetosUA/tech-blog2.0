<?php

namespace TechBlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

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
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="2", max="100")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="text")
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="5")
     */
    private $article;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;

    /**
     * @var Author $author
     * @ORM\ManyToOne(targetEntity="TechBlogBundle\Entity\Author", inversedBy="posts")
     *
     */
    private $author;
   //@Gedmo\Blameable(on="create")
   //@Assert\Valid()

    /**
     * @ORM\ManyToOne(targetEntity="TechBlogBundle\Entity\Category", inversedBy="posts")
     */
    private $category;

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * @ORM\ManyToMany(targetEntity="TechBlogBundle\Entity\Author", inversedBy="likes")
     * @ORM\JoinTable(name="`like`")
     */
    private $likes;

    /**
     * @ORM\ManyToMany(targetEntity="TechBlogBundle\Entity\Tag", inversedBy="posts")
     */
    private $tags;


    public function __construct()
    {
        $this->likes = new ArrayCollection();
        $this->tags = new ArrayCollection();
    }

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
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @return Author
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param Author $author
     */
    public function setAuthor(Author $author)
    {
        $this->author = $author;
    }


    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param Category $category
     */
    public function setCategory(Category $category)
    {
        $this->category = $category;
    }

    /**
     * @return mixed
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @return mixed
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * @return int
     */
    public function getLikes()
    {
        return $this->likes->count();
    }

    /**
     * @param Author $author
     */
    public function setLikes(Author $author): void
    {
        $this->likes->add($author);
    }

    /**
     * @return ArrayCollection|Tag[]
     */
    public function getTags()
    {
        return $this->tags;
    }

   
    public function addTag(Tag $tag)
    {
        if ($this->tags->contains($tag)) {
            return;
        }
//        $this->tags->add($tag);
//        $tag->addPost($this);
//        return $this;
        $this->tags[] = $tag;
    }

    public function removeTag(Tag $tag)
    {
        $this->tags->removeElement($tag);
    }


    /**
     * @return bool|string
     */
    public function getShortArticle()
    {
        return substr($this->article, 0,80)."  ...";
    }
}

