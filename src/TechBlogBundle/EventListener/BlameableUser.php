<?php

namespace TechBlogBundle\EventListener;

//use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Gedmo\Blameable\BlameableListener;
use TechBlogBundle\Entity\Author;

class BlameableUser extends BlameableListener
{
   public function disp()
   {
//       echo $this->getFieldValue();
   }
}

