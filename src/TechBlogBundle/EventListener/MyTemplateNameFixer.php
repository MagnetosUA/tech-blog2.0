<?php

namespace TechBlogBundle\EventListener;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Change template name from FrameworkExtraBundle TemplateGuesser.
 * Becouse TemplateGuesser convert to lowercase name of views folders
 *
 * (for example: in DefaultController appropriate view template is located in Resources/views/Default/ folder)
 *
 * Class MyTemplateNameFixer
 * @package TechBlogBundle\EventListener
 */
class MyTemplateNameFixer implements EventSubscriberInterface
{
    public function onKernelController(FilterControllerEvent $event)
    {
        $request = $event->getRequest();
        $template = $request->attributes->get('_template');
        if ($template instanceof Template) {
            $templateName = $template->getTemplate();
            $tp =  explode("/", $templateName);
            $tp[1] = ucfirst($tp[1]);
            $templateName = implode("/", $tp);
            $template->setTemplate($templateName);
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => ['onKernelController', -128]
        ];
    }
}

