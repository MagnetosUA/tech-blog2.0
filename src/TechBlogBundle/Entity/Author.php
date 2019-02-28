<?php

namespace TechBlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Author
 *
 * @ORM\Table(name="author")
 * @ORM\Entity(repositoryClass="TechBlogBundle\Repository\AutorRepository")
 * @UniqueEntity(fields={"nickname", "email"})
 */
class Author implements UserInterface
{
    /**
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(name="name", type="string", length=50)
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="3", max="50")
     */
    private $name;

    /**
     * @ORM\Column(name="last_name", type="string", length=50)
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="3", max="50")
     */
    private $lastName;

    /**
     * @ORM\Column(name="nickname", type="string", length=30)
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="3", max="30")
     */
    private $nickname;

    /**
     * @ORM\Column(name="email", type="string")
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private $email;
    /**
     * @ORM\Column(name="city", type="string", length=100)
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="3", max="100")
     */
    private $city;

    /**
     * @ORM\OneToMany(targetEntity="TechBlogBundle\Entity\Post", mappedBy="author", orphanRemoval=true, fetch="EXTRA_LAZY")
     * @ORM\OrderBy({"createdAt" = "DESC"})
     */
    private $posts;

    /**
     * @ORM\Column(type="json_array")
     */
    private $roles;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $password;

    /**
     * @var string
     * @Assert\NotBlank()
     * @Assert\Type("string")
     * @Assert\Length(min="5", max="25")
     *
     */
    private $plainPassword;

    /**
     * @ORM\ManyToMany(targetEntity="TechBlogBundle\Entity\Post", mappedBy="likes")
     */
    private $likes;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $createdAt;

    public function __construct()
    {
        $this->likes = new ArrayCollection();
        $this->posts = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName($lastName): void
    {
        $this->lastName = $lastName;
    }

    /**
     * @return mixed
     */
    public function getNickname()
    {
        return $this->nickname;
    }

    /**
     * @param mixed $nickname
     */
    public function setNickname($nickname): void
    {
        $this->nickname = $nickname;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city): void
    {
        $this->city = $city;
    }

    /**
     * @return ArrayCollection|Post[]
     */
    public function getPosts(): ArrayCollection
    {
        return $this->posts;
    }

    /**
     * @param Post $post
     */
    public function addPost(Post $post)
    {
        $this->posts->add($post);
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password): void
    {
        $this->password = $password;
    }

    /**
     * @return string
     */
    public function getPlainPassword(): string
    {
        return $this->plainPassword;
    }

    /**
     * @param string $plainPassword
     */
    public function setPlainPassword(string $plainPassword): void
    {
        $this->plainPassword = $plainPassword;

        // forces the object to look "dirty" to Doctrine. Avoids
        // Doctrine *not* saving this entity, if only plainPassword change
        $this->password = null;
    }

    /**
     * @return ArrayCollection| Post[]
     */
    public function getLikes()
    {
        return $this->likes;
    }

    /**
     * @param Post $post
     */
    public function addLike(Post $post)
    {
        $this->likes->add($post);
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function getRoles()
    {
        return ['ROLE_USER'];
    }

    /**
     * @return string|void
     */
    public function getPassword()
    {
        return $this->password;
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function getUsername()
    {
        return $this->nickname;
    }

    public function eraseCredentials()
    {
        $this->plainPassword = null;
    }


}

