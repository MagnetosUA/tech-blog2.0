<?php

namespace TechBlogBundle\EventListener;

//use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use TechBlogBundle\Entity\Autor;

class NameFixer
{
    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if (!$entity instanceof  Autor) {
            echo 'not instance';
            return;
        }

        echo "work";
        $name = $entity->getName();

        $entity->setName($name."777");

        $em = $args->getObjectManager();

//        $em->persist($entity);
//        $em->flush();
    }
}

