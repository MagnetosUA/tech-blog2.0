<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class DefaultController
 * @package TechBlogBundle\Controller
 */
class DefaultController extends Controller
{

    private function goodPrintR($array)
    {
        echo "<h3>New----------Print-----------End</h3>";
        echo "<pre>";
        print_r($array);
        echo "</pre>";
    }


    public function indexAction()
    {
        return $this->render('@TechBlog/Default/index.html.twig', [

        ]);
    }


}
