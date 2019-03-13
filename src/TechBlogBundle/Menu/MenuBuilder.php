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
        $menu->setChildrenAttribute('class', 'custom-menu');
//        $menu->setCurrent(true);

        $menu->addChild('Home', ['route' => 'tech_blog_homepage']);

        $menu->addChild('Web Developing', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'web-developing']
            ]);
        $menu->addChild('AI', [
                'route' => 'category',
                'routeParameters' => ['slug' => 'ai']
            ]);
        $menu->addChild('Machine Learning', [
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

        return $menu;
    }
}
