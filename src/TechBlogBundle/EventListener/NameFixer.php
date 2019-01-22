<?php

namespace TechBlogBundle\EventListener;

use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use TechBlogBundle\Entity\Autor;

class NameFixer
{
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if (!$entity instanceof  Autor) {
            return;
        }

        $name = $entity->getName();

        $entity->setName($name."777");

//        $em = $args->getObjectManager();

    }
}

