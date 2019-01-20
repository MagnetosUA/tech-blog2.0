<?php

namespace TechBlogBundle\DataFixtures\ORM;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use TechBlogBundle\Entity\Autor;

class AutorFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 10; $i++) {
            $autor = new Autor();
            $autor->setName($faker->name." ".$faker->lastName);
            $autor->setCity($faker->city);
            $autor->setLanguage('EN');

            $this->addReference('autor-'.$i, $autor);

            $manager->persist($autor);

        }
        $manager->flush();
    }
}
