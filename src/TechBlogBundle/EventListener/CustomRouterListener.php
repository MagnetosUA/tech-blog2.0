<?php

namespace TechBlogBundle\EventListener;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;

/**
 * Change template name from FrameworkExtraBundle TemplateGuesser.
 * Becouse TemplateGuesser convert to lowercase name of views folders
 *
 * (for example: in DefaultController appropriate view template is located in Resources/views/Default/ folder)
 *
 * Class MyTemplateNameFixer
 * @package TechBlogBundle\EventListener
 */
class CustomRouterListener implements EventSubscriberInterface
{
    /**
     * @var Container
     */
    private $container;


    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        $router = $this->container->get('router');

        /** @var Request $request */
        $request = $event->getRequest();

        if (preg_match_all('/^twig.controller.exception/', $request->get('_controller'))) {
            $url = $router->generate('tech_blog_homepage');
            $response = new RedirectResponse($url);
            $event->setResponse($response);

            /* Stop another listeners */
            $event->stopPropagation();
        }
    }


    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest'],
        ];
    }
}

