<?php

namespace TechBlogBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use TechBlogBundle\Entity\Post;

class PostFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $post = new Post();
    }
}
