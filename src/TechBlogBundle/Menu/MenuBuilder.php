<?php

namespace TechBlogBundle\Menu;

use Knp\Menu\FactoryInterface;

class MenuBuilder
{
    private $factory;

    /**
     * @param FactoryInterface $factory
     *
     * Add any other dependency you need
     */
    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function createMainMenu(array $options)
    {
        $menu = $this->factory->createItem('root');

        $menu->addChild('Home', ['route' => 'tech_blog_homepage']);

        $menu->addChild('Web Developing', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'web-developing']
            ]);
        $menu->addChild('AI', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'ai']
            ]);
        $menu->addChild('Mashine Learning', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'machine-learning']
            ]);
        $menu->addChild('Effective', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'effective']
            ]);
        $menu->addChild('Algorithms', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'algorithms']
            ]);
        ;


//            ->addChild('Technology', ['route' => 'technology'])
//            ->addChild('Design', ['route' => 'design'])
//            ->addChild('Culture', ['route' => 'culture'])
//            ->addChild('Business', ['route' => 'business'])
//            ->addChild('Politics', ['route' => 'politics'])
//            ->addChild('Science', ['route' => 'science']);

        return $menu;
    }
}
