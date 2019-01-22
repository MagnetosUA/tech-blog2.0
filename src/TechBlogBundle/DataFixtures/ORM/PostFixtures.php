<?php

namespace TechBlogBundle\DataFixtures\ORM;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use TechBlogBundle\Entity\Post;

class PostFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 100; $i++) {
            $post = new Post();
            $post->setTitle($faker->title);
            $post->setArticle($faker->text);

            $autor = $this->getReference('autor-'.rand(0, 9));

            $post->setAutor($autor);
            $post->setCategory("All Text");
            $post->setRating(rand(1, 10));
            $post->setLanguage('EN');
            $manager->persist($post);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            AutorFixtures::class,
        );
    }
}
